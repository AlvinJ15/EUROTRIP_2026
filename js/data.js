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
  routeNote: "Option C — Spain warm-up → Craiova wedding → Istanbul → Cappadocia → Athens → Santorini → Rome → Switzerland (ski) → Paris → London → home from Madrid. Round-trip Lima↔Madrid, no open-jaw needed.",
  anchor: {
    event: "Wedding",
    date: "Sunday, September 6, 2026",
    city: "Craiova, Romania",
    note: "Fly Madrid→Craiova Sep 5 at 8pm, land ~midnight. Two full wedding days: Sep 6 + Sep 7."
  },
  flightNote: "✅ BOOKED — PNR XYJSDU, Plus Ultra: Lima Sep 1 18:10 → Madrid Sep 2 12:45 (PU0302, 11h35) · Madrid Sep 29 11:00 → Lima 16:10 (PU0301, 12h10) · Madrid→Craiova Sep 5, 8pm (lands ~midnight) · Jules Verne Paris Sep 24, 8pm",
  datesRevision: "🧳 LUGGAGE AUDIT + SPAIN FLIPPED — every day was re-checked against the fact that you carry 2 cabin trolleys and 2 backpacks the whole trip, with nothing checked. Four days asked you to sightsee with bags in hand: Grindelwald (a zipline), Istanbul (a hamam), Zermatt (a 3,089m summit) and Barcelona (Park Güell after an 11:00 checkout). Spain is now Barcelona Sep 2–4 (2n) then Madrid Sep 4–5 (1n), so Sep 3 is a completely bag-free sightseeing day and you reach Madrid on the morning of Sep 4 for your event. ⚠️ Sagrada Família moves to Thu Sep 3 09:00 — rebook. The Paris→London Eurostar moved to ~11:00 (a 09:00 train meant leaving Le Marais at 07:45). New line item: cabin-bag fees, $130–215, because a 10kg trolley is not the free bag on easyJet or Ryanair.",
  previousDatesRevision: "🎈 TURKEY + GREECE REBUILT — Cappadocia is now a real stop, not an option. Istanbul 8–10 (2n) · ✈️ Cappadocia 10–12 (2n, sunrise balloon Fri Sep 11) · ✈️ Athens 12–14 (2n) · ✈️ Santorini 14–15 (1n) · Rome 15–18 unchanged. The two nights came out of Istanbul, which drops from 4 to 2. Greece runs Athens FIRST, Santorini LAST — that keeps every hop moving west with no backtracking, and puts the Oia sunset as the finale before Rome. ⚠️ The cost: Istanbul loses the Asian side, Balat and the slow bazaar afternoon; and the plan is ~$760–1,180 dearer.",
  previousRevision: "✅ VENICE DROPPED — both yellow items resolved. Turkey Sep 8–12 (4n) · Greece 12–15 · Rome 15–18 · ✈️ Rome→Geneva Sep 18 · Zermatt 18–20 · Grindelwald 20–21 · Paris 21–25 · London 25–27 (2n) · Madrid 27–29. The Venice night went to London, and the freed calendar day pulled everything one day earlier — which also moved Disney onto Tue Sep 22 + Wed Sep 23, the two quietest days of the week, back-to-back.",
  flightSavings: "Round-trip LIM↔MAD on Plus Ultra is booked and paid — PNR XYJSDU. The Madrid bookends are now fixed in stone."
};

// ============================================================
// FLIGHTS
// ============================================================
const FLIGHTS = {
  // ✅ BOTH LONG-HAUL LEGS ARE BOOKED — PNR XYJSDU, Plus Ultra, Economy.
  pnr: "XYJSDU",
  outbound: {
    from: "Lima (LIM)",
    to: "Madrid (MAD)",
    bestOptions: [
      {
        airline: "Plus Ultra PU 0302 — ✅ BOOKED",
        route: "LIM → MAD direct",
        stopover: "None — direct",
        flightTime: "11h 35m",
        layover: "n/a",
        depart: "Tue Sep 1, 18:10 — Lima Jorge Chávez (LIM)",
        arrive: "Wed Sep 2, 12:45 — Madrid Adolfo Suárez Barajas (MAD)",
        estimatePerson: "Booked",
        notes: "✅ CONFIRMED · PNR XYJSDU · Economy. Departs Lima Tue Sep 1 at 18:10, lands Madrid Wed Sep 2 at 12:45 (overnight flight, +1 day). You arrive at MIDDAY, not morning — Sep 2 is a half day in Madrid.",
        recommended: true
      }
    ],
    tip: "✅ Round-trip LIM↔MAD is booked on Plus Ultra, PNR XYJSDU (out Sep 1 18:10 / back Sep 29 11:00). All the European legs in between are still separate cheap tickets — do NOT try to bundle them into this reservation."
  },
  return: {
    from: "Madrid (MAD)",
    to: "Lima (LIM)",
    bestOptions: [
      {
        airline: "Plus Ultra PU 0301 — ✅ BOOKED",
        route: "MAD → LIM direct",
        stopover: "None — direct",
        flightTime: "12h 10m",
        layover: "n/a",
        depart: "Tue Sep 29, 11:00 — Madrid Adolfo Suárez Barajas (MAD)",
        arrive: "Tue Sep 29, 16:10 — Lima Jorge Chávez (LIM)",
        estimatePerson: "Booked",
        notes: "✅ CONFIRMED · PNR XYJSDU · Economy. Departs Madrid Sep 29 at 11:00, lands Lima the same day at 16:10. Be at Barajas by 08:00 — that is why the London→Madrid flight must land Sep 27, not Sep 28.",
        recommended: true
      }
    ]
  },
  intraEurope: [
    { leg: "Madrid → Barcelona", method: "🚄 AVE high-speed train", cost: "$60–140 for 2", notes: "2h30 city-centre to city-centre. Sep 3 morning. Book at renfe.com — cheaper than flying once you count airport transfers." },
    { leg: "Barcelona → Madrid", method: "🚄 AVE high-speed train", cost: "$60–140 for 2", notes: "Sep 4 evening return. Book both directions together." },
    { leg: "Madrid → Craiova", method: "✈️ Flight — ✅ BOOKED", cost: "Booked", notes: "Sep 5, departs 8:00pm, lands ~midnight. Arrange an airport pickup in advance — arriving at midnight with no plan is the one avoidable stress of this trip." },
    { leg: "Craiova → Istanbul", method: "🚗 Overland + ✈️ direct flight", cost: "$170–330 for 2", notes: "Sep 8. ⭐ Two separate tickets beats one: go overland Craiova→Bucharest OTP (3h by private car, or 3h15 train + airport bus), then a DIRECT OTP→IST flight (1h30, Turkish Airlines). A single connecting ticket out of Craiova routes you through a western hub — 10–14h and more expensive. Fly into IST, not Sabiha Gökçen. See the route planner for the full breakdown." },
    { leg: "Istanbul → Cappadocia", method: "✈️ Domestic flight", cost: "$80–160 for 2", notes: "🆕 Sep 10 evening. IST→Nevşehir (NAV, 40min from Göreme) or Kayseri (ASR, 1h15 but more flights and often cheaper). 1h20 in the air, Turkish Airlines or AJet. Take an evening departure so you keep the Bosphorus cruise and the hamam." },
    { leg: "Cappadocia → Athens (via Istanbul)", method: "✈️ Two flights, ONE ticket", cost: "$180–380 for 2", notes: "🆕 Sep 12. There are no international flights out of Cappadocia — you must come back through Istanbul. NAV/ASR→IST (1h20) then IST→ATH (1h30). 🔴 Book it as a single Turkish Airlines itinerary so the connection is protected; two separate tickets here means a missed connection is your problem. Total ~7–8h door to door." },
    { leg: "Athens → Santorini", method: "✈️ Flight (or ⛴️ ferry)", cost: "$90–200 for 2", notes: "Sep 14. Flight 45min — take it. The ferry is 5–8h and eats a whole day you don't have." },
    { leg: "Santorini → Rome", method: "✈️ Flight", cost: "$140–320 for 2", notes: "Sep 15. Seasonal direct JTR→FCO exists in September (Volotea/Ryanair). If unavailable, route via Athens." },
    { leg: "Rome → Geneva", method: "✈️ Flight", cost: "$100–220 for 2", notes: "🆕 Sep 18 morning — this leg REPLACES Rome→Venice→Zermatt. 1h50 FCO→GVA (easyJet/ITA/Swiss). Take a departure before ~11:00 so you reach Zermatt in daylight." },
    { leg: "Geneva → Zermatt", method: "🚂 Train via Visp", cost: "Covered by Swiss Travel Pass", notes: "🆕 Sep 18 afternoon. Geneva airport station → Visp → Zermatt, ~3h40, one easy change. Activate the Swiss Travel Pass on Sep 18 and this leg costs nothing extra. Zermatt is car-free — the train runs into the village." },
    { leg: "Zermatt → Grindelwald", method: "🚂 Train", cost: "Covered by Swiss Travel Pass", notes: "Sep 20 afternoon. 2h15 via Visp + Interlaken Ost. Easy, gorgeous." },
    { leg: "Grindelwald → Paris (GoldenPass Express)", method: "🚂 Scenic train + TGV", cost: "$200–320 for 2", notes: "Sep 21. Grindelwald→Interlaken, then GOLDENPASS EXPRESS Interlaken→Montreux (3h panoramic), Montreux→Geneva (1h), TGV Geneva→Paris (3h10). Your scenic train, on the route, zero detour." },
    { leg: "Paris → London", method: "🚄 Eurostar", cost: "$140–320 for 2", notes: "✅ Sep 25, mid-morning (~09:00–10:00) — no longer a dawn scramble. 2h15 Gare du Nord → St Pancras, arrive ~midday. With 2 London nights the train time is flexible again." },
    { leg: "London → Madrid", method: "✈️ Flight", cost: "$120–300 for 2", notes: "Sep 27 evening. 2h20. Iberia/Ryanair/easyJet. Must be Sep 27 — you need a buffer night before the 11am Sep 29 departure." }
  ]
};

// ============================================================
// ITINERARY — 10 stops (Venice dropped; its night went to London)
// ============================================================
const ITINERARY = [
  {
    id: 1,
    city: "Barcelona + Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    nights: 3,
    dates: "Sep 2–5 (Wed–Sat)",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    dailyCost: 290,
    accommodation: "🆕 Hotel Barcelona (2 nights) + Hotel Madrid (1 night)",
    accommodationCost: 150,
    transport: { from: "Lima (LIM)", how: "✅ BOOKED — Plus Ultra PU 0302, PNR XYJSDU. Departs Lima Tue Sep 1 at 18:10, lands Madrid Wed Sep 2 at 12:45 (11h 35m, direct, overnight). 🆕 Straight on to the AVE — you sleep in Barcelona tonight, not Madrid." },
    dayByDay: [
      { day: "Sep 2 (Wed)", plan: "✅ Land Madrid 12:45 (Plus Ultra PU0302 out of Lima the previous evening). Immigration + Cercanías to Atocha, there by ~15:00. 🆕 AVE ~16:30 → Barcelona Sants ~19:00, hotel by 19:30. 🧳 Bags go straight into the room — nothing on your back today. Evening: a short Gothic Quarter walk and dinner, then sleep. Do not try to sightsee Madrid on this day; Madrid gets Sep 4, Sep 5 and the whole of Sep 28." },
      { day: "Sep 3 (Thu)", plan: "🆕 THE CLEAN BARCELONA DAY — you are based here, so this is the one full day on the trip with zero bags in hand. ⛪ SAGRADA FAMÍLIA at the 09:00 first-entry slot. Late morning: Park Güell (uphill — much easier empty-handed). Afternoon: Gothic Quarter + La Boqueria. Evening: Barceloneta beach + seafood dinner. Back to the same hotel." },
      { day: "Sep 4 (Fri)", plan: "🆕 Checkout, straight to Sants, morning AVE → Madrid Atocha (2h30). Drop bags at the Madrid hotel on arrival. 📅 YOUR MADRID EVENT — day 1. ⚠️ If the event starts before midday, take the ~07:00 departure (Sants 07:00 → Atocha 09:30), not the 09:00 one." },
      { day: "Sep 5 (Sat)", plan: "📅 YOUR MADRID EVENT — day 2. 🧳 Checkout is ~11:00 but the flight is not until 20:00, so leave the bags with the hotel (free) — do NOT plan to carry them through the event. If the venue is far from the hotel, use a Bounce or Stasher point near it instead (~€2/bag). Collect by 16:30. Airport by 17:30. ✈️ 8:00pm flight Madrid→Craiova, lands ~midnight." }
    ],
    highlights: [
      { icon: "⛪", text: "Sagrada Família — Gaudí's masterpiece, the whole reason for the Barcelona hop", cost: "€26/person (€36–44 with towers)" },
      { icon: "🚄", text: "AVE high-speed train Madrid↔Barcelona — 2h30, 300km/h, city centre to city centre", cost: "$60–140 for 2 each way" },
      { icon: "🥘", text: "Mercado de San Miguel — Madrid's best tapas market, perfect first-night jet-lag dinner", cost: "$25–40/person" },
      { icon: "🏛️", text: "Retiro Park + Plaza Mayor + Puerta del Sol — free, walkable, ideal jet-lag day", cost: "Free" },
      { icon: "🌿", text: "Park Güell — Gaudí mosaic terraces over the city", cost: "€10/person" }
    ],
    tips: [
      "🆕 WHY THIS LEG WAS FLIPPED: the old plan had you checking out of Barcelona at 11:00 on Sep 4 and then doing Park Güell and an evening train with two trolleys and two backpacks in hand. Barcelona now gets both nights, so Sep 3 is bag-free, and you move to Madrid on the morning of Sep 4 for your event. Same 3 nights, same 3 bag-moves — but no sightseeing day is spent carrying luggage.",
      "🔴 REBOOK: Sagrada Família moves to THU SEP 3, 09:00. If you already hold a Sep 4 ticket, change it now — sagradafamilia.org, September mornings sell out weeks ahead.",
      "🛫 You leave Lima on Tue Sep 1 at 18:10 — the trip effectively starts a day before the itinerary does. Be at Jorge Chávez by 15:00.",
      "Sep 2 is a half day that is entirely consumed by getting to Barcelona: land 12:45, Atocha by 15:00, AVE ~16:30, hotel 19:30. Book nothing on it except dinner.",
      "🚄 Book both AVE legs together (Sep 2 Madrid→Barcelona evening, Sep 4 Barcelona→Madrid morning) — Renfe prices round-trips lower. Compare Iryo and Ouigo on the same route: often 30–50% cheaper.",
      "📅 Tell me the Sep 4 event start time if it's before midday — the AVE choice changes from the 09:00 to the 07:00 departure.",
      "🧳 Sep 5 is the only day in Spain where you're between accommodations. Madrid's Atocha station consigna CLOSED years ago, so 'lockers at the station' is not an option — use free hotel storage, or Stasher/Bounce (~€1.50–2.50 per bag per day, 200+ points around Sol and Gran Vía).",
      "Sep 5: leave for Barajas by 5:30pm at the latest for the 8pm Craiova flight.",
      "🔴 Book a Craiova airport pickup BEFORE you fly — you land at midnight and taxis are scarce."
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
    nights: 2,
    dates: "Sep 8–10 (Tue–Thu)",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80",
    dailyCost: 180,
    accommodation: "Hotel — Sultanahmet (walk to everything)",
    accommodationCost: 110,
    transport: { from: "Craiova", how: "Overland Craiova→Bucharest OTP (3h by car), then direct OTP→IST flight (1h30, Turkish Airlines). See the route planner." },
    dayByDay: [
      { day: "Sep 8 (Tue)", plan: "Arrive Istanbul afternoon/evening. Check in Sultanahmet. Easy first evening: Galata Bridge, fish sandwiches, Karaköy backstreets. You've just done two wedding days — take it slow." },
      { day: "Sep 9 (Wed)", plan: "🕌 THE SULTANAHMET DAY — Hagia Sophia, Blue Mosque, Basilica Cistern, Topkapi Palace, all within walking distance of each other. Late afternoon: Grand Bazaar + Spice Bazaar. Evening: rooftop dinner with Hagia Sophia on one side and the Blue Mosque on the other. This is a packed day — book the big two online." },
      { day: "Sep 10 (Thu)", plan: "🧳 CHECK OUT FIRST, LEAVE THE BAGS AT THE HOTEL — every Sultanahmet hotel does this free and it is non-negotiable today: a hamam has small lockers for a wallet and a phone, not for two trolleys, and you would be undressing in a marble room with your luggage sitting in a corridor. ⛵ Morning Bosphorus cruise from Eminönü (10 min walk, bag-free). Early afternoon: hamam at Çemberlitaş or Kılıç Ali Paşa. Collect bags ~16:00. ✈️ Evening flight IST→Cappadocia (1h20). Cave hotel by ~22:00 — sleep fast, the balloon pickup is around 04:30." }
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
      "🆕 NOW 2 NIGHTS, NOT 4 — the two nights moved to Cappadocia. This is a deliberate trade: Istanbul becomes efficient instead of leisurely, and you gain the balloon.",
      "🔴 What this costs you: the Asian side (Kadıköy), Balat's painted houses, Süleymaniye Mosque, the Princes' Islands and a slow bazaar afternoon. Sep 9 is now a full, scheduled day rather than a wander.",
      "Book Hagia Sophia + Topkapi online for Sep 9. With one core day you cannot afford a 90-minute queue.",
      "Stay IN Sultanahmet for these two nights, not Karaköy. The walking distance is the whole point when the time is short.",
      "September Istanbul: 26–28°C, ideal. Cover shoulders and knees for mosques; women need a headscarf (they lend them).",
      "Buy an Istanbulkart on arrival — it covers the tram, metro, buses and the Bosphorus ferries."
    ],
    selectedActivities: ["Hagia Sophia", "Topkapi", "Bosphorus cruise", "Hamam", "Grand Bazaar"]
  },
  {
    id: 4,
    city: "Cappadocia",
    country: "Turkey",
    emoji: "🎈",
    nights: 2,
    dates: "Sep 10–12 (Thu–Sat)",
    image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=800&q=80",
    dailyCost: 260,
    accommodation: "Cave hotel — Göreme or Uçhisar",
    accommodationCost: 150,
    transport: { from: "Istanbul", how: "Evening flight IST→Nevşehir (NAV) or Kayseri (ASR), 1h20 + 40–75min hotel shuttle. See the route planner for which airport." },
    dayByDay: [
      { day: "Sep 10 (Thu)", plan: "Land NAV/ASR in the evening, shuttle to the cave hotel in Göreme. Late dinner at the hotel. Bed early — balloon pickup is ~04:30." },
      { day: "Sep 11 (Fri)", plan: "🎈 SUNRISE BALLOON FLIGHT — up at 04:30, in the air about an hour as the sun comes over the fairy chimneys, hundreds of other balloons around you. Champagne landing ~08:00. Back to bed if you need it. Then: Göreme Open-Air Museum (rock-cut churches with Byzantine frescoes), Uçhisar Castle, and Derinkuyu or Kaymaklı underground city — eight levels carved into rock. Sunset at Red Valley." },
      { day: "Sep 12 (Sat)", plan: "⭐ THE BACKUP MORNING — if Friday's balloon was cancelled for wind, you fly this morning instead. If it already flew: Devrent and Love Valley walk, or pottery in Avanos. 🧳 Low bag risk: check out, leave everything with the cave hotel, and the airport shuttle collects you and the bags from the hotel door. Do not book a valley walk that ends anywhere but Göreme. ✈️ Midday flight back to Istanbul, connect straight through to Athens (arrive ~20:00)." }
    ],
    highlights: [
      { icon: "🎈", text: "SUNRISE HOT-AIR BALLOON — the reason this stop exists. September is peak flying season: clear, calm, warm.", cost: "~€200–280/person" },
      { icon: "⛪", text: "Göreme Open-Air Museum — UNESCO site, rock-cut monasteries and 10th-century frescoes", cost: "~€25/person" },
      { icon: "🕳️", text: "Derinkuyu or Kaymaklı underground city — 8 levels deep, sheltered 20,000 people", cost: "~€15/person" },
      { icon: "🏨", text: "Cave hotel — sleeping inside carved volcanic rock. Genuinely worth paying up for one of the two nights.", cost: "$130–200/night" },
      { icon: "🌄", text: "Red Valley / Rose Valley at sunset — the light on the tuff is the second-best thing here after the balloon", cost: "Free" },
      { icon: "🏰", text: "Uçhisar Castle — highest point in Cappadocia, whole-valley panorama", cost: "~€6/person" }
    ],
    tips: [
      "🔴 BOOK THE BALLOON NOW, for Friday Sep 11, with a reputable operator (Butterfly, Royal, Voyager). September is the busiest flying month and the good slots sell out months ahead.",
      "⭐ Two nights = two sunrise windows. Roughly 1 flight in 5 is cancelled for wind, and the operator rebooks you to the next morning — which only helps if you're still there. This is the single strongest reason for 2 nights over 1.",
      "Confirm the operator's cancellation policy in writing: a wind cancellation should be a full refund or a free move to Saturday.",
      "Airport choice matters: Nevşehir (NAV) is ~40 min from Göreme, Kayseri (ASR) is ~1h15 but has more flights and often cheaper fares. Compare total cost including the shuttle.",
      "Cave hotels are not all equal — book one with a terrace facing east, and you watch the balloons rise over breakfast on Saturday too.",
      "It's 1,000m+ up and cools off fast after sunset. Bring a jacket for the 04:30 pickup.",
      "Skip the ATV/quad tours if time is short. The valley walks are free and better."
    ],
    selectedActivities: ["🎈 Sunrise balloon", "Göreme Open-Air Museum", "Underground city", "Cave hotel"]
  },
  {
    id: 5,
    city: "Athens",
    country: "Greece",
    emoji: "🏛️",
    nights: 2,
    dates: "Sep 12–14 (Sat–Mon)",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    dailyCost: 260,
    accommodation: "Hotel — Plaka / Monastiraki, rooftop with an Acropolis view",
    accommodationCost: 130,
    transport: { from: "Cappadocia", how: "NAV/ASR→Istanbul, connect IST→Athens (1h30). Book as ONE Turkish Airlines ticket so the connection is protected." },
    dayByDay: [
      { day: "Sep 12 (Sat)", plan: "Long travel day out of Cappadocia via Istanbul. Arrive Athens ~20:00, check in around Plaka/Monastiraki. Dinner on a rooftop with the Acropolis lit up above you — the best possible first impression of the city." },
      { day: "Sep 13 (Sun)", plan: "🏛️ ACROPOLIS at the 08:00 opening — Parthenon, Erechtheion, Propylaea, before the heat and the cruise groups. Then the Ancient Agora and the Temple of Olympian Zeus on the combo ticket. Afternoon: Plaka, Monastiraki flea market, Anafiotika's island-like lanes. Sunset from Lycabettus Hill." },
      { day: "Sep 14 (Mon)", plan: "Breakfast, then the 40-min Metro to the airport. ✈️ Morning flight → Santorini (45 min)." }
    ],
    highlights: [
      { icon: "🏛️", text: "The Acropolis + Parthenon — go at 08:00 opening, it's 30°C by 11am and packed by 10", cost: "€20/person (€30 combo covers 6 more sites)" },
      { icon: "🏺", text: "Acropolis Museum — the Parthenon frieze displayed at real scale, glass floor over the excavations", cost: "€15/person" },
      { icon: "🏛️", text: "Ancient Agora + Temple of Olympian Zeus — included in the combo ticket", cost: "Combo ticket" },
      { icon: "🌆", text: "Lycabettus Hill at sunset — funicular or a 25-min climb, the whole city and the Acropolis below you", cost: "€10/person funicular" },
      { icon: "🏘️", text: "Plaka + Anafiotika — the old town under the Acropolis, best evening wandering in Athens", cost: "Free" },
      { icon: "🍽️", text: "Rooftop dinner facing the lit Acropolis — cheap by European standards, unforgettable view", cost: "$30–50/person" }
    ],
    tips: [
      "🔴 Acropolis timed entry is now mandatory — book the 08:00 slot for Sunday Sep 13 at hhticket.gr. It sells out.",
      "The €30 combo ticket pays for itself if you do the Agora plus one more site, and it skips the individual queues.",
      "Sunday Sep 13 is busier with Greek visitors than a weekday would be. The 08:00 entry matters more than ever.",
      "The airport Metro (Line 3) runs straight to Syntagma and Monastiraki — do not take the €40 taxi.",
      "Two nights here is enough for the Acropolis and Plaka done properly. It is not enough for Delphi or Cape Sounion — don't try."
    ],
    selectedActivities: ["🏛️ Acropolis", "Acropolis Museum", "Lycabettus sunset", "Plaka"]
  },
  {
    id: 6,
    city: "Santorini",
    country: "Greece",
    emoji: "🌅",
    nights: 1,
    dates: "Sep 14–15 (Mon–Tue)",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    dailyCost: 320,
    accommodation: "Caldera-view hotel — Oia or Imerovigli",
    accommodationCost: 260,
    transport: { from: "Athens", how: "Morning flight ATH→JTR (45 min) — fly, do not ferry. Hotel transfer from the airport to Oia, 25 min." },
    dayByDay: [
      { day: "Sep 14 (Mon)", plan: "Morning flight in, transfer to Oia, drop bags. Afternoon: the Fira→Oia caldera path (10km clifftop, or take the bus and walk the last stretch). 🌅 OIA SUNSET — be in position 90 minutes early, it is as crowded as it is famous. Then a booked caldera-view dinner." },
      { day: "Sep 15 (Tue)", plan: "🧳 Check out, leave the bags with the hotel — Amoudi Bay is ~300 steps BELOW Oia and you are climbing back up in the afternoon heat. Santorini morning: down to Amoudi for a swim and seafood on the water, or Red Beach. Back up, collect bags. ⚠️ Oia's lanes are stepped and vehicle-free, so budget 10–15 min of hand-carrying to the taxi pickup point whatever you do — book the transfer in advance and ask exactly where it meets you. ✈️ Afternoon flight → Rome." }
    ],
    highlights: [
      { icon: "🌅", text: "Oia sunset — the single most famous sunset in Europe. Arrive 90 min early for a spot on the castle side.", cost: "Free" },
      { icon: "🏘️", text: "Fira → Oia caldera walk — 10km along the cliff edge with the volcano below you the whole way", cost: "Free (bus ~€2)" },
      { icon: "🍽️", text: "Caldera-view dinner in Oia — expensive, touristy, completely worth doing once", cost: "$60–90/person" },
      { icon: "🏖️", text: "Amoudi Bay — 300 steps below Oia, swim off the rocks, seafood tavernas at the waterline", cost: "Free" },
      { icon: "🏨", text: "One night in a caldera-view room — with a single night here, pay for the view. It is the entire point.", cost: "$220–300/night" }
    ],
    tips: [
      "🔴 One night means one sunset. Book the Oia hotel AND the sunset-window dinner table well ahead — both sell out in September.",
      "Fly, don't ferry. The ferry is 4h30–8h and would consume the only day you have here.",
      "Stay in Oia or Imerovigli, not Fira — you want to walk to the sunset, not bus to it.",
      "Santorini→Rome direct is SEASONAL. Verify Sep 15 exists before you build the day around it; the fallback via Athens costs 3 extra hours.",
      "Luggage and Oia's stepped lanes do not mix. Arrange the hotel transfer, and ask how close the car can actually get."
    ],
    selectedActivities: ["🌅 Oia sunset", "Caldera dinner", "Amoudi Bay"]
  },
  {
    id: 7,
    city: "Rome",
    country: "Italy",
    emoji: "🏛️",
    mandatory: true,
    nights: 3,
    dates: "Sep 15–18 (Tue–Fri)",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    dailyCost: 340,
    accommodation: "Boutique hotel — Trastevere",
    accommodationCost: 155,
    transport: { from: "Santorini", how: "Fly JTR→FCO (~2h30 direct seasonal, or via Athens). Arrive Rome evening." },
    dayByDay: [
      { day: "Sep 15 (Tue)", plan: "Arrive Rome evening. Check in Trastevere. Evening walk + dinner in the cobbled streets. Gelato." },
      { day: "Sep 16 (Wed)", plan: "🔴 COLOSSEUM + Roman Forum + Palatine Hill, with the Samsung Oculus VR add-on inside the arena. Afternoon: Circo Massimo AR experience — ancient chariot races overlaid on the real ruins. Evening: Trevi Fountain after dark (far fewer people). ⚠️ SWAPPED with the Vatican day — see tips." },
      { day: "Sep 17 (Thu)", plan: "🔴 VATICAN — Museums + Sistine Chapel + St. Peter's Basilica. Book the earliest skip-the-line slot. Afternoon: climb St. Peter's dome. Evening: Pantheon (€5) + Piazza Navona. Domus Aurea VR also runs Thu–Sun if you want it." },
      { day: "Sep 18 (Fri)", plan: "🆕 Morning flight Rome (FCO) → Geneva (1h50), then train Geneva→Visp→Zermatt (~3h40) on the Swiss Travel Pass. Arrive Zermatt late afternoon — in daylight, with the rental shops still open." }
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
      "⚠️ WHY THE DAYS SWAPPED: the new dates pushed the Vatican onto Wednesday, which is PAPAL AUDIENCE day — St. Peter's Square is given over to the audience ~09:00–12:00 and the Basilica is closed or heavily restricted that morning. So the Colosseum takes Wed Sep 16 and the Vatican takes Thu Sep 17.",
      "🔴 Vatican Thursday Sep 17: book the 8:00am entry at tickets.museivaticani.va, 2 months out. The 'skip-the-line' resellers charge triple.",
      "Colosseum: book the guided tour WITH the VR add-on at ancientandrecent.com — you asked for the immersive stuff and this is the best of it.",
      "Eat anywhere except within 500m of the Trevi Fountain. That rule alone doubles the quality of your meals.",
      "Rome gets 3 nights — enough for the Vatican and the Colosseum done properly. Pompeii doesn't fit this version of the trip.",
      "🆕 Sep 18 is now a flight to Geneva, not a train to Venice. Book an FCO→GVA departure before ~11:00 — later and you arrive in Zermatt after the ski-rental shops shut, which costs you 40 minutes of Saturday's short glacier window.",
      "Leave Rome for the airport by 07:00 on Sep 18. Leonardo Express Termini→FCO is 32min, €14 — don't take a taxi."
    ],
    selectedActivities: ["🔴 Colosseum VR Sep 16 (MANDATORY)", "🔴 Vatican Sep 17 (MANDATORY)", "Circo Massimo AR", "Pantheon"]
  },
  {
    id: 8,
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
    transport: { from: "Rome", how: "🆕 Flight FCO→Geneva (1h50), then train Geneva→Visp→Zermatt (~3h40) on the Swiss Travel Pass. One travel day instead of the old two. Zermatt is car-free; the train goes into the village." },
    dayByDay: [
      { day: "Sep 18 (Fri)", plan: "Fly Rome→Geneva in the morning, train down to Zermatt, arrive late afternoon. Check in, collect ski + boot rental for tomorrow morning, walk the village, early dinner. First sight of the Matterhorn. ✅ You now arrive with the rental shops still open — that was the weak point of the old Venice routing." },
      { day: "Sep 19 (Sat)", plan: "⛷️ SKI DAY. Up early. Matterhorn Glacier Ride cable car to 3,883m — highest cable car in Europe, glass floor. Ski the Theodul Glacier ~08:00–13:00, ~21km of groomed piste at 3,000m+ with the Matterhorn beside you and Italy over the ridge. Afternoon: late lunch at Chez Vrony (2,130m, Michelin-listed) or back down to the village." },
      { day: "Sep 20 (Sun)", plan: "🧳 Check out and put the bags in a locker at Zermatt station (CHF 5–9) or leave them at the hotel — the Gornergrat train leaves from a platform directly opposite the main station, so they are on your way both times. Morning: Gornergrat cogwheel railway — 33min to 3,089m, Matterhorn dead ahead the whole way. Best scenic-rail-per-minute on the trip. Back down ~13:00, collect bags, walk across. Afternoon: train → Grindelwald (2h15)." }
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
      "⚠️ The ski day is SATURDAY Sep 19. Swiss weekend skiers are on the glacier, but at 3,800m in September the mountain is never crowded — be on the first cable car and you're ahead of them anyway.",
      "🆕 Activate the Swiss Travel Pass on Sep 18, not Sep 19 — the 4 days then run Sep 18–21 and cover the Geneva→Zermatt arrival, Zermatt→Grindelwald, and the GoldenPass out. Activating a day late means paying ~$70 for the Geneva leg.",
      "Chez Vrony: reserve ahead. It's a 20-min walk down from Sunnegga, and it's the best meal in Switzerland on this trip.",
      "Zermatt is car-free — park-and-ride at Täsch if you ever drive, but you're arriving by train anyway.",
      "The Swiss Travel Pass (4 days, ~$323/person) covers the trains, Grindelwald gondolas, and gives a Gornergrat discount. Worth it for this 4-night Swiss block."
    ],
    selectedActivities: ["⛷️ Glacier ski day Sep 19", "🚂 Gornergrat railway", "🍽️ Chez Vrony"]
  },
  {
    id: 9,
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
      { day: "Sep 21 (Mon)", plan: "🔴 THE TIGHTEST BAG DAY OF THE TRIP. You physically cannot ride the First Flieger zipline or a mountain cart holding a 10kg trolley. Check out early and LEAVE ALL FOUR BAGS AT THE GUESTHOUSE (free) — the Firstbahn base station is in the village, so you walk out empty-handed and come back past the door. 🛷 ADVENTURE MORNING: first gondola up, FIRST CLIFF WALK (walkway bolted to the cliff face, free with the gondola), then FIRST FLIEGER — 800m at 84 km/h straight at the Eiger. Then mountain cart or trottibike down. ⚠️ Be back at the guesthouse by 12:30 and off the mountain hard-stop 12:15 — you need the ~13:00 train to Interlaken Ost (35 min) for the 14:00 GoldenPass. Drop Pfingstegg; it does not fit once the bag collection is real. Then 🚂 GOLDENPASS EXPRESS Interlaken→Montreux (3h panoramic) → Geneva → TGV → Paris. Arrive ~22:00." }
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
      "🆕 The adventure morning is now MONDAY Sep 21 instead of a Tuesday — slightly quieter on the Cliff Walk and the Flieger. Small win.",
      "Sep 21 arrival in Paris is ~22:00. Buy dinner on the train; don't plan anything that night. It eats the Monday, which was a dead arrival day anyway — Disney gets Tuesday AND Wednesday intact."
    ],
    selectedActivities: ["🛷 Toboggan / Pfingstegg", "🪂 First Flieger zipline", "🚶 First Cliff Walk", "🚂 GoldenPass Express"]
  },
  {
    id: 10,
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
      { day: "Sep 21 (Mon)", plan: "Arrive ~22:00 from Switzerland. Check in. Sleep — Disney starts early. ✅ The arrival now lands on a Monday, so it costs you nothing: both Disney days survive intact." },
      { day: "Sep 22 (Tue)", plan: "🎡 DISNEYLAND PARIS — Day 1 (Disneyland Park). ✅ Tuesday is the single lowest-crowd day of the week in September: 15–30 min waits. RER A from Châtelet, €2.55. Rope drop at 09:30." },
      { day: "Sep 23 (Wed)", plan: "🎡 DISNEYLAND PARIS — Day 2 (Walt Disney Studios). ✅ Back-to-back with yesterday, so buy a 2-day ticket rather than two singles — cheaper, and anything you miss on Tuesday rolls over. Wednesday is equally quiet: 15–30 min." },
      { day: "Sep 24 (Thu)", plan: "🗼 EIFFEL TOWER day — this one is LOCKED by the booking. Morning: Montmartre + Sacré-Coeur. Midday: Eiffel summit + 2nd floor decks. Afternoon: Champ de Mars, the Louvre pyramid from OUTSIDE (courtyard only — no museum), Seine river cruise. Evening: 🍽️ LE JULES VERNE, 8:00pm — ✅ BOOKED. Jacket required for men." },
      { day: "Sep 25 (Fri)", plan: "🆕 Eurostar moved to ~11:00 (was 09:00–10:00). Gare du Nord check-in closes 30–45 min before departure, so a 09:00 train meant leaving Le Marais at 07:45 — there was no 'relaxed morning' in the old plan. At 11:00 you get a real café breakfast, check out ~09:30, walk to Gare du Nord with the bags (Le Marais is 20 min on the metro, one bag-move, nothing to see in between). Arrive St Pancras ~12:15 London time." }
    ],
    highlights: [
      { icon: "🎡", text: "Disneyland Paris — 2 days, ✅ Tue Sep 22 + Wed Sep 23, back-to-back on the two quietest weekdays of the year: 15–30 min waits.", cost: "€89–100/person/day (advance), or a 2-day ticket" },
      { icon: "🍽️", text: "LE JULES VERNE — ✅ BOOKED Sep 24, 8:00pm. 2 Michelin stars inside the Eiffel Tower.", cost: "€295–330/person" },
      { icon: "🗼", text: "Eiffel Tower — summit + 2nd floor decks. Do this the same day as the dinner.", cost: "€29.40/person summit" },
      { icon: "⛵", text: "Seine river cruise — 1h, the whole city from the water", cost: "~€17/person" },
      { icon: "🏘️", text: "Montmartre + Sacré-Coeur — free, and the best panorama in Paris", cost: "Free" },
      { icon: "🖼️", text: "Louvre — EXTERIOR ONLY (glass pyramid + courtyard). You said you don't like the museum; you're not going in.", cost: "Free" },
      { icon: "🥽", text: "Optional: Eclipso or The Gate VR — dark-room immersive / haptic free-roam", cost: "€28–32/person" }
    ],
    tips: [
      "✅ GOOD NEWS: Jules Verne (Sep 24, 8pm) still falls inside the Paris window and still lands on a non-Disney day. Nothing to rebook. Reconfirm 48h ahead — jacket required for men.",
      "✅ WHAT DROPPING VENICE BOUGHT PARIS: the Swiss arrival moved to Monday, so Disney gets Tue Sep 22 + Wed Sep 23 — the two lowest-crowd days of the week, consecutive, with Thursday still free for the Eiffel Tower and the dinner. The old plan had Disney split across Wed and Fri, and the Friday ran 25–40 min waits.",
      "🎟️ Because the Disney days are now back-to-back, buy a 2-DAY ticket instead of two 1-day tickets — usually cheaper, and it lets you leave a ride for tomorrow instead of forcing it at closing.",
      "Montmartre got folded into Thursday morning. It's a 45-min visit and it's free — it survives the squeeze fine.",
      "Book advance Disney tickets at disneylandparis.com for €89–100 vs €130+ at the gate. Transport: RER A from Châtelet-Les-Halles, €2.55/person. NEVER pay for the €23 shuttle.",
      "Louvre: courtyard and pyramid from outside only — noted, no ticket booked.",
      "🆕 CORRECTED: book the Eurostar for ~11:00, not 09:00. Gare du Nord check-in closes 30–45 min ahead, so the 09:00 train would have you out the door at 07:45 — incompatible with the 'relaxed Paris morning' this day is supposed to be. The 11:00 lands you at St Pancras ~12:15 and the Tower of London afternoon still works (last entry 15:30).",
      "🥽 Eclipso or The Gate VR now genuinely fits — the Friday morning is loose, or swap it into Thursday afternoon. This was 'optional, probably not' under the old dates."
    ],
    selectedActivities: ["🎡 Disneyland 2 days (Tue+Wed)", "🍽️ Jules Verne ✅ BOOKED", "🗼 Eiffel Tower", "Montmartre", "Louvre exterior only"]
  },
  {
    id: 11,
    city: "London",
    country: "United Kingdom",
    emoji: "🦕",
    nights: 2,
    dates: "Sep 25–27 (Fri–Sun)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    dailyCost: 340,
    accommodation: "Hotel — King's Cross / Euston (next to St Pancras and the Watford train)",
    accommodationCost: 200,
    transport: { from: "Paris", how: "✅ Eurostar Gare du Nord → St Pancras, 🆕 ~11:00 departure, arrives ~12:15 London time. At 2 nights the train time is flexible — use that flexibility to buy a real Paris morning rather than a dawn scramble." },
    dayByDay: [
      { day: "Sep 25 (Fri)", plan: "✅ THE NIGHT VENICE PAID FOR. Arrive St Pancras ~12:15, and the King's Cross hotel is a 5-minute walk — 🧳 the shortest bag-move of the entire trip, which is exactly why King's Cross is the right neighbourhood. Drop bags (leave them at reception if the room isn't ready), then afternoon: Westminster + Big Ben + a Thames walk to Tower Bridge, or the TOWER OF LONDON (~£35, last entry 15:30 — this only exists because of the extra night). Evening: a proper pub." },
      { day: "Sep 26 (Sat)", plan: "🎬 WARNER BROS STUDIO TOUR — a full, unhurried day. ANY slot works now, so take a mid-morning one: Euston → Watford Junction (20min) + shuttle, allow 4–5h inside. Back in central London late afternoon. Evening: dinner, or a West End show if you want one." },
      { day: "Sep 27 (Sun)", plan: "🧳 Check out ~09:00 and leave the bags at the hotel — the Natural History Museum has a bag-size limit and no cloakroom for luggage, so this step is required, not optional. 🦕 NATURAL HISTORY MUSEUM at the 10:00 opening — dinosaur gallery, FREE. Add Jurassic Oceans (~£15) if running. Back to King's Cross ~15:00, collect bags, straight to the airport. ✈️ Evening flight London→Madrid (2h20) — ⚠️ if it's easyJet, your 10kg trolleys are NOT free hold-size cabin bags, see the luggage plan." }
    ],
    highlights: [
      { icon: "🎬", text: "Warner Bros Studio Tour — the actual Harry Potter sets, Diagon Alley, the Great Hall, Hogwarts model", cost: "~£53/person (~$68)" },
      { icon: "🦕", text: "Natural History Museum dinosaur gallery — FREE, world-class, one of the best dino collections anywhere", cost: "FREE" },
      { icon: "🌊", text: "Jurassic Oceans special exhibition (2026) — marine reptiles, if still running", cost: "~£15/person" },
      { icon: "🏰", text: "Tower of London — 🆕 NOW FITS, on the Friday afternoon. Crown Jewels, the White Tower.", cost: "~£35/person" },
      { icon: "🏛️", text: "Westminster + Big Ben + Tower Bridge + Thames walk", cost: "Free" },
      { icon: "🍺", text: "A real London pub — Sunday roast if the timing works", cost: "$25–40/person" }
    ],
    tips: [
      "✅ RESOLVED: two nights. Warner Bros no longer depends on a narrow slot and a dawn train — book whichever Saturday slot you like at wbstudiotour.co.uk, ideally mid-morning so you're not rushed at the end.",
      "🏰 The Friday afternoon is the new free space. Tower of London (last entry 15:30) is the strongest use of it if you arrive by midday; otherwise Westminster + the Thames walk costs nothing and is the better first taste of the city.",
      "Stay at King's Cross / Euston. Euston is where the Watford train leaves from and St Pancras is next door — still the right call even with the extra night.",
      "Warner Bros logistics: Euston→Watford Junction (20min, ~£11), then the £3 shuttle. Budget 90min door to door each way.",
      "Natural History Museum is FREE and doesn't need a ticket — but book a free timed slot on nhm.ac.uk to skip the Sunday queue. Sunday 10:00 is family-heavy; be at the door at opening.",
      "🔴 Fly to Madrid on Sep 27 evening, NOT Sep 28. You need a full buffer day before an 11am international departure. Book the flight for 20:00 or later so the museum morning isn't rushed.",
      "Still doesn't fit at 2 nights: the British Museum, Greenwich, and a day trip anywhere. Two nights is comfortable, not generous."
    ],
    selectedActivities: ["🎬 Warner Bros Studio Tour (Sat)", "🦕 NHM dinosaur gallery (Sun)", "🏰 Tower of London or Westminster (Fri)"]
  },
  {
    id: 12,
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
      { day: "Sep 29 (Tue)", plan: "✈️ MADRID → LIMA — Plus Ultra PU 0301, departs 11:00, lands Lima 16:10 the same day (12h 10m). Be at Barajas by 08:00. Trip ends." }
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
      { name: "Disneyland Paris — 2-day ticket", price: "€150–190/person", note: "🆕 BUY THIS ONE. Tue Sep 22 + Wed Sep 23 are now consecutive, so a 2-day ticket beats two singles. disneylandparis.com, advance online." },
      { name: "Disneyland Paris — 1 day (1 park)", price: "€89–114/person", note: "Only if you'd rather split the purchase. Gate price €130+." },
      { name: "Disneyland Paris — park hopper upgrade", price: "+~€20/person", note: "Worth it across two back-to-back days — Disneyland Park mornings, Walt Disney Studios afternoons." },
      { name: "Eiffel Tower — Summit (lift)", price: "€29.40/person", note: "Book at toureiffel.paris. Sep 24 morning, before the dinner." },
      { name: "Eiffel Tower — 2nd floor (lift)", price: "€19.40/person", note: "The Jules Verne level. Separate booking from the restaurant." },
      { name: "Le Jules Verne", price: "€295–330/person", note: "✅ BOOKED Sep 24, 8:00pm. Tasting menu only. Jacket required for men." },
      { name: "Seine River Cruise (Bateaux Parisiens)", price: "~€17/person", note: "1h. Good Sep 24 afternoon filler before the dinner." },
      { name: "Eclipso / The Gate VR", price: "€28–32/person", note: "🆕 Now realistic — the Friday morning is loose before a ~09:00 Eurostar, or use Thursday afternoon." },
      { name: "Louvre", price: "€0 — EXTERIOR ONLY", note: "Courtyard + glass pyramid from outside. Not entering, per your call." }
    ]
  },
  {
    city: "London",
    flag: "🇬🇧",
    attractions: [
      { name: "Warner Bros Studio Tour (Harry Potter)", price: "~£53/person (~$68)", note: "✅ Sat Sep 26, ANY slot — the second night removed the timing constraint. Take mid-morning (~10:00–11:00) and allow 4–5h inside. wbstudiotour.co.uk, book 2–3 months out; it still sells out." },
      { name: "Eurostar Paris → London", price: "$70–160/person", note: "✅ Fri Sep 25, ~09:00–10:00. Standard advance fare, no need to pay for flexibility any more." },
      { name: "Train Euston → Watford Junction", price: "~£11/person return", note: "20min + £3 shuttle bus to the studio. 90min door-to-door each way." },
      { name: "Natural History Museum (dinosaur gallery)", price: "FREE", note: "nhm.ac.uk — book a free timed slot. Sun Sep 27, be there for the 10:00 opening; Sundays are family-heavy." },
      { name: "Jurassic Oceans special exhibition", price: "~£15/person", note: "2026 special at the NHM — verify it's still running in September." },
      { name: "Tower of London", price: "~£35/person", note: "🆕 NOW FITS — Fri Sep 25 afternoon, the day the Venice night bought you. Last entry ~15:30, so book it only if the Eurostar lands you by midday. hrp.org.uk" }
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
      { name: "Swiss Travel Pass — 4 days", price: "~CHF 290/person (~$323)", note: "🆕 ACTIVATE Sep 18 (days Sep 18–21). Now also covers the Geneva airport→Zermatt arrival leg, on top of Zermatt→Grindelwald, the GoldenPass base fare, the Grindelwald gondolas and the Gornergrat discount. Activating Sep 19 instead wastes ~$70." }
    ]
  },
  {
    city: "Rome",
    flag: "🇮🇹",
    attractions: [
      { name: "Vatican Museums + Sistine Chapel", price: "€17 + €5 booking fee", note: "🔴 tickets.museivaticani.va, 2 months ahead. 🆕 Sep 17 THU, earliest slot — moved off Wednesday to dodge the Papal Audience." },
      { name: "St. Peter's Basilica", price: "FREE (dome €10 lift)", note: "⚠️ Closed/restricted on WEDNESDAY mornings for the Papal Audience — which is why the Vatican day is now Thursday. Dress code: covered shoulders and knees." },
      { name: "Colosseum + Forum + Palatine Hill", price: "€18/person", note: "coopculture.it. 🆕 Sep 16 WED." },
      { name: "Colosseum VR (Samsung Oculus)", price: "~€30/person add-on", note: "ancientandrecent.com — bundle with entry. Gladiators in the real arena. Sep 16." },
      { name: "Circo Massimo AR Experience", price: "~€12/person", note: "circomaximoexperience.it — AR chariot races on the actual ruins. Sep 16 afternoon." },
      { name: "Pantheon", price: "€5/person", note: "Timed entry online, no queue." },
      { name: "Museo Civico di Zoologia (dinos)", price: "~€10/person", note: "Optional — near Villa Borghese." },
      { name: "Leonardo Express Termini → FCO", price: "€14/person", note: "🆕 Sep 18, ~07:00. 32min. You now fly out of Rome instead of taking the Venice train." }
    ]
  },
  {
    city: "Greece",
    flag: "🇬🇷",
    attractions: [
      { name: "Acropolis (Athens)", price: "€20/person", note: "Combo ticket with 6 other sites: €30. Sun Sep 13 — book the 08:00 slot at hhticket.gr; timed entry is mandatory and Sundays draw local crowds too." },
      { name: "Acropolis Museum", price: "€15/person", note: "🆕 Sep 13 afternoon. The Parthenon frieze at real scale — go after the site itself, not before." },
      { name: "Ancient Agora", price: "€10/person", note: "Included in the €30 combo ticket." },
      { name: "Lycabettus funicular", price: "€10/person", note: "🆕 Sep 13 sunset. Or climb it free in 25 min." },
      { name: "Athens → Santorini flight", price: "$45–100/person", note: "45min, Sep 14. Aegean/Sky Express. Do NOT take the ferry — it's 4h30–8h." },
      { name: "Oia sunset", price: "FREE", note: "Sep 14. Arrive 90 min early for a spot on the castle ruins." }
    ]
  },
  {
    city: "Cappadocia",
    flag: "🎈",
    attractions: [
      { name: "🎈 Sunrise hot-air balloon flight", price: "~€200–280/person", note: "🆕 THE headline cost of the Turkey leg. Fri Sep 11 at sunrise, ~1h airborne. Government-regulated pricing, so choose on operator reputation, not price. 🔴 Book now — September sells out." },
      { name: "Göreme Open-Air Museum", price: "~€25/person", note: "🆕 UNESCO rock-cut churches with 10th-century frescoes. Sep 11, after the balloon. The Dark Church costs a few euros extra and is worth it." },
      { name: "Derinkuyu or Kaymaklı underground city", price: "~€15/person", note: "🆕 Eight levels carved into rock. Pick one, not both — they're similar and Derinkuyu goes deeper." },
      { name: "Uçhisar Castle", price: "~€6/person", note: "🆕 Highest point in Cappadocia, whole-valley panorama. 30 minutes well spent." },
      { name: "Museum Pass Cappadocia", price: "~€45/person", note: "🆕 Bundles Göreme + Zelve + an underground city. Worth it at 3+ sites, not at 2." },
      { name: "Red Valley / Love Valley walks", price: "FREE", note: "🆕 Better than the paid ATV tours. Go at sunset." }
    ]
  },
  {
    city: "Istanbul",
    flag: "🇹🇷",
    attractions: [
      { name: "Hagia Sophia", price: "~€25/person", note: "Foreign visitor fee. 🔴 Book online for Wed Sep 9 — with one core Istanbul day you cannot absorb the queue." },
      { name: "Topkapi Palace", price: "~€30/person", note: "Also Wed Sep 9. Add the Harem section (~€10 extra) — it's the best part." },
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
      { name: "Sagrada Família", price: "€26/person (towers €36–44)", note: "🆕 🔴 THU SEP 3, 9:00am first slot (moved from Sep 4). sagradafamilia.org — rebook if you hold the old date." },
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
    verdict: "🆕 NOW PLAUSIBLE — the Spain flip gave Barcelona a second night, so Sep 3 is a full bag-free day instead of a half one. Sagrada Família at 09:00 still owns the morning, but the aquarium is a 1.5–2h afternoon swap against Park Güell. Still a genuine either/or, not a bonus.",
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
    verdict: "⚠️ Still tight — Sep 24 carries Montmartre, the Eiffel Tower AND the Jules Verne dinner. But it's a 5-minute walk from the tower, so it slots in if you cut Montmartre or skip the Seine cruise.",
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
    verdict: "❌ SKIP — even at 2 nights, the Friday afternoon is better spent on the Tower of London or Westminster, and you have a far better aquarium option in Barcelona and Paris.",
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
  recommendation: "✅ CHOSEN: ZERMATT — 1 ski day, Sep 19 (Sat). It's the only option that satisfies BOTH 'skiing is very important' AND 'Switzerland is important' in a single stop, with zero detour on the Italy→France axis. The ski add-on itself is only ~$326 for 2 (pass + rental); the rest of the Swiss cost is the Switzerland leg you wanted anyway. Hintertux or Val Senales would each be ~$120 cheaper on the ski day but leave Switzerland unvisited, forcing a separate 2-night Swiss stop that costs more in both money and days.",
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
      pros: ["Cheapest, and 42km is double the terrain", "Pairs beautifully with the Dolomites", "Lago di Braies 45min away — spectacular", "Professional-grade grooming"],
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
      cons: ["Leaves Switzerland unvisited — costs ~2 extra days for a separate Swiss stop", "Awkward on the Italy→France route", "You'd have to drop Rome or Paris nights to fit it"],
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
      { name: "Colosseum VR (Ancient & Recent) ✅", type: "Historic site VR", price: "~€30 add-on", desc: "Samsung Oculus inside the REAL Colosseum. Gladiators fight around you in the actual arena. Sep 16 (Wed).", rating: 5 },
      { name: "Circo Massimo AR ✅", type: "Historic site AR", price: "~€12/person", desc: "See-through AR walk — ancient chariot races overlaid on the real ruins. Sep 16 afternoon.", rating: 4 },
      { name: "Domus Aurea VR", type: "Underground historic VR", price: "~€20/person", desc: "Nero's Golden House, VR through 30 frescoed halls. Thu–Sun only — 🆕 Sep 17 is now a Thursday IN Rome, so this finally fits if you skip the St. Peter's dome climb.", rating: 4 }
    ]
  },
  {
    city: "Paris", flag: "🇫🇷",
    options: [
      { name: "Eclipso (Bercy Village)", type: "Dark room immersive", price: "~€28/person", desc: "300–1,000m² total-immersion dark room. 🆕 Fits now — Friday morning before the ~09:00 Eurostar is loose, or Thursday afternoon.", rating: 5 },
      { name: "The Gate VR", type: "Free-roam haptic", price: "~€32/person", desc: "100m² arena, haptic guns, latest headsets. Best pure VR in Paris.", rating: 5 }
    ]
  },
  {
    city: "London", flag: "🇬🇧",
    options: [
      { name: "Warner Bros Studio Tour ✅", type: "Immersive film sets (not VR, better)", price: "~£53/person", desc: "The actual Harry Potter sets — Great Hall, Diagon Alley, Hogwarts model. Sat Sep 26, a full unhurried day now that London has 2 nights. Book 2–3 months out.", rating: 5 }
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
  { city: "Barcelona", flag: "🇪🇸", status: "open", selected: false, name: "Museu Blau", highlight: "4M+ specimens, strong paleontology, FREE Sunday afternoons. ❌ Still doesn't fit — even with the second Barcelona night, Sep 3 is already Sagrada Família, Park Güell, the Gothic Quarter and Barceloneta. And Sep 3 is a Thursday, so the free Sunday doesn't apply.", admission: "€6 (free Sun PM)", rating: 4 }
];

// ============================================================
// DINING
// ============================================================
const DINING = [
  { name: "Le Jules Verne", city: "Paris", location: "Eiffel Tower, 2nd floor — private elevator", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", stars: 2, pricePerPerson: "€295–330", totalFor2: "~$660–740", description: "2 Michelin stars. Chef Frédéric Anton. Tasting menus only. You dine inside the Eiffel Tower with Paris at your feet.", mustBook: true, bookingNote: "✅ BOOKED — Thursday Sep 24, 8:00pm. Reconfirm 48h ahead. Jacket required for men.", priority: 1 },
  { name: "Chez Vrony", city: "Zermatt, Switzerland", location: "Findeln hamlet, 2,130m above Zermatt", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", stars: 0, pricePerPerson: "$60–70", totalFor2: "~$130", description: "Michelin Guide-listed mountain restaurant. Matterhorn from your table. Local raclette, rösti, dried alpine meats. Reached on foot from Sunnegga.", mustBook: true, bookingNote: "Reserve ahead. 🆕 Sep 19 (Sat) after the ski morning — the perfect landing. Saturday lunch books out fastest; reserve early.", priority: 2 },
  { name: "Caldera-view dinner, Oia", city: "Santorini, Greece", location: "Oia clifftop", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80", stars: 0, pricePerPerson: "$60–90", totalFor2: "~$120–180", description: "Dinner over the caldera as the sun goes down. Expensive and touristy and completely worth doing once. 🆕 Sep 14 (Mon).", mustBook: true, bookingNote: "Book a sunset-window table days ahead — every restaurant in Oia is full at 19:00.", priority: 3 },
  { name: "Rooftop dinner, Sultanahmet", city: "Istanbul, Turkey", location: "Sultanahmet rooftop terraces", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80", stars: 0, pricePerPerson: "$30–45", totalFor2: "~$60–90", description: "Hagia Sophia on one side, Blue Mosque on the other, the Bosphorus behind. Cheap by European standards, unmatched view.", mustBook: false, bookingNote: "Walk-in mostly fine. Go at sunset for the call to prayer across the city.", priority: 4 },
  { name: "Trastevere dinner", city: "Rome, Italy", location: "Trastevere backstreets", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", stars: 0, pricePerPerson: "$35–55", totalFor2: "~$70–110", description: "Cacio e pepe and carbonara done properly, on cobblestones, with no tourist-trap menu in sight. Three Rome evenings — use at least two of them here.", mustBook: false, bookingNote: "Mostly walk-in, but book the popular places (Da Enzo, Roma Sparita) a few days ahead. Sep 15–17.", priority: 5 },
  { name: "Mercado de San Miguel", city: "Madrid, Spain", location: "Near Plaza Mayor", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80", stars: 0, pricePerPerson: "$25–40", totalFor2: "~$50–80", description: "Madrid's best tapas market under a glass-and-iron roof. Ideal jet-lag dinner on Sep 2 — graze, don't commit.", mustBook: false, bookingNote: "Walk-in. Busy after 21:00.", priority: 6 }
];

// ============================================================
// BUDGET
// ============================================================
const BUDGET = {
  categories: [
    { label: "Flights: Lima↔Madrid round-trip (×2)", min: 1300, max: 1800, note: "Direct Iberia/Air Europa. Sep 2 out, Sep 29 back at 11am. Book as one round-trip." },
    { label: "Accommodation (27 nights, 2 pax)", min: 4000, max: 5420, note: "🆕 +$20–30 from the Spain flip — Barcelona goes 1→2 nights and Madrid 2→1, and a Barcelona bed costs a little more. That $25 is what buys you a completely bag-free Sep 3. 🆕 +$80–140 from the Turkey change: two Istanbul nights ($90–130) became two Cappadocia cave-hotel nights ($130–200). Same night count, slightly dearer beds. Zermatt, Santorini and London remain the expensive ones." },
    { label: "Food (28 days)", min: 2120, max: 3020, note: "~$20 higher than the Venice version (London eats dearer than Venice for one day). Airbnb kitchen in Paris + supermarket lunches in Switzerland save the most." },
    { label: "Intra-Europe transport (10 flights + 4 train legs)", min: 1610, max: 2620, note: "🆕 +$160–320 for the two Cappadocia hops (IST→NAV and NAV→IST, ~$40–80/person each). Cheap flights, but they are new. Everything 2–3 months out." },
    { label: "🎈 Cappadocia sunrise balloon (2 pax)", min: 440, max: 620, note: "🆕 ~€200–280/person for a standard 1-hour sunrise flight, Fri Sep 11. Government-regulated pricing, so shop on operator reputation and basket size, not price. This is the single biggest new line item." },
    { label: "Activities (Disney ×2, Vatican, Colosseum VR, Warner Bros, Acropolis, Göreme, Hagia Sophia…)", min: 1480, max: 2100, note: "🆕 +$80–100 for Göreme Open-Air Museum and an underground city. See the ticket breakdown by city." },
    { label: "Jules Verne dinner (2 persons) — ✅ BOOKED", min: 660, max: 740, note: "Sep 24, 8pm. Already committed." },
    { label: "Skiing — Zermatt (1 day × 2 persons)", min: 300, max: 360, note: "~CHF 95 pass + ~CHF 50 rental per person. 🆕 Ski day is now Sat Sep 19. The ski add-on itself is cheap." },
    { label: "Swiss Travel Pass 4 days (×2 persons)", min: 620, max: 660, note: "🆕 Activate Sep 18. Now also covers the Geneva→Zermatt arrival, plus Swiss trains, Grindelwald gondolas, GoldenPass base fare and the Gornergrat discount." },
    { label: "Warner Bros Studio Tour + transport (2 pax)", min: 160, max: 200, note: "~£53/person + ~£11 train + £3 shuttle each." },
    { label: "🧳 Cabin-bag fees + luggage storage", min: 130, max: 215, note: "🆕 WAS MISSING ENTIRELY. Your 10kg trolleys are NOT the free cabin bag on easyJet/Ryanair/Vueling/Wizz — those include one small under-seat bag only, so a 10kg trolley is a paid 'large cabin bag' at ~€25–35 each, per flight ($120–200 if you use budget carriers, $0 if every flight is full-service). Plus €3–10 of locker/storage on the days you're between hotels. Add the bag fee for TWO bags before comparing a budget fare against Iberia or Turkish — it often erases the saving." },
    { label: "Misc (travel insurance, SIMs, tips, gifts)", min: 500, max: 800, note: "Travel insurance STRONGLY recommended — 12 separate transport legs." }
  ],
  total: { min: 13320, max: 18555, target: 14000 },
  savingTips: [
    "⚠️ HONEST WARNING: the midpoint is now ~$15,740, about $1,740 over your $14,000 target. Adding Cappadocia cost roughly $760–1,180 — the balloon alone is $440–620. It is the best single experience you've added to this trip, and it is not free. Decide deliberately.",
    "🎈 IF YOU NEED THAT MONEY BACK: the honest candidates are Santorini's one caldera night ($220–300 + the $130 dinner), the Jules Verne dinner ($660–740, already booked), or one Disney day. Cutting the balloon to fund the rest defeats the purpose of the change.",
    "📊 WHAT DROPPING VENICE ACTUALLY DID TO THE MONEY: lodging was a wash ($200/night either way — the night moved to London, it didn't disappear). Food went UP ~$20 (London is dearer). Transport came DOWN $30–360: Rome→Venice + Venice→Zermatt ($250–460 for 2) became one Rome→Geneva flight ($100–220) with the Swiss leg on the pass. If the Geneva fare comes in cheap you save ~$300; if it's dear, it's break-even. You did this for the calendar day, not the cash.",
    "✅ WHAT IT DID TO THE SCHEDULE (the real payoff): two travel days became one; London went 1→2 nights; the 07:00 Eurostar became a relaxed ~09:00 one; the Warner Bros slot constraint vanished; the Tower of London became possible; and Disney landed on Tue Sep 22 + Wed Sep 23 — consecutive, and the two lowest-crowd days of the week.",
    "🎟️ NEW SAVING, small but free: because the Disney days are now back-to-back, a 2-day ticket replaces two 1-day tickets — typically €25–40/person cheaper.",
    "Second lever: the Grindelwald night ($380) — but that costs you the toboggan, the zipline and the GoldenPass. Don't.",
    "Second biggest: Zermatt lodging. Staying in Täsch (one stop down the valley) instead of Zermatt village saves ~$80/night.",
    "Book ALL intra-Europe flights and trains 2–3 months ahead. On this route that's worth $400–700 alone — prices roughly double inside 3 weeks.",
    "Natural History Museum London is FREE. Montmartre, Sacré-Coeur, Oia sunset, the Blue Mosque and the Westminster/Thames walk are all free.",
    "Disneyland advance tickets: €89–100/person/day vs €130+ at the gate — and the 2-day ticket for Sep 22–23 beats both.",
    "Airbnb with a kitchen in Paris (4 nights): save $20–40/day on breakfast versus a hotel.",
    "Switzerland: Coop/Migros supermarkets for packed lunches. Mountain restaurant lunch is ~50% the price of dinner — so make Chez Vrony your lunch, which is what the Sep 19 plan already does.",
    "🆕 Activate the Swiss Travel Pass on Sep 18, not Sep 19. It then covers the Geneva→Zermatt arrival train — about $70 for the two of you, free.",
    "Istanbul and Craiova are the cheap stops — don't economise there, economise in Switzerland."
  ],
  hotelVsAirbnb: [
    { city: "Barcelona", nights: 2, recommendation: "🆕 Hotel — Eixample, near Sagrada Família or Sants", reason: "🆕 Up from 1 night. Both Barcelona nights in the same hotel is what makes Sep 3 a bag-free sightseeing day. Eixample walks to Sagrada Família and is 2 metro stops from Sants for the Sep 4 morning train.", cost: "$140–180/night" },
    { city: "Madrid (start)", nights: 1, recommendation: "🆕 Hotel near the event venue", reason: "🆕 Down to 1 night (Sep 4). Pick this one by where your event is, not by the station — you arrive by train on Sep 4 and leave for Barajas on Sep 5, so Atocha proximity no longer buys anything. Confirm they hold bags after checkout.", cost: "$120–150/night" },
    { city: "Craiova", nights: 3, recommendation: "Hotel near the venue", reason: "Wedding logistics beat everything. Cheapest stop of the trip.", cost: "$60–80/night" },
    { city: "Istanbul", nights: 2, recommendation: "Hotel — Sultanahmet", reason: "🆕 Down from 4 nights. With only one core day, staying inside Sultanahmet (walk to Hagia Sophia, Blue Mosque, Topkapi, the cistern) stops being a preference and becomes the plan.", cost: "$90–130/night" },
    { city: "Cappadocia", nights: 2, recommendation: "🆕 Cave hotel — Göreme or Uçhisar", reason: "🆕 The two nights Istanbul gave up. Pay for a cave room with an east-facing terrace — you watch Saturday's balloons rise over breakfast. Two nights also buys a second balloon morning if Friday is cancelled for wind.", cost: "$130–200/night" },
    { city: "Athens", nights: 2, recommendation: "Hotel — Plaka/Monastiraki", reason: "Rooftop with an Acropolis view is worth the small premium.", cost: "$110–150/night" },
    { city: "Santorini", nights: 1, recommendation: "Caldera-view hotel", reason: "One night, so pay for the view. It's the entire point of going.", cost: "$220–300/night" },
    { city: "Rome", nights: 3, recommendation: "Boutique hotel — Trastevere", reason: "Best food neighbourhood, walkable to everything.", cost: "$140–190/night" },
    { city: "Zermatt", nights: 2, recommendation: "Hotel/guesthouse in the village", reason: "Car-free village, walk to the cable car. Täsch is $80/night cheaper if you'll commute.", cost: "$230–290/night" },
    { city: "Grindelwald", nights: 1, recommendation: "Guesthouse", reason: "One night, early start for the First gondola. Stay close to the station.", cost: "$180–240/night" },
    { city: "Paris", nights: 4, recommendation: "Airbnb — Le Marais / 11th", reason: "Kitchen breakfasts across 4 nights, and easy RER A access for Disney.", cost: "$170–210/night" },
    { city: "London", nights: 2, recommendation: "Hotel — King's Cross / Euston", reason: "🆕 Back to 2 nights (the Venice night). King's Cross puts you next to St Pancras for the Eurostar and Euston for the Watford train. Book both nights in the same hotel — no moving.", cost: "$180–230/night" },
    { city: "Madrid (end)", nights: 2, recommendation: "Hotel near Atocha or airport", reason: "Buffer nights before an 11am departure. Airport-adjacent is fine for the last one.", cost: "$110–150/night" }
  ]
};

// ============================================================
// BOOKING PRIORITY — today is late July 2026, several of these are URGENT
// ============================================================
const BOOKINGS = [
  { priority: 1, what: "🎈 CAPPADOCIA SUNRISE BALLOON — Fri Sep 11", when: "🔴 NOW — most urgent item on the list", urgency: "critical", note: "🆕 September is the peak flying month and the reputable operators (Butterfly, Royal, Voyager, Turquaz) sell out months ahead. Book the standard 1-hour sunrise flight for Fri Sep 11 and get the wind-cancellation policy in writing — a cancellation should be a full refund or a free move to Sat Sep 12, which is exactly why you have two nights there.", estimatedCost: "€200–280/person" },
  { priority: 2, what: "🆕 Cappadocia flights — IST→NAV/ASR (Sep 10 eve) + NAV/ASR→IST→ATH (Sep 12) as ONE ticket", when: "🔴 NOW", urgency: "critical", note: "🆕 Two new legs created by the Turkey change. Book the Sep 12 return as a SINGLE Turkish Airlines itinerary through Istanbul to Athens — separate tickets mean a missed connection is your problem, and there is no second flight that day that still gets you to Athens for dinner. Compare Nevşehir (NAV, 40min from Göreme) against Kayseri (ASR, 1h15 but more frequencies) on total cost including the shuttle.", estimatedCost: "$260–540 for 2 total" },
  { priority: 3, what: "🆕 Cave hotel, Göreme or Uçhisar — 2 nights (Sep 10 + 11)", when: "🔴 NOW", urgency: "critical", note: "🆕 Ask for an east-facing terrace room: you watch Saturday's balloons rise over breakfast even after flying on Friday. Confirm they run the 04:30 balloon pickup and a late check-in for the Thursday evening arrival.", estimatedCost: "$130–200/night" },
  { priority: 4, what: "🆕 Flight Rome (FCO) → Geneva (GVA), Fri Sep 18 morning", when: "🔴 NOW", urgency: "critical", note: "easyJet / ITA / Swiss, 1h50. Take a departure before ~11:00 so the Geneva→Zermatt train (3h40) lands you in the village before the ski-rental shops close.", estimatedCost: "$100–220 for 2" },
  { priority: 5, what: "Craiova midnight airport pickup (Sep 5)", when: "🔴 THIS WEEK", urgency: "critical", note: "You land at ~midnight. Taxis are scarce at Craiova at that hour. Arrange a transfer through your hotel now.", estimatedCost: "$25–50" },
  { priority: 6, what: "🆕 Sagrada Família — 9:00am slot THU SEP 3 (moved from Sep 4)", when: "🔴 NOW — and REBOOK if you already hold Sep 4", urgency: "critical", note: "🆕 THE DATE CHANGED. Barcelona now holds both Sep 2 and Sep 3 nights so that Sep 3 is a bag-free day, and you move to Madrid on the morning of Sep 4 for your event. If you already booked the Sep 4 slot, change it at sagradafamilia.org now — September mornings sell out weeks ahead.", estimatedCost: "€26–44/person" },
  { priority: 7, what: "🆕 Craiova → Bucharest OTP private transfer (Sep 8 morning)", when: "1–2 weeks ahead", urgency: "high", note: "🆕 3h by car, ~€90–130 for the two of you, hotel door to terminal. Book through the Craiova hotel or the wedding hosts. The train + airport bus is far cheaper but CFR runs late routinely — and this is the morning after two wedding days.", estimatedCost: "€90–130 total" },
  { priority: 8, what: "Warner Bros Studio Tour, London — Sat Sep 26", when: "NOW", urgency: "high", note: "With 2 London nights any slot works — take mid-morning (~10:00–11:00) for an unhurried day. It still sells out 2–3 months ahead. wbstudiotour.co.uk", estimatedCost: "~£53/person (~$68)" },
  { priority: 9, what: "Disneyland Paris — 2-DAY ticket (Tue Sep 22 + Wed Sep 23)", when: "NOW", urgency: "high", note: "Consecutive days — buy one 2-day ticket instead of two singles, it's cheaper and lets rides roll over. Tue and Wed are the two lowest-crowd days of the week: 15–30 min waits. disneylandparis.com.", estimatedCost: "€150–190/person for 2 days" },
  { priority: 10, what: "Vatican Museums + Sistine Chapel (THU Sep 17, earliest slot)", when: "NOW", urgency: "high", note: "Thursday, deliberately — Wednesday is Papal Audience day, when St. Peter's is closed/restricted all morning. Official only: tickets.museivaticani.va.", estimatedCost: "€22/person" },
  { priority: 11, what: "Colosseum + Roman Forum + VR add-on (WED Sep 16)", when: "NOW", urgency: "high", note: "Swapped with the Vatican for the Papal Audience reason above. ancientandrecent.com for the VR bundle, or coopculture.it for entry only.", estimatedCost: "~€48/person" },
  { priority: 12, what: "Santorini caldera-view hotel + sunset dinner table (Mon Sep 14)", when: "NOW", urgency: "high", note: "One night only, so the view matters. Book the Oia hotel AND the 19:00-window restaurant table together — both sell out in September, and you only get one sunset.", estimatedCost: "$220–300/night + $120–180 dinner" },
  { priority: 13, what: "🕌 Hagia Sophia + Topkapi timed entry (WED Sep 9)", when: "2–4 weeks ahead", urgency: "high", note: "🆕 Newly urgent. Istanbul is down to a single core day, so a 90-minute queue is no longer survivable. Book both online for Sep 9.", estimatedCost: "~€55/person combined" },
  { priority: 14, what: "Remaining intra-Europe flights: Craiova→Istanbul (Sep 8), Athens→Santorini (Sep 14), Santorini→Rome (Sep 15), London→Madrid (Sep 27 eve)", when: "Within 2 weeks", urgency: "high", note: "🔴 Verify the Santorini→Rome direct actually operates on Sep 15 before building the day around it — otherwise route via Athens and add 3h. Book London→Madrid for 17:00 or later so the museum morning survives.", estimatedCost: "$450–1,000 for 2 total" },
  { priority: 15, what: "Acropolis 8:00am timed entry (SUN Sep 13)", when: "1 month ahead", urgency: "medium", note: "Sunday — local crowds on top of the cruise groups. Timed entry is mandatory now: hhticket.gr. By 11am it's 30°C and full. The €30 combo also covers the Agora.", estimatedCost: "€20–30/person" },
  { priority: 16, what: "Trains: AVE Madrid↔Barcelona (Sep 3 + Sep 4), Eurostar Paris→London (Fri Sep 25, ~09:00)", when: "1–2 months ahead", urgency: "medium", note: "Book the two AVE legs together for the round-trip price. Eurostar fares only climb — this is the one train worth booking early. renfe.com / eurostar.com.", estimatedCost: "$200–460 for 2 total" },
  { priority: 17, what: "Swiss Travel Pass 4 days (ACTIVATE Sep 18) + GoldenPass seat reservation (Sep 21)", when: "1 month ahead", urgency: "medium", note: "Activate Sep 18 so the pass covers the Geneva→Zermatt arrival — days then run Sep 18–21, which also covers Zermatt→Grindelwald and the GoldenPass out. sbb.ch. The panoramic cars sell out; the pass itself can be bought later.", estimatedCost: "~$345/person" },
  { priority: 18, what: "Göreme Open-Air Museum + underground city (Fri Sep 11)", when: "2 weeks ahead", urgency: "medium", note: "🆕 Walk-up is usually fine, but the Museum Pass Cappadocia bundles Göreme, Derinkuyu/Kaymaklı and Zelve at a discount if you'll do 3+ sites.", estimatedCost: "~€40/person" },
  { priority: 19, what: "Zermatt ski rental + Chez Vrony reservation (SAT Sep 19)", when: "2–3 weeks ahead", urgency: "medium", note: "Collect the rental the EVENING of Sep 18 — you arrive from Geneva in the late afternoon with the shops still open.", estimatedCost: "~CHF 50/person rental" },
  { priority: 20, what: "Reconfirm Le Jules Verne (Sep 24, 8pm)", when: "Sep 22", urgency: "medium", note: "✅ Already booked. Reconfirm 48h ahead and check the dress code — jacket required for men.", estimatedCost: "Already committed" },
  { priority: 21, what: "✅ DONE — Lima↔Madrid round-trip, Plus Ultra PNR XYJSDU", when: "✅ Booked", urgency: "medium", note: "Lima Sep 1 18:10 → Madrid Sep 2 12:45 (PU0302) · Madrid Sep 29 11:00 → Lima 16:10 (PU0301). Nothing to do but check in online 24h before each leg.", estimatedCost: "Already committed" }
];

// ============================================================
// CROWD CALENDAR
// ============================================================
const CROWD_DATA = {
  disneylandParis: {
    lateAugust: { level: "8–9/10", waitTimes: "60–90 min on major rides", notes: "French summer holidays end Sep 1 — irrelevant to you now" },
    september7_13: { level: "5–6/10", waitTimes: "30–45 min", notes: "Schools just returned — transition week" },
    september14_30: { level: "3–4/10", waitTimes: "15–30 min on major rides", notes: "Lowest crowds of the year. Weekdays Tue–Thu = the sweet spot; Fridays tick up as the weekend starts." },
    yourDates: "✅ OPTIMAL: Tue Sep 22 + Wed Sep 23. Tuesday and Wednesday are the two quietest days of the week in the quietest fortnight of the year — 15–30 min on the headliners. Dropping Venice is what bought this: the Swiss arrival moved onto the Monday, so it no longer eats a park day, and the old Friday (25–40 min) is gone from the plan entirely. They're consecutive, so buy a 2-day ticket. Rope drop at 09:30 both days and you'll clear the headliners before 11:00."
  }
};
