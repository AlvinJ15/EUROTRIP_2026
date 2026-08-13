// ============================================================
// THE TIMETABLE
//
// The `plan` strings in data.js are ARGUMENTS — why Lauterbrunnen and
// not Grindelwald, why the pass loses, what an earlier version got
// wrong. That reasoning is worth keeping, but it is not a schedule,
// and you cannot walk a day with it to find out whether the day is
// physically possible.
//
// This is the schedule. Start time, duration, what. Nothing else.
// The gap between one activity ending and the next starting is
// COMPUTED, never typed — so a day that does not fit reports itself
// instead of waiting to be discovered on the ground.
//
//   dur   minutes the thing actually takes, door to door
//   kind  travel | fixed | act | food | bags | buffer
//   fixed a booked or timed commitment you cannot slide
//
// Read the SLACK column: 🔴 negative means the day is impossible as
// written, 🟠 under 15 min means one queue ruins it, and a healthy
// number means an activity can overrun without breaking the chain.
// ============================================================

const SCHEDULE = {
  1: { items: [
    { t: '14:00', dur: 60, what: 'Leave home for Jorge Chávez', kind: 'travel' },
    { t: '15:00', dur: 190, what: 'Check-in, security, wait', kind: 'buffer' },
    { t: '18:10', dur: 695, what: '✈️ LIM → Madrid · Plus Ultra PU0302', kind: 'fixed', fixed: true, note: 'overnight, lands 12:45 Sep 2' }
  ]},
  2: { items: [
    { t: '12:45', dur: 60, what: 'Land Madrid T1 · immigration + bags', kind: 'travel' },
    { t: '13:45', dur: 45, what: 'Cercanías / Metro → Atocha', kind: 'travel' },
    { t: '14:30', dur: 120, what: 'Lunch and wait at Atocha', kind: 'buffer' },
    { t: '16:30', dur: 150, what: '🚄 AVE Madrid → Barcelona Sants', kind: 'fixed', fixed: true },
    { t: '19:00', dur: 25, what: 'L3 Sants → Liceu', kind: 'travel' },
    { t: '19:30', dur: 30, what: 'Check in, bags down', kind: 'bags' },
    { t: '20:00', dur: 90, what: 'Dinner in the Gothic Quarter', kind: 'food' }
  ]},
  3: { items: [
    { t: '07:45', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '08:50', dur: 40, what: 'L3 Liceu → Lesseps + uphill walk', kind: 'travel' },
    { t: '09:30', dur: 75, what: '🌿 Park Güell · Monumental Zone', kind: 'fixed', fixed: true, note: 'timed entry' },
    { t: '10:50', dur: 40, what: 'Taxi/metro → Sagrada Família', kind: 'travel' },
    { t: '11:45', dur: 45, what: '⛪ Sagrada Família', kind: 'fixed', fixed: true },
    { t: '12:30', dur: 45, what: '🔺 Sagrada tower', kind: 'fixed', fixed: true },
    { t: '13:30', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '15:00', dur: 90, what: 'La Boqueria + Gothic Quarter', kind: 'act' },
    { t: '17:00', dur: 120, what: 'Walk to Barceloneta + beach', kind: 'act' },
    { t: '20:00', dur: 90, what: 'Dinner', kind: 'food' }
  ]},
  4: { items: [
    { t: '05:45', dur: 45, what: 'Check out, metro → Sants', kind: 'bags' },
    { t: '07:00', dur: 150, what: '🚄 AVE Sants → Atocha', kind: 'fixed', fixed: true, note: '🔴 verify which departure you hold' },
    { t: '09:30', dur: 60, what: 'Metro → hotel Estrecho, drop bags', kind: 'bags' },
    { t: '10:45', dur: 75, what: 'Plaza Mayor + Puerta del Sol', kind: 'act' },
    { t: '12:15', dur: 75, what: 'Royal Palace (outside + gardens)', kind: 'act' },
    { t: '13:45', dur: 75, what: 'Lunch — menú del día', kind: 'food' },
    { t: '15:15', dur: 120, what: 'Retiro Park', kind: 'act' },
    { t: '20:00', dur: 90, what: 'Dinner', kind: 'food' }
  ]},
  5: { items: [
    { t: '08:00', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '09:00', dur: 105, what: '📅 Madrid event — one block away', kind: 'fixed', fixed: true },
    { t: '10:45', dur: 30, what: 'Check out, bags to hotel storage', kind: 'bags' },
    { t: '11:15', dur: 285, what: '📅 Event continues', kind: 'fixed', fixed: true },
    { t: '16:00', dur: 30, what: 'Collect bags', kind: 'bags' },
    { t: '16:30', dur: 60, what: 'Travel to Barajas', kind: 'travel' },
    { t: '17:30', dur: 150, what: 'Check-in and wait', kind: 'buffer' },
    { t: '20:00', dur: 240, what: '✈️ Madrid → Craiova', kind: 'fixed', fixed: true, note: 'lands ~midnight · 🔴 book the pickup' }
  ]},
  6: { items: [
    { t: '09:00', dur: 60, what: 'Breakfast', kind: 'food' },
    { t: '12:00', dur: 600, what: '💍 THE WEDDING — all day', kind: 'fixed', fixed: true, note: 'the anchor of the whole trip' }
  ]},
  7: { items: [
    { t: '10:00', dur: 90, what: 'Slow breakfast', kind: 'food' },
    { t: '13:00', dur: 420, what: '💍 Wedding day 2 · family, food, wine', kind: 'fixed', fixed: true }
  ]},
  8: { items: [
    { t: '07:30', dur: 45, what: 'Breakfast, check out', kind: 'bags' },
    { t: '08:30', dur: 210, what: '🚗 Craiova → Bucharest OTP', kind: 'travel', note: 'unless a direct Craiova flight works' },
    { t: '12:00', dur: 120, what: 'Airport, check-in', kind: 'buffer' },
    { t: '14:00', dur: 105, what: '✈️ Bucharest → Istanbul', kind: 'fixed', fixed: true },
    { t: '16:45', dur: 75, what: 'Transfer to Sultanahmet, check in', kind: 'travel' },
    { t: '18:30', dur: 150, what: 'Galata Bridge, fish sandwiches, Karaköy', kind: 'act', note: 'take it slow — two wedding days behind you' }
  ]},
  9: { items: [
    { t: '07:30', dur: 45, what: 'Turkish breakfast', kind: 'food' },
    { t: '08:30', dur: 90, what: '🕌 Hagia Sophia', kind: 'fixed', fixed: true, note: 'book online' },
    { t: '10:15', dur: 60, what: '🕌 Blue Mosque', kind: 'act', note: 'closed to visitors at prayer times' },
    { t: '11:30', dur: 60, what: '💧 Basilica Cistern', kind: 'act' },
    { t: '12:45', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:15', dur: 135, what: '🏰 Topkapi Palace', kind: 'fixed', fixed: true, note: 'book online · add the Harem' },
    { t: '17:00', dur: 105, what: 'Grand Bazaar + Spice Bazaar', kind: 'act' },
    { t: '19:30', dur: 120, what: '🌇 Rooftop dinner, Hagia Sophia view', kind: 'food', note: 'ask for a rail table' }
  ]},
  10: { items: [
    { t: '08:00', dur: 60, what: 'Breakfast, check out, bags to reception', kind: 'bags', note: '🔴 non-negotiable — a hamam has no room for trolleys' },
    { t: '09:30', dur: 20, what: 'Walk to Eminönü', kind: 'travel' },
    { t: '10:00', dur: 120, what: '⛵ Bosphorus cruise', kind: 'act' },
    { t: '12:15', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:00', dur: 120, what: '♨️ Hamam — Çemberlitaş or Kılıç Ali Paşa', kind: 'act' },
    { t: '16:15', dur: 45, what: 'Collect bags', kind: 'bags' },
    { t: '17:00', dur: 90, what: 'Travel to IST airport', kind: 'travel' },
    { t: '19:30', dur: 80, what: '✈️ IST → Cappadocia (NAV/ASR)', kind: 'fixed', fixed: true },
    { t: '21:00', dur: 60, what: 'Shuttle to cave hotel, Göreme', kind: 'travel' },
    { t: '22:00', dur: 45, what: 'Late dinner, straight to bed', kind: 'food', note: '🔴 balloon pickup is 04:30' }
  ]},
  11: { items: [
    { t: '04:30', dur: 60, what: '🎈 Pickup + inflation, coffee', kind: 'fixed', fixed: true },
    { t: '05:30', dur: 90, what: '🎈 SUNRISE BALLOON FLIGHT', kind: 'fixed', fixed: true, note: '🔴 STILL UNBOOKED — the one thing that sells out entirely' },
    { t: '07:15', dur: 45, what: 'Champagne landing, back to hotel', kind: 'travel' },
    { t: '08:15', dur: 105, what: 'Breakfast, and sleep again if you need it', kind: 'buffer' },
    { t: '10:30', dur: 120, what: '⛪ Göreme Open-Air Museum', kind: 'act' },
    { t: '13:00', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:30', dur: 90, what: '🏰 Uçhisar Castle', kind: 'act' },
    { t: '16:30', dur: 120, what: '🕳️ Derinkuyu or Kaymaklı underground city', kind: 'act' },
    { t: '18:45', dur: 75, what: '🌅 Sunset at Red Valley', kind: 'act' }
  ]},
  12: { items: [
    { t: '06:00', dur: 150, what: '⭐ BACKUP BALLOON SLOT — only if Friday was scrubbed', kind: 'buffer', note: 'skip if it already flew' },
    { t: '09:00', dur: 60, what: 'Breakfast, check out, bags with the hotel', kind: 'bags' },
    { t: '10:00', dur: 90, what: 'Devrent + Love Valley, or pottery in Avanos', kind: 'act', note: '🔴 nothing that ends away from Göreme' },
    { t: '11:45', dur: 60, what: 'Shuttle collects you and the bags', kind: 'travel' },
    { t: '13:30', dur: 90, what: '✈️ Cappadocia → Istanbul', kind: 'fixed', fixed: true },
    { t: '15:30', dur: 120, what: 'Connection at IST', kind: 'buffer' },
    { t: '17:30', dur: 140, what: '✈️ Istanbul → Athens', kind: 'fixed', fixed: true },
    { t: '20:00', dur: 60, what: 'Metro to Plaka/Monastiraki, check in', kind: 'travel' },
    { t: '21:15', dur: 105, what: '🌃 Rooftop dinner under the lit Acropolis', kind: 'food' }
  ]},
  13: { items: [
    { t: '07:00', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '08:00', dur: 165, what: '🏛️ ACROPOLIS at opening', kind: 'fixed', fixed: true, note: 'before the heat and the cruise groups' },
    { t: '11:00', dur: 90, what: 'Ancient Agora (combo ticket)', kind: 'act' },
    { t: '12:45', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:15', dur: 45, what: 'Temple of Olympian Zeus', kind: 'act' },
    { t: '15:15', dur: 150, what: 'Plaka, Monastiraki, Anafiotika', kind: 'act' },
    { t: '18:15', dur: 105, what: '🌅 Lycabettus Hill for sunset', kind: 'act' },
    { t: '20:30', dur: 90, what: 'Dinner', kind: 'food' }
  ]},
  14: { items: [
    { t: '07:00', dur: 45, what: 'Breakfast, check out', kind: 'bags' },
    { t: '08:00', dur: 40, what: 'Metro → Athens airport', kind: 'travel' },
    { t: '10:00', dur: 45, what: '✈️ Athens → Santorini', kind: 'fixed', fixed: true },
    { t: '11:15', dur: 60, what: 'Transfer to Oia, drop bags', kind: 'bags' },
    { t: '12:30', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:15', dur: 165, what: 'Caldera path — bus up, walk the last stretch', kind: 'act' },
    { t: '17:30', dur: 120, what: '🌅 OIA SUNSET — in position 90 min early', kind: 'fixed', fixed: true, note: 'as crowded as it is famous' },
    { t: '20:00', dur: 120, what: '🌅 Caldera-view dinner', kind: 'food', note: '🔴 book a rim table days ahead · $120–180' }
  ]},
  15: { items: [
    { t: '08:00', dur: 60, what: 'Breakfast — bag-free day, same hotel tonight', kind: 'food' },
    { t: '09:30', dur: 30, what: '~300 steps down to Amoudi Bay', kind: 'travel' },
    { t: '10:00', dur: 120, what: '🏊 Swim off the rocks at Amoudi', kind: 'act' },
    { t: '12:15', dur: 90, what: 'Seafood at the waterline, then back up', kind: 'food' },
    { t: '14:30', dur: 240, what: '⛵ Caldera boat — volcano + hot springs', kind: 'act', note: 'or Red Beach, or Akrotiri — pick ONE' },
    { t: '19:00', dur: 90, what: '🌅 Second Oia sunset, no pressure this time', kind: 'act' },
    { t: '21:00', dur: 90, what: 'Dinner away from the rim', kind: 'food' }
  ]},
  16: { items: [
    { t: '08:30', dur: 60, what: 'Check out, bags with the hotel', kind: 'bags' },
    { t: '09:45', dur: 105, what: 'Coffee on the caldera, Oia castle walk', kind: 'act' },
    { t: '11:45', dur: 45, what: 'Collect bags', kind: 'bags', note: '⚠️ 10–15 min hand-carrying to the taxi point' },
    { t: '12:45', dur: 45, what: 'Transfer to JTR airport', kind: 'travel', note: 'book it ahead, ask exactly where it meets you' },
    { t: '15:00', dur: 145, what: '✈️ Santorini → Rome', kind: 'fixed', fixed: true },
    { t: '18:00', dur: 75, what: 'Transfer to the hotel, check in', kind: 'bags' },
    { t: '19:30', dur: 75, what: '📷 St Peter\'s Square floodlit + Via della Conciliazione', kind: 'act', note: 'exterior only — no ticket, no queue, open 24h' },
    { t: '21:00', dur: 45, what: '📷 Ponte Sant\'Angelo + Castel Sant\'Angelo lit', kind: 'act' },
    { t: '21:45', dur: 90, what: 'Dinner nearby', kind: 'food' }
  ]},
  17: { items: [
    { t: '07:15', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '08:15', dur: 40, what: 'Metro → Colosseo', kind: 'travel' },
    { t: '09:00', dur: 180, what: '🏛️ COLOSSEUM + VR + Forum + Palatine', kind: 'fixed', fixed: true, note: '🔴 book the earliest slot at ancientandrecent.com' },
    { t: '12:15', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '13:45', dur: 75, what: '🏎️ Circo Massimo AR', kind: 'act', note: 'the honest drop if the day overruns' },
    { t: '15:15', dur: 105, what: '🦕 Museo Civico di Zoologia — dino hall', kind: 'act' },
    { t: '17:15', dur: 60, what: '🏛️ Pantheon', kind: 'act' },
    { t: '18:30', dur: 45, what: 'Piazza Navona', kind: 'act' },
    { t: '19:30', dur: 120, what: '🍝 Trastevere dinner', kind: 'food', note: '~25 min walk from the hotel · $70–110' },
    { t: '22:00', dur: 45, what: '⛲ Trevi Fountain after dark, when the crowd thins', kind: 'act' }
  ]},
  18: { items: [
    { t: '06:15', dur: 45, what: '📷 OPTIONAL — St Peter\'s Square at sunrise', kind: 'buffer', note: 'decide that morning · east-facing facade takes the light' },
    { t: '07:00', dur: 60, what: 'Collect bags, travel to FCO', kind: 'bags', note: '⚠️ confirm the €50 fixed taxi fare reaches your address' },
    { t: '08:00', dur: 120, what: 'Check-in and security', kind: 'buffer' },
    { t: '10:00', dur: 110, what: '✈️ Rome FCO → Geneva', kind: 'fixed', fixed: true, note: 'book before ~11:00' },
    { t: '12:00', dur: 45, what: 'Bags, buy train tickets at the machine', kind: 'travel', note: '💡 buy the Sep 22 tickets here too' },
    { t: '12:45', dur: 115, what: '🚂 Geneva → Bern', kind: 'travel' },
    { t: '14:45', dur: 55, what: '🚂 Bern → Interlaken Ost', kind: 'travel' },
    { t: '15:50', dur: 40, what: 'Check in — Interlaken (recommended) or on to Grindelwald', kind: 'bags' },
    { t: '16:45', dur: 105, what: '🚡 Harder Kulm — two-lake panorama', kind: 'act', note: 'if in Interlaken · sunset ~19:30 · runs into the evening' },
    { t: '19:00', dur: 90, what: 'Dinner + 🛒 COOP/MIGROS shop for the week', kind: 'food' }
  ]},
  19: { items: [
    { t: '06:45', dur: 45, what: 'Breakfast, check out', kind: 'bags' },
    { t: '07:35', dur: 35, what: '🚂 Interlaken → Grindelwald', kind: 'travel', note: 'skip if you slept in Grindelwald' },
    { t: '08:20', dur: 25, what: '🧳 Bags to the Hotel Spinne reception', kind: 'bags', note: '🔴 confirm they take them this early' },
    { t: '08:50', dur: 30, what: '🚡 First gondola up', kind: 'travel' },
    { t: '09:25', dur: 45, what: '🛴 Mountain cart + trottibike', kind: 'act', note: '🔴 RIDE THESE FIRST — the queue hits 110 min by midday' },
    { t: '10:15', dur: 30, what: '🎿 First Flieger — 800m at 84 km/h', kind: 'act' },
    { t: '10:50', dur: 40, what: '🚶 First Cliff Walk', kind: 'act' },
    { t: '11:35', dur: 70, what: '🥾 Hike to Bachalpsee', kind: 'act' },
    { t: '12:50', dur: 60, what: '💧 Bachalpsee — the mirror lake · lunch from the pack', kind: 'food', note: 'the best photograph of the trip' },
    { t: '13:55', dur: 65, what: '🥾 Hike back to First', kind: 'act' },
    { t: '15:05', dur: 45, what: '🚡 Down to the village', kind: 'travel' },
    { t: '16:00', dur: 300, what: '🏊 HOTEL SPINNE — infinity pool + saunas', kind: 'fixed', fixed: true, note: '🔴 spa closes 21:00 · check-in 15:00' }
  ]},
  20: { items: [
    { t: '07:45', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '08:30', dur: 15, what: 'Check out of the Spinne', kind: 'bags' },
    { t: '08:45', dur: 35, what: '🚂 Grindelwald → Interlaken Ost', kind: 'travel' },
    { t: '09:30', dur: 30, what: '🔒 Bags into station lockers', kind: 'bags', note: '🔴 both of you fly — nobody can watch them · budget 2 lockers' },
    { t: '10:15', dur: 15, what: 'Operator check-in', kind: 'fixed', fixed: true },
    { t: '10:30', dur: 150, what: '🪂 PARAGLIDE from Beatenberg', kind: 'fixed', fixed: true, note: '🔴 book the ~10:30 slot · minibus + briefing + flight' },
    { t: '13:00', dur: 60, what: 'Lunch in Interlaken', kind: 'food' },
    { t: '14:00', dur: 90, what: '🍫 Funky Chocolate Club workshop', kind: 'act', note: '🔴 the designated drop if the flight slips past 11:30' },
    { t: '15:45', dur: 20, what: 'Bags out of the lockers', kind: 'bags' },
    { t: '16:05', dur: 25, what: '🚂 Interlaken Ost → Lauterbrunnen', kind: 'travel' },
    { t: '16:35', dur: 40, what: 'Check in — Hotel Schützen', kind: 'bags', note: 'check-in is 14:00, so this never binds' },
    { t: '17:20', dur: 70, what: '📷 Staubbach falls + the village, while there is light', kind: 'act' },
    { t: '19:00', dur: 90, what: 'Dinner in Lauterbrunnen', kind: 'food' }
  ]},
  21: { items: [
    { t: '07:30', dur: 40, what: 'Breakfast — no train today, you wake up in it', kind: 'food' },
    { t: '08:20', dur: 40, what: '📷 Staubbach + valley walk', kind: 'act' },
    { t: '09:05', dur: 20, what: '🚡 Funicular → Grütschalp', kind: 'travel' },
    { t: '09:30', dur: 20, what: '🚂 Panorama train → Mürren', kind: 'travel' },
    { t: '09:55', dur: 40, what: '🚡 Cable car Mürren → Birg → Schilthorn', kind: 'travel' },
    { t: '10:40', dur: 70, what: '🏔️ SCHILTHORN 2,970m — Skyline, Bond World', kind: 'act', note: '☁️ check the webcam that morning — cloud makes this CHF 108 of fog' },
    { t: '11:55', dur: 75, what: '🍽️ Piz Gloria revolving restaurant — lunch', kind: 'food', note: 'the only restaurant meal today · ~$75–105' },
    { t: '13:15', dur: 45, what: '🌉 Thrill Walk at Birg — glass floor', kind: 'act' },
    { t: '14:05', dur: 75, what: '🏔️ Mürren — car-free village on the cliff', kind: 'act' },
    { t: '15:25', dur: 35, what: '🚡 Down via Gimmelwald → Stechelberg', kind: 'travel', note: 'the other way down — no repeated scenery' },
    { t: '16:05', dur: 10, what: '🚌 Bus → Trümmelbach', kind: 'travel' },
    { t: '16:20', dur: 70, what: '💧 TRÜMMELBACH FALLS — inside the mountain', kind: 'act', note: '⚠️ CHF 14 · check last admission' },
    { t: '17:35', dur: 20, what: '🚌 Bus back to Lauterbrunnen', kind: 'travel' },
    { t: '19:00', dur: 90, what: 'Dinner', kind: 'food' }
  ]},
  22: { items: [
    { t: '08:30', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '09:45', dur: 20, what: 'Check out', kind: 'bags' },
    { t: '10:15', dur: 25, what: '🚂 Lauterbrunnen → Interlaken Ost', kind: 'travel' },
    { t: '11:07', dur: 198, what: '🚞 GOLDENPASS EXPRESS → Montreux', kind: 'fixed', fixed: true, note: '✅ PAID · seat reservation · 2nd class' },
    { t: '14:25', dur: 35, what: 'Change at Montreux — platform only', kind: 'buffer' },
    { t: '15:00', dur: 70, what: '🚂 Montreux → Geneva', kind: 'travel' },
    { t: '16:20', dur: 60, what: 'Change at Geneva', kind: 'buffer' },
    { t: '17:20', dur: 190, what: '🚄 TGV Lyria Geneva → Paris Gare de Lyon', kind: 'fixed', fixed: true },
    { t: '20:30', dur: 55, what: '🚇 Gare de Lyon → 15th arr., check in', kind: 'bags', note: 'line 14 then line 8 — allow the extra with four bags' },
    { t: '21:40', dur: 75, what: 'Dinner on rue du Commerce', kind: 'food', note: 'market street downstairs — kitchens there serve later than the quarter looks' }
  ]},
  23: { items: [
    { t: '07:05', dur: 45, what: 'Breakfast at the apartment', kind: 'food' },
    { t: '08:05', dur: 75, what: '🚆 15th arr. → RER A → Marne-la-Vallée', kind: 'travel', note: '🔴 25 min longer than this plan assumed — the 15th has no direct RER A. Line 8 or 10 into the centre, then RER A east from Auber or Châtelet. €2.55/person on the RER — not the €23 shuttle.' },
    { t: '09:30', dur: 90, what: '🎡 ROPE DROP — Disneyland Park', kind: 'fixed', fixed: true, note: 'first 90 min run 5–10 min queues' },
    { t: '11:00', dur: 150, what: 'Big Thunder, Phantom Manor, Pirates, Peter Pan', kind: 'act' },
    { t: '13:30', dur: 60, what: 'Lunch — bring your own, park food is €20–30pp', kind: 'food' },
    { t: '14:30', dur: 90, what: 'Daytime parade', kind: 'act' },
    { t: '16:00', dur: 210, what: 'Hyperspace Mountain, Indiana Jones, Buzz Lightyear', kind: 'act' },
    { t: '19:30', dur: 75, what: 'Dinner in the park', kind: 'food' },
    { t: '21:00', dur: 60, what: '🌟 NIGHT SHOW on the castle', kind: 'fixed', fixed: true },
    { t: '22:15', dur: 80, what: '🚆 RER A back, then line 8/10 to the 15th', kind: 'travel' }
  ]},
  24: { items: [
    { t: '08:00', dur: 45, what: 'Breakfast at the apartment', kind: 'food' },
    { t: '09:00', dur: 150, what: '⛪ Montmartre + Sacré-Cœur', kind: 'act' },
    { t: '11:45', dur: 45, what: 'Metro → Trocadéro / Champ de Mars', kind: 'travel' },
    { t: '12:45', dur: 60, what: 'Lunch', kind: 'food' },
    { t: '14:00', dur: 150, what: '🗼 EIFFEL TOWER — summit + 2nd floor in daylight', kind: 'fixed', fixed: true, note: '🔴 book the summit lift separately' },
    { t: '16:45', dur: 70, what: '⛵ Seine river cruise', kind: 'act', note: 'boards at Port de la Bourdonnais, at the foot of the tower — no transfer' },
    { t: '18:05', dur: 30, what: '🚶 Walk home to rue Quinault', kind: 'travel', note: '🆕 ~2 km. This step only exists because the flat is in the 15th.' },
    { t: '18:40', dur: 45, what: 'Shower and change — jacket required for men', kind: 'buffer', note: '🆕 THE REAL WIN OF THIS BOOKING. From the Marais there was no way home and back, so you would have carried the jacket around all day or dressed at 09:00.' },
    { t: '19:25', dur: 30, what: '🚶 Walk back to the south pillar', kind: 'travel' },
    { t: '20:00', dur: 180, what: '🍽️ LE JULES VERNE', kind: 'fixed', fixed: true, note: '✅ PAID $705 · private lift in the south pillar · reconfirm 48h ahead' },
    { t: '23:15', dur: 30, what: '✨ Trocadéro — the tower sparkles on the hour', kind: 'act' },
    { t: '23:50', dur: 35, what: '🚶 Walk home', kind: 'travel', note: 'no last-métro problem from here' }
  ]},
  25: { items: [
    { t: '07:05', dur: 45, what: 'Breakfast at the apartment', kind: 'food' },
    { t: '08:05', dur: 75, what: '🚆 15th arr. → RER A → the parks', kind: 'travel', note: '🔴 Same 25-min penalty as Sep 23. Rope drop at 09:30 is the whole strategy for this day — do not shave this.' },
    { t: '09:30', dur: 45, what: '🎢 ROPE DROP — Frozen Ever After FIRST', kind: 'fixed', fixed: true, note: 'newest ride, longest queue by 11:00' },
    { t: '10:20', dur: 40, what: 'Crush\'s Coaster second', kind: 'act' },
    { t: '11:05', dur: 145, what: 'Ratatouille, Tangled Spin, Tower of Terror', kind: 'act' },
    { t: '13:30', dur: 60, what: 'Lunch — bring your own again', kind: 'food' },
    { t: '14:30', dur: 210, what: 'Avengers Flight Force, Spider-Man W.E.B., Cars', kind: 'act' },
    { t: '18:00', dur: 90, what: 'Slinky Dog, Toy Soldiers, RC Racer', kind: 'act' },
    { t: '19:45', dur: 75, what: 'Dinner', kind: 'food' },
    { t: '21:00', dur: 60, what: '🌟 Night show', kind: 'act' },
    { t: '22:15', dur: 80, what: '🚆 RER A back, then line 8/10 to the 15th', kind: 'travel', note: '🔴 Home ~23:35 with a 05:00 checkout for Orly the next morning. Pack before you leave in the morning.' }
  ]},
  26: { items: [
    { t: '05:00', dur: 40, what: 'Check out', kind: 'bags' },
    { t: '05:45', dur: 55, what: '🚇 15th → line 8/10 → line 14 → Orly', kind: 'travel', note: '🔴 CORRECTED: line 14 is NOT direct from the 15th — it does not serve this arrondissement. You change at Madeleine or Châtelet. ⚠️ AND CHECK THE FIRST TRAIN: the métro starts ~05:30 on a Saturday, so this leans on the very first services with four bags. 💡 A pre-booked taxi is ~€35–40 and ~30 min at that hour — for a 07:25 flight, worth it.' },
    { t: '06:50', dur: 35, what: 'Check-in and security', kind: 'buffer', note: '🔴 Thin. This is the strongest argument for the taxi.' },
    { t: '07:25', dur: 125, what: '✈️ Orly → Madrid · Iberia', kind: 'fixed', fixed: true, note: '~$198 for 2, cabin bag included · 10:55 Air Europa if you\'d rather sleep' },
    { t: '09:30', dur: 75, what: 'Bags, transfer to the hotel near Atocha', kind: 'bags' },
    { t: '11:15', dur: 75, what: 'Check in, drop bags', kind: 'bags' },
    { t: '13:00', dur: 75, what: 'Lunch', kind: 'food' },
    { t: '14:30', dur: 105, what: '🏰 Royal Palace', kind: 'act' },
    { t: '16:30', dur: 90, what: 'Plaza Mayor + Puerta del Sol', kind: 'act' },
    { t: '18:15', dur: 90, what: 'Retiro Park', kind: 'act' },
    { t: '20:15', dur: 105, what: '🥘 Mercado de San Miguel or tapas in La Latina', kind: 'food' }
  ]},
  27: { items: [
    { t: '07:15', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '08:15', dur: 30, what: 'Walk/metro to Atocha', kind: 'travel' },
    { t: '09:00', dur: 33, what: '🚄 AVE Atocha → Toledo', kind: 'fixed', fixed: true, note: '🔴 book BOTH directions — short line, sells out at weekends' },
    { t: '09:45', dur: 30, what: 'Bus or walk up into the walled city', kind: 'travel' },
    { t: '10:15', dur: 105, what: '⛪ Toledo Cathedral', kind: 'act' },
    { t: '12:15', dur: 75, what: '🏰 Alcázar', kind: 'act' },
    { t: '13:45', dur: 90, what: 'Lunch', kind: 'food' },
    { t: '15:30', dur: 150, what: 'Jewish quarter + the old streets', kind: 'act' },
    { t: '18:15', dur: 45, what: '📷 Mirador del Valle — the classic city view', kind: 'act' },
    { t: '19:30', dur: 33, what: '🚄 AVE Toledo → Atocha', kind: 'fixed', fixed: true },
    { t: '20:45', dur: 105, what: 'Dinner in Madrid', kind: 'food' }
  ]},
  28: { items: [
    { t: '07:45', dur: 45, what: 'Breakfast', kind: 'food' },
    { t: '09:00', dur: 180, what: '🏫 EARLY-YEARS SCHOOL VISIT', kind: 'fixed', fixed: true, note: '🔴 ARRANGE BY EMAIL WEEKS AHEAD — no centre lets a visitor walk in' },
    { t: '12:30', dur: 90, what: 'Lunch', kind: 'food' },
    { t: '14:30', dur: 150, what: '🏫 Second centre, or the Madrid you still owe yourself', kind: 'act' },
    { t: '17:30', dur: 120, what: 'Gran Vía, last shopping, gifts', kind: 'act' },
    { t: '20:00', dur: 120, what: 'Last dinner in Europe', kind: 'food' },
    { t: '22:30', dur: 60, what: '🧳 Pack — the flight is 11:00 tomorrow', kind: 'bags' }
  ]},
  29: { items: [
    { t: '06:30', dur: 45, what: 'Breakfast, final check', kind: 'food' },
    { t: '07:15', dur: 45, what: 'Check out, travel to Barajas', kind: 'bags' },
    { t: '08:00', dur: 180, what: 'Check-in, security, wait', kind: 'buffer', note: 'be at Barajas by 08:00' },
    { t: '11:00', dur: 730, what: '✈️ Madrid → Lima · Plus Ultra PU0301', kind: 'fixed', fixed: true, note: 'lands Lima 16:10 the same day · trip ends' }
  ]}
};

// ---- computation -----------------------------------------------------
// Nothing below is authored. End times and gaps are derived, so a day
// cannot claim to fit when it does not.

function schMin(t) {
  const [h, m] = String(t).split(':').map(Number);
  return h * 60 + m;
}

function schFmt(mins) {
  const m = ((mins % 1440) + 1440) % 1440;
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
}

/**
 * Walk a day like a robot: each item starts when it says, runs for `dur`,
 * and the gap to the NEXT start is the slack you have to absorb an
 * overrun. Negative slack means the day is impossible as written.
 */
function scheduleFor(day) {
  const d = SCHEDULE[day];
  if (!d) return null;

  const rows = d.items.map((it, i) => {
    const start = schMin(it.t);
    const end = start + it.dur;
    const next = d.items[i + 1];
    const gap = next ? schMin(next.t) - end : null;
    // A back-to-back transfer is not a problem — a train leaving the
    // moment the previous one arrives is how connections work, and
    // flagging every one of those buried the real warnings under
    // eleven orange chips a day.
    //
    // What IS a problem is having no room in front of something you
    // cannot move. Miss a booked slot and it is gone; arrive late to a
    // walk and nothing happens. So `tight` means: under 10 minutes of
    // margin before a FIXED commitment.
    let state = '';
    if (gap !== null) {
      if (gap < 0) state = 'clash';
      else if (gap < 10 && next.fixed) state = 'tight';
      else if (gap >= 60) state = 'loose';
    }
    return { ...it, start, end, endLabel: schFmt(end), gap, state };
  });

  const clashes = rows.filter(r => r.state === 'clash');
  const tights = rows.filter(r => r.state === 'tight');
  const first = rows[0];
  const last = rows[rows.length - 1];

  return {
    rows,
    clashes: clashes.length,
    tights: tights.length,
    startLabel: first ? first.t : '',
    endLabel: last ? last.endLabel : '',
    lengthMin: first && last ? last.end - first.start : 0,
    // Total unallocated time between activities — the day's whole margin.
    slackMin: rows.reduce((n, r) => n + (r.gap > 0 ? r.gap : 0), 0),
    debtMin: rows.reduce((n, r) => n + (r.gap < 0 ? -r.gap : 0), 0)
  };
}

function schDur(mins) {
  const h = Math.floor(mins / 60), m = mins % 60;
  return h ? (m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`) : `${m}m`;
}

function scheduleHTML(day, compact) {
  const s = scheduleFor(day);
  if (!s) return '';

  const rows = s.rows.map(r => `
    <li class="sch-row ${r.fixed ? 'is-fixed' : ''} k-${r.kind}">
      <span class="sch-time"><b>${r.t}</b><i>${r.endLabel}</i></span>
      <span class="sch-body">
        <span class="sch-what">${r.what}${r.fixed ? ' <span class="sch-lock" title="Booked or timed — cannot slide">🔒</span>' : ''}</span>
        <span class="sch-meta"><span class="sch-dur">${schDur(r.dur)}</span>${r.note ? `<span class="sch-note">${r.note}</span>` : ''}</span>
      </span>
      ${r.gap === null ? '<span class="sch-gap is-end">end</span>'
        : r.state === 'clash' ? `<span class="sch-gap is-clash">🔴 ${schDur(-r.gap)} short</span>`
        : r.state === 'tight' ? `<span class="sch-gap is-tight">🟠 ${r.gap}m</span>`
        : `<span class="sch-gap ${r.state === 'loose' ? 'is-loose' : ''}">+${schDur(r.gap)}</span>`}
    </li>`).join('');

  // The day's verdict is about the WHOLE day's margin, not one step.
  // Under an hour of total slack across a 14-hour day means a single
  // long queue puts you behind for the rest of it.
  const verdict = s.clashes
    ? `<span class="sch-verdict is-clash">🔴 ${s.clashes} impossible — ${schDur(s.debtMin)} short</span>`
    : s.tights
      ? `<span class="sch-verdict is-tight">🟠 no room before ${s.tights} booked slot${s.tights === 1 ? '' : 's'}</span>`
      : s.slackMin < 60
        ? `<span class="sch-verdict is-tight">🟠 only ${schDur(s.slackMin)} of slack all day</span>`
        : '<span class="sch-verdict is-ok">✅ the day fits with room</span>';

  return `
    <div class="sch ${compact ? 'is-compact' : ''}">
      <div class="sch-head">
        <span class="sch-span">${s.startLabel} → ${s.endLabel} · <b>${schDur(s.lengthMin)}</b> on the go</span>
        <span class="sch-slack">🕳️ ${schDur(s.slackMin)} total slack</span>
        ${verdict}
      </div>
      <ol class="sch-list">${rows}</ol>
    </div>`;
}
