// ============================================================
// EUROTRIP 2026 — DATA FILE  (Option B: East → West, Sep start)
// Edit prices/dates here. render.js reads this to build the page.
// ============================================================

const TRIP = {
  title: "Eurotrip 2026",
  names: "Alvin & Girlfriend",
  duration: "33 days",
  dates: "Sep 1 – Oct 4, 2026",
  budget: 14000,
  persons: 2,
  origin: "Lima, Peru",
  routeNote: "Option B — Arrive Romania for wedding, move West, end in Paris late September (lowest Disneyland crowds of the year).",
  anchor: {
    event: "Wedding",
    date: "Sunday, September 6, 2026",
    city: "Craiova, Romania",
    note: "Arrive Sep 1 via Bucharest — 5 days to settle before the big day"
  },
  flightNote: "⚠️ No direct Lima→Bucharest flights. All go via Madrid (Iberia) or Amsterdam (KLM). Plan for 2-stop journey.",
  flightSavings: "~$600 saved (open-jaw Sep vs Aug round-trip to Paris)"
};

// ============================================================
// FLIGHTS — Correct routing (no direct Lima→Bucharest)
// ============================================================
const FLIGHTS = {
  outbound: {
    from: "Lima (LIM)",
    to: "Bucharest (OTP)",
    bestOptions: [
      {
        airline: "Iberia",
        route: "LIM → MAD → OTP",
        stopover: "Madrid (MAD) — 1 stop",
        flightTime: "~11h (Lima→Madrid) + ~3.5h (Madrid→Bucharest) = ~14.5h total",
        layover: "Typically 3–5h in Madrid",
        estimatePerson: "$620–820",
        notes: "Best option. Iberia flies Lima→Madrid daily. Connects to Iberia/Iberia Express or Vueling to Bucharest.",
        recommended: true
      },
      {
        airline: "KLM",
        route: "LIM → AMS → OTP",
        stopover: "Amsterdam (AMS) — 1 stop",
        flightTime: "~12h (Lima→Amsterdam) + ~3h (Amsterdam→Bucharest) = ~15h total",
        layover: "Typically 2–4h in Amsterdam",
        estimatePerson: "$650–900",
        notes: "KLM Lima→Amsterdam is excellent quality. Good connection to Bucharest via Transavia or KLM.",
        recommended: false
      }
    ],
    tip: "Book the Iberia open-jaw ticket: LIM→OTP inbound + CDG→LIM outbound as ONE booking — often cheaper than two separate tickets. Check iberia.com and compare vs Google Flights."
  },
  return: {
    from: "Paris (CDG)",
    to: "Lima (LIM)",
    bestOptions: [
      {
        airline: "Air France / Iberia",
        route: "CDG → MAD → LIM",
        flightTime: "~2h (Paris→Madrid) + ~11h (Madrid→Lima) = ~13h total",
        estimatePerson: "$620–850",
        notes: "Air France CDG→MAD then Iberia MAD→LIM is the classic route. Or Air France CDG direct to Lima (seasonal — verify if operating Oct 2026).",
        recommended: true
      }
    ]
  },
  intraEurope: [
    { leg: "Craiova → Budapest", method: "✈️ Fly WizzAir or bus", cost: "$40–120 for 2", notes: "WizzAir CRA→Budapest sometimes direct. Or fly Bucharest OTP→Budapest." },
    { leg: "Budapest → Vienna", method: "🚂 Train", cost: "$30–80 for 2", notes: "2.5h scenic. Book at oebb.at. Most convenient option." },
    { leg: "Vienna → Interlaken", method: "🚂 Train or ✈️ Fly", cost: "$120–220 for 2", notes: "Train is 8h scenic via Zurich. Fly Vienna→Zurich (~1.5h, $60–150) then train to Interlaken (~2h)." },
    { leg: "Switzerland → Rome (via Bernina Express)", method: "🚂 Bernina Express + train", cost: "$210–300 for 2", notes: "Chur→Tirano (Bernina Express, 4h, UNESCO) then Tirano→Milan→Rome (3–4h). Spectacular and practical." },
    { leg: "Rome → Barcelona", method: "✈️ Fly", cost: "$50–150 for 2", notes: "Ryanair/Vueling ~2h. Book 2+ months ahead." },
    { leg: "Barcelona → Paris", method: "✈️ Fly or 🚂 TGV", cost: "$60–200 for 2", notes: "Flight is 2h. TGV is 6.5h but scenic/comfortable. Fly if time is tight." }
  ]
};

// ============================================================
// ITINERARY — 8 stops with day-by-day weekday optimization
// ============================================================
const ITINERARY = [
  {
    id: 1,
    city: "Craiova",
    country: "Romania",
    emoji: "💍",
    nights: 7,
    dates: "Sep 1–8 (Tue–Tue)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    dailyCost: 140,
    accommodation: "Hotel",
    accommodationCost: 70,
    transport: { from: "Lima (LIM)", how: "Lima→Madrid (Iberia, 11h) → Madrid→Bucharest OTP (3.5h) → Train OTP→Craiova (3.5h, ~$12/person)" },
    dayByDay: [
      { day: "Sep 1 (Tue)", plan: "Arrive Bucharest evening, overnight or direct train to Craiova" },
      { day: "Sep 2 (Wed)", plan: "Settle in Craiova. Rest. Nicolae Romanescu Park stroll" },
      { day: "Sep 3–5", plan: "Relax before wedding. Explore city at leisure." },
      { day: "Sep 6 (Sun)", plan: "💍 THE WEDDING" },
      { day: "Sep 7 (Mon)", plan: "Recovery + Romanian food, local wine tasting" },
      { day: "Sep 8 (Tue)", plan: "Travel day → Budapest" }
    ],
    highlights: [
      { icon: "✈️", text: "Arrive Bucharest OTP → train to Craiova (3.5h)", cost: "~$25 train for 2" },
      { icon: "🌳", text: "Nicolae Romanescu Park — one of Europe's most beautiful English-style parks", cost: "Free" },
      { icon: "💒", text: "THE WEDDING — September 6, 2026!", cost: "🎉" },
      { icon: "🍷", text: "Romanian wine + local food — Feteasca Neagra wine is excellent here", cost: "$15–25/person" }
    ],
    tips: [
      "No direct Lima→Bucharest: fly via Madrid (Iberia) or Amsterdam (KLM). Book open-jaw.",
      "Train Bucharest→Craiova: ~$12/person, very comfortable. Or private transfer ~$80.",
      "Romania is the cheapest stop: meals $10–20/person, local wine ~$5 a bottle.",
      "Sep 6 is Sunday — the wedding day."
    ],
    selectedActivities: []
  },
  {
    id: 2,
    city: "Budapest",
    country: "Hungary",
    emoji: "🦕",
    nights: 3,
    dates: "Sep 8–11 (Tue–Fri)",
    image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800&q=80",
    dailyCost: 215,
    accommodation: "Hotel (excellent value)",
    accommodationCost: 95,
    transport: { from: "Craiova", how: "Fly Bucharest OTP→Budapest (~$40–80/person) or WizzAir from Craiova CRA" },
    dayByDay: [
      { day: "Sep 8 (Tue)", plan: "Arrive Budapest afternoon. Settle in. Evening: Szimpla Kert ruin bar" },
      { day: "Sep 9 (Wed)", plan: "Morning: Hungarian Natural History Museum 'Lost World' dinos. Afternoon: Tropicarium aquarium (shark tunnel!). Evening: Danube cruise lit Parliament" },
      { day: "Sep 10 (Thu)", plan: "Morning: Fisherman's Bastion (free, panoramic views) + Buda Castle. Afternoon: Cave thermal baths (Molnár János snorkel). Evening: ruin bar again" },
      { day: "Sep 11 (Fri)", plan: "Travel day → Vienna (2.5h train)" }
    ],
    highlights: [
      { icon: "🦕", text: "Hungarian Natural History Museum — 'Lost World' dino hall with life-size statues", cost: "~$9/person" },
      { icon: "🦈", text: "Tropicarium — Central Europe's largest shark aquarium, 12m underwater tunnel, alligators", cost: "~$12/person" },
      { icon: "🌊", text: "Cave thermal baths (Molnár János) — snorkel inside a thermal water cave under the city", cost: "~$70–90/person" },
      { icon: "🏰", text: "Buda Castle + Fisherman's Bastion — free panoramic Danube views, medieval architecture", cost: "Free entry to grounds" },
      { icon: "⛵", text: "Danube river cruise at night — lit Parliament + Buda Castle from the water", cost: "~$15/person" },
      { icon: "🍺", text: "Szimpla Kert ruin bars — uniquely Budapest, can't find this anywhere else", cost: "$20–40/person evening" }
    ],
    tips: [
      "Book Molnár János cave snorkel in advance — small capacity, unique experience",
      "Fisherman's Bastion: free to enter the grounds (pay only for the towers, not needed)",
      "Sep 9 Wed + Sep 10 Thu = midweek = fewer tourists at Buda Castle",
      "Tropicarium: feeding times listed on website — alligator feeding 3rd Monday (miss it but sharks fed regularly)"
    ],
    selectedActivities: ["NN — Hungarian NHM dinos", "Tropicarium aquarium", "X — Cave thermal baths", "Buda Castle"]
  },
  {
    id: 3,
    city: "Vienna",
    country: "Austria",
    emoji: "🦖",
    nights: 2,
    dates: "Sep 11–13 (Fri–Sun)",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80",
    dailyCost: 295,
    accommodation: "Hotel — central",
    accommodationCost: 130,
    transport: { from: "Budapest", how: "Train Budapest→Vienna (2.5h, ~$30–60/person) — scenic, comfortable" },
    dayByDay: [
      { day: "Sep 11 (Fri)", plan: "Arrive Vienna noon. Naschmarkt food market (open Fri until 6pm). Evening: rooftop bar" },
      { day: "Sep 12 (Sat)", plan: "Morning: NHM Vienna Hall 10 dinosaurs. Afternoon: Schönbrunn Palace. Evening: Prater Ferris wheel views + dinner" },
      { day: "Sep 13 (Sun)", plan: "Travel day → Switzerland. NHM is FREE 6–9pm Sunday if you want a quick last visit." }
    ],
    highlights: [
      { icon: "🦖", text: "NHM Vienna Hall 10 — Diplodocus, Allosaurus, 7m Pteranodon inside an imperial palace", cost: "~$13/person (FREE Sun 6–9pm)" },
      { icon: "🏰", text: "Schönbrunn Palace + imperial gardens", cost: "~$28/person" },
      { icon: "🎡", text: "Prater Riesenrad — 1897 giant Ferris wheel, 65m high, views over Vienna", cost: "~$14/person" },
      { icon: "🍽️", text: "Naschmarkt food market — Vienna's best open market, Fri & Sat most vibrant", cost: "$25–40/person food" },
      { icon: "🍸", text: "Rooftop bar — Vienna skyline views", cost: "$30–45/person" }
    ],
    tips: [
      "NHM Vienna: FREE every Sunday 6–9pm — if arriving Sunday you can visit for free in the evening",
      "Naschmarkt is best Sat morning (open-air flea market too) — you arrive Fri, still good",
      "Skip the Kunsthistorisches Museum (art paintings) — not your vibe",
      "Schönbrunn is better than Belvedere if you only do one palace"
    ],
    selectedActivities: ["MM — NHM Vienna Hall 10 dinos", "R — Rooftop cocktails"]
  },
  {
    id: 4,
    city: "Swiss Alps",
    country: "Switzerland",
    emoji: "🏔️",
    nights: 5,
    dates: "Sep 13–18 (Sun–Fri)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    dailyCost: 480,
    accommodation: "Airbnb / Guesthouse — Interlaken or Grindelwald",
    accommodationCost: 200,
    transport: { from: "Vienna", how: "Fly Vienna→Zurich (~1.5h, $60–150/person) then train Zurich→Interlaken (~2h). OR train Vienna→Zurich (8h scenic) + Interlaken." },
    dayByDay: [
      { day: "Sep 13 (Sun)", plan: "Arrive Interlaken/Grindelwald. Settle in. Evening stroll." },
      { day: "Sep 14 (Mon)", plan: "Jungfraujoch 'Top of Europe' full day. Monday = fewer tourist groups. Start early (7am) to beat clouds." },
      { day: "Sep 15 (Tue)", plan: "Morning: Tandem paragliding over Interlaken (book morning slot for best thermals). Afternoon: Lake Oeschinen swim — cable car to Kandersteg." },
      { day: "Sep 16 (Wed)", plan: "First Gondola Grindelwald → Bachalpsee lake hike (Eiger backdrop). Lunch at Berggasthaus First (alpine view restaurant)." },
      { day: "Sep 17 (Thu)", plan: "Bernina Express scenic train Chur→Tirano Italy (4h UNESCO). This is your route connector to Italy. Book Chur departure — take regional train from Interlaken to Chur first (2.5h)." },
      { day: "Sep 18 (Fri)", plan: "Arrive ski area (Bormio or Bolzano). Check in. Prep for ski day." }
    ],
    highlights: [
      { icon: "🏔️", text: "Jungfraujoch 3,454m — glacier walk, snow tunnel, panorama platform", cost: "~$210/person round trip" },
      { icon: "🪂", text: "Tandem paragliding — launch Beatenberg, fly 15 min over lakes + Alps, land Interlaken", cost: "~$210/person" },
      { icon: "🏊", text: "Lake Oeschinen — turquoise glacial lake, limestone cliffs, swimming, no urban development", cost: "~$17/person cable car" },
      { icon: "🍽️", text: "Berggasthaus First lunch — direct Eiger-Mönch-Jungfrau panorama from your table", cost: "~$45/person" },
      { icon: "🚂", text: "Bernina Express → UNESCO train, glaciers + viaducts → arrives Italy (your route connector)", cost: "~$105/person" }
    ],
    tips: [
      "Swiss Travel Pass 3-day (~$270/person): covers all SBB trains, Bernina base fare, Jungfraujoch discount, mountain railways",
      "Jungfraujoch: go Monday morning (Sep 14) — weekday + early = fewest people. Clouds build by noon.",
      "Paragliding: book morning slot (9–11am) — best thermals. AlpinAir or Paragliding-Interlaken.ch",
      "Oeschinen water is 12–17°C in September — cold but stunning. Rent a rowing boat too.",
      "Bernina Express: book seat reservation (CHF 40 extra at sbb.ch) — specific panoramic car seats"
    ],
    selectedActivities: ["E — Jungfraujoch glacier", "F — Paragliding", "D — Lake Oeschinen swim", "P — Alpine mountain lunch"]
  },
  {
    id: 5,
    city: "Skiing — Val Senales Glacier",
    country: "Italy (South Tyrol)",
    emoji: "⛷️",
    nights: 2,
    dates: "Sep 18–20 (Fri–Sun)",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    dailyCost: 240,
    accommodation: "Hotel in Naturno or Malles Venosta (base for Val Senales)",
    accommodationCost: 110,
    transport: { from: "Tirano (Bernina Express arrival)", how: "Train Tirano→Milan (~2h) → train Milan→Bolzano (~2.5h). Or bus Tirano→Merano (~2.5h) → bus/taxi to Val Senales village." },
    dayByDay: [
      { day: "Sep 18 (Fri)", plan: "Arrive Val Senales area. Rest. Buy lift pass online in advance." },
      { day: "Sep 19 (Sat)", plan: "⛷️ SKI DAY — Val Senales Glacier opens this week. 42km slopes. Professional-grade snow." },
      { day: "Sep 20 (Sun)", plan: "Optional: 2nd ski day OR travel to Rome. Train Bolzano→Rome (~4h) or fly." }
    ],
    highlights: [
      { icon: "⛷️", text: "Val Senales Glacier — 42km slopes, 3,212m summit, professional training ground", cost: "~€52/person day pass + ~€35 rental" },
      { icon: "❄️", text: "GUARANTEED snow — permanent glacier at 3,000m+. National ski teams train here in September.", cost: "Included" },
      { icon: "🏔️", text: "Scenic South Tyrol valley — dramatic alpine scenery, Austrian-Italian culture blend", cost: "Free" }
    ],
    tips: [
      "✅ Snow is 100% guaranteed — this is a PERMANENT GLACIER at 3,212m, not a regular ski slope",
      "✅ Austrian + Italian national teams do pre-season training here every September",
      "Ski rental: book online at skiverleih-senales.com to save 10–15% vs. on-slope rental",
      "September skiing conditions: firm, groomed snow — fast and grippy, perfect for intermediate skiers",
      "Weekend (Sep 19 Sat) is slightly busier but glacier skiing weekends are nothing like Disneyland — still manageable",
      "If you want a 2nd ski day: stay Sat + Sun, travel Rome on Monday Sep 21"
    ],
    selectedActivities: ["Y — Glacier skiing Italy (Val Senales)"]
  },
  {
    id: 6,
    city: "Rome",
    country: "Italy",
    emoji: "🏛️",
    mandatory: true,
    nights: 5,
    dates: "Sep 20–25 (Sun–Fri)",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    dailyCost: 340,
    accommodation: "Boutique hotel — Trastevere neighborhood",
    accommodationCost: 155,
    transport: { from: "Val Senales / Bolzano", how: "Train Bolzano→Rome (~4h, ~$30–50/person) or fly Bolzano/Milan→Rome (~$25–60/person)" },
    dayByDay: [
      { day: "Sep 20 (Sun)", plan: "Arrive Rome afternoon. Check in Trastevere. Evening walk + dinner in Trastevere." },
      { day: "Sep 21 (Mon)", plan: "🔴 MANDATORY: Vatican Museums + Sistine Chapel + St. Peter's. Monday morning = LEAST crowded day of the week for Vatican. Book skip-the-line." },
      { day: "Sep 22 (Tue)", plan: "🔴 MANDATORY: Colosseum + Roman Forum + Palatine Hill. Add VR Samsung Oculus experience inside the arena. Afternoon: Circus Maximus AR tour." },
      { day: "Sep 23 (Wed)", plan: "Full day Pompeii trip — train from Roma Termini→Naples (1.5h) + Circumvesuviana→Pompeii Scavi (40min). Depart 8am, return 7pm." },
      { day: "Sep 24 (Thu)", plan: "Dino museum (Museo Civico di Zoologia, Villa Borghese). Pantheon (€5). Evening: Domus Aurea VR (Nero's underground palace — Thu night option)." },
      { day: "Sep 25 (Fri)", plan: "Travel day → Barcelona (fly, ~2h)" }
    ],
    highlights: [
      { icon: "🔴", text: "MANDATORY: Vatican Museums + Sistine Chapel + St. Peter's Basilica", cost: "€22/person (skip-the-line). St. Peter's free." },
      { icon: "🔴", text: "MANDATORY: Colosseum + Roman Forum + Palatine Hill + VR Samsung Oculus", cost: "€18/person entry + €30 VR = ~€48 total" },
      { icon: "🌋", text: "Pompeii day trip — frozen Roman city, 79 AD. More alive than any museum.", cost: "~€18/person entry + €25 trains" },
      { icon: "🦕", text: "Museo Civico di Zoologia — dino section with 3D reconstructions", cost: "~€10/person" },
      { icon: "🏎️", text: "Circo Maximo AR — see ancient chariot races overlaid on real ruins", cost: "~€12/person" },
      { icon: "🏛️", text: "Pantheon — 2,000-year-old intact building", cost: "€5/person" },
      { icon: "🌆", text: "Trastevere evening — cobblestone streets, best restaurants in Rome", cost: "$35–55/person dinner" }
    ],
    tips: [
      "Vatican Mon morning: least crowded. Book official skip-the-line at vatican.va 2+ months ahead.",
      "Colosseum: book guided tour with VR at ancientandrecent.com. Skip-the-line essential.",
      "Pompeii: take 8am Frecciarossa from Roma Termini → Napoli (not Regionale). Buy ahead.",
      "Domus Aurea VR (Nero's palace) is Thu–Sun only — Thu Sep 24 works perfectly.",
      "Trastevere is the best neighborhood for dinner — avoid anything within 500m of the Trevi Fountain for food."
    ],
    selectedActivities: ["🔴 Vatican (MANDATORY)", "🔴 Colosseum VR (MANDATORY)", "V — Pompeii", "N — Dino museum"]
  },
  {
    id: 7,
    city: "Barcelona",
    country: "Spain",
    emoji: "🌊",
    nights: 4,
    dates: "Sep 25–29 (Fri–Tue)",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
    dailyCost: 300,
    accommodation: "Hotel or Airbnb — Eixample or El Born",
    accommodationCost: 140,
    transport: { from: "Rome", how: "Fly Rome→Barcelona (~$25–100/person, Ryanair/Vueling, ~2h)" },
    dayByDay: [
      { day: "Sep 25 (Fri)", plan: "Arrive Barcelona afternoon. Gothic Quarter evening stroll + pintxos dinner." },
      { day: "Sep 26 (Sat)", plan: "Sagrada Família 9am (book first entry to beat crowds). Afternoon: Park Güell. Barceloneta beach sunset." },
      { day: "Sep 27 (Sun)", plan: "Morning: Museu Blau (Museu de Ciències Naturals) — FREE entry Sunday afternoon! 4M specimens, dino collection. Afternoon: L'Aquàrium (80m shark tunnel!). Evening: Bunkers del Carmel sunset." },
      { day: "Sep 28 (Mon)", plan: "La Pedrera (Gaudí architecture). Lunch at Mercat de Santa Caterina. Afternoon free / shopping." },
      { day: "Sep 29 (Tue)", plan: "Travel day → Paris" }
    ],
    highlights: [
      { icon: "⛪", text: "Sagrada Família — Gaudí's masterpiece. Book 9am Saturday entry.", cost: "€26/person" },
      { icon: "🦈", text: "L'Aquàrium de Barcelona — 80m underwater shark tunnel, 35 tanks, 11,000 fish", cost: "€21–29/person" },
      { icon: "🦕", text: "Museu Blau — 4M+ specimens, strong paleo collection. FREE on Sunday afternoons!", cost: "€6 (or free Sun afternoon)" },
      { icon: "🌿", text: "Park Güell — Gaudí mosaic terraces, city panorama over Barcelona", cost: "€10/person" },
      { icon: "🌅", text: "Bunkers del Carmel — anti-aircraft ruins, FREE 360° panorama, locals' secret spot", cost: "Free" },
      { icon: "🏖️", text: "Barceloneta beach — still 22°C sea in late September, far fewer tourists than August", cost: "Free" }
    ],
    tips: [
      "Sagrada Família: buy the first 9am Saturday slot — by 10am it gets busy even in September",
      "Museu Blau: plan for Sunday afternoon (Sep 27) = free entry. Save €12 for 2.",
      "L'Aquàrium: buy online (€21 vs €29 at gate). Allow 1.5–2h for the shark tunnel.",
      "Bunkers del Carmel: taxi from Gràcia neighborhood. No shops — bring your own wine + snacks for the sunset.",
      "September Barcelona beach: 22°C water, 25°C air, 70% fewer tourists than August — best time to go"
    ],
    selectedActivities: ["N — Museu Blau dinos", "L'Aquàrium shark tunnel", "R — Bunkers del Carmel sunset"]
  },
  {
    id: 8,
    city: "Paris",
    country: "France",
    emoji: "🗼",
    nights: 5,
    dates: "Sep 29–Oct 4 (Tue–Sun)",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    dailyCost: 370,
    accommodation: "Airbnb 1BR — Le Marais or 11th arrondissement",
    accommodationCost: 185,
    transport: { from: "Barcelona", how: "Fly Barcelona→Paris (~$30–100/person, ~2h). Or TGV train (6.5h, ~$50–120/person) — more comfortable." },
    dayByDay: [
      { day: "Sep 29 (Tue)", plan: "Arrive Paris. Check in. Evening: Le Marais neighborhood walk + rooftop bar (Terrass Hotel, Eiffel + Sacré-Coeur view)." },
      { day: "Sep 30 (Wed)", plan: "🎡 DISNEYLAND PARIS — Day 1 (Disneyland Park). WEDNESDAY = LOWEST CROWDS. 15–30 min waits on major rides. RER A from Châtelet (€2.55)." },
      { day: "Oct 1 (Thu)", plan: "🎡 DISNEYLAND PARIS — Day 2 (Walt Disney Studios + Frozen Ever After 2026 new ride). Thursday = 2nd lowest crowds." },
      { day: "Oct 2 (Fri)", plan: "Morning: Eiffel Tower (observation decks, 2nd floor for Jules Verne dinner level view). Evening: 🍽️ Jules Verne dinner (book for 7–8pm). Iconic." },
      { day: "Oct 3 (Sat)", plan: "Morning: Paris Catacombs (book timed entry). Afternoon: Atelier des Lumières (immersive projection show). Evening: VR experience (The Gate VR or Eclipso)." },
      { day: "Oct 4 (Sun)", plan: "Morning: Montmartre + Sacré-Coeur. Afternoon: Seine cruise. Fly home CDG→Madrid→Lima (evening flight)." }
    ],
    highlights: [
      { icon: "🎡", text: "Disneyland Paris — 2 days. WED+THU = lowest crowds of year. 15–30 min ride waits!", cost: "€89–100/person/day (advance)" },
      { icon: "🗼", text: "Eiffel Tower — 2nd floor observation deck (Jules Verne level) + summit view", cost: "€28–38/person (depends on floor)" },
      { icon: "🍽️", text: "Jules Verne — 2 Michelin stars inside the Eiffel Tower. Private elevator. Book 90 days ahead.", cost: "€295–330/person (tasting menu)" },
      { icon: "💀", text: "Paris Catacombs — 6 million skulls, 2km underground tunnels under the city", cost: "€15/person (book ahead)" },
      { icon: "✨", text: "Atelier des Lumières — Van Gogh floor-to-ceiling projections in a dark former foundry", cost: "~€16/person" },
      { icon: "🥽", text: "The Gate VR or Eclipso — haptic VR or 1,000m² dark room immersive", cost: "€28–32/person" },
      { icon: "🏘️", text: "Montmartre + Sacré-Coeur + Le Marais stroll", cost: "Free" }
    ],
    tips: [
      "🔴 Jules Verne: book EXACTLY 90 days before dinner date. For Oct 2 dinner → book July 3. Go to restaurants-toureiffel.com at 9am Paris time sharp.",
      "Disneyland RER A train: €2.55/person from Châtelet-Les-Halles station. NEVER take the €23 shuttle.",
      "Disneyland Sep 30 + Oct 1 (Wed+Thu): the two lowest-crowd weekdays in the lowest-crowd month. Perfect.",
      "Catacombs: book timed entry at catacombes.paris.fr. Do NOT queue — it sells out.",
      "Eiffel Tower tickets: book at toureiffel.paris — the observation deck + Jules Verne are separate bookings.",
      "Atelier des Lumières: book last session of the day for full immersion. Dark room, big impact."
    ],
    selectedActivities: ["A — Disneyland 2 days (Wed+Thu)", "O — Jules Verne dinner", "U — Paris Catacombs", "HH — Atelier des Lumières", "K — Dark room VR", "R — Rooftop cocktails"]
  }
];

// ============================================================
// TICKET PRICES — Comprehensive list by city
// ============================================================
const TICKETS = [
  {
    city: "Paris",
    flag: "🇫🇷",
    attractions: [
      { name: "Disneyland Paris — 1 day (1 park)", price: "€89–114/person", note: "Advance online, midweek Sept/Oct. Gate price: €130+. 2-park 1-day: add ~€20." },
      { name: "Disneyland Paris — 1 day (2 parks)", price: "€100–125/person", note: "Advance online midweek. Book disneylandparis.com." },
      { name: "Eiffel Tower — 2nd floor (lift)", price: "€19.40/person", note: "Adult, daytime. Book at toureiffel.paris." },
      { name: "Eiffel Tower — Summit (lift)", price: "€29.40/person", note: "Adult, daytime. Highly recommended for views." },
      { name: "Jules Verne Restaurant", price: "€295–330/person", note: "Tasting menu only (5 or 7 courses). Book 90 days ahead." },
      { name: "Paris Catacombs", price: "€15/person", note: "Book at catacombes.paris.fr. Audio guide €5 extra." },
      { name: "Atelier des Lumières", price: "~€16/person", note: "Book online at atelier-lumieres.com. Last session of day recommended." },
      { name: "The Gate VR / Eclipso VR", price: "€28–32/person", note: "Book at thegatevr.io or eclipso-entertainment.com." },
      { name: "Cinéaqua (Paris Aquarium)", price: "€19 off-peak / €27.50 peak", note: "Trocadéro, near Eiffel Tower. Buy online." },
      { name: "Seine River Cruise (Bateaux Parisiens)", price: "~€17/person", note: "1h cruise. Book online." }
    ]
  },
  {
    city: "Rome",
    flag: "🇮🇹",
    attractions: [
      { name: "Colosseum + Roman Forum + Palatine Hill", price: "€18/person", note: "Book skip-the-line at coopculture.it. 2 months ahead!" },
      { name: "Colosseum VR (Samsung Oculus add-on)", price: "~€30/person extra", note: "Book at ancientandrecent.com — bundle with Colosseum entry." },
      { name: "Vatican Museums + Sistine Chapel", price: "€17/person + €5 booking fee", note: "Official tickets at tickets.museivaticani.va. Book 2+ months ahead." },
      { name: "St. Peter's Basilica", price: "FREE", note: "Dress code required (covered shoulders/knees). Dome climb: €8 stairs / €10 lift." },
      { name: "Pompeii archaeological site", price: "€18/person", note: "Online at ticketanywhere.it. Trains: Roma Termini→Naples ~€25/person RT." },
      { name: "Pantheon", price: "€5/person", note: "Book online. No queues with timed entry." },
      { name: "Circo Maximo AR Experience", price: "€12/person", note: "circomaximoexperience.it" },
      { name: "Domus Aurea VR (Nero's palace)", price: "~€18–22/person", note: "Thu–Sun only. Book at coopculture.it." },
      { name: "Museo Civico di Zoologia (dinos)", price: "~€10/person", note: "Near Villa Borghese / Bioparco." }
    ]
  },
  {
    city: "Barcelona",
    flag: "🇪🇸",
    attractions: [
      { name: "Sagrada Família", price: "€26/person (entry only)", note: "Add tower access: €36–44. Book at sagradafamilia.org well in advance." },
      { name: "Park Güell (ticketed zone)", price: "€10/person", note: "Book at parkguell.barcelona. First entry (8am) is best." },
      { name: "L'Aquàrium de Barcelona", price: "€21 online / €29 at gate", note: "aquariumbcn.com. Allow 1.5–2h. 80m shark tunnel!" },
      { name: "Museu Blau (Natural Sciences)", price: "€6/person (FREE Sunday afternoons)", note: "museuciencies.cat — plan for free Sunday afternoon." },
      { name: "La Pedrera (Casa Milà)", price: "€25/person", note: "Rooftop included. Book at lapedrera.com." },
      { name: "Bunkers del Carmel", price: "FREE", note: "Locals' panorama spot. Bring your own drinks." }
    ]
  },
  {
    city: "Budapest",
    flag: "🇭🇺",
    attractions: [
      { name: "Hungarian National History Museum", price: "~€8–9/person", note: "nhmus.hu — dino hall + Lost World exhibit." },
      { name: "Tropicarium Budapest", price: "~€12/person", note: "tropicarium.hu — shark tunnel + alligators. Book online." },
      { name: "Molnár János Cave (thermal cave snorkel)", price: "~€70–90/person", note: "Advance booking required. lalanature.hu or similar." },
      { name: "Fisherman's Bastion", price: "FREE (grounds)", note: "Tower access: €3/person (not needed for views)." },
      { name: "Buda Castle (grounds)", price: "FREE", note: "National Gallery inside: ~€12 (skip unless interested in art)." },
      { name: "Danube Night Cruise", price: "~€15–20/person", note: "2–3h. Multiple operators on the waterfront." }
    ]
  },
  {
    city: "Vienna",
    flag: "🇦🇹",
    attractions: [
      { name: "NHM Vienna (Natural History Museum)", price: "€12/person", note: "FREE Sunday 6–9pm. nhm-wien.ac.at" },
      { name: "Schönbrunn Palace (Grand Tour)", price: "~€28/person", note: "Includes all 40 rooms. schoenbrunn.at" },
      { name: "Prater Riesenrad (Giant Ferris Wheel)", price: "€14/person", note: "1897 historic wheel. wienerriesenrad.com" }
    ]
  },
  {
    city: "Switzerland",
    flag: "🇨🇭",
    attractions: [
      { name: "Jungfraujoch round-trip train", price: "CHF 210/person (~$233)", note: "Swiss Travel Pass gives ~25% discount. Book at jungfrau.ch." },
      { name: "First Gondola Grindelwald", price: "CHF 43/person RT (~$48)", note: "Included in Swiss Travel Pass." },
      { name: "Lake Oeschinen cable car (Kandersteg)", price: "CHF 15/person RT (~$17)", note: "oeschinensee.ch" },
      { name: "Bernina Express (Chur→Tirano)", price: "CHF 55 + CHF 40 reservation (~$105/person)", note: "Base fare covered by Swiss Travel Pass. sbb.ch" },
      { name: "Swiss Travel Pass 3 days", price: "CHF 244/person (~$270)", note: "Covers trains, Bernina, mountain railways, lake steamers. sbb.ch" },
      { name: "Tandem Paragliding Interlaken", price: "CHF 170–210/person (~$190–233)", note: "alpinair.com or paragliding-interlaken.ch" }
    ]
  }
];

// ============================================================
// AQUARIUMS
// ============================================================
const AQUARIUMS = [
  {
    name: "Tropicarium",
    city: "Budapest",
    flag: "🇭🇺",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&q=80",
    price: "~€12/person",
    highlights: "Central Europe's LARGEST shark aquarium. 12m underground tunnel with sand tiger sharks + reef sharks swimming overhead. Alligators (fed every 3rd Monday). Stingray touch pool. Rainforest zone with monkeys.",
    size: "Largest shark aquarium in Central Europe",
    duration: "1.5–2h",
    verdict: "Best value aquarium of the trip. €12 for sharks + alligators + monkeys is unbeatable.",
    rating: 5,
    onRoute: true
  },
  {
    name: "L'Aquàrium de Barcelona",
    city: "Barcelona",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
    price: "€21 online / €29 gate",
    highlights: "80-meter transparent underwater tunnel — sharks, rays, moray eels swimming directly overhead. 35 tanks, 11,000 fish, 450+ species. One of Europe's longest shark tunnels.",
    size: "35 tanks, Oceanarium 36m diameter",
    duration: "1.5–2h",
    verdict: "The 80m tunnel is genuinely spectacular. Best for the immersive underwater walk-through experience.",
    rating: 5,
    onRoute: true
  },
  {
    name: "Cinéaqua (Aquarium de Paris)",
    city: "Paris",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=600&q=80",
    price: "€19 off-peak / €27.50 peak (visit off-peak!)",
    highlights: "Largest shark tank in France (3M litres). 43 tanks, 10,000+ fish. Touch pool. Located at Trocadéro — walk out to have the Eiffel Tower view right in front of you.",
    size: "43 tanks, 4M litres total",
    duration: "1–1.5h",
    verdict: "Solid aquarium. The Trocadéro location (Eiffel Tower view right outside) makes it a good add-on to an Eiffel Tower visit day.",
    rating: 3,
    onRoute: true
  }
];

// ============================================================
// SKIING — Both options with snow guarantee explanation
// ============================================================
const SKIING = {
  snowGuarantee: {
    title: "Why Glacier Snow is GUARANTEED (unlike those TikTok videos)",
    explanation: "The 'tiny snow + visible grass' videos you saw on TikTok are from REGULAR ski resorts at 1,500–2,200m that haven't received fresh snowfall yet. Glaciers are completely different — they are permanent bodies of compressed ice 20–100 meters deep that NEVER fully melt. At 3,000–3,450m in September, night temperatures drop well below 0°C, refreezing the surface daily. You are skiing on ancient glacier ice, not on natural snowfall. This is why professional ski teams use glacier resorts specifically for September pre-season training.",
    valSenalesNote: "Val Senales (3,212m): Austrian and Italian national ski teams do pre-season slalom + GS training here every August/September. 80% of slopes also have artificial snowmaking as backup. Snow depth: 1–2m of consolidated glacier ice at the top.",
    stelvioNote: "Passo Stelvio (3,450m): Runs June–November. In September: ~10–12km open between 3,200–3,450m. Firm, hard-packed glacier surface.",
    bottomLine: "✅ Val Senales and Passo Stelvio in September = 100% snow. The 'grass visible' scenario is literally impossible at 3,000m+ on a permanent glacier."
  },
  recommendation: "Val Senales is the better choice — 42km vs 10km, same snow guarantee, more varied terrain. If you want a 2nd ski day, do both: Stelvio Sep 18 (open all season) + Val Senales Sep 19 (opens ~Sep 19).",
  options: [
    {
      name: "Val Senales Glacier",
      location: "South Tyrol, Italy",
      flag: "🇮🇹",
      image: "https://images.unsplash.com/photo-1551524163-d26c8b911593?w=600&q=80",
      opens: "~September 19, 2026 (opening week)",
      terrain: "42 km of slopes — comparable to your 'good Italian resort'",
      elevation: "Lift base: 2,011m → Summit: 3,212m",
      dayPass: "~€52/person",
      rental: "~€35/person (book online to save 10–15%)",
      totalPerPerson: "~$110 all-in",
      snowGuarantee: "100% — professional ski teams train here in August/September",
      conditions: "Firm, groomed glacier snow. Fast and grippy. Multiple red + blue runs.",
      pros: ["42km = substantial terrain, many different runs", "South Tyrol scenery = spectacular", "Affordable vs Kitzbühel", "Professional-grade grooming", "Similar to your 'good Italian resort' experience"],
      cons: ["Opens ~Sep 19 — need to wait 1 extra day if arriving Sep 18", "Remote location (Bolzano area)", "September = mainly experienced/intermediate skiers"],
      verdict: "RECOMMENDED — Best match for your previous good Italian resort experience",
      rating: 5
    },
    {
      name: "Passo Stelvio Glacier",
      location: "Lombardy, Italy (near Bormio)",
      flag: "🇮🇹",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
      opens: "May – November (open year-round this season)",
      terrain: "~10 km of groomed glacier runs",
      elevation: "Base: 2,760m → Summit: 3,450m",
      dayPass: "~€40/person",
      rental: "~€35/person",
      totalPerPerson: "~$90 all-in",
      snowGuarantee: "Highly reliable — glacier at 3,450m. Slight softening possible on warm afternoons (ski mornings).",
      conditions: "Firm to slightly soft in afternoon. More variable than Senales on warm September days — but still glacier snow, no grass.",
      pros: ["Open NOW — no need to wait", "Cheapest glacier option", "Highest point in Alps accessible by lift (3,450m)", "Spectacular Ortler mountain scenery", "Easy access from Bormio (which is on the Bernina→Rome route)"],
      cons: ["Only 10km of runs — limited variety", "Narrow glacier terrain", "Warmer afternoon = softer snow (ski by 11am ideally)", "More popular with road cyclists than skiers in Sept"],
      verdict: "BACKUP OPTION — Perfect timing, cheaper, but limited terrain",
      rating: 3
    }
  ]
};

// ============================================================
// VR BY CITY (unchanged from previous version)
// ============================================================
const VR_BY_CITY = [
  {
    city: "Paris", flag: "🇫🇷",
    options: [
      { name: "The Gate VR", type: "Free-roam haptic", price: "~€32/person", desc: "100m² arena, haptic guns, latest-gen headsets. Best quality VR in Paris.", rating: 5 },
      { name: "Eclipso (Bercy Village) ✅", type: "Dark room immersive", price: "~€28/person", desc: "300–1,000m² total immersion dark room. Large-scale environment. Your pick.", rating: 5 },
      { name: "Atelier des Lumières ✅", type: "Immersive projection", price: "~€16/person", desc: "Floor-to-ceiling Van Gogh projections in a dark converted foundry. 35-min sensory experience. Your pick.", rating: 5 }
    ]
  },
  {
    city: "Rome", flag: "🇮🇹",
    options: [
      { name: "Colosseum VR (Ancient & Recent) ✅", type: "Historic site VR", price: "~€30 add-on", desc: "Samsung Oculus inside the REAL Colosseum. Gladiators fight around you in the actual arena.", rating: 5 },
      { name: "Circo Maximo AR Experience", type: "Historic site AR", price: "~€12/person", desc: "See-through AR walk through ancient chariot races on the real ruins.", rating: 4 },
      { name: "Domus Aurea VR", type: "Underground historic VR", price: "~€20/person", desc: "Nero's underground Golden House — VR through 30 frescoed halls. Thu–Sun only.", rating: 4 }
    ]
  },
  {
    city: "Barcelona", flag: "🇪🇸",
    options: [
      { name: "Virtua VR Arcade", type: "Gaming VR", price: "~€20–25/person", desc: "60+ games on Meta Quest 3. Barcelona's top-rated VR arcade (4.9 stars).", rating: 4 }
    ]
  },
  {
    city: "Budapest", flag: "🇭🇺",
    options: [
      { name: "PlayVR", type: "Free-roam arena", price: "~€34/person (80 min)", desc: "32+ games, higher-end VR arcade. Best VR experience in Budapest.", rating: 4 },
      { name: "VR Vidámpark", type: "Motion simulator", price: "~€14/person", desc: "7 motion simulators, 9D cinema with wind/rain/smoke. Budget option.", rating: 3 }
    ]
  },
  {
    city: "Vienna", flag: "🇦🇹",
    options: [
      { name: "Horizon of Khufu", type: "Cinematic VR", price: "~€20/person", desc: "45-min VR through digitally reconstructed Egyptian pyramids. High-quality.", rating: 4 },
      { name: "Immersium:Wien", type: "Immersive museum", price: "~€16/person", desc: "1,100m² 'World of Mysteries' — more walk-through than gaming VR.", rating: 3 }
    ]
  },
  {
    city: "Bucharest", flag: "🇷🇴",
    options: [
      { name: "EVA VR", type: "Free-roam arena", price: "~€18–22/person", desc: "Two 500m² free-roam arenas, teams up to 5. Great value.", rating: 4 }
    ]
  }
];

// ============================================================
// DINO BY CITY (unchanged)
// ============================================================
const DINO_BY_CITY = [
  { city: "Paris", flag: "🇫🇷", status: "closed", name: "MNHN Galerie de Paléontologie", warning: "CLOSED Jan 2026 – late 2027 (renovation). Do NOT plan this.", alternative: "Grande Galerie de l'Evolution (same park, open) — €9/person", rating: 0 },
  { city: "Budapest", flag: "🇭🇺", status: "open", selected: true, name: "Hungarian Natural History Museum ✅", highlight: "'Lost World' dino hall — life-size statues, 'Age of Dinosaurs in Hungary' exhibit, 10M+ total specimens.", admission: "~€9/person", rating: 4 },
  { city: "Vienna", flag: "🇦🇹", status: "open", selected: true, name: "NHM Wien — Hall 10 ✅", highlight: "Diplodocus, Allosaurus, 7m Pteranodon, Iguanodon — inside an imperial palace. One of Europe's best collections.", admission: "€12/person (FREE Sunday 6–9pm)", rating: 5 },
  { city: "Rome", flag: "🇮🇹", status: "open", selected: true, name: "Museo Civico di Zoologia ✅", highlight: "5M specimens. Dino section with interactive 3D reconstructions. Touch programs 2026.", admission: "~€10/person", rating: 3 },
  { city: "Barcelona", flag: "🇪🇸", status: "open", selected: true, name: "Museu Blau ✅", highlight: "4M+ specimens, strong paleontology. FREE Sunday afternoons and first Sunday of month.", admission: "€6 (or free Sundays)", rating: 4 }
];

// ============================================================
// DINING (unchanged)
// ============================================================
const DINING = [
  { name: "Le Jules Verne", city: "Paris", location: "Eiffel Tower, 2nd floor — private elevator", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", stars: 2, pricePerPerson: "€295–330", totalFor2: "~$660–740", description: "2 Michelin stars. Chef Frédéric Anton. Tasting menus only. You dine inside the Eiffel Tower with Paris at your feet. Jacket required for men.", mustBook: true, bookingNote: "Book EXACTLY 90 days before dinner date at restaurants-toureiffel.com — for Oct 2 dinner, book July 3 at 9am Paris time.", priority: 1 },
  { name: "Berggasthaus First", city: "Grindelwald, Switzerland", location: "Top of Firstbahn gondola", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", stars: 0, pricePerPerson: "$45–55", totalFor2: "~$90–110", description: "Direct panorama of the Eiger, Mönch, and Jungfrau. Rösti and raclette with your view. Reach via gondola from Grindelwald.", mustBook: false, bookingNote: "Walk-in. Arrive early for terrace seats.", priority: 2 },
  { name: "Terrass Hotel Rooftop", city: "Paris (Montmartre)", location: "7th floor rooftop", image: "https://images.unsplash.com/photo-1541778480-71e7e27feabe?w=600&q=80", stars: 0, pricePerPerson: "$40–50", totalFor2: "~$80–100", description: "Both the Eiffel Tower AND Sacré-Coeur simultaneously visible. Perfect for a first Paris evening cocktail.", mustBook: false, bookingNote: "Reserve for sunset hours.", priority: 3 },
  { name: "Bunkers del Carmel (DIY picnic)", city: "Barcelona", location: "Turó de la Rovira hill", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80", stars: 0, pricePerPerson: "$5–10 (supermarket wine + snacks)", totalFor2: "$10–20", description: "Anti-aircraft bunker ruins, 360° panorama of all Barcelona at sunset. Locals' secret. Bring wine from a supermarket. The best free view in Barcelona.", mustBook: false, bookingNote: "Free. Take taxi from Gràcia neighborhood.", priority: 4 }
];

// ============================================================
// BUDGET
// ============================================================
const BUDGET = {
  categories: [
    { label: "Flights: Lima→Madrid→Bucharest + Paris→Madrid→Lima (×2, open-jaw)", min: 1300, max: 1700, note: "Sep shoulder season. Book NOW via Iberia open-jaw. 6+ months ahead." },
    { label: "Accommodation (~31 nights, mix Airbnb + hotels)", min: 3200, max: 4800, note: "Airbnb for Paris (8 nights) + Switzerland. Hotels elsewhere." },
    { label: "Food (33 days)", min: 2000, max: 2900, note: "Save with Airbnb kitchen breakfast + picnic lunches." },
    { label: "Intra-Europe transport (flights + trains)", min: 900, max: 1500, note: "Book 2–3 months ahead for best fares." },
    { label: "Activities (Disneyland, Vatican, Colosseum, dino museums, aquariums, VR...)", min: 1200, max: 1800, note: "See ticket prices section for breakdown." },
    { label: "Jules Verne dinner (2 persons)", min: 660, max: 740, note: "Non-negotiable — book 90 days ahead." },
    { label: "Paragliding Interlaken (2 persons, tandem)", min: 380, max: 470, note: "~$190–235/person" },
    { label: "Skiing — Val Senales (2 days × 2 persons)", min: 360, max: 440, note: "~€52 day pass + ~€35 rental/person/day" },
    { label: "Swiss Travel Pass 3 days (×2 persons)", min: 500, max: 540, note: "Covers Bernina + Jungfraujoch discount + all SBB trains." },
    { label: "Misc (travel insurance, SIM, tips, shopping)", min: 500, max: 800, note: "Travel insurance STRONGLY recommended." }
  ],
  total: { min: 11000, max: 15690, target: 14000 },
  savingTips: [
    "Open-jaw September flights (Lima→Bucharest in, Paris→Lima out) saves ~$600 vs August round-trip",
    "Disneyland advance weekday tickets Sep/Oct: €89–100/person vs €130+ August same-day",
    "Museu Blau Barcelona: visit Sunday afternoon = FREE. Saves €12 for 2.",
    "NHM Vienna: FREE Sunday 6–9pm. Arrive Vienna Sunday evening and visit for free.",
    "Airbnb Paris 8 nights with kitchen: save $20–40/day on breakfast vs hotel",
    "Picnic lunch at Champ de Mars (Eiffel Tower view, baguette+cheese+wine) = $20 for 2 vs $80 restaurant",
    "Switzerland: Coop/Migros supermarkets for packed lunches. Mountain restaurant lunches 50% cheaper than dinners.",
    "Book all intra-Europe flights on Ryanair/WizzAir 2–3 months ahead — prices double close to date"
  ],
  hotelVsAirbnb: [
    { city: "Romania (Craiova)", nights: 7, recommendation: "Hotel", reason: "Wedding logistics + very affordable hotels ($60–70/night)", cost: "$60–80/night" },
    { city: "Budapest", nights: 3, recommendation: "Hotel", reason: "Short stay. Excellent value 3-star hotels.", cost: "$80–110/night" },
    { city: "Vienna", nights: 2, recommendation: "Hotel", reason: "Short stay — hotel simpler.", cost: "$110–150/night" },
    { city: "Switzerland", nights: 5, recommendation: "Airbnb/Guesthouse", reason: "Kitchen saves $30–60/day on packed lunches. Bigger space for gear.", cost: "$180–230/night" },
    { city: "Rome", nights: 5, recommendation: "Boutique Hotel", reason: "Trastevere hotels are excellent. Airbnb cleaning fees make 5 nights borderline.", cost: "$140–190/night" },
    { city: "Barcelona", nights: 4, recommendation: "Hotel or Airbnb", reason: "Comparable. Hotel simpler for 4 nights.", cost: "$120–170/night" },
    { city: "Paris", nights: 5, recommendation: "Airbnb", reason: "5 nights + kitchen breakfast savings. Le Marais / 11th arr. best areas.", cost: "$170–210/night" }
  ]
};

// ============================================================
// BOOKING PRIORITY
// ============================================================
const BOOKINGS = [
  { priority: 1, what: "Flights: Lima→Bucharest (Iberia via Madrid) + Paris→Lima open-jaw", when: "NOW — May 2026 (4+ months ahead)", urgency: "critical", note: "No direct flights. Best: Iberia open-jaw. Also check KLM (via Amsterdam). Google Flights price alerts. Book together as one ticket if possible.", estimatedCost: "$620–820/person per direction" },
  { priority: 2, what: "Le Jules Verne Restaurant (Paris — Oct 2 dinner)", when: "July 3, 2026 at 9am Paris time EXACTLY (90 days before Oct 2)", urgency: "critical", note: "Window/sunset seats fill within HOURS. Set a phone calendar alarm for July 3, 9:00am. Go to restaurants-toureiffel.com.", estimatedCost: "€295–330/person (tasting menu only)" },
  { priority: 3, what: "Disneyland Paris — 2 days (Sep 30 Wed + Oct 1 Thu)", when: "June–July 2026", urgency: "high", note: "Advance weekday tickets ~€89–100/person/day. Sep 30 (Wed) + Oct 1 (Thu) = the two lowest-crowd days in the lowest-crowd period of the year.", estimatedCost: "€89–100/person per day" },
  { priority: 4, what: "Vatican Museums + Sistine Chapel skip-the-line", when: "July 2026 (2+ months ahead)", urgency: "high", note: "Official only at tickets.museivaticani.va. Plan for Monday Sep 21 morning (least crowded day).", estimatedCost: "€22/person" },
  { priority: 5, what: "Colosseum + Roman Forum guided tour + VR", when: "July 2026", urgency: "high", note: "Book at ancientandrecent.com — Colosseum entry + VR Samsung Oculus bundle. Sep 22 (Tue).", estimatedCost: "~€48–55/person" },
  { priority: 6, what: "Sagrada Família — first 9am entry slot (Sep 26 Sat)", when: "June–July 2026", urgency: "medium", note: "Book at sagradafamilia.org. Saturday Sep 26, 9am slot.", estimatedCost: "€26–44/person" },
  { priority: 7, what: "Bernina Express seat reservation", when: "July–August 2026", urgency: "medium", note: "Book CHF 40 seat reservation at sbb.ch. Sep 17 (Thu) Chur→Tirano.", estimatedCost: "CHF 40/person (~$44)" },
  { priority: 8, what: "Paris Catacombs timed entry (Oct 3 Sat)", when: "August 2026 or earlier", urgency: "medium", note: "catacombes.paris.fr. Sells out 2–3 weeks ahead.", estimatedCost: "€15/person" },
  { priority: 9, what: "Tandem Paragliding Interlaken (Sep 15 Tue morning)", when: "July–August 2026", urgency: "medium", note: "alpinair.com — book morning slot (9–11am) for best thermals.", estimatedCost: "CHF 170–210/person (~$190–233)" }
];

// ============================================================
// CROWD CALENDAR
// ============================================================
const CROWD_DATA = {
  disneylandParis: {
    lateAugust: { level: "8–9/10", waitTimes: "60–90 min on major rides", notes: "French summer holidays end Sep 1" },
    september7_13: { level: "5–6/10", waitTimes: "30–45 min", notes: "Schools just returned — transition week" },
    september14_30: { level: "3–4/10", waitTimes: "15–30 min on major rides", notes: "Lowest crowds of the year. Weekdays Tue–Thu = sweet spot." },
    yourDates: "Sep 30 (Wed) + Oct 1 (Thu) = Perfect. Two weekdays in the lowest-crowd period. 15–30 min waits."
  }
};
