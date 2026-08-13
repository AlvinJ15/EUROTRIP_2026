// ============================================================
// PLAN TEXT → STRUCTURED STEPS
//
// Every `plan` string in data.js is one long paragraph that uses
// emoji as section markers: "🧳 Check out … ⏰ Book the paraglide …
// 🔴 ONLY TWO OF THOSE THREE FIT …". Read on a phone that is a
// wall of text and the times disappear into it.
//
// This splits a plan back into the steps it was always written as,
// so both the itinerary and the calendar drawer can render a list
// instead of a paragraph. The data files stay exactly as they are —
// the structure is recovered at render time, not maintained by hand
// in two places.
// ============================================================

// A step break is an emoji that FOLLOWS a finished sentence. That
// distinction is the whole trick: emoji also appear mid-sentence
// ("— 🆕 RUN EARLY, ON PURPOSE"), and splitting on every one of them
// shreds the text into fragments. Requiring sentence-ending
// punctuation in front keeps those inline where the author put them.
const PLAN_SPLIT = /(?<=[.!?])\s+(?=\p{Extended_Pictographic})/u;

// Leading emoji, including the keycap/variation-selector sequences and
// ZWJ joins, so multi-codepoint marks are taken whole rather than
// leaving half a glyph behind in the text.
const PLAN_LEAD_ICON = /^(\p{Extended_Pictographic}(?:\u{FE0F}?(?:\u{200D}\p{Extended_Pictographic}\u{FE0F}?)*))\s*/u;

// A time at the very start of a step — "08:30 check out of the Spinne",
// "~15:15 arrive". Pulled out into its own column so the day can be
// scanned by clock rather than by prose.
const PLAN_LEAD_TIME = /^(~?\d{1,2}:\d{2})\s+/;

// Tone is taken from the marker the author already used, so nothing
// has to be tagged twice. 🔴 is the one that must survive being
// skim-read; the rest are shading.
const PLAN_TONE = {
  '🔴': 'alert',
  '⚠️': 'warn',
  '❌': 'no',
  '✅': 'ok',
  '🆕': 'new',
  '🔑': 'key',
  '🔄': 'new',
  '⏰': 'time',
  '🕑': 'time'
};

function planTone(icon, text) {
  if (PLAN_TONE[icon]) return PLAN_TONE[icon];
  // Fall back to the strongest marker appearing anywhere in the step,
  // so "🧳 … 🔴 Confirm at booking …" still reads as a warning.
  for (const mark of ['🔴', '⚠️', '❌']) {
    if (text.includes(mark)) return mark === '🔴' ? 'alert' : mark === '⚠️' ? 'warn' : 'no';
  }
  return '';
}

/**
 * Split a plan paragraph into steps.
 * @returns {Array<{icon:string, time:string, text:string, tone:string}>}
 */
function planToSteps(plan) {
  if (!plan) return [];
  const raw = String(plan).split(PLAN_SPLIT).map(s => s.trim()).filter(Boolean);

  return raw.map(chunk => {
    let icon = '';
    let time = '';
    let text = chunk;

    const iconMatch = text.match(PLAN_LEAD_ICON);
    if (iconMatch) {
      icon = iconMatch[1];
      text = text.slice(iconMatch[0].length);
    }

    const timeMatch = text.match(PLAN_LEAD_TIME);
    if (timeMatch) {
      time = timeMatch[1];
      text = text.slice(timeMatch[0].length);
    }

    return { icon: icon || '•', time, text, tone: planTone(icon, chunk) };
  });
}

/**
 * Render a plan as an ordered list of steps.
 * Falls back to the original paragraph if the text has no internal
 * structure to recover — a one-sentence plan is not improved by being
 * turned into a single-item list.
 */
function planStepsHTML(plan, extraClass) {
  const steps = planToSteps(plan);
  if (steps.length < 2) return `<p class="dayplan-para">${plan}</p>`;

  const items = steps.map(s => `
    <li class="daystep ${s.tone ? `is-${s.tone}` : ''}">
      <span class="daystep-icon">${s.icon}</span>
      ${s.time ? `<span class="daystep-time">${s.time}</span>` : ''}
      <span class="daystep-text">${s.text}</span>
    </li>`).join('');

  return `<ul class="daysteps ${extraClass || ''}">${items}</ul>`;
}
