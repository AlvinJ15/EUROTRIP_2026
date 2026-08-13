// ============================================================
// FOOD — WHAT YOU ACTUALLY EAT, PER DAY, PER COUNTRY
//
// The budget has carried a single "Food (28 days)" line since the
// beginning, and it was impossible to tell from the page whether
// that meant a sandwich a day or three sit-down meals. It covers
// ALL 28 days for BOTH of you. Nothing else on this trip hides a
// food cost inside it, with one deliberate exception noted below.
//
// Every figure here is FOR TWO PEOPLE, FOR ONE DAY. Three tiers,
// because the honest answer to "how much is food" is a range you
// choose, not a number you are told:
//
//   lean  — supermarket breakfast, one cooked meal, no wine
//   mid   — café breakfast, lunch menu, a proper dinner out
//   easy  — eat what you want, wine with dinner, no arithmetic
//
// The trip budget line ($2,040–2,900) sits between `lean` and `mid`
// overall — see FOOD.reality below, which does the sum rather than
// asserting it.
// ============================================================

const FOOD = {
  // The one meal that is NOT in the food line, so it cannot be
  // double-counted when he reads the budget table.
  carveOut: {
    what: '🍽️ Le Jules Verne, Thu Sep 24',
    amount: 705,
    note: 'Budgeted on its own line and PAID. It is not inside the food total and must not be added twice. Everything else you eat on Sep 24 — breakfast, lunch — still comes out of the Paris day rate below.'
  },

  countries: [
    {
      country: '🇪🇸 Spain', where: 'Barcelona · Madrid', days: 7,
      lean: 55, mid: 85, easy: 130,
      dates: 'Sep 2–5 · Sep 26–29',
      note: 'The best value per euro on the whole trip. 🔑 THE MENÚ DEL DÍA is the trick: €14–18 for three courses plus wine, weekday lunchtimes only, and it is what locals actually eat. Have your big meal at 14:00 and tapas at night and the mid figure buys a lot. Breakfast is a €3 coffee and tostada — do not pay for a hotel buffet.'
    },
    {
      country: '🇷🇴 Romania', where: 'Craiova', days: 3,
      lean: 30, mid: 50, easy: 75,
      dates: 'Sep 5–8',
      note: 'The cheapest stop by a wide margin — a full restaurant dinner for two runs about what one main course costs in Switzerland. ⚠️ Two of these three days are wedding days, so a good part of your eating is already provided and paid for by somebody else. Budget the lean figure and expect to spend less.'
    },
    {
      country: '🇹🇷 Turkey', where: 'Istanbul · Cappadocia', days: 4,
      lean: 35, mid: 60, easy: 95,
      dates: 'Sep 8–12',
      note: 'Very cheap for what you get, and breakfast is the meal to spend on — a full Turkish kahvaltı spread for two is €12–18 and replaces lunch. ⚠️ Sultanahmet restaurants with a view of Hagia Sophia charge triple for the same food; walk three streets. 🎈 The balloon morning starts at 04:30, so that day begins with the operator\'s coffee and a proper breakfast afterwards.'
    },
    {
      country: '🇬🇷 Greece — Athens', where: 'Athens', days: 2,
      lean: 45, mid: 75, easy: 115,
      dates: 'Sep 12–14',
      note: 'A gyros is €4–5 and genuinely a meal. Psiri and the streets behind Monastiraki are where the price drops without the quality following it. 🔴 A rooftop table with the Acropolis lit in front of you is worth doing ONCE and costs roughly a whole day\'s mid budget on its own — plan it as the splurge rather than discovering it as an overrun.'
    },
    {
      country: '🇬🇷 Greece — Santorini', where: 'Oia · Imerovigli', days: 2,
      lean: 70, mid: 110, easy: 170,
      dates: 'Sep 14–16',
      note: '🔴 THE MOST EXPENSIVE FOOD OF THE TRIP AFTER SWITZERLAND, and the one people get caught by — caldera-view restaurants in Oia price the view, not the plate. 💡 The move that saves real money: buy wine, bread, tomatoes and feta at the supermarket and take the sunset from a wall for free, then eat properly afterwards away from the rim. That single swap is most of the gap between mid and easy here.'
    },
    {
      country: '🇮🇹 Italy', where: 'Rome', days: 2,
      lean: 55, mid: 90, easy: 135,
      dates: 'Sep 16–18',
      note: '🔴 THE ONE RULE THAT MATTERS: do not eat within 500m of the Trevi Fountain, the Pantheon or the Vatican walls. Your hotel is by the Vatican, so this applies to your own doorstep — walk to Prati proper, or across to Trastevere on the Sep 17 evening. ⚠️ Watch for coperto (€2–3/person cover) and for the price difference between standing at the bar and sitting down, which can double a coffee.'
    },
    {
      country: '🇨🇭 Switzerland', where: 'Grindelwald · Interlaken · Lauterbrunnen', days: 4,
      lean: 90, mid: 145, easy: 210,
      dates: 'Sep 18–22',
      note: '🔴 BY FAR THE MOST EXPENSIVE, AND THE ONE MOST LIKELY TO BLOW THE BUDGET. A restaurant main is CHF 28–45 and a beer is CHF 7–9. ❌ NO CARD HELPS — neither the Swiss Travel Pass nor your Half Fare Card gives any restaurant discount whatsoever. 💡 WHAT ACTUALLY WORKS: COOP and MIGROS supermarkets, which have hot counters and cheap excellent bakery, plus a picnic carried up the mountain. 🔴 Mountain-top restaurants (Schilthorn\'s revolving Piz Gloria, Bort above Grindelwald) charge a further premium on top of Swiss prices — one of those as a deliberate treat, not as a default lunch.'
    },
    {
      country: '🇫🇷 France', where: 'Paris · Disneyland', days: 4,
      lean: 60, mid: 100, easy: 155,
      dates: 'Sep 22–26',
      note: '🔑 THE APARTMENT IS THE SAVING: four nights with a kitchen means four breakfasts that cost €4 instead of €30. Boulangerie lunch — a sandwich and a pastry — is €8–10 a head and better than most restaurants. 🎡 DISNEY IS THE EXCEPTION AND THERE ARE TWO OF THOSE DAYS: inside the parks expect €20–30/person for a mediocre lunch. You are allowed to bring your own food in, and on two consecutive park days that is worth about €80. 🍽️ Sep 24 is Jules Verne, already paid on its own budget line.'
    }
  ],

  // ---- the named meals -------------------------------------------
  // "Is the Jules Verne kind of thing budgeted?" is really two questions
  // with two different answers, and the page could not tell them apart.
  //
  //  · Jules Verne has its OWN budget line and is paid. Settled.
  //  · Every other named restaurant on this trip is NOT separately
  //    budgeted. It comes out of the ordinary Food line — and each one
  //    costs roughly a whole day's mid-tier food allowance, spent on one
  //    dinner. That is the thing worth knowing before you sit down.
  //
  // `ref` points at the country row above so the comparison can never
  // drift from the table it is being compared against.
  special: [
    {
      what: '🍽️ Le Jules Verne', city: 'Paris', when: 'Thu Sep 24', ref: '🇫🇷 France',
      min: 705, max: 705, separateLine: true,
      note: '✅ PAID, and on its OWN budget line — the only meal on this trip that is. It does not touch the food line and must not be counted twice. 2 Michelin stars, inside the Eiffel Tower. Reconfirm 48h ahead; jacket required.'
    },
    {
      what: '🌅 Caldera-view dinner, Oia', city: 'Santorini', when: 'Mon Sep 14 or Tue Sep 15', ref: '🇬🇷 Greece — Santorini',
      min: 120, max: 180, separateLine: false, mustBook: true,
      note: '🔴 THE ONE TO WATCH. At $120–180 for two, this single dinner costs MORE than a whole mid-tier day in Santorini — and Santorini is already the second most expensive food on the trip. 📅 Book it: the rim tables in Oia sell out in September and walk-ins get the inside room, which is the entire thing you are paying for. 💡 Do it ONCE, not both nights, and take the other sunset from a wall with supermarket wine.'
    },
    {
      what: '🌇 Rooftop dinner, Sultanahmet', city: 'Istanbul', when: 'Wed Sep 9', ref: '🇹🇷 Turkey',
      min: 60, max: 90, separateLine: false,
      note: 'Hagia Sophia and the Blue Mosque lit up while you eat. ⚠️ Also a whole mid-tier Turkish day in one sitting — but Turkey is cheap enough that this is the easiest splurge on the trip to absorb. Ask for a table at the rail when booking; the back half of these terraces has no view at all.'
    },
    {
      what: '🍝 Trastevere dinner', city: 'Rome', when: 'Thu Sep 17 evening', ref: '🇮🇹 Italy',
      min: 70, max: 110, separateLine: false,
      note: 'Your hotel is by the Vatican, so this is a deliberate ~25 min walk rather than stepping downstairs — plan it as the evening, not as a fallback. Roughly one mid-tier Roman day. ⚠️ Watch the coperto and check whether the fish is priced by weight.'
    },
    {
      what: '🏔️ Piz Gloria, Schilthorn 2,970m', city: 'Lauterbrunnen', when: 'Mon Sep 21', ref: '🇨🇭 Switzerland',
      min: 75, max: 105, separateLine: false,
      note: '🆕 ADDED — it was described in the plan but never costed. The revolving restaurant at the summit, 360° over ~200 peaks. Swiss prices with a mountain premium on top: a main is CHF 30–40. 💡 It is the one Swiss meal worth the money because you are paying for the room, not the plate — so make it lunch, and make it the ONLY restaurant meal that day.'
    },
    {
      what: '🥘 Mercado de San Miguel', city: 'Madrid', when: 'Sep 4–5 or Sep 26–29', ref: '🇪🇸 Spain',
      min: 50, max: 80, separateLine: false,
      note: 'Tapas market by Plaza Mayor. ⚠️ It is a tourist market and prices show it — but it is the cheapest of the named meals here and fits a normal Spanish day almost without noticing. No booking.'
    }
  ],

  // The share of a day's food that is NOT dinner. Used to work out what a
  // special dinner actually ADDS, rather than pretending you skip
  // breakfast and lunch on the days you eat well.
  nonDinnerShare: 0.45,

  tips: [
    '💧 TAP WATER IS FREE AND SAFE in every country on this route. In Italy and France ask for "acqua del rubinetto" / "une carafe d\'eau" — restaurants must serve it. Bottled water at every meal for two is roughly $100 across the trip for nothing.',
    '☕ BREAKFAST IS WHERE HOTEL PACKAGES LOSE. A €25/person hotel buffet is almost never worth it against a €4 café breakfast, except in Switzerland — where the buffet may genuinely be the cheapest food you will see that day. Check the price when you book, not at the table.',
    '🥖 SUPERMARKETS ARE THE LEVER, and the same three do most of the work: COOP and MIGROS in Switzerland, Carrefour in France and Spain, and any bakery anywhere. One supermarket lunch a day is roughly the entire gap between the lean and mid columns.',
    '💳 CARD EVERYWHERE EXCEPT SMALL ROMANIAN AND TURKISH PLACES. Carry a little cash in Craiova and Göreme; everywhere else contactless is universal and you should not be paying to withdraw.',
    '🔴 THE TWO DAYS THAT NEED WATCHING are Santorini sunset and any Swiss mountain-top lunch. They are the only places on this trip where a single ordinary meal can cost more than a whole day\'s budget somewhere else.'
  ]
};

// ---- rendering -------------------------------------------------------

function foodTotals() {
  // Do the sum rather than asserting it, so this can never drift away
  // from the per-country table sitting directly above it.
  return FOOD.countries.reduce((t, c) => ({
    lean: t.lean + c.lean * c.days,
    mid: t.mid + c.mid * c.days,
    easy: t.easy + c.easy * c.days,
    days: t.days + c.days
  }), { lean: 0, mid: 0, easy: 0, days: 0 });
}

// What the named dinners ADD on top of an ordinary mid-tier day. Worked
// out rather than asserted: on a day you eat somewhere special you still
// have breakfast and lunch, so the extra is
//   (special dinner) − (the dinner share of that day's mid rate).
function specialOverrun() {
  return FOOD.special.filter(s => !s.separateLine).reduce((acc, s) => {
    const c = FOOD.countries.find(x => x.country === s.ref);
    const mid = c ? c.mid : 0;
    const dinnerShare = mid * (1 - FOOD.nonDinnerShare);
    const avg = (s.min + s.max) / 2;
    return {
      inLine: acc.inLine + avg,
      extra: acc.extra + Math.max(0, avg - dinnerShare),
      count: acc.count + 1
    };
  }, { inLine: 0, extra: 0, count: 0 });
}

function renderFood() {
  const el = document.getElementById('food-body');
  if (!el || typeof FOOD === 'undefined') return;

  const t = foodTotals();
  // Match on the parenthesised day count, not on the start of the label.
  // An earlier version anchored with /^Food/ and silently stopped matching
  // the moment the label gained a leading emoji — which left the whole
  // section rendering "—" for every budget figure and flipping the verdict
  // to alert, with nothing on screen to say why.
  const line = typeof BUDGET !== 'undefined'
    ? BUDGET.categories.find(c => /Food \(\d+ days\)/.test(c.label))
    : null;

  const rows = FOOD.countries.map(c => `
    <tr>
      <td>
        <strong>${c.country}</strong>
        <span class="food-where">${c.where}</span>
        <span class="food-dates">${c.dates} · ${c.days} ${c.days === 1 ? 'day' : 'days'}</span>
      </td>
      <td class="food-num"><b>$${c.lean}</b><span>$${c.lean * c.days} total</span></td>
      <td class="food-num is-mid"><b>$${c.mid}</b><span>$${c.mid * c.days} total</span></td>
      <td class="food-num"><b>$${c.easy}</b><span>$${c.easy * c.days} total</span></td>
      <td class="food-note">${c.note}</td>
    </tr>`).join('');

  el.innerHTML = `
    <div class="food-answer">
      <h3>✅ Yes — food is already in the budget</h3>
      <p>The budget carries a <strong>“Food (28 days)”</strong> line of
        <strong>$${line ? line.min.toLocaleString() : '—'}–${line ? line.max.toLocaleString() : '—'}</strong>,
        which covers <strong>all 28 days for both of you</strong>. It is not an extra
        on top of the total — the total already contains it. Nothing else on this page
        hides a food cost inside it, with one deliberate exception:</p>
      <p class="food-carve">🍽️ <strong>${FOOD.carveOut.what} — $${FOOD.carveOut.amount}</strong> sits on its
        <em>own</em> budget line and is already paid. ${FOOD.carveOut.note}</p>
    </div>

    <div class="food-tiers">
      <span class="food-tier"><b>Lean</b>supermarket breakfast, one cooked meal, no wine</span>
      <span class="food-tier is-mid"><b>Mid</b>café breakfast, lunch menu, a proper dinner out</span>
      <span class="food-tier"><b>Easy</b>eat what you want, wine with dinner, no arithmetic</span>
    </div>

    <div class="food-tablewrap">
      <table class="budget-table food-table">
        <thead>
          <tr>
            <th style="width:22%">Country</th>
            <th>Lean<span class="food-th-sub">/day, for 2</span></th>
            <th>Mid<span class="food-th-sub">/day, for 2</span></th>
            <th>Easy<span class="food-th-sub">/day, for 2</span></th>
            <th style="width:42%">What to know</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr>
            <td><strong>Whole trip</strong><span class="food-dates">${t.days} days</span></td>
            <td class="food-num"><b>$${t.lean.toLocaleString()}</b></td>
            <td class="food-num is-mid"><b>$${t.mid.toLocaleString()}</b></td>
            <td class="food-num"><b>$${t.easy.toLocaleString()}</b></td>
            <td class="food-note">
              🔎 <strong>HOW THIS COMPARES TO THE BUDGET LINE.</strong> Summed from the rows above,
              eating lean the whole way is <strong>$${t.lean.toLocaleString()}</strong> and eating mid the whole way is
              <strong>$${t.mid.toLocaleString()}</strong>. The budget carries
              <strong>$${line ? line.min.toLocaleString() : '—'}–${line ? line.max.toLocaleString() : '—'}</strong>,
              which sits between the two. ✅ So the plan assumes you eat cheaply on the cheap legs and
              properly on the expensive ones — not that you eat badly everywhere.
              🔴 Eating at the <strong>Easy</strong> column every single day would cost
              <strong>$${(t.easy - (line ? line.max : 0)).toLocaleString()} more</strong> than the budget's own ceiling.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <h4 class="food-tips-head">🍾 The named meals — and whether they are budgeted</h4>
    <p class="food-special-intro">Two different answers, so they are separated here.
      <strong>Le Jules Verne has its own budget line and is paid.</strong> Every other restaurant below
      comes out of the ordinary food line above — and each one costs roughly
      <strong>a whole day's mid-tier food allowance, spent on one dinner</strong>.</p>

    <div class="food-specials">
      ${FOOD.special.map(s => {
        const c = FOOD.countries.find(x => x.country === s.ref);
        const mid = c ? c.mid : 0;
        const avg = (s.min + s.max) / 2;
        const ratio = mid ? Math.round((avg / mid) * 100) : 0;
        return `
        <div class="food-special ${s.separateLine ? 'is-own-line' : ''}">
          <div class="food-special-head">
            <strong>${s.what}</strong>
            <span class="food-special-when">${s.city} · ${s.when}</span>
          </div>
          <div class="food-special-nums">
            <span class="food-special-cost">💵 $${s.min}${s.max !== s.min ? `–${s.max}` : ''} for 2</span>
            ${s.separateLine
              ? '<span class="food-special-tag is-own">✅ Own budget line · paid</span>'
              : `<span class="food-special-tag">📊 ${ratio}% of a mid-tier day in ${s.city}${
                  ratio >= 100 ? ' — MORE than a whole day' : ''}</span>`}
            ${s.mustBook ? '<span class="food-special-tag is-book">📅 Must book ahead</span>' : ''}
          </div>
          <p class="food-special-note">${s.note}</p>
        </div>`;
      }).join('')}
    </div>

    ${(() => {
      const o = specialOverrun();
      const headroom = (line ? line.max : 0) - t.mid;
      const fits = o.extra <= headroom;
      return `
      <div class="food-verdict ${fits ? 'is-ok' : 'is-alert'}">
        <h4>${fits ? '✅' : '🔴'} Do they fit in the budget?</h4>
        <p><strong>Yes${fits ? '' : ' — but only just'}, and here is the arithmetic rather than the assurance.</strong>
          The ${o.count} restaurant meals that are NOT on their own line come to about
          <strong>$${Math.round(o.inLine)}</strong> between them. But you still eat breakfast and lunch on
          those days, so what they actually <em>add</em> over an ordinary mid-tier day is
          <strong>$${Math.round(o.extra)}</strong>.</p>
        <p>Eating mid-tier the whole trip is <strong>$${t.mid.toLocaleString()}</strong>, and the food line's
          ceiling is <strong>$${line ? line.max.toLocaleString() : '—'}</strong> — leaving
          <strong>$${headroom.toLocaleString()}</strong> of headroom.
          ${fits
            ? `The $${Math.round(o.extra)} of special dinners fits inside it with about
               <strong>$${Math.round(headroom - o.extra)}</strong> to spare.`
            : `The $${Math.round(o.extra)} of special dinners exceeds it by
               <strong>$${Math.round(o.extra - headroom)}</strong>.`}</p>
        <p class="food-verdict-catch">🔴 <strong>THE CATCH, AND IT IS THE REAL ANSWER:</strong> that headroom is the
          <em>same</em> headroom that pays for eating well on ordinary days. You can have the special
          dinners <em>or</em> a comfortable margin everywhere else — not both. 💡 The clean way to buy them
          is to eat lean on the days either side of each one, which costs you nothing you will remember.
          🔴 Santorini is the one to actually watch: at $120–180 it is the single biggest food risk on the trip.</p>
      </div>`;
    })()}

    <h4 class="food-tips-head">💡 The five things that actually move this number</h4>
    <ul class="food-tips">${FOOD.tips.map(t => `<li>${t}</li>`).join('')}</ul>
  `;
}
