// ============================================================
// DAILY MONEY — WHAT YOU CAN SPEND TODAY, AND WHAT YOU DID
//
// Everything big on this trip is paid before you leave: beds, flights,
// trains, Disney, the balloon, Jules Verne. None of that is here. This
// file answers the only money question that is still open once you
// are on the ground: "how much can the two of us spend TODAY on food
// and the small stuff, and how much of it is left?"
//
// The allowance for a day is
//
//   food    the per-day, for-two rate from FOOD.countries for wherever
//           you eat that day, at the tier chosen below (default: mid)
//   pocket  everything else that happens in a day and is not a booked
//           ticket — metro, a taxi, coffee, a museum you walked into,
//           water, a souvenir. Fixed per country, for two.
//
// Both figures come out of the trip budget's existing "Food" and "Misc"
// lines; they are not new money on top of it.
//
// HOW TO LOG A DAY. Add lines to `spent[day]` below and commit — that is
// the durable record, the same way SPENT in data.js is. The calendar
// also lets you type an expense straight into the day drawer on your
// phone; those live in the browser (localStorage) so they survive a
// reload, but only on that device. Copy them into this file when you
// have a minute so the repo stays the truth.
// ============================================================

const DAILY = {
  // Which FOOD tier the allowance is built on. lean | mid | easy.
  // The trip's food line sits between lean and mid overall, so `mid` is
  // deliberately generous on the cheap legs and honest on the dear ones.
  tier: 'mid',

  // Where you EAT each day — the FOOD.countries row the food rate comes
  // from. On a travel day it is the country you have dinner in, because
  // that is where most of the day's money goes.
  //   Sep 2–5 Spain · 6–7 Romania · 8 lands Istanbul afternoon → Turkey
  //   9–11 Turkey · 12–13 Athens · 14–15 Santorini · 16–17 Rome
  //   18–21 Switzerland · 22–25 France · 26–28 Madrid · 29 flight home
  where: {
    2: '🇪🇸 Spain', 3: '🇪🇸 Spain', 4: '🇪🇸 Spain', 5: '🇪🇸 Spain',
    6: '🇷🇴 Romania', 7: '🇷🇴 Romania',
    8: '🇹🇷 Turkey', 9: '🇹🇷 Turkey', 10: '🇹🇷 Turkey', 11: '🇹🇷 Turkey',
    12: '🇬🇷 Greece — Athens', 13: '🇬🇷 Greece — Athens',
    14: '🇬🇷 Greece — Santorini', 15: '🇬🇷 Greece — Santorini',
    16: '🇮🇹 Italy', 17: '🇮🇹 Italy',
    18: '🇨🇭 Switzerland', 19: '🇨🇭 Switzerland', 20: '🇨🇭 Switzerland', 21: '🇨🇭 Switzerland',
    22: '🇫🇷 France', 23: '🇫🇷 France', 24: '🇫🇷 France', 25: '🇫🇷 France',
    26: '🇪🇸 Spain', 27: '🇪🇸 Spain', 28: '🇪🇸 Spain'
  },

  // Pocket money per day, for two, by country — local transport that is
  // not on a pass, coffee, water, a walk-in museum, small gifts.
  pocket: {
    '🇪🇸 Spain': 30,
    '🇷🇴 Romania': 15,
    '🇹🇷 Turkey': 25,
    '🇬🇷 Greece — Athens': 25,
    '🇬🇷 Greece — Santorini': 35,
    '🇮🇹 Italy': 30,
    '🇨🇭 Switzerland': 25,
    '🇫🇷 France': 30
  },

  // Days that do not follow the country rule. `food` and `pocket` here
  // replace the computed figures outright.
  overrides: {
    // Wedding days: most of the eating is provided. Keep a lean float
    // for a taxi, a coffee, a round of drinks.
    6: { food: 30, pocket: 20, note: '💍 Wedding day — meals are provided. This is a float, not a food budget.' },
    7: { food: 30, pocket: 20, note: '💍 Wedding day 2 — same: mostly provided, this covers extras.' },
    // Jules Verne is paid on its own line, so Sep 24 only needs breakfast
    // and lunch — the non-dinner share of a Paris day.
    24: { food: 45, pocket: 30, note: '🍽️ Dinner is Le Jules Verne, already paid. This is breakfast + lunch only.' },
    // Flight home at 11:00. Airport breakfast and that is it.
    29: { food: 30, pocket: 10, note: '🛫 Fly home 11:00 — airport breakfast, nothing else.' }
  },

  // The log. day -> [{ what, amount }] in USD, for whatever you actually
  // paid. Empty until the trip starts; fill it in as you go.
  spent: {
    // 2: [ { what: 'Dinner, Gothic Quarter', amount: 48 } ],
  },

  // Above this share of the allowance the day turns amber on the grid.
  warnAt: 0.8
};

// ---- computed ------------------------------------------------------

const DAILY_LOCAL_KEY = 'eurotrip-daily-spent';

function dailyLocalLoad() {
  try {
    const raw = localStorage.getItem(DAILY_LOCAL_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (e) { return {}; }
}

function dailyLocalSave(map) {
  try { localStorage.setItem(DAILY_LOCAL_KEY, JSON.stringify(map)); } catch (e) { /* ignore */ }
}

// Add an expense typed into the drawer. Returns the new entry.
function dailyLocalAdd(day, what, amount) {
  const map = dailyLocalLoad();
  const entry = { what: String(what || '').trim() || 'Expense', amount: Math.round(Number(amount) * 100) / 100, at: Date.now() };
  (map[day] = map[day] || []).push(entry);
  dailyLocalSave(map);
  return entry;
}

function dailyLocalRemove(day, at) {
  const map = dailyLocalLoad();
  if (!map[day]) return;
  map[day] = map[day].filter(e => e.at !== at);
  if (!map[day].length) delete map[day];
  dailyLocalSave(map);
}

// The allowance for one day of September: { food, pocket, total, where,
// tier, note } — or null on a day outside the trip.
function dailyBudgetFor(day) {
  if (typeof DAILY === 'undefined') return null;
  const ov = DAILY.overrides[day];
  const where = DAILY.where[day] || null;
  if (!ov && !where) return null;

  let food = 0, pocket = 0, note = null;
  if (where && typeof FOOD !== 'undefined') {
    const row = FOOD.countries.find(c => c.country === where);
    food = row ? row[DAILY.tier] : 0;
    pocket = DAILY.pocket[where] || 0;
  }
  if (ov) {
    if (ov.food != null) food = ov.food;
    if (ov.pocket != null) pocket = ov.pocket;
    note = ov.note || null;
  }
  return { day, where, tier: DAILY.tier, food, pocket, total: food + pocket, note };
}

// Everything logged for a day, committed file entries first, then what
// was typed on this device. Each entry says which it is.
function dailySpentFor(day) {
  const fromFile = ((typeof DAILY !== 'undefined' && DAILY.spent[day]) || [])
    .map(e => ({ what: e.what, amount: Number(e.amount) || 0, source: 'file' }));
  const fromLocal = (dailyLocalLoad()[day] || [])
    .map(e => ({ what: e.what, amount: Number(e.amount) || 0, source: 'local', at: e.at }));
  const items = fromFile.concat(fromLocal);
  const total = items.reduce((n, e) => n + e.amount, 0);
  return { items, total };
}

// The one object the calendar renders from.
//   state: 'untouched' nothing logged · 'ok' · 'warn' · 'over'
function dailyMoneyFor(day) {
  const budget = dailyBudgetFor(day);
  if (!budget) return null;
  const spent = dailySpentFor(day);
  const left = budget.total - spent.total;
  const ratio = budget.total ? spent.total / budget.total : 0;
  let state = 'untouched';
  if (spent.items.length) {
    state = left < 0 ? 'over' : ratio >= (DAILY.warnAt || 0.8) ? 'warn' : 'ok';
  }
  return { budget, spent, left, ratio: Math.min(ratio, 1), state };
}

// Trip-wide totals for the KPI strip.
function dailyMoneyTotals() {
  let allowance = 0, logged = 0, daysLogged = 0, over = 0;
  for (let d = 1; d <= 30; d++) {
    const m = dailyMoneyFor(d);
    if (!m) continue;
    allowance += m.budget.total;
    logged += m.spent.total;
    if (m.spent.items.length) daysLogged++;
    if (m.state === 'over') over++;
  }
  return { allowance, logged, daysLogged, over };
}

// Whole dollars unless the figure genuinely has cents, so a $18.50 coffee
// does not make "spent" and "left" disagree with the total by a dollar.
function dailyFmt(n) {
  const v = Math.round((Number(n) || 0) * 100) / 100;
  const abs = Math.abs(v);
  const txt = Number.isInteger(abs) ? abs.toLocaleString() : abs.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (v < 0 ? '−$' : '$') + txt;
}
