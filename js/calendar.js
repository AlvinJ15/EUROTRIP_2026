// ============================================================
// EUROTRIP 2026 — CALENDAR VIEW
// Second visualization mode. Reads the same data as render.js
// (ITINERARY / FLIGHTS / TRIP) and lays the trip out on a
// September 2026 month grid + a stop-bar timeline.
// ============================================================

const CAL_YEAR = 2026;
const CAL_MONTH = 8; // September (0-indexed)
const CAL_DAYS_IN_MONTH = 30;

// One colour per stop, in route order. Distinct hues so adjacent
// stops never read as the same block.
const STOP_COLORS = [
  { base: '#d94f3d', soft: '#fdecea' }, // Spain
  { base: '#b8860b', soft: '#fdf6e3' }, // Craiova (wedding)
  { base: '#c2410c', soft: '#fff1e8' }, // Istanbul
  { base: '#a16207', soft: '#fdf8e7' }, // Cappadocia
  { base: '#0e7490', soft: '#e6f6fa' }, // Athens
  { base: '#0284c7', soft: '#e6f4fd' }, // Santorini
  { base: '#7c3aed', soft: '#f3edff' }, // Rome
  { base: '#1d4ed8', soft: '#e8efff' }, // Zermatt
  { base: '#0891b2', soft: '#e4f7fb' }, // Grindelwald
  { base: '#be185d', soft: '#fdeaf2' }, // Paris
  { base: '#15803d', soft: '#e8f6ec' }, // London
  { base: '#57534e', soft: '#f2f1f0' }  // Madrid final
];

const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Bag status shown on every day of the calendar. 'tight' means the day's
// activity is physically incompatible with luggage, not merely inconvenient.
const BAG_STATUS = {
  free:  { icon: '🎒', label: 'No bags — based here' },
  move:  { icon: '🧳', label: 'Travel day — bags with you' },
  store: { icon: '🔒', label: 'Checked out — store the bags' },
  tight: { icon: '🔴', label: 'Bag-hostile day — storage required' }
};

// ---- parsing helpers -------------------------------------------------

// "Sep 12–15 (Sat–Tue)" -> { start: 12, end: 15 }
function parseStopRange(dates) {
  const m = dates.match(/Sep\s*(\d{1,2})\s*[–—-]\s*(?:Sep\s*)?(\d{1,2})/i);
  if (!m) return null;
  return { start: parseInt(m[1], 10), end: parseInt(m[2], 10) };
}

// "Sep 2 (Wed)" -> 2
function parseDayNumber(label) {
  const m = String(label).match(/Sep\s*(\d{1,2})/i);
  return m ? parseInt(m[1], 10) : null;
}

// First clock time mentioned in a string: "8:00pm", "09:00", "~11:00"
function extractTime(text) {
  const m = String(text).match(/(\d{1,2}:\d{2}\s*(?:am|pm)?|\b\d{1,2}\s*(?:am|pm)\b)/i);
  return m ? m[1].replace(/\s+/g, '').toLowerCase() : null;
}

// Journey length: "2h30", "1h50", "45min"
function extractDuration(text) {
  const m = String(text).match(/\b(\d{1,2}h\d{0,2}|\d{1,3}\s?min)\b/i);
  return m ? m[1].replace(/\s+/g, '') : null;
}

function transportIcon(method) {
  if (/✈️|flight|fly/i.test(method)) return '✈️';
  if (/🚄|🚂|train|ave|tgv|eurostar/i.test(method)) return '🚆';
  if (/⛴️|ferry/i.test(method)) return '⛴️';
  return '🚌';
}

function dayOfWeekIndex(day) {
  // 0 = Monday
  return (new Date(CAL_YEAR, CAL_MONTH, day).getDay() + 6) % 7;
}

function weekdayName(day) {
  return WEEKDAY_LABELS[dayOfWeekIndex(day)];
}

function isWeekend(day) {
  return dayOfWeekIndex(day) >= 5;
}

// Tag a day plan so the cell can show what kind of day it is.
// Emoji-driven on purpose: the plan text mentions "wedding" and "Disney"
// on days that aren't wedding or Disney days, so keyword matching
// produces false positives. The emoji only appears on the real day.
function planTags(text) {
  const tags = [];
  if (/💍/.test(text)) tags.push({ label: '💍 Wedding', cls: 'tag-wedding' });
  if (/🎡/.test(text)) tags.push({ label: '🎡 Disney', cls: 'tag-disney' });
  if (/⛷️/.test(text)) tags.push({ label: '⛷️ Ski', cls: 'tag-ski' });
  if (/🛷/.test(text)) tags.push({ label: '🛷 Toboggan', cls: 'tag-ski' });
  if (/🪂/.test(text)) tags.push({ label: '🪂 Paragliding', cls: 'tag-ski' });
  if (/🍫/.test(text)) tags.push({ label: '🍫 Chocolate', cls: 'tag-ski' });
  if (/🏛️|🌅|🎬|🦕/.test(text)) tags.push({ label: '⭐ Headline day', cls: 'tag-disney' });
  if (/🔴/.test(text)) tags.push({ label: '🔴 Must-do', cls: 'tag-must' });
  if (/🍽️/.test(text)) tags.push({ label: '🍽️ Booked dinner', cls: 'tag-dining' });
  return tags;
}

// ---- model -----------------------------------------------------------

function buildCalendarModel() {
  const stops = ITINERARY.map((stop, i) => {
    const range = parseStopRange(stop.dates) || { start: null, end: null };
    return {
      index: i,
      id: stop.id,
      city: stop.city,
      country: stop.country,
      emoji: stop.emoji,
      nights: stop.nights,
      dates: stop.dates,
      mandatory: !!stop.mandatory,
      accommodation: stop.accommodation,
      accommodationCost: stop.accommodationCost,
      dailyCost: stop.dailyCost,
      transport: stop.transport,
      start: range.start,
      end: range.end,
      color: STOP_COLORS[i % STOP_COLORS.length],
      plans: (stop.dayByDay || []).reduce((acc, d) => {
        const n = parseDayNumber(d.day);
        if (n) acc[n] = d.plan;
        return acc;
      }, {})
    };
  });

  // Transport legs keyed by day of month.
  const legsByDay = {};
  function addLeg(day, leg) {
    if (!day) return;
    (legsByDay[day] = legsByDay[day] || []).push(leg);
  }

  // Overnight outbound: it occupies both Sep 1 (departure) and Sep 2 (landing).
  const ob = FLIGHTS.outbound.bestOptions[0];
  addLeg(1, {
    leg: 'Lima (LIM) → Madrid (MAD)',
    method: ob.airline,
    icon: '✈️',
    time: 'departs 18:10',
    duration: ob.flightTime,
    cost: ob.estimatePerson,
    notes: ob.notes
  });
  addLeg(2, {
    leg: 'Lima (LIM) → Madrid (MAD)',
    method: ob.airline,
    icon: '✈️',
    time: 'lands 12:45',
    duration: ob.flightTime,
    cost: ob.estimatePerson,
    notes: ob.notes
  });

  FLIGHTS.intraEurope.forEach(f => {
    const day = parseDayNumber(f.notes);
    addLeg(day, {
      leg: f.leg,
      method: f.method,
      icon: transportIcon(f.method),
      time: extractTime(f.notes),
      duration: extractDuration(f.notes),
      cost: f.cost,
      notes: f.notes
    });
  });

  const rt = FLIGHTS.return.bestOptions[0];
  addLeg(29, {
    leg: 'Madrid (MAD) → Lima (LIM)',
    method: rt.airline,
    icon: '✈️',
    time: '11:00 → 16:10',
    duration: rt.flightTime,
    cost: rt.estimatePerson,
    notes: rt.notes
  });

  // Day-by-day cells for the whole month.
  const tripStart = Math.min(...stops.map(s => s.start));
  const tripEnd = Math.max(...stops.map(s => s.end));
  const days = [];
  for (let d = 1; d <= CAL_DAYS_IN_MONTH; d++) {
    const segments = stops
      .filter(s => s.start !== null && d >= s.start && d <= s.end)
      .map(s => {
        let role = 'stay';
        if (d === s.start && d === s.end) role = 'single';
        else if (d === s.start) role = 'arrive';
        else if (d === s.end) role = 'depart';
        return { stop: s, role, plan: s.plans[d] || null };
      });

    const planText = segments.map(sg => sg.plan).filter(Boolean).join(' ');
    days.push({
      day: d,
      weekday: weekdayName(d),
      weekend: isWeekend(d),
      inTrip: segments.length > 0,
      // A day can carry more than one journey — Sep 2 is both the Madrid
      // landing and the AVE on to Barcelona. This used to be .find(), which
      // silently hid the second one.
      routes: typeof ROUTES !== 'undefined' ? ROUTES.filter(r => r.day === d) : [],
      bags: typeof LUGGAGE !== 'undefined' ? LUGGAGE.days.find(l => l.day === d) || null : null,
      isFirst: d === tripStart,
      isLast: d === tripEnd,
      beforeTrip: d < tripStart,
      segments,
      legs: legsByDay[d] || [],
      tags: planTags(planText)
    });
  }

  return { stops, days, tripStart, tripEnd };
}

// ---- rendering -------------------------------------------------------

let CAL_MODEL = null;

function renderCalendarLegend() {
  const el = document.getElementById('cal-legend');
  if (!el) return;
  el.innerHTML = CAL_MODEL.stops.map(s => `
    <button class="cal-legend-item" data-stop="${s.index}" style="--c:${s.color.base}; --cs:${s.color.soft}">
      <span class="cal-legend-swatch"></span>
      <span class="cal-legend-text">
        <strong>${s.emoji} ${s.city}</strong>
        <span>${s.dates} · ${s.nights} ${s.nights === 1 ? 'night' : 'nights'}</span>
      </span>
    </button>
  `).join('');

  el.querySelectorAll('.cal-legend-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.stop;
      const active = btn.classList.contains('is-active');
      el.querySelectorAll('.cal-legend-item').forEach(b => b.classList.remove('is-active'));
      document.getElementById('calendar-view').classList.toggle('is-filtered', !active);
      document.querySelectorAll('.cal-day').forEach(c => c.classList.remove('is-dimmed'));
      if (!active) {
        btn.classList.add('is-active');
        document.querySelectorAll('.cal-day').forEach(c => {
          const stopsOn = (c.dataset.stops || '').split(',');
          if (!stopsOn.includes(idx)) c.classList.add('is-dimmed');
        });
      }
    });
  });
}

function renderCalendarBars() {
  const el = document.getElementById('cal-bars');
  if (!el) return;

  const axis = Array.from({ length: CAL_DAYS_IN_MONTH }, (_, i) => {
    const d = i + 1;
    return `<span class="cal-axis-tick ${isWeekend(d) ? 'is-weekend' : ''}">
      <b>${d}</b><i>${weekdayName(d)[0]}</i>
    </span>`;
  }).join('');

  const rows = CAL_MODEL.stops.map(s => {
    // Bars are inclusive of both the arrival and departure day.
    const span = s.end - s.start + 1;
    return `
      <div class="cal-bar-row">
        <span class="cal-bar-label">${s.emoji} ${s.city}</span>
        <span class="cal-bar-track">
          <span class="cal-bar" data-jump="${s.start}"
                style="--c:${s.color.base}; grid-column: ${s.start} / span ${span};">
            <b>${s.nights}n</b>
            <i>Sep ${s.start} → Sep ${s.end}</i>
          </span>
        </span>
      </div>`;
  }).join('');

  el.innerHTML = `
    <div class="cal-bar-row cal-axis-row">
      <span class="cal-bar-label">September 2026</span>
      <span class="cal-bar-track cal-axis">${axis}</span>
    </div>
    ${rows}
  `;

  el.querySelectorAll('.cal-bar').forEach(bar => {
    bar.addEventListener('click', () => openDayDetail(parseInt(bar.dataset.jump, 10)));
  });
}

function renderCalendarGrid() {
  const el = document.getElementById('cal-grid');
  if (!el) return;

  const head = WEEKDAY_LABELS.map(w =>
    `<div class="cal-head ${w === 'Sat' || w === 'Sun' ? 'is-weekend' : ''}">${w}</div>`
  ).join('');

  const lead = dayOfWeekIndex(1);
  const blanks = Array.from({ length: lead }, () => '<div class="cal-day is-empty"></div>').join('');

  // One badge per journey. Days with two journeys (Sep 2: land Madrid, then
  // the AVE to Barcelona) get two badges rather than silently showing one.
  function routeBadges(d) {
    if (!d.routes.length) return '';
    return d.routes.map(r =>
      `<span class="cal-routebadge">🚏 ${r.from} → ${r.to} · ${r.recommended.segments.length} segments · ${r.recommended.doorToDoor}</span>`
    ).join('');
  }

  function bagLine(d) {
    if (!d.bags) return '';
    return `<span class="cal-bags is-${d.bags.status}">${BAG_STATUS[d.bags.status].icon} ${BAG_STATUS[d.bags.status].label}</span>`;
  }

  const cells = CAL_MODEL.days.map(d => {
    if (!d.inTrip && !d.legs.length) {
      return `<div class="cal-day is-outside ${d.weekend ? 'is-weekend' : ''}">
        <span class="cal-daynum">${d.day}</span>
        <span class="cal-outside-note">${d.beforeTrip ? 'before the trip' : 'after the trip'}</span>
      </div>`;
    }

    // Travel-only day: in the air, not yet checked in anywhere.
    if (!d.inTrip) {
      return `<div class="cal-day is-travel ${d.weekend ? 'is-weekend' : ''}"
                   data-day="${d.day}" data-stops=""
                   role="button" tabindex="0"
                   aria-label="September ${d.day}, ${d.weekday}, travel day">
        <span class="cal-dayhead">
          <span class="cal-daynum">${d.day}</span>
          <span class="cal-dayname">${d.weekday}</span>
        </span>
        <span class="cal-chip cal-chip-travel">🛫 Departure day</span>
        <span class="cal-legs">${d.legs.map(l =>
          `<span class="cal-leg">${l.icon} ${l.leg}<b> 🕑 ${l.time} · ⏱️ ${l.duration}</b></span>`).join('')}</span>
        ${routeBadges(d)}
        <span class="cal-sleep is-move">🌙 Overnight in the air</span>
      </div>`;
    }

    const primary = d.segments[d.segments.length - 1].stop;
    const bands = d.segments.map(sg =>
      `<span class="cal-band" style="background:${sg.stop.color.base}"></span>`
    ).join('');

    const chips = d.segments.map(sg => {
      const roleLabel = sg.role === 'arrive'
        ? (sg.stop.index === 0 ? '🛬 Trip starts' : '🛬 Arrive')
        : sg.role === 'depart' ? '🛫 Leave' : null;
      return `<span class="cal-chip" style="--c:${sg.stop.color.base}; --cs:${sg.stop.color.soft}">
        ${sg.stop.emoji} ${sg.stop.city}${roleLabel ? ` <em>${roleLabel}</em>` : ''}
      </span>`;
    }).join('');

    const legs = d.legs.map(l => {
      const meta = [l.time ? `🕑 ${l.time}` : null, l.duration ? `⏱️ ${l.duration}` : null]
        .filter(Boolean).join(' · ');
      return `<span class="cal-leg">${l.icon} ${l.leg}${meta ? `<b> ${meta}</b>` : ''}</span>`;
    }).join('');

    const tags = d.tags.map(t => `<span class="cal-tag ${t.cls}">${t.label}</span>`).join('');
    const routeBadge = routeBadges(d);

    const nightStop = d.segments.find(sg => sg.role !== 'depart');
    const sleepLine = d.isLast
      ? '<span class="cal-sleep is-move">🛫 Trip ends — fly home</span>'
      : nightStop
        ? `<span class="cal-sleep">🌙 Night in ${nightStop.stop.city}</span>`
        : '<span class="cal-sleep is-move">🌙 In transit</span>';

    return `
      <div class="cal-day ${d.weekend ? 'is-weekend' : ''} ${d.segments.length > 1 ? 'is-transition' : ''}"
           data-day="${d.day}"
           data-stops="${d.segments.map(sg => sg.stop.index).join(',')}"
           style="--c:${primary.color.base}; --cs:${primary.color.soft}"
           role="button" tabindex="0"
           aria-label="September ${d.day}, ${d.weekday}">
        <span class="cal-bands">${bands}</span>
        <span class="cal-dayhead">
          <span class="cal-daynum">${d.day}</span>
          <span class="cal-dayname">${d.weekday}</span>
        </span>
        <span class="cal-chips">${chips}</span>
        ${legs ? `<span class="cal-legs">${legs}</span>` : ''}
        ${routeBadge}
        ${bagLine(d)}
        ${tags ? `<span class="cal-tags">${tags}</span>` : ''}
        ${sleepLine}
      </div>`;
  }).join('');

  el.innerHTML = head + blanks + cells;

  el.querySelectorAll('.cal-day[data-day]').forEach(cell => {
    const open = () => openDayDetail(parseInt(cell.dataset.day, 10));
    cell.addEventListener('click', open);
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

function openDayDetail(dayNum) {
  const d = CAL_MODEL.days.find(x => x.day === dayNum);
  const panel = document.getElementById('cal-detail');
  if (!d || !panel) return;

  document.querySelectorAll('.cal-day').forEach(c =>
    c.classList.toggle('is-selected', c.dataset.day === String(dayNum))
  );

  const primary = d.inTrip ? d.segments[d.segments.length - 1].stop : null;

  panel.innerHTML = `
    <button class="cal-detail-close" aria-label="Close">✕</button>
    <div class="cal-detail-head" style="--c:${primary ? primary.color.base : 'var(--text-muted)'}">
      <span class="cal-detail-date">${d.weekday}, September ${d.day}, 2026</span>
      <span class="cal-detail-where">${d.inTrip
        ? d.segments.map(sg => `${sg.stop.emoji} ${sg.stop.city}`).join('  →  ')
        : d.legs.length ? '🛫 In transit — trip departure' : 'Not part of the trip'}</span>
    </div>
    ${d.bags ? `
      <div class="cal-detail-block cal-bagblock is-${d.bags.status}">
        <h5>🧳 Your bags <em>${BAG_STATUS[d.bags.status].label}</em></h5>
        <p class="cal-bag-headline">${d.bags.headline}</p>
        <p class="cal-bag-action">${d.bags.action}</p>
        ${d.bags.cost && d.bags.cost !== '—' ? `<span class="cal-bag-cost">💵 ${d.bags.cost}</span>` : ''}
      </div>` : ''}
    ${d.routes.map(r => `
      <div class="cal-detail-block cal-route">
        <h5>🚏 ${r.from} → ${r.to} <em>${r.recommended.doorToDoor}</em></h5>
        <p class="cal-route-best">${r.recommended.label}</p>
        <div class="cal-route-totals">
          <span>⏱️ ${r.recommended.doorToDoor}</span>
          <span>💵 ${r.recommended.totalCost}</span>
        </div>
        <div class="cal-route-chain">
          ${r.recommended.segments.map((s, i) => `
            <span class="cal-route-step">
              <b>${i + 1}. ${s.mode}</b>
              <span>${s.title}<br><i>${s.duration} · ${s.cost}${s.booking && s.booking !== '—' ? ` · 📋 ${s.booking}` : ''}</i></span>
            </span>`).join('')}
        </div>
        <a class="cal-route-link" href="#route-${r.id}">Full route breakdown, alternatives &amp; warnings →</a>
      </div>`).join('')}
    ${d.legs.length ? `
      <div class="cal-detail-block">
        <h5>Transport this day</h5>
        ${d.legs.map(l => `
          <div class="cal-detail-leg">
            <span class="cal-detail-leg-top">${l.icon} <strong>${l.leg}</strong>${l.time ? ` · <b>🕑 ${l.time}</b>` : ''}${l.duration ? ` · <b>⏱️ ${l.duration}</b>` : ''}</span>
            <span class="cal-detail-leg-meta">${l.method} · ${l.cost}</span>
            <span class="cal-detail-leg-note">${l.notes}</span>
          </div>`).join('')}
      </div>` : ''}
    ${d.segments.map(sg => `
      <div class="cal-detail-block" style="--c:${sg.stop.color.base}">
        <h5>${sg.stop.emoji} ${sg.stop.city}, ${sg.stop.country}
          <em>${sg.role === 'arrive' ? 'check-in day' : sg.role === 'depart' ? 'check-out day' : 'full day'}</em>
        </h5>
        ${sg.plan ? `<p class="cal-detail-plan">${sg.plan}</p>` : ''}
        ${sg.role !== 'depart' ? `
          <p class="cal-detail-stay">🏠 ${sg.stop.accommodation} · ~$${sg.stop.accommodationCost}/night · ~$${sg.stop.dailyCost}/day for 2</p>` : ''}
      </div>`).join('')}
    ${d.inTrip ? `<a class="cal-detail-link" href="#stop-${primary.id}">Open ${primary.city} in the full itinerary →</a>` : ''}
  `;

  panel.classList.add('is-open');
  panel.querySelector('.cal-detail-close').addEventListener('click', closeDayDetail);
  // Both the stop link and the route link jump back into the detail view.
  panel.querySelectorAll('.cal-detail-link, .cal-route-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      setView('timeline');
      const t = document.querySelector(link.getAttribute('href'));
      if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    });
  });
}

function closeDayDetail() {
  const panel = document.getElementById('cal-detail');
  if (panel) panel.classList.remove('is-open');
  document.querySelectorAll('.cal-day').forEach(c => c.classList.remove('is-selected'));
}

function renderCalendarSummary() {
  const el = document.getElementById('cal-summary');
  if (!el) return;
  const travelDays = CAL_MODEL.days.filter(d => d.legs.length).length;
  const transitions = CAL_MODEL.days.filter(d => d.segments.length > 1).length;
  const routed = CAL_MODEL.days.reduce((n, d) => n + d.routes.length, 0);
  const segs = CAL_MODEL.days.reduce((n, d) =>
    n + d.routes.reduce((m, r) => m + r.recommended.segments.length, 0), 0);
  const bagDays = CAL_MODEL.days.filter(d => d.bags && (d.bags.status === 'tight' || d.bags.status === 'store')).length;
  el.innerHTML = `
    <span class="cal-kpi"><b>${TRIP.dates}</b>September 2026</span>
    <span class="cal-kpi"><b>${TRIP.duration}</b>${CAL_MODEL.stops.length} stops</span>
    <span class="cal-kpi"><b>${travelDays}</b>days with a transport leg</span>
    <span class="cal-kpi"><b>${transitions}</b>city-change days</span>
    <span class="cal-kpi"><b>${routed} routes · ${segs} segments</b>mapped door-to-door</span>
    <span class="cal-kpi"><b>${bagDays}</b>days needing bag storage</span>
  `;
}

function setView(view) {
  const isCal = view === 'calendar';
  document.body.classList.toggle('view-calendar', isCal);
  document.querySelectorAll('.view-btn').forEach(b =>
    b.classList.toggle('is-active', b.dataset.view === view)
  );
  if (isCal) {
    const cal = document.getElementById('calendar-view');
    if (cal) cal.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    closeDayDetail();
  }
  try { localStorage.setItem('eurotrip-view', view); } catch (e) { /* ignore */ }
}

function initCalendar() {
  if (typeof ITINERARY === 'undefined') return;
  CAL_MODEL = buildCalendarModel();
  renderCalendarSummary();
  renderCalendarLegend();
  renderCalendarBars();
  renderCalendarGrid();

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDayDetail();
  });

  let saved = null;
  try { saved = localStorage.getItem('eurotrip-view'); } catch (e) { /* ignore */ }
  document.querySelectorAll('.view-btn').forEach(b =>
    b.classList.toggle('is-active', b.dataset.view === (saved === 'calendar' ? 'calendar' : 'timeline'))
  );
  if (saved === 'calendar') document.body.classList.add('view-calendar');
}

document.addEventListener('DOMContentLoaded', initCalendar);
