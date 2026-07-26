// ============================================================
// EUROTRIP 2026 — DATA FILE  (Option C: Spain start → Wedding → East → West)
// Edit prices/dates here. render.js reads this to build the page.
// Rewritten after confirmed flights: Madrid Sep 2 start, Madrid Sep 29 return.
// ============================================================

const TRIP = {
  title: "Eurotrip 2026",
  names: "Alvin & Girlfriend",
  duration: "28 days",
  dates: "Sep 2 – Sep 29, 2026",
  budget: 14000,
  persons: 2,
  origin: "Lima, Peru",
  routeNote: "Option C — Spain warm-up → Craiova wedding → Turkey → Greece → Italy → Switzerland (ski) → Paris → London → home from Madrid. Round-trip Lima↔Madrid, no open-jaw needed.",
  anchor: {
    event: "Wedding",
    date: "Sunday, September 6, 2026",
    city: "Craiova, Romania",
    note: "Fly Madrid→Craiova Sep 5 at 8pm, land ~midnight. Two full wedding days: Sep 6 + Sep 7."
  },
  flightNote: "✅ CONFIRMED: Madrid→Craiova Sep 5, 8pm (lands ~midnight) · Return Madrid→Lima Sep 29, 11am · Jules Verne Paris Sep 24, 8pm",
  flightSavings: "Round-trip LIM↔MAD is simpler and usually cheaper than an open-jaw — the Madrid bookends are already fixed."
};

// ============================================================
// FLIGHTS
// ============================================================
const FLIGHTS = {
  outbound: {
    from: "Lima (LIM)",
    to: "Madrid (MAD)",
    bestOptions: [
      {
        airline: "Iberia",
        route: "LIM → MAD direct",
        stopover: "None — direct",
        flightTime: "~11h",
        layover: "n/a",
        estimatePerson: "$620–820",
        notes: "Daily direct. Arrive Madrid morning of Sep 2 to get a full first day. Air Europa also flies this route direct.",
        recommended: true
      },
      {
        airline: "Air Europa",
        route: "LIM → MAD direct",
        stopover: "None — direct",
        flightTime: "~11h",
        layover: "n/a",
        estimatePerson: "$580–780",
        notes: "Often slightly cheaper than Iberia. Same direct route into Madrid-Barajas.",
        recommended: false
      }
    ],
    tip: "Book LIM↔MAD as a single round-trip (Sep 2 out / Sep 29 back at 11am). All the European legs in between are separate cheap tickets — do NOT try to bundle them."
  },
  return: {
    from: "Madrid (MAD)",
    to: "Lima (LIM)",
    bestOptions: [
      {
        airline: "Iberia / Air Europa",
        route: "MAD → LIM direct",
        flightTime: "~12h",
        estimatePerson: "$620–850",
        notes: "✅ CONFIRMED: Sep 29 at 11:00am. Be at Barajas by 8:00am — that means the London→Madrid flight must land Sep 27, not Sep 28.",
        recommended: true
      }
    ]
  },
  intraEurope: [
    { leg: "Madrid → Barcelona", method: "🚄 AVE high-speed train", cost: "$60–140 for 2", notes: "2h30 city-centre to city-centre. Sep 3 morning. Book at renfe.com — cheaper than flying once you count airport transfers." },
    { leg: "Barcelona → Madrid", method: "🚄 AVE high-speed train", cost: "$60–140 for 2", notes: "Sep 4 evening return. Book both directions together." },
    { leg: "Madrid → Craiova", method: "✈️ Flight — ✅ BOOKED", cost: "Booked", notes: "Sep 5, departs 8:00pm, lands ~midnight. Arrange an airport pickup in advance — arriving at midnight with no plan is the one avoidable stress of this trip." },
    { leg: "Craiova → Istanbul", method: "✈️ Flight", cost: "$120–260 for 2", notes: "Sep 8. Craiova (CRA) has limited routes — most likely bus/train to Bucharest OTP (3.5h) then OTP→IST (1h50) on Turkish Airlines. Check for a direct CRA→IST first." },
    { leg: "Istanbul → Athens", method: "✈️ Flight", cost: "$100–240 for 2", notes: "Sep 11. 1h30, Aegean or Turkish. Frequent daily departures." },
    { leg: "Athens → Santorini", method: "✈️ Flight (or ⛴️ ferry)", cost: "$90–200 for 2", notes: "Sep 13. Flight 45min — take it. The ferry is 5–8h and eats a whole day you don't have." },
    { leg: "Santorini → Rome", method: "✈️ Flight", cost: "$140–320 for 2", notes: "Sep 14. Seasonal direct JTR→FCO exists in September (Volotea/Ryanair). If unavailable, route via Athens." },
    { leg: "Rome → Venice", method: "🚄 Frecciarossa train", cost: "$70–160 for 2", notes: "Sep 17. 4h, city centre to Venezia Santa Lucia (right on the Grand Canal). Book at trenitalia.com." },
    { leg: "Venice → Zermatt", method: "🚂 Train via Milan + Brig", cost: "$180–300 for 2", notes: "Sep 18. Venice→Milan 2h30, Milan→Brig→Zermatt ~4h. Long but scenic through the Simplon. Zermatt is car-free — you arrive by train into the village." },
    { leg: "Zermatt → Grindelwald", method: "🚂 Train", cost: "Covered by Swiss Travel Pass", notes: "Sep 20 afternoon. 2h15 via Visp + Interlaken Ost. Easy, gorgeous." },
    { leg: "Grindelwald → Paris (GoldenPass Express)", method: "🚂 Scenic train + TGV", cost: "$200–320 for 2", notes: "Sep 21. Grindelwald→Interlaken, then GOLDENPASS EXPRESS Interlaken→Montreux (3h panoramic), Montreux→Geneva (1h), TGV Geneva→Paris (3h10). Your scenic train, on the route, zero detour." },
    { leg: "Paris → London", method: "🚄 Eurostar", cost: "$140–320 for 2", notes: "Sep 25 morning. 2h15 Gare du Nord → St Pancras. Book 2 months ahead — prices climb steeply." },
    { leg: "London → Madrid", method: "✈️ Flight", cost: "$120–300 for 2", notes: "Sep 27 evening. 2h20. Iberia/Ryanair/easyJet. Must be Sep 27 — you need a buffer night before the 11am Sep 29 departure." }
  ]
};

// ============================================================
// ITINERARY — 11 stops
// ============================================================
const ITINERARY = [
  {
    id: 1,
    city: "Madrid + Barcelona",
    country: "Spain",
    emoji: "🇪🇸",
    nights: 3,
    dates: "Sep 2–5 (Wed–Sat)",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    dailyCost: 290,
    accommodation: "Hotel Madrid (2 nights) + Hotel Barcelona (1 night)",
    accommodationCost: 140,
    transport: { from: "Lima (LIM)", how: "Iberia/Air Europa LIM→MAD direct (~11h). Arrive morning Sep 2." },
    dayByDay: [
      { day: "Sep 2 (Wed)", plan: "Land Madrid morning. Drop bags, fight the jet lag with daylight: Retiro Park, Puerta del Sol, Plaza Mayor. Evening: Mercado de San Miguel tapas. Sleep early." },
      { day: "Sep 3 (Thu)", plan: "Morning AVE train Madrid→Barcelona (2h30). Afternoon: Gothic Quarter + La Boqueria market. Evening: Barceloneta beach + seafood dinner." },
      { day: "Sep 4 (Fri)", plan: "⛪ SAGRADA FAMÍLIA — book the 9:00am first-entry slot. Late morning: Park Güell or Casa Batlló exterior. Evening AVE train back to Madrid." },
      { day: "Sep 5 (Sat)", plan: "Relaxed Madrid morning — Plaza de España, churros at San Ginés. Pack. Airport by 5:30pm. ✈️ 8:00pm flight Madrid→Craiova, lands ~midnight." }
    ],
    highlights: [
      { icon: "⛪", text: "Sagrada Família — Gaudí's masterpiece, the whole reason for the Barcelona hop", cost: "€26/person (€36–44 with towers)" },
      { icon: "🚄", text: "AVE high-speed train Madrid↔Barcelona — 2h30, 300km/h, city centre to city centre", cost: "$60–140 for 2 each way" },
      { icon: "🥘", text: "Mercado de San Miguel — Madrid's best tapas market, perfect first-night jet-lag dinner", cost: "$25–40/person" },
      { icon: "🏛️", text: "Retiro Park + Plaza Mayor + Puerta del Sol — free, walkable, ideal jet-lag day", cost: "Free" },
      { icon: "🌿", text: "Park Güell — Gaudí mosaic terraces over the city", cost: "€10/person" }
    ],
    tips: [
      "Sagrada Família Sep 4 (Fri) 9am slot: book at sagradafamilia.org NOW — September mornings sell out weeks ahead.",
      "Stay near Madrid Atocha station — the Barcelona train leaves from there and it saves you two taxi rides.",
      "Sep 5: leave for Barajas by 5:30pm at the latest for the 8pm Craiova flight.",
      "🔴 Book a Craiova airport pickup BEFORE you fly — you land at midnight and taxis are scarce.",
      "Don't overload Barcelona. One night is enough for Sagrada Família + Gothic Quarter + a beach dinner. That's the deal you made to buy days later in the trip."
    ],
    selectedActivities: ["⛪ Sagrada Família", "Gothic Quarter", "Mercado de San Miguel"]
  },
  {
    id: 2,
    city: "Craiova",
    country: "Romania",
    emoji: "💍",
    mandatory: true,
    nights: 3,
    dates: "Sep 5–8 (Sat–Tue)",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    dailyCost: 140,
    accommodation: "Hotel — near the wedding venue",
    accommodationCost: 70,
    transport: { from: "Madrid", how: "✅ BOOKED — flight Sep 5, 8:00pm, lands Craiova ~midnight" },
    dayByDay: [
      { day: "Sep 5 (Sat)", plan: "Land ~midnight. Straight to hotel. Sleep." },
      { day: "Sep 6 (Sun)", plan: "💍 THE WEDDING — all day. This is the anchor of the entire trip." },
      { day: "Sep 7 (Mon)", plan: "💍 Wedding day 2 — Romanian weddings run long. Recovery, family, food, Feteasca Neagră wine." },
      { day: "Sep 8 (Tue)", plan: "Travel day → Istanbul. Transfer to Bucharest OTP (3.5h) then fly, unless a direct Craiova flight works out." }
    ],
    highlights: [
      { icon: "💒", text: "THE WEDDING — Sunday September 6, 2026. Everything else is built around this.", cost: "🎉" },
      { icon: "💒", text: "Wedding day 2 — Monday September 7", cost: "🎉" },
      { icon: "🌳", text: "Nicolae Romanescu Park — one of Europe's finest English-style parks, if you get a free hour", cost: "Free" },
      { icon: "🍷", text: "Romanian food + Feteasca Neagră wine — Romania is the cheapest stop of the trip", cost: "$15–25/person" }
    ],
    tips: [
      "🔴 Pre-arrange the midnight airport pickup. Non-negotiable.",
      "Pack the wedding outfits in carry-on, not checked luggage — a lost bag on Sep 5 has no recovery time.",
      "Romania is the cheapest stop: meals $10–20/person, good local wine ~$5 a bottle.",
      "Sep 8 departure: check whether Craiova (CRA) has a direct flight before committing to the Bucharest transfer — it saves 4 hours if it exists."
    ],
    selectedActivities: ["💍 Wedding Sep 6", "💍 Wedding day 2 Sep 7"]
  },
  {
    id: 3,
    city: "Istanbul",
    country: "Turkey",
    emoji: "🕌",
    nights: 3,
    dates: "Sep 8–11 (Tue–Fri)",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
    dailyCost: 180,
    accommodation: "Hotel — Sultanahmet or Karaköy",
    accommodationCost: 110,
    transport: { from: "Craiova", how: "Transfer to Bucharest OTP (3.5h) → fly OTP→IST (1h50, Turkish Airlines). Check direct CRA→IST first." },
    dayByDay: [
      { day: "Sep 8 (Tue)", plan: "Arrive Istanbul afternoon/evening. Check in. Easy first evening: Galata Bridge, fish sandwiches, Karaköy backstreets. You've just done two wedding days — take it slow." },
      { day: "Sep 9 (Wed)", plan: "The classics: Hagia Sophia, Blue Mosque, Basilica Cistern, Topkapi Palace — all within walking distance in Sultanahmet. Afternoon: Grand Bazaar + Spice Bazaar. Evening: rooftop dinner with the skyline." },
      { day: "Sep 10 (Thu)", plan: "Bosphorus cruise (Europe/Asia in one boat ride). Afternoon: Turkish bath (hamam) — genuinely restorative after the wedding. Evening: Istiklal Street + Galata Tower at sunset." },
      { day: "Sep 11 (Fri)", plan: "Free morning / last bazaar run. Afternoon flight → Athens (1h30)." }
    ],
    highlights: [
      { icon: "🕌", text: "Hagia Sophia — 1,500 years old, cathedral then mosque then museum then mosque again", cost: "~€25/person (foreign visitor fee)" },
      { icon: "🕌", text: "Blue Mosque + Basilica Cistern — the cistern's sunken columns and Medusa heads are unforgettable", cost: "Mosque free · Cistern ~€25/person" },
      { icon: "🏰", text: "Topkapi Palace — Ottoman sultans' palace, harem, treasury, Bosphorus views", cost: "~€30/person" },
      { icon: "⛵", text: "Bosphorus cruise — cross between two continents, palaces and fortresses along both shores", cost: "~€15–30/person" },
      { icon: "🛁", text: "Traditional hamam (Turkish bath) — Çemberlitaş or Kılıç Ali Paşa. Perfect wedding recovery.", cost: "~€40–70/person" },
      { icon: "🛍️", text: "Grand Bazaar + Spice Bazaar — 4,000 shops, 15th century. Haggling expected.", cost: "Free to browse" }
    ],
    tips: [
      "Kept flexible as you asked — 3 days, no locked schedule. Istanbul rewards wandering.",
      "The Istanbul Tourist Pass isn't worth it for 3 days unless you hit 5+ paid sites. Buy individually.",
      "Hagia Sophia + Topkapi: book online, the queues are real even in September.",
      "Want Cappadocia instead? It's a 1h20 flight + a sunrise balloon (~€200/person). Spectacular, but it costs you 2 internal flights out of 3 days. Only if you're willing to give up most of Istanbul.",
      "September Istanbul: 26–28°C, ideal. Cover shoulders and knees for mosques; women need a headscarf (they lend them)."
    ],
    selectedActivities: ["Hagia Sophia", "Bosphorus cruise", "Hamam", "Grand Bazaar"]
  },
  {
    id: 4,
    city: "Athens + Santorini",
    country: "Greece",
    emoji: "🇬🇷",
    nights: 3,
    dates: "Sep 11–14 (Fri–Mon)",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    dailyCost: 280,
    accommodation: "Hotel Athens (2 nights) + Santorini caldera-view hotel (1 night)",
    accommodationCost: 165,
    transport: { from: "Istanbul", how: "Fly IST→ATH (1h30, Aegean/Turkish). Then ATH→JTR Santorini (45min) on Sep 13." },
    dayByDay: [
      { day: "Sep 11 (Fri)", plan: "Arrive Athens evening. Check in near Plaka/Monastiraki. Dinner on a rooftop with the Acropolis lit up above you." },
      { day: "Sep 12 (Sat)", plan: "🏛️ ACROPOLIS at 8am opening (beat the heat and the cruise crowds) — Parthenon, Erechtheion. Then Ancient Agora + Temple of Olympian Zeus. Afternoon: Plaka + Monastiraki. Sunset at Lycabettus Hill." },
      { day: "Sep 13 (Sun)", plan: "Morning flight → Santorini (45min). Afternoon: Fira to Oia caldera walk or the bus. 🌅 OIA SUNSET — the famous one. Book dinner with a caldera view." },
      { day: "Sep 14 (Mon)", plan: "Santorini morning: Amoudi Bay or a quick swim at Red Beach. Afternoon flight → Rome." }
    ],
    highlights: [
      { icon: "🏛️", text: "The Acropolis + Parthenon — go at 8am opening, it's 30°C by 11am and packed", cost: "€20/person (combo ticket €30)" },
      { icon: "🌅", text: "Oia sunset, Santorini — the single most famous sunset in Europe. Arrive 90 min early for a spot.", cost: "Free" },
      { icon: "🏘️", text: "Fira → Oia caldera walk — 10km clifftop path, or take the bus if the day is short", cost: "Free (bus ~€2)" },
      { icon: "🍽️", text: "Caldera-view dinner in Oia — expensive, worth it once. Book ahead.", cost: "$60–90/person" },
      { icon: "🏛️", text: "Ancient Agora + Plaka — the old city under the Acropolis, best evening wandering in Athens", cost: "€10/person" },
      { icon: "🏖️", text: "Amoudi Bay — swim below Oia, seafood tavernas on the water", cost: "Free" }
    ],
    tips: [
      "3 days is tight for Greece — this splits Athens 2 nights / Santorini 1 night, which is the maximum you can do without cutting Italy.",
      "🔴 Book the Santorini caldera-view hotel early. Sep 13 is a Sunday in high-shoulder season and Oia sells out.",
      "Fly Athens→Santorini, don't ferry. The ferry is 5–8h and would consume your only Santorini day.",
      "Acropolis: buy the timed ticket online and take the 8am entry. This matters more than any other timing on the trip.",
      "Santorini→Rome direct flights are seasonal — verify Sep 14 exists, otherwise route via Athens and budget an extra 3h."
    ],
    selectedActivities: ["🏛️ Acropolis", "🌅 Oia sunset", "Caldera dinner"]
  },
  {
    id: 5,
    city: "Rome",
    country: "Italy",
    emoji: "🏛️",
    mandatory: true,
    nights: 3,
    dates: "Sep 14–17 (Mon–Thu)",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    dailyCost: 340,
    accommodation: "Boutique hotel — Trastevere",
    accommodationCost: 155,
    transport: { from: "Santorini", how: "Fly JTR→FCO (~2h30 direct seasonal, or via Athens). Arrive Rome evening." },
    dayByDay: [
      { day: "Sep 14 (Mon)", plan: "Arrive Rome evening. Check in Trastevere. Evening walk + dinner in the cobbled streets. Gelato." },
      { day: "Sep 15 (Tue)", plan: "🔴 VATICAN — Museums + Sistine Chapel + St. Peter's Basilica. Book the earliest skip-the-line slot. Afternoon: climb St. Peter's dome. Evening: Pantheon (€5) + Piazza Navona." },
      { day: "Sep 16 (Wed)", plan: "🔴 COLOSSEUM + Roman Forum + Palatine Hill, with the Samsung Oculus VR add-on inside the arena. Afternoon: Circo Massimo AR experience — ancient chariot races overlaid on the real ruins. Evening: Trevi Fountain after dark (far fewer people)." },
      { day: "Sep 17 (Thu)", plan: "Early Frecciarossa train → Venice (4h). Arrive Venice around midday." }
    ],
    highlights: [
      { icon: "🔴", text: "MANDATORY: Vatican Museums + Sistine Chapel + St. Peter's Basilica", cost: "€22/person · St. Peter's free · dome €10" },
      { icon: "🔴", text: "MANDATORY: Colosseum + Roman Forum + Palatine Hill + VR Oculus in the arena", cost: "€18 entry + €30 VR = ~€48/person" },
      { icon: "🏎️", text: "Circo Massimo AR — augmented-reality chariot races on the actual site. Not a museum — you walk the ruins.", cost: "~€12/person" },
      { icon: "🏛️", text: "Pantheon — 2,000 years old and still intact, the best building in Rome", cost: "€5/person" },
      { icon: "🦕", text: "Museo Civico di Zoologia — dino hall with 3D reconstructions, near Villa Borghese (optional)", cost: "~€10/person" },
      { icon: "🌆", text: "Trastevere evenings — cobblestones, the best food in Rome, no tourist-trap menus", cost: "$35–55/person" }
    ],
    tips: [
      "🔴 Vatican Tuesday Sep 15: book the 8:00am entry at tickets.museivaticani.va, 2 months out. The 'skip-the-line' resellers charge triple.",
      "Colosseum: book the guided tour WITH the VR add-on at ancientandrecent.com — you asked for the immersive stuff and this is the best of it.",
      "Eat anywhere except within 500m of the Trevi Fountain. That rule alone doubles the quality of your meals.",
      "Rome gets 3 nights — enough for the Vatican and the Colosseum done properly. Pompeii doesn't fit this version of the trip.",
      "Book the Sep 17 Frecciarossa to Venice in advance (~€30/person); walk-up fares are triple."
    ],
    selectedActivities: ["🔴 Vatican (MANDATORY)", "🔴 Colosseum VR (MANDATORY)", "Circo Massimo AR", "Pantheon"]
  },
  {
    id: 6,
    city: "Venice",
    country: "Italy",
    emoji: "🚤",
    nights: 1,
    dates: "Sep 17–18 (Thu–Fri)",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80",
    dailyCost: 320,
    accommodation: "Hotel — Cannaregio or Dorsoduro (avoid Mestre, you want to wake up IN Venice)",
    accommodationCost: 200,
    transport: { from: "Rome", how: "Frecciarossa train Roma Termini→Venezia Santa Lucia (4h). The station door opens onto the Grand Canal." },
    dayByDay: [
      { day: "Sep 17 (Thu)", plan: "Arrive midday. Vaporetto down the Grand Canal to your hotel (the €9 waterbus is the best-value sightseeing in Italy). Afternoon: St. Mark's Square, Basilica, Doge's Palace, Rialto Bridge. 🌅 Sunset from the Accademia Bridge. Evening: cicchetti bar crawl in Cannaregio — Venice's tapas, €1.50 a bite." },
      { day: "Sep 18 (Fri)", plan: "Early morning walk — Venice at 7am with no crowds is the real thing. Then train → Milan → Brig → Zermatt (~6h30). Arrive Zermatt evening." }
    ],
    highlights: [
      { icon: "🚤", text: "Grand Canal by vaporetto line 1 — the whole city from the water for €9.50", cost: "€9.50/person" },
      { icon: "⛪", text: "St. Mark's Basilica + Square — gold mosaics, the Doge's Palace next door", cost: "€6 basilica · €30 Doge's Palace" },
      { icon: "🌉", text: "Rialto Bridge + market + Accademia Bridge sunset", cost: "Free" },
      { icon: "🍷", text: "Cicchetti bar crawl (Cannaregio) — small plates + ombra wine, how Venetians actually eat", cost: "$25–40/person" },
      { icon: "🌅", text: "Venice at 7am — empty alleys, no day-trippers. The single best hour of the stop.", cost: "Free" }
    ],
    tips: [
      "One night only — so skip Murano/Burano and the gondola queue. Do the Grand Canal, San Marco, and the cicchetti crawl, and you've had Venice.",
      "Sleep IN Venice, not Mestre. Costs more, but the 7am empty-city morning is the whole reason for stopping.",
      "Venice charges a day-tripper access fee on some 2026 dates — overnight guests are EXEMPT, but keep the hotel booking on your phone.",
      "Book the Sep 18 Venice→Milan train the night before; the Milan→Zermatt leg via Brig is regional and doesn't need booking.",
      "Sep 18 is a long travel day (~6h30). Buy food before boarding."
    ],
    selectedActivities: ["Grand Canal vaporetto", "St. Mark's", "Cicchetti crawl"]
  },
  {
    id: 7,
    city: "Zermatt — Glacier Skiing",
    country: "Switzerland",
    emoji: "⛷️",
    mandatory: true,
    nights: 2,
    dates: "Sep 18–20 (Fri–Sun)",
    image: "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?w=800&q=80",
    dailyCost: 430,
    accommodation: "Hotel / guesthouse in Zermatt village (car-free)",
    accommodationCost: 260,
    transport: { from: "Venice", how: "Train Venice→Milan (2h30) → Milan→Brig→Zermatt (~4h) via the Simplon tunnel. Zermatt is car-free; the train goes into the village." },
    dayByDay: [
      { day: "Sep 18 (Fri)", plan: "Arrive Zermatt evening. Check in, collect ski + boot rental for tomorrow morning, walk the village, early dinner. First sight of the Matterhorn." },
      { day: "Sep 19 (Sat)", plan: "⛷️ SKI DAY. Up early. Matterhorn Glacier Ride cable car to 3,883m — highest cable car in Europe, glass floor. Ski the Theodul Glacier ~08:00–13:00, ~21km of groomed piste at 3,000m+ with the Matterhorn beside you and Italy over the ridge. Afternoon: late lunch at Chez Vrony (2,130m, Michelin-listed) or back down to the village." },
      { day: "Sep 20 (Sun)", plan: "Morning: Gornergrat cogwheel railway — 33min to 3,089m, Matterhorn dead ahead the whole way. Best scenic-rail-per-minute on the trip. Afternoon: train → Grindelwald (2h15)." }
    ],
    highlights: [
      { icon: "⛷️", text: "Theodul Glacier skiing — open YEAR-ROUND, ~21km, Europe's highest ski area at 3,899m", cost: "~CHF 95 pass + ~CHF 50 rental /person" },
      { icon: "🚡", text: "Matterhorn Glacier Ride — highest cable car in Europe, 3,883m, glass floor. The ride is half the experience.", cost: "Included in the ski pass" },
      { icon: "🚂", text: "Gornergrat railway — 33min cogwheel to 3,089m, Matterhorn head-on. Six times shorter than the Bernina, same wow.", cost: "~CHF 88/person" },
      { icon: "🍽️", text: "Chez Vrony — Michelin Guide-listed mountain restaurant at 2,130m, Matterhorn from your table", cost: "~$65/person" },
      { icon: "🏔️", text: "The Matterhorn itself — the most recognisable mountain on earth, from a car-free village", cost: "Free" }
    ],
    tips: [
      "❄️ Snow is guaranteed — this is a PERMANENT GLACIER at 3,800m, not seasonal snowfall. Nothing to do with the 'grass visible' TikToks from 1,800m resorts.",
      "Ski MORNINGS. Glacier lifts run ~07:00–13:00 in September and the snow softens by 11am. Be on the first cable car.",
      "Rent skis + boots the evening of Sep 18, not the morning of Sep 19 — it saves you 40 minutes of your short ski window.",
      "Chez Vrony: reserve ahead. It's a 20-min walk down from Sunnegga, and it's the best meal in Switzerland on this trip.",
      "Zermatt is car-free — park-and-ride at Täsch if you ever drive, but you're arriving by train anyway.",
      "The Swiss Travel Pass (4 days, ~$323/person) covers the trains, Grindelwald gondolas, and gives a Gornergrat discount. Worth it for this 4-night Swiss block."
    ],
    selectedActivities: ["⛷️ Glacier ski day Sep 19", "🚂 Gornergrat railway", "🍽️ Chez Vrony"]
  },
  {
    id: 8,
    city: "Grindelwald / Interlaken",
    country: "Switzerland",
    emoji: "🛷",
    nights: 1,
    dates: "Sep 20–21 (Sun–Mon)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    dailyCost: 380,
    accommodation: "Guesthouse / Airbnb — Grindelwald",
    accommodationCost: 210,
    transport: { from: "Zermatt", how: "Train Zermatt→Visp→Interlaken Ost→Grindelwald (2h15). Covered by the Swiss Travel Pass." },
    dayByDay: [
      { day: "Sep 20 (Sun)", plan: "Arrive Grindelwald late afternoon from Zermatt. Check in. Evening: village stroll under the Eiger north face. Early night — tomorrow starts at 8am." },
      { day: "Sep 21 (Mon)", plan: "🛷 ADVENTURE MORNING. First gondola up: FIRST CLIFF WALK (walkway bolted to the cliff face, free with the gondola), then FIRST FLIEGER zipline — 800m at 84 km/h straight at the Eiger. Then mountain cart or trottibike down. If time: Pfingstegg toboggan run (736m alpine slide, you control the brake). ~14:00: 🚂 GOLDENPASS EXPRESS Interlaken→Montreux (3h panoramic) → Geneva → TGV → Paris. Arrive ~22:00." }
    ],
    highlights: [
      { icon: "🪂", text: "First Flieger zipline — 800m, 84 km/h, flying head-first at the Eiger", cost: "~CHF 31/person" },
      { icon: "🚶", text: "First Cliff Walk — steel walkway bolted to a vertical cliff, included with the gondola", cost: "Included (gondola ~CHF 43)" },
      { icon: "🛷", text: "Pfingstegg Rodelbahn — 736m alpine toboggan slide, you control the brake. The toboggan you were asking about.", cost: "~CHF 10/run" },
      { icon: "🛺", text: "Mountain cart + Trottibike — downhill go-kart and scooter from First back to the valley", cost: "~CHF 19/person each" },
      { icon: "🚂", text: "GOLDENPASS EXPRESS Interlaken→Montreux — panoramic carriages, Bernese Oberland opening onto Lake Geneva. Your scenic train, and it's ON the route to Paris.", cost: "~$45/person" }
    ],
    tips: [
      "🚂 This is why we skipped the Bernina Express: the GoldenPass gives you the panoramic-train experience with ZERO detour, because you're travelling Interlaken→Paris anyway. The Bernina is in the wrong corner of Switzerland and would have cost 2 days.",
      "One night only, so the morning is dense. First gondola opens ~08:00 — be on it. Cliff Walk + Flieger + cart is achievable by 13:00.",
      "If you'd rather have Jungfraujoch (3,454m, ~$233/person, full day) instead of the adventure morning — it doesn't fit in one night. Say the word and I'll trade you a night from Rome.",
      "Book the GoldenPass seat reservation (~CHF 20) at sbb.ch — panoramic cars sell out.",
      "Sep 21 arrival in Paris is ~22:00. Buy dinner on the train; don't plan anything that night."
    ],
    selectedActivities: ["🛷 Toboggan / Pfingstegg", "🪂 First Flieger zipline", "🚶 First Cliff Walk", "🚂 GoldenPass Express"]
  },
  {
    id: 9,
    city: "Paris",
    country: "France",
    emoji: "🗼",
    mandatory: true,
    nights: 4,
    dates: "Sep 21–25 (Mon–Fri)",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    dailyCost: 370,
    accommodation: "Airbnb 1BR — Le Marais or 11th arrondissement",
    accommodationCost: 185,
    transport: { from: "Grindelwald", how: "GoldenPass Express → Montreux → Geneva → TGV Lyria → Paris Gare de Lyon. Arrive ~22:00 Sep 21." },
    dayByDay: [
      { day: "Sep 21 (Mon)", plan: "Arrive ~22:00 from Switzerland. Check in. Sleep — Disney starts early." },
      { day: "Sep 22 (Tue)", plan: "🎡 DISNEYLAND PARIS — Day 1 (Disneyland Park). Tuesday = among the lowest-crowd days of the year, 15–30 min waits. RER A from Châtelet, €2.55. Rope drop at 09:30." },
      { day: "Sep 23 (Wed)", plan: "🎡 DISNEYLAND PARIS — Day 2 (Walt Disney Studios). Wednesday = the other lowest-crowd weekday. Stay for the evening show." },
      { day: "Sep 24 (Thu)", plan: "🗼 EIFFEL TOWER day. Morning: summit + 2nd floor observation decks. Afternoon: Champ de Mars picnic, walk past the Louvre pyramid from OUTSIDE (courtyard only — no museum), Seine river cruise. Evening: 🍽️ LE JULES VERNE, 8:00pm — ✅ BOOKED. 2 Michelin stars, inside the tower, private elevator. Jacket required for men." },
      { day: "Sep 25 (Fri)", plan: "Morning: Montmartre + Sacré-Coeur (free, best view in Paris). Midday Eurostar → London (2h15)." }
    ],
    highlights: [
      { icon: "🎡", text: "Disneyland Paris — 2 days, Tue + Wed = lowest crowds of the entire year. 15–30 min ride waits.", cost: "€89–100/person/day (advance)" },
      { icon: "🍽️", text: "LE JULES VERNE — ✅ BOOKED Sep 24, 8:00pm. 2 Michelin stars inside the Eiffel Tower.", cost: "€295–330/person" },
      { icon: "🗼", text: "Eiffel Tower — summit + 2nd floor decks. Do this the same day as the dinner.", cost: "€29.40/person summit" },
      { icon: "⛵", text: "Seine river cruise — 1h, the whole city from the water", cost: "~€17/person" },
      { icon: "🏘️", text: "Montmartre + Sacré-Coeur — free, and the best panorama in Paris", cost: "Free" },
      { icon: "🖼️", text: "Louvre — EXTERIOR ONLY (glass pyramid + courtyard). You said you don't like the museum; you're not going in.", cost: "Free" },
      { icon: "🥽", text: "Optional: Eclipso or The Gate VR — dark-room immersive / haptic free-roam", cost: "€28–32/person" }
    ],
    tips: [
      "🔴 Jules Verne is BOOKED for Sep 24, 8pm — but reconfirm 48h ahead and check the dress code (jacket required for men). Do not plan Disney that day.",
      "Disneyland Sep 22 (Tue) + Sep 23 (Wed): the two lowest-crowd weekdays in the lowest-crowd month. Book advance tickets at disneylandparis.com for €89–100 vs €130+ at the gate.",
      "Disneyland transport: RER A from Châtelet-Les-Halles, €2.55/person. NEVER pay for the €23 shuttle.",
      "Louvre: courtyard and pyramid from outside only — noted, no ticket booked.",
      "Only 4 nights and 2 are Disney days, so Paris is tight. Catacombs / Atelier des Lumières would need a 5th night stolen from Rome or Switzerland."
    ],
    selectedActivities: ["🎡 Disneyland 2 days (Tue+Wed)", "🍽️ Jules Verne ✅ BOOKED", "🗼 Eiffel Tower", "Montmartre", "Louvre exterior only"]
  },
  {
    id: 10,
    city: "London",
    country: "United Kingdom",
    emoji: "🦕",
    nights: 2,
    dates: "Sep 25–27 (Fri–Sun)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    dailyCost: 340,
    accommodation: "Hotel — central (King's Cross or South Kensington)",
    accommodationCost: 200,
    transport: { from: "Paris", how: "Eurostar Gare du Nord → St Pancras International (2h15). Book 2 months ahead." },
    dayByDay: [
      { day: "Sep 25 (Fri)", plan: "Arrive St Pancras midday. Check in. Afternoon: Westminster, Big Ben, Thames walk, Tower Bridge. Evening: a proper pub." },
      { day: "Sep 26 (Sat)", plan: "🎬 WARNER BROS STUDIO TOUR — The Making of Harry Potter. Full day. Train Euston→Watford Junction (20min) + shuttle bus. Allow 4–5h inside minimum. 🔴 MUST be booked in advance — it sells out weeks ahead." },
      { day: "Sep 27 (Sun)", plan: "🦕 NATURAL HISTORY MUSEUM — the dinosaur gallery, FREE. Get there for the 10:00 opening. If it's running, add the Jurassic Oceans special exhibition (~£15). Afternoon: pack. ✈️ Evening flight London→Madrid (2h20)." }
    ],
    highlights: [
      { icon: "🎬", text: "Warner Bros Studio Tour — the actual Harry Potter sets, Diagon Alley, the Great Hall, Hogwarts model", cost: "~£53/person (~$68)" },
      { icon: "🦕", text: "Natural History Museum dinosaur gallery — FREE, world-class, one of the best dino collections anywhere", cost: "FREE" },
      { icon: "🌊", text: "Jurassic Oceans special exhibition (2026) — marine reptiles, if still running", cost: "~£15/person" },
      { icon: "🏛️", text: "Westminster + Big Ben + Tower Bridge + Thames walk", cost: "Free" },
      { icon: "🍺", text: "A real London pub — Sunday roast if the timing works", cost: "$25–40/person" }
    ],
    tips: [
      "🔴 WARNER BROS STUDIO: book the moment you read this. Saturday Sep 26 slots sell out weeks ahead and there is no walk-up.",
      "Warner Bros logistics: train Euston→Watford Junction (20min, ~£11), then the £3 shuttle bus. Budget 90min door to door each way.",
      "Natural History Museum is FREE and doesn't need a ticket — but book a free timed slot on nhm.ac.uk anyway to skip the queue.",
      "🔴 Fly to Madrid on Sep 27, NOT Sep 28. You need a full buffer day before an 11am international departure.",
      "Two nights covers exactly what you asked for: one Warner Bros day, one museum/dino day. No slack for Tower of London or a West End show."
    ],
    selectedActivities: ["🎬 Warner Bros Studio Tour", "🦕 NHM dinosaur gallery", "Westminster walk"]
  },
  {
    id: 11,
    city: "Madrid — Final",
    country: "Spain",
    emoji: "🛫",
    nights: 2,
    dates: "Sep 27–29 (Sun–Tue)",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    dailyCost: 220,
    accommodation: "Hotel — near Atocha or the airport",
    accommodationCost: 130,
    transport: { from: "London", how: "Flight LHR/LGW→MAD (2h20), Sep 27 evening." },
    dayByDay: [
      { day: "Sep 27 (Sun)", plan: "Land Madrid late evening. Check in. Sleep." },
      { day: "Sep 28 (Mon)", plan: "Buffer + last day. Whatever you missed on Sep 2: Royal Palace, Gran Vía, Mercado de San Miguel one more time, El Rastro area. Buy gifts. Repack properly for the long flight. Early night." },
      { day: "Sep 29 (Tue)", plan: "✈️ MADRID → LIMA, 11:00am. Be at Barajas by 8:00am. Trip ends." }
    ],
    highlights: [
      { icon: "🛡️", text: "Buffer day Sep 28 — the insurance policy for the whole trip. If anything slips earlier, it absorbs it.", cost: "Free" },
      { icon: "🏰", text: "Royal Palace of Madrid — Europe's largest functioning royal palace, if you want one more sight", cost: "€14/person" },
      { icon: "🛍️", text: "Gran Vía + gift shopping — last chance for anything you want to bring home", cost: "Varies" },
      { icon: "🥘", text: "One last Spanish dinner — jamón, tortilla, vermut", cost: "$30–45/person" }
    ],
    tips: [
      "🔴 Do NOT compress this. Two nights before an 11am intercontinental flight is the correct amount of buffer for a 28-day trip with 12 flights and trains.",
      "Be at Barajas by 8:00am on Sep 29 for the 11:00am departure — Terminal 4S, non-Schengen, allow the extra transfer time.",
      "Keep Sep 28 deliberately light. After 27 days you'll want it.",
      "Consolidate luggage the night of Sep 28, not the morning of Sep 29."
    ],
    selectedActivities: ["Buffer day", "Royal Palace (optional)", "Gift shopping"]
  }
];

// ============================================================
// TICKET PRICES — by city
// ============================================================
const TICKETS = [
  {
    city: "Paris",
    flag: "🇫🇷",
    attractions: [
      { name: "Disneyland Paris — 1 day (1 park)", price: "€89–114/person", note: "Advance online, midweek September. Gate price €130+. Sep 22 Tue + Sep 23 Wed." },
      { name: "Disneyland Paris — 1 day (2 parks)", price: "€100–125/person", note: "Add ~€20 for park hopper. Book disneylandparis.com." },
      { name: "Eiffel Tower — Summit (lift)", price: "€29.40/person", note: "Book at toureiffel.paris. Sep 24 morning, before the dinner." },
      { name: "Eiffel Tower — 2nd floor (lift)", price: "€19.40/person", note: "The Jules Verne level. Separate booking from the restaurant." },
      { name: "Le Jules Verne", price: "€295–330/person", note: "✅ BOOKED Sep 24, 8:00pm. Tasting menu only. Jacket required for men." },
      { name: "Seine River Cruise (Bateaux Parisiens)", price: "~€17/person", note: "1h. Good Sep 24 afternoon filler before the dinner." },
      { name: "Eclipso / The Gate VR", price: "€28–32/person", note: "Optional — only if you skip something else. Paris is tight at 4 nights." },
      { name: "Louvre", price: "€0 — EXTERIOR ONLY", note: "Courtyard + glass pyramid from outside. Not entering, per your call." }
    ]
  },
  {
    city: "London",
    flag: "🇬🇧",
    attractions: [
      { name: "Warner Bros Studio Tour (Harry Potter)", price: "~£53/person (~$68)", note: "🔴 BOOK NOW. wbstudiotour.co.uk. Sep 26 Sat sells out weeks ahead. Allow 4–5h." },
      { name: "Train Euston → Watford Junction", price: "~£11/person return", note: "20min + £3 shuttle bus to the studio. 90min door-to-door each way." },
      { name: "Natural History Museum (dinosaur gallery)", price: "FREE", note: "nhm.ac.uk — book a free timed slot to skip the queue. Sep 27, 10am opening." },
      { name: "Jurassic Oceans special exhibition", price: "~£15/person", note: "2026 special at the NHM — verify it's still running in September." },
      { name: "Tower of London (optional, doesn't fit)", price: "~£35/person", note: "No room in 2 nights. Listed for reference only." }
    ]
  },
  {
    city: "Switzerland",
    flag: "🇨🇭",
    attractions: [
      { name: "Zermatt glacier ski pass (1 day)", price: "~CHF 95/person (~$107)", note: "Theodul Glacier + Matterhorn Glacier Ride included. matterhornparadise.ch" },
      { name: "Ski + boot rental (1 day)", price: "~CHF 50/person (~$56)", note: "Book online, collect the evening before to save time on the ski morning." },
      { name: "Gornergrat railway", price: "~CHF 88/person (~$98)", note: "33min to 3,089m. Swiss Travel Pass gives a discount. gornergratbahn.ch" },
      { name: "First gondola (Grindelwald)", price: "CHF 43/person return (~$48)", note: "Covered by the Swiss Travel Pass. Includes the Cliff Walk." },
      { name: "First Flieger zipline", price: "~CHF 31/person (~$35)", note: "800m at 84 km/h. jungfrau.ch" },
      { name: "Pfingstegg toboggan (Rodelbahn)", price: "~CHF 10/run (~$11)", note: "736m alpine slide. Do it twice, it's cheap." },
      { name: "Mountain cart / Trottibike", price: "~CHF 19/person each (~$21)", note: "Downhill from First. Combine with the gondola ticket." },
      { name: "GoldenPass Express seat reservation", price: "~CHF 20/person (~$22)", note: "Base fare covered by the Swiss Travel Pass. Reserve panoramic seats at sbb.ch." },
      { name: "Swiss Travel Pass — 4 days", price: "~CHF 290/person (~$323)", note: "Covers trains, Grindelwald gondolas, GoldenPass base fare, Gornergrat discount. Worth it for this 4-night block." }
    ]
  },
  {
    city: "Rome",
    flag: "🇮🇹",
    attractions: [
      { name: "Vatican Museums + Sistine Chapel", price: "€17 + €5 booking fee", note: "🔴 tickets.museivaticani.va, 2 months ahead. Sep 15 Tue, earliest slot." },
      { name: "St. Peter's Basilica", price: "FREE (dome €10 lift)", note: "Dress code: covered shoulders and knees." },
      { name: "Colosseum + Forum + Palatine Hill", price: "€18/person", note: "coopculture.it. Sep 16 Wed." },
      { name: "Colosseum VR (Samsung Oculus)", price: "~€30/person add-on", note: "ancientandrecent.com — bundle with entry. Gladiators in the real arena." },
      { name: "Circo Massimo AR Experience", price: "~€12/person", note: "circomaximoexperience.it — AR chariot races on the actual ruins." },
      { name: "Pantheon", price: "€5/person", note: "Timed entry online, no queue." },
      { name: "Museo Civico di Zoologia (dinos)", price: "~€10/person", note: "Optional — near Villa Borghese." }
    ]
  },
  {
    city: "Venice",
    flag: "🇮🇹",
    attractions: [
      { name: "Vaporetto Grand Canal (line 1)", price: "€9.50/person single", note: "The best-value sightseeing in Italy. 24h pass €25 if you'll ride 3+ times." },
      { name: "St. Mark's Basilica", price: "€6/person", note: "Book a timed slot — the queue is brutal otherwise." },
      { name: "Doge's Palace", price: "€30/person", note: "Optional at one night. Skip if you'd rather wander." },
      { name: "Venice access fee", price: "€5 day-trippers", note: "EXEMPT as an overnight guest — keep your hotel booking on your phone." }
    ]
  },
  {
    city: "Greece",
    flag: "🇬🇷",
    attractions: [
      { name: "Acropolis (Athens)", price: "€20/person", note: "Combo ticket with 6 other sites: €30. Book the 8:00am slot." },
      { name: "Ancient Agora", price: "€10/person", note: "Included in the €30 combo ticket." },
      { name: "Athens → Santorini flight", price: "$45–100/person", note: "45min. Aegean/Sky Express. Do NOT take the ferry — it's 5–8h." },
      { name: "Oia sunset", price: "FREE", note: "Arrive 90 min early for a spot on the castle ruins." }
    ]
  },
  {
    city: "Istanbul",
    flag: "🇹🇷",
    attractions: [
      { name: "Hagia Sophia", price: "~€25/person", note: "Foreign visitor fee. Book online, the queue is long." },
      { name: "Topkapi Palace", price: "~€30/person", note: "Add the Harem section (~€10 extra) — it's the best part." },
      { name: "Basilica Cistern", price: "~€25/person", note: "Sunken columns + Medusa heads. Atmospheric, 45min." },
      { name: "Blue Mosque", price: "FREE", note: "Closed to visitors during prayer times. Headscarf provided for women." },
      { name: "Bosphorus cruise", price: "~€15–30/person", note: "Public ferry is the cheap version and just as good." },
      { name: "Traditional hamam", price: "~€40–70/person", note: "Çemberlitaş or Kılıç Ali Paşa. Best wedding-recovery money you'll spend." }
    ]
  },
  {
    city: "Spain",
    flag: "🇪🇸",
    attractions: [
      { name: "Sagrada Família", price: "€26/person (towers €36–44)", note: "🔴 Sep 4, 9:00am first slot. sagradafamilia.org — book now." },
      { name: "Park Güell", price: "€10/person", note: "parkguell.barcelona. Optional if the morning runs long." },
      { name: "AVE Madrid↔Barcelona", price: "$30–70/person each way", note: "renfe.com. Book both directions together, 2h30 each way." },
      { name: "Royal Palace of Madrid", price: "€14/person", note: "For the Sep 28 buffer day if you want one more sight." }
    ]
  }
];

// ============================================================
// AQUARIUMS
// ============================================================
const AQUARIUMS = [
  {
    name: "L'Aquàrium de Barcelona",
    city: "Barcelona",
    flag: "🇪🇸",
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
    price: "€21 online / €29 gate",
    highlights: "80-meter transparent underwater tunnel — sharks, rays and moray eels directly overhead. 35 tanks, 11,000 fish, 450+ species.",
    size: "35 tanks, 36m Oceanarium",
    duration: "1.5–2h",
    verdict: "⚠️ TIGHT — you only have one night in Barcelona and Sagrada Família owns the morning. Only if you skip Park Güell.",
    rating: 4,
    onRoute: true
  },
  {
    name: "Cinéaqua (Aquarium de Paris)",
    city: "Paris",
    flag: "🇫🇷",
    image: "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?w=600&q=80",
    price: "€19 off-peak / €27.50 peak",
    highlights: "Largest shark tank in France (3M litres), 43 tanks, 10,000+ fish. At Trocadéro — walk out and the Eiffel Tower is right in front of you.",
    size: "43 tanks, 4M litres",
    duration: "1–1.5h",
    verdict: "Possible add-on to the Sep 24 Eiffel Tower morning, since it's a 5-minute walk from the tower.",
    rating: 3,
    onRoute: true
  },
  {
    name: "SEA LIFE London",
    city: "London",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600&q=80",
    price: "~£25 online",
    highlights: "Shark walkway, Atlantic tunnel, on the South Bank next to the London Eye.",
    size: "Mid-size, 14 zones",
    duration: "1.5h",
    verdict: "❌ SKIP — two London nights are fully committed to Warner Bros and the Natural History Museum.",
    rating: 3,
    onRoute: false
  }
];

// ============================================================
// SKIING — Zermatt chosen. Comparison kept for reference.
// ============================================================
const SKIING = {
  snowGuarantee: {
    title: "Why Glacier Snow is GUARANTEED (unlike those TikTok videos)",
    explanation: "The 'thin snow with grass showing' videos are from REGULAR ski resorts at 1,500–2,200m that haven't had fresh snowfall yet. A glacier is a completely different thing — a permanent body of compressed ice 20–100 metres deep that never fully melts. At 3,000–3,900m in September, night temperatures drop well below 0°C and refreeze the surface daily. You are skiing on ancient glacier ice, not on seasonal snowfall. This is exactly why national ski teams do their pre-season training on glaciers in September.",
    valSenalesNote: "Zermatt / Theodul Glacier (3,899m — your choice): the highest ski area in the Alps and open 365 days a year. ~21km of groomed piste in September. Because it's year-round there is zero opening-date risk — unlike Val Senales, which opens around Sep 19 and whose opening date routinely slips.",
    stelvioNote: "Reality check on timing: glacier lifts run roughly 07:00–13:00 in September and the snow softens by 11am. Be on the FIRST cable car. This is a spectacular half-day, not a full ski day — treat it as 'ski the Alps in summer with the Matterhorn beside you', not a ski week.",
    bottomLine: "✅ Zermatt in September = 100% snow, 100% open. The 'visible grass' scenario is physically impossible at 3,800m on a permanent glacier."
  },
  recommendation: "✅ CHOSEN: ZERMATT — 1 ski day, Sep 19. It's the only option that satisfies BOTH 'skiing is very important' AND 'Switzerland is important' in a single stop, with zero detour on the Italy→France axis. The ski add-on itself is only ~$326 for 2 (pass + rental); the rest of the Swiss cost is the Switzerland leg you wanted anyway. Hintertux or Val Senales would each be ~$120 cheaper on the ski day but leave Switzerland unvisited, forcing a separate 2-night Swiss stop that costs more in both money and days.",
  options: [
    {
      name: "Zermatt — Theodul Glacier",
      location: "Valais, Switzerland",
      flag: "🇨🇭",
      image: "https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?w=600&q=80",
      opens: "YEAR-ROUND — zero opening-date risk",
      terrain: "~21 km of groomed glacier piste in September",
      elevation: "Village 1,620m → Matterhorn Glacier Paradise 3,883m (highest cable car in Europe)",
      dayPass: "~CHF 95/person (~$107)",
      rental: "~CHF 50/person (~$56)",
      totalPerPerson: "~$163 all-in for the ski day",
      snowGuarantee: "100% — permanent glacier, open every day of the year",
      conditions: "Firm groomed glacier snow in the morning, softening after 11am. Ski 08:00–13:00.",
      pros: ["Open 365 days — no opening-date gamble", "IS your Switzerland leg — satisfies both priorities in one stop", "The Matterhorn, from a car-free village", "Matterhorn Glacier Ride: highest cable car in Europe, glass floor", "Directly on the Italy→France route, zero detour", "Gornergrat railway + Chez Vrony in the same stop"],
      cons: ["Most expensive of the three (~$120 more per ski day)", "Zermatt lodging is pricey (~$260/night)", "Morning-only skiing", "Smaller terrain than Val Senales"],
      verdict: "✅ CHOSEN — the only option that delivers skiing AND Switzerland without spending days you don't have",
      rating: 5
    },
    {
      name: "Val Senales Glacier",
      location: "South Tyrol, Italy",
      flag: "🇮🇹",
      image: "https://images.unsplash.com/photo-1551524163-d26c8b911593?w=600&q=80",
      opens: "~September 19 — and openings routinely slip",
      terrain: "42 km — by far the most terrain of the three",
      elevation: "Base 2,011m → Summit 3,212m",
      dayPass: "~€52/person",
      rental: "~€35/person",
      totalPerPerson: "~$95 all-in",
      snowGuarantee: "High once open — but the OPENING DATE is the risk, not the snow",
      conditions: "Firm, professionally groomed. National teams train here.",
      pros: ["Cheapest, and 42km is double the terrain", "Pairs beautifully with Venice and the Dolomites", "Lago di Braies 45min away — spectacular", "Professional-grade grooming"],
      cons: ["🔴 Opens ~Sep 19 and dates slip — you could arrive to closed lifts", "Leaves Switzerland unvisited — needs a separate 2-night Swiss stop", "Remote (Bolzano area), awkward onward connections"],
      verdict: "REJECTED — the fun gamble. Great value and terrain, but the opening-date risk plus a separate Switzerland leg costs more than it saves.",
      rating: 3
    },
    {
      name: "Hintertux Glacier",
      location: "Tyrol, Austria",
      flag: "🇦🇹",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
      opens: "YEAR-ROUND",
      terrain: "~20 km",
      elevation: "Base 1,500m → Summit 3,250m",
      dayPass: "~€60/person",
      rental: "~€35/person",
      totalPerPerson: "~$103 all-in",
      snowGuarantee: "100% — Austria's only true year-round glacier",
      conditions: "Reliable glacier snow, morning skiing.",
      pros: ["Year-round, no opening risk", "Cheaper than Zermatt", "Good terrain for September"],
      cons: ["Leaves Switzerland unvisited — costs ~2 extra days for a separate Swiss stop", "Awkward on the Italy→France route", "You'd have to drop Venice or Rome nights to fit it"],
      verdict: "REJECTED — fine glacier, wrong country for this itinerary",
      rating: 3
    }
  ]
};

// ============================================================
// VR / IMMERSIVE BY CITY
// ============================================================
const VR_BY_CITY = [
  {
    city: "Rome", flag: "🇮🇹",
    options: [
      { name: "Colosseum VR (Ancient & Recent) ✅", type: "Historic site VR", price: "~€30 add-on", desc: "Samsung Oculus inside the REAL Colosseum. Gladiators fight around you in the actual arena. Sep 16.", rating: 5 },
      { name: "Circo Massimo AR ✅", type: "Historic site AR", price: "~€12/person", desc: "See-through AR walk — ancient chariot races overlaid on the real ruins. Sep 16 afternoon.", rating: 4 },
      { name: "Domus Aurea VR", type: "Underground historic VR", price: "~€20/person", desc: "Nero's Golden House, VR through 30 frescoed halls. Thu–Sun only — Sep 17 is your departure day, so probably not.", rating: 4 }
    ]
  },
  {
    city: "Paris", flag: "🇫🇷",
    options: [
      { name: "Eclipso (Bercy Village)", type: "Dark room immersive", price: "~€28/person", desc: "300–1,000m² total-immersion dark room. Optional — Paris is tight at 4 nights with 2 Disney days.", rating: 5 },
      { name: "The Gate VR", type: "Free-roam haptic", price: "~€32/person", desc: "100m² arena, haptic guns, latest headsets. Best pure VR in Paris.", rating: 5 }
    ]
  },
  {
    city: "London", flag: "🇬🇧",
    options: [
      { name: "Warner Bros Studio Tour ✅", type: "Immersive film sets (not VR, better)", price: "~£53/person", desc: "The actual Harry Potter sets — Great Hall, Diagon Alley, Hogwarts model. Sep 26, full day. 🔴 BOOK NOW.", rating: 5 }
    ]
  },
  {
    city: "Istanbul", flag: "🇹🇷",
    options: [
      { name: "Hagia Sophia History Museum (immersive)", type: "Projection experience", price: "~€20/person", desc: "Multimedia walk-through of 1,500 years of the building's history. Next to the real thing.", rating: 3 }
    ]
  },
  {
    city: "Barcelona", flag: "🇪🇸",
    options: [
      { name: "Virtua VR Arcade", type: "Gaming VR", price: "~€20–25/person", desc: "60+ games on Meta Quest 3. ⚠️ Only one night in Barcelona — unlikely to fit.", rating: 3 }
    ]
  }
];

// ============================================================
// DINO BY CITY
// ============================================================
const DINO_BY_CITY = [
  { city: "London", flag: "🇬🇧", status: "open", selected: true, name: "Natural History Museum ✅", highlight: "World-class dinosaur gallery, FREE entry. Plus the 2026 Jurassic Oceans special exhibition (~£15). This is your dino day — Sep 27 morning.", admission: "FREE (special exhibition ~£15)", rating: 5 },
  { city: "Rome", flag: "🇮🇹", status: "open", selected: false, name: "Museo Civico di Zoologia", highlight: "5M specimens, dino section with interactive 3D reconstructions. Optional — Rome's 3 days are committed to the Vatican and Colosseum.", admission: "~€10/person", rating: 3 },
  { city: "Paris", flag: "🇫🇷", status: "closed", name: "MNHN Galerie de Paléontologie", warning: "CLOSED Jan 2026 – late 2027 for renovation. Do NOT plan this.", alternative: "Grande Galerie de l'Évolution (same park, open) — €9/person. But you have no spare Paris time.", rating: 0 },
  { city: "Barcelona", flag: "🇪🇸", status: "open", selected: false, name: "Museu Blau", highlight: "4M+ specimens, strong paleontology, FREE Sunday afternoons. ❌ Doesn't fit — one Barcelona night and Sagrada Família owns it.", admission: "€6 (free Sun PM)", rating: 4 }
];

// ============================================================
// DINING
// ============================================================
const DINING = [
  { name: "Le Jules Verne", city: "Paris", location: "Eiffel Tower, 2nd floor — private elevator", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", stars: 2, pricePerPerson: "€295–330", totalFor2: "~$660–740", description: "2 Michelin stars. Chef Frédéric Anton. Tasting menus only. You dine inside the Eiffel Tower with Paris at your feet.", mustBook: true, bookingNote: "✅ BOOKED — Thursday Sep 24, 8:00pm. Reconfirm 48h ahead. Jacket required for men.", priority: 1 },
  { name: "Chez Vrony", city: "Zermatt, Switzerland", location: "Findeln hamlet, 2,130m above Zermatt", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", stars: 0, pricePerPerson: "$60–70", totalFor2: "~$130", description: "Michelin Guide-listed mountain restaurant. Matterhorn from your table. Local raclette, rösti, dried alpine meats. Reached on foot from Sunnegga.", mustBook: true, bookingNote: "Reserve ahead. Sep 19 after the ski morning — the perfect landing.", priority: 2 },
  { name: "Caldera-view dinner, Oia", city: "Santorini, Greece", location: "Oia clifftop", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80", stars: 0, pricePerPerson: "$60–90", totalFor2: "~$120–180", description: "Dinner over the caldera as the sun goes down. Expensive and touristy and completely worth doing once. Sep 13.", mustBook: true, bookingNote: "Book a sunset-window table days ahead — every restaurant in Oia is full at 19:00.", priority: 3 },
  { name: "Rooftop dinner, Sultanahmet", city: "Istanbul, Turkey", location: "Sultanahmet rooftop terraces", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80", stars: 0, pricePerPerson: "$30–45", totalFor2: "~$60–90", description: "Hagia Sophia on one side, Blue Mosque on the other, the Bosphorus behind. Cheap by European standards, unmatched view.", mustBook: false, bookingNote: "Walk-in mostly fine. Go at sunset for the call to prayer across the city.", priority: 4 },
  { name: "Cicchetti crawl, Cannaregio", city: "Venice, Italy", location: "Cannaregio backstreets", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&q=80", stars: 0, pricePerPerson: "$25–40", totalFor2: "~$50–80", description: "Venice's tapas — small plates at €1.50–3 each with an ombra of wine, standing at the bar. How Venetians actually eat, and it beats any sit-down tourist menu.", mustBook: false, bookingNote: "No booking. Just walk and stop. Sep 17 evening.", priority: 5 },
  { name: "Mercado de San Miguel", city: "Madrid, Spain", location: "Near Plaza Mayor", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80", stars: 0, pricePerPerson: "$25–40", totalFor2: "~$50–80", description: "Madrid's best tapas market under a glass-and-iron roof. Ideal jet-lag dinner on Sep 2 — graze, don't commit.", mustBook: false, bookingNote: "Walk-in. Busy after 21:00.", priority: 6 }
];

// ============================================================
// BUDGET
// ============================================================
const BUDGET = {
  categories: [
    { label: "Flights: Lima↔Madrid round-trip (×2)", min: 1300, max: 1800, note: "Direct Iberia/Air Europa. Sep 2 out, Sep 29 back at 11am. Book as one round-trip." },
    { label: "Accommodation (27 nights, 2 pax)", min: 4000, max: 5400, note: "Zermatt/Venice/London are the expensive nights; Craiova and Istanbul offset them." },
    { label: "Food (28 days)", min: 2100, max: 3000, note: "Airbnb kitchen in Paris + supermarket lunches in Switzerland save the most." },
    { label: "Intra-Europe transport (7 flights + 6 train legs)", min: 1600, max: 2500, note: "More legs than the old plan — Eurostar, AVE ×2, Frecciarossa, Swiss trains, GoldenPass. Book everything 2–3 months out." },
    { label: "Activities (Disney ×2, Vatican, Colosseum VR, Warner Bros, Acropolis, Hagia Sophia…)", min: 1400, max: 2000, note: "See the ticket breakdown by city." },
    { label: "Jules Verne dinner (2 persons) — ✅ BOOKED", min: 660, max: 740, note: "Sep 24, 8pm. Already committed." },
    { label: "Skiing — Zermatt (1 day × 2 persons)", min: 300, max: 360, note: "~CHF 95 pass + ~CHF 50 rental per person. The ski add-on itself is cheap." },
    { label: "Swiss Travel Pass 4 days (×2 persons)", min: 620, max: 660, note: "Covers Swiss trains, Grindelwald gondolas, GoldenPass base fare, Gornergrat discount." },
    { label: "Warner Bros Studio Tour + transport (2 pax)", min: 160, max: 200, note: "~£53/person + ~£11 train + £3 shuttle each." },
    { label: "Misc (travel insurance, SIMs, tips, gifts)", min: 500, max: 800, note: "Travel insurance STRONGLY recommended — 12 separate transport legs." }
  ],
  total: { min: 12640, max: 17460, target: 14000 },
  savingTips: [
    "⚠️ HONEST WARNING: the midpoint of this plan is ~$15,000, above your $14,000 target. The new route has more transport legs and three expensive stops (Zermatt, Venice, London) that the old plan didn't. See the trade-offs below.",
    "Biggest single saving: drop the Venice night ($320) and the Grindelwald night ($380) — but that costs you the toboggan and the GoldenPass.",
    "Second biggest: Zermatt lodging. Staying in Täsch (one stop down the valley) instead of Zermatt village saves ~$80/night.",
    "Book ALL intra-Europe flights and trains 2–3 months ahead. On this route that's worth $400–700 alone — prices roughly double inside 3 weeks.",
    "Natural History Museum London is FREE. Montmartre, Sacré-Coeur, Oia sunset, Blue Mosque, and Venice at 7am are all free.",
    "Disneyland advance midweek tickets: €89–100/person/day vs €130+ at the gate. Sep 22–23 are the cheapest days of the year.",
    "Airbnb with a kitchen in Paris (4 nights): save $20–40/day on breakfast versus a hotel.",
    "Switzerland: Coop/Migros supermarkets for packed lunches. Mountain restaurant lunch is ~50% the price of dinner — so make Chez Vrony your lunch, which is what the Sep 19 plan already does.",
    "Istanbul and Craiova are the cheap stops — don't economise there, economise in Switzerland."
  ],
  hotelVsAirbnb: [
    { city: "Madrid (start)", nights: 2, recommendation: "Hotel near Atocha", reason: "Short stay, and Atocha is where the Barcelona train leaves from.", cost: "$120–150/night" },
    { city: "Barcelona", nights: 1, recommendation: "Hotel", reason: "One night — hotel, no question. Stay near Sagrada Família or Eixample.", cost: "$140–180/night" },
    { city: "Craiova", nights: 3, recommendation: "Hotel near the venue", reason: "Wedding logistics beat everything. Cheapest stop of the trip.", cost: "$60–80/night" },
    { city: "Istanbul", nights: 3, recommendation: "Hotel — Sultanahmet", reason: "Walk to Hagia Sophia, Blue Mosque, Topkapi, the cistern. Excellent value.", cost: "$90–130/night" },
    { city: "Athens", nights: 2, recommendation: "Hotel — Plaka/Monastiraki", reason: "Rooftop with an Acropolis view is worth the small premium.", cost: "$110–150/night" },
    { city: "Santorini", nights: 1, recommendation: "Caldera-view hotel", reason: "One night, so pay for the view. It's the entire point of going.", cost: "$220–300/night" },
    { city: "Rome", nights: 3, recommendation: "Boutique hotel — Trastevere", reason: "Best food neighbourhood, walkable to everything.", cost: "$140–190/night" },
    { city: "Venice", nights: 1, recommendation: "Hotel IN Venice (not Mestre)", reason: "The 7am empty-city morning is why you're stopping. Mestre kills it.", cost: "$180–240/night" },
    { city: "Zermatt", nights: 2, recommendation: "Hotel/guesthouse in the village", reason: "Car-free village, walk to the cable car. Täsch is $80/night cheaper if you'll commute.", cost: "$230–290/night" },
    { city: "Grindelwald", nights: 1, recommendation: "Guesthouse", reason: "One night, early start for the First gondola. Stay close to the station.", cost: "$180–240/night" },
    { city: "Paris", nights: 4, recommendation: "Airbnb — Le Marais / 11th", reason: "Kitchen breakfasts across 4 nights, and easy RER A access for Disney.", cost: "$170–210/night" },
    { city: "London", nights: 2, recommendation: "Hotel — King's Cross or South Kensington", reason: "King's Cross for the Eurostar + Watford train; South Kensington for the museum.", cost: "$180–230/night" },
    { city: "Madrid (end)", nights: 2, recommendation: "Hotel near Atocha or airport", reason: "Buffer nights before an 11am departure. Airport-adjacent is fine for the last one.", cost: "$110–150/night" }
  ]
};

// ============================================================
// BOOKING PRIORITY — today is late July 2026, several of these are URGENT
// ============================================================
const BOOKINGS = [
  { priority: 1, what: "Warner Bros Studio Tour, London (Sat Sep 26)", when: "🔴 TODAY", urgency: "critical", note: "Saturday slots sell out weeks ahead and there is NO walk-up. This is the single most time-critical unbooked item. wbstudiotour.co.uk", estimatedCost: "~£53/person (~$68)" },
  { priority: 2, what: "Flights: Lima↔Madrid round-trip (Sep 2 / Sep 29)", when: "🔴 NOW if not booked", urgency: "critical", note: "Direct Iberia or Air Europa. Only ~5 weeks out — prices are climbing hard.", estimatedCost: "$620–850/person each way" },
  { priority: 3, what: "Craiova midnight airport pickup (Sep 5)", when: "🔴 THIS WEEK", urgency: "critical", note: "You land at ~midnight. Taxis are scarce at Craiova at that hour. Arrange a transfer through your hotel now.", estimatedCost: "$25–50" },
  { priority: 4, what: "Sagrada Família — 9:00am slot Fri Sep 4", when: "🔴 NOW", urgency: "critical", note: "sagradafamilia.org. September mornings sell out. This is the only reason for the Barcelona hop — don't lose it.", estimatedCost: "€26–44/person" },
  { priority: 5, what: "Disneyland Paris — 2 days (Tue Sep 22 + Wed Sep 23)", when: "NOW", urgency: "high", note: "disneylandparis.com. Advance midweek €89–100/person/day vs €130+ at the gate. The two lowest-crowd days of the year.", estimatedCost: "€89–100/person/day" },
  { priority: 6, what: "Vatican Museums + Sistine Chapel (Tue Sep 15, earliest slot)", when: "NOW", urgency: "high", note: "Official only: tickets.museivaticani.va. Resellers charge triple for the same ticket.", estimatedCost: "€22/person" },
  { priority: 7, what: "Colosseum + Roman Forum + VR add-on (Wed Sep 16)", when: "NOW", urgency: "high", note: "ancientandrecent.com for the VR bundle, or coopculture.it for entry only.", estimatedCost: "~€48/person" },
  { priority: 8, what: "Santorini caldera-view hotel (Sun Sep 13)", when: "NOW", urgency: "high", note: "One night only, so the view matters. Oia sells out in shoulder season.", estimatedCost: "$220–300/night" },
  { priority: 9, what: "Eurostar Paris→London (Fri Sep 25)", when: "Within 2 weeks", urgency: "high", note: "Prices climb steeply as the date approaches. eurostar.com", estimatedCost: "$70–160/person" },
  { priority: 10, what: "Intra-Europe flights: Craiova→Istanbul, Istanbul→Athens, Athens→Santorini, Santorini→Rome, London→Madrid", when: "Within 2 weeks", urgency: "high", note: "Five separate flights. Verify the Santorini→Rome direct exists on Sep 14, otherwise route via Athens.", estimatedCost: "$550–1,220 for 2 total" },
  { priority: 11, what: "Acropolis 8:00am timed entry (Sat Sep 12)", when: "1 month ahead", urgency: "medium", note: "Go at opening. By 11am it's 30°C and full of cruise groups.", estimatedCost: "€20–30/person" },
  { priority: 12, what: "Trains: AVE Madrid↔Barcelona, Frecciarossa Rome→Venice, Venice→Zermatt", when: "1–2 months ahead", urgency: "medium", note: "renfe.com and trenitalia.com. Walk-up fares are 2–3× advance.", estimatedCost: "$310–600 for 2 total" },
  { priority: 13, what: "Swiss Travel Pass 4 days + GoldenPass seat reservation", when: "1 month ahead", urgency: "medium", note: "sbb.ch. The GoldenPass panoramic cars sell out; the pass itself can be bought later.", estimatedCost: "~$345/person" },
  { priority: 14, what: "Zermatt ski rental + Chez Vrony reservation (Sep 19)", when: "2–3 weeks ahead", urgency: "medium", note: "Collect the rental the EVENING of Sep 18 to save 40min of your short ski window.", estimatedCost: "~CHF 50/person rental" },
  { priority: 15, what: "Reconfirm Le Jules Verne (Sep 24, 8pm)", when: "Sep 22", urgency: "medium", note: "✅ Already booked. Reconfirm 48h ahead and check the dress code — jacket required for men.", estimatedCost: "Already committed" }
];

// ============================================================
// CROWD CALENDAR
// ============================================================
const CROWD_DATA = {
  disneylandParis: {
    lateAugust: { level: "8–9/10", waitTimes: "60–90 min on major rides", notes: "French summer holidays end Sep 1 — irrelevant to you now" },
    september7_13: { level: "5–6/10", waitTimes: "30–45 min", notes: "Schools just returned — transition week" },
    september14_30: { level: "3–4/10", waitTimes: "15–30 min on major rides", notes: "Lowest crowds of the year. Weekdays Tue–Thu = the sweet spot." },
    yourDates: "Sep 22 (Tue) + Sep 23 (Wed) = ideal. Two weekdays in the lowest-crowd period of the year. Expect 15–30 min waits on major rides."
  }
};
