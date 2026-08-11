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
  budget: 15000,
  persons: 2,
  origin: "Lima, Peru",
  routeNote: "Option C — Spain warm-up → Craiova wedding → Istanbul → Cappadocia → Athens → Santorini → Rome → Switzerland (Berner Oberland) → Paris → home from Madrid. Round-trip Lima↔Madrid, no open-jaw needed. London was deliberately dropped and saved for a dedicated UK trip.",
  anchor: {
    event: "Wedding",
    date: "Sunday, September 6, 2026",
    city: "Craiova, Romania",
    note: "Fly Madrid→Craiova Sep 5 at 8pm, land ~midnight. Two full wedding days: Sep 6 + Sep 7."
  },
  flightNote: "✅ BOOKED — PNR XYJSDU, Plus Ultra: Lima Sep 1 18:10 → Madrid Sep 2 12:45 (PU0302, 11h35) · Madrid Sep 29 11:00 → Lima 16:10 (PU0301, 12h10) · Madrid→Craiova Sep 5, 8pm (lands ~midnight) · Jules Verne Paris Sep 24, 8pm",
  datesRevision: "🏔️ ZERMATT REMOVED — the Swiss leg is now four nights in ONE base. The skiing moved to Chile in August 2026 (mid-winter, two full days, 120+ runs across the Tres Valles domain) which left a 21km September glacier morning as the only reason to visit a dead-end valley 3h25 from Geneva. Sep 18–22 is now Grindelwald throughout: arrival + Pfingstegg (18) · First gondola, Cliff Walk, Flieger, mountain cart and the Bachalpsee hike (19) · Interlaken day — Beatenberg paraglide, Lake Brienz cruise, chocolate workshop (20) · Lauterbrunnen, Trümmelbach, Mürren and SCHILTHORN/Piz Gloria (21) · GoldenPass Express 11:07 to Paris, arriving ~19:30 instead of ~22:00 (22). ✅ GAINED: a full extra usable day, a single base (bags in Sep 18, out Sep 22 — one bag-move deleted outright), Schilthorn, Bachalpsee, Mürren, a lake cruise, three-day weather flexibility, and ~$600. ❌ LOST, and it is real: the MATTERHORN, the Gornergrat railway and Chez Vrony. 🔴 PASS CORRECTION: there is no 5-day Swiss Travel Pass — buy the 4-day, activate Sep 19, and pay the Sep 18 arrival separately.",
  previousSwissRevision: "🪂 SWISS LEG REBUILT — the one genuinely fragile day on the trip is fixed. Sep 21 had gondola + Cliff Walk + zipline + mountain cart stacked in front of the 14:07 GoldenPass, which is effectively the last train that still reaches Paris that night. The First mountain cart has reported queues of up to 110 minutes, so the day did not survive. Gornergrat moved to Sep 19 afternoon (the glacier lifts close at 13:00 anyway), which frees Sep 20 morning: you now leave Zermatt at 09:30, paraglide from Beatenberg over Lake Thun and Lake Brienz at midday, reach Grindelwald by 15:15, and toboggan at Pfingstegg (~5 min queues, vs 110 at First). Sep 21 is First gondola, Cliff Walk, the Flieger, then a chocolate workshop in Interlaken as optional padding before the 14:07 — with real slack for the first time. Costs ~$620–810 for two.",
  previousLuggageRevision: "🧳 LUGGAGE AUDIT + SPAIN FLIPPED — every day was re-checked against the fact that you carry 2 cabin trolleys and 2 backpacks the whole trip, with nothing checked. Four days asked you to sightsee with bags in hand: Grindelwald (a zipline), Istanbul (a hamam), Zermatt (a 3,089m summit) and Barcelona (Park Güell after an 11:00 checkout). Spain is now Barcelona Sep 2–4 (2n) then Madrid Sep 4–5 (1n), so Sep 3 is a completely bag-free sightseeing day and you reach Madrid on the morning of Sep 4 for your event. ⚠️ Sagrada Família moves to Thu Sep 3 09:00 — rebook. The Paris→London Eurostar moved to ~11:00 (a 09:00 train meant leaving Le Marais at 07:45). New line item: cabin-bag fees, $130–215, because a 10kg trolley is not the free bag on easyJet or Ryanair.",
  previousDatesRevision: "🎈 TURKEY + GREECE REBUILT — Cappadocia is now a real stop, not an option. Istanbul 8–10 (2n) · ✈️ Cappadocia 10–12 (2n, sunrise balloon Fri Sep 11) · ✈️ Athens 12–14 (2n) · ✈️ Santorini 14–15 (1n) · Rome 15–18 unchanged. The two nights came out of Istanbul, which drops from 4 to 2. Greece runs Athens FIRST, Santorini LAST — that keeps every hop moving west with no backtracking, and puts the Oia sunset as the finale before Rome. ⚠️ The cost: Istanbul loses the Asian side, Balat and the slow bazaar afternoon; and the plan is ~$760–1,180 dearer.",
  previousRevision: "✅ VENICE DROPPED — both yellow items resolved. Turkey Sep 8–12 (4n) · Greece 12–15 · Rome 15–18 · ✈️ Rome→Geneva Sep 18 · Zermatt 18–20 · Grindelwald 20–21 · Paris 21–25 · London 25–27 (2n) · Madrid 27–29. The Venice night went to London, and the freed calendar day pulled everything one day earlier — which also moved Disney onto Tue Sep 22 + Wed Sep 23, the two quietest days of the week, back-to-back.",
  flightSavings: "Round-trip LIM↔MAD on Plus Ultra is booked and PAID — PNR XYJSDU, $1,968 for two both ways plus ~€50 seat selection. Comparable dates and carriers were quoting ~$1,700 per person, so catching this offer saved roughly $1,400. The Madrid bookends are fixed in stone."
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
        notes: "✅ CONFIRMED AND PAID · PNR XYJSDU · Economy · $1,968 for both people both ways, plus ~€50 seat selection. Departs Lima Tue Sep 1 at 18:10, lands Madrid Wed Sep 2 at 12:45 (overnight flight, +1 day). You arrive at MIDDAY, not morning — Sep 2 is a half day, and it is entirely consumed by getting to Barcelona.",
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
        notes: "✅ CONFIRMED · PNR XYJSDU · Economy. Departs Madrid Sep 29 at 11:00, lands Lima the same day at 16:10. Be at Barajas by 08:00. 🆕 You now land in Madrid on Sep 26 with three full nights before this — the most buffer this trip has ever had before the one flight that cannot be missed.",
        recommended: true
      }
    ]
  },
  intraEurope: [
    { leg: "Madrid → Barcelona", method: "🚄 AVE high-speed train — ✅ PAID", cost: "✅ $243 for 2, both legs", notes: "✅ BOUGHT. 2h30 city-centre to city-centre, Sep 2 late afternoon on landing day. The $243 covers this leg AND the Sep 4 return." },
    { leg: "Barcelona → Madrid", method: "🚄 AVE high-speed train — ✅ PAID", cost: "✅ included in the $243", notes: "✅ BOUGHT. 🆕 Sep 4 MORNING (not evening) — you go straight to your Madrid event. 🔴 Verify which departure you hold: if the event starts before midday you want the ~07:00, not the 09:00." },
    { leg: "Madrid → Craiova", method: "✈️ Flight — ✅ BOOKED", cost: "Booked", notes: "Sep 5, departs 8:00pm, lands ~midnight. Arrange an airport pickup in advance — arriving at midnight with no plan is the one avoidable stress of this trip." },
    { leg: "Craiova → Istanbul", method: "🚗 Overland + ✈️ direct flight", cost: "$170–330 for 2", notes: "Sep 8. ⭐ Two separate tickets beats one: go overland Craiova→Bucharest OTP (3h by private car, or 3h15 train + airport bus), then a DIRECT OTP→IST flight (1h30, Turkish Airlines). A single connecting ticket out of Craiova routes you through a western hub — 10–14h and more expensive. Fly into IST, not Sabiha Gökçen. See the route planner for the full breakdown." },
    { leg: "Istanbul → Cappadocia", method: "✈️ Domestic flight", cost: "$80–160 for 2", notes: "🆕 Sep 10 evening. IST→Nevşehir (NAV, 40min from Göreme) or Kayseri (ASR, 1h15 but more flights and often cheaper). 1h20 in the air, Turkish Airlines or AJet. Take an evening departure so you keep the Bosphorus cruise and the hamam." },
    { leg: "Cappadocia → Athens (via Istanbul)", method: "✈️ Two flights, ONE ticket", cost: "$180–380 for 2", notes: "🆕 Sep 12. There are no international flights out of Cappadocia — you must come back through Istanbul. NAV/ASR→IST (1h20) then IST→ATH (1h30). 🔴 Book it as a single Turkish Airlines itinerary so the connection is protected; two separate tickets here means a missed connection is your problem. Total ~7–8h door to door." },
    { leg: "Athens → Santorini", method: "✈️ Flight (or ⛴️ ferry)", cost: "$90–200 for 2", notes: "Sep 14. Flight 45min — take it. The ferry is 5–8h and eats a whole day you don't have." },
    { leg: "Santorini → Rome", method: "✈️ Flight", cost: "$140–320 for 2", notes: "🆕 Sep 16 (was Sep 15 — Santorini gained a night). Seasonal direct JTR→FCO exists in September (Volotea/Ryanair). If unavailable, route via Athens." },
    { leg: "Rome → Geneva", method: "✈️ Flight", cost: "$100–220 for 2", notes: "Sep 18 morning. 1h50 FCO→GVA (easyJet/ITA/Swiss). Take a departure before ~11:00 — with Zermatt gone there is no ski rental to beat, but the early flight still buys you the Pfingstegg toboggan on arrival day." },
    { leg: "Geneva → Grindelwald", method: "🚂 Train via Bern + Interlaken", cost: "~CHF 72/person, or covered if your pass is active", notes: "🆕 REPLACES Geneva→Zermatt. Geneva airport station → Bern → Interlaken Ost → Grindelwald, ~2h35 — versus 3h25 into Zermatt, a dead-end valley you then had to come back out of. 🎫 If you take the recommended 4-day pass activated Sep 19, buy THIS leg separately; a Supersaver on sbb.ch is often CHF 30–45." },
    { leg: "Grindelwald → Paris (GoldenPass Express)", method: "🚂 Scenic train + TGV", cost: "$200–320 for 2", notes: "🆕 Sep 22 (was Sep 21 — Grindelwald gained a night, so the hard deadline is gone). Grindelwald→Interlaken, then GOLDENPASS EXPRESS Interlaken→Montreux (3h panoramic), Montreux→Geneva (1h), TGV Geneva→Paris (3h10). The 09:07 and 11:07 departures are now real fallbacks, not theory." },
    { leg: "Paris → Madrid", method: "✈️ Flight", cost: "~$198 for 2", notes: "🆕 REPLACES the Eurostar to London AND the London→Madrid flight. Sat Sep 26 from ORLY, not CDG: metro line 14 goes direct to Orly in ~25 min, and the flight is 2h00–2h05. Iberia 07:25→09:30 or Air Europa 10:55→12:55, both with a full cabin bag included." }
  ]
};

// ============================================================
// ITINERARY — 11 stops (Venice and London both dropped; London's nights went to Madrid)
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
      { day: "Sep 2 (Wed)", plan: "✅ Land Madrid 12:45 (Plus Ultra PU0302 out of Lima the previous evening). Immigration + Cercanías to Atocha, there by ~15:00. 🆕 AVE ~16:30 → Barcelona Sants ~19:00, hotel by 19:30. 🧳 Bags go straight into the room — nothing on your back today. ✅ The Airbnb is by the Cathedral, so Sants → home is one straight L3 ride (Sants Estació → Liceu, ~12 min) with no change. Evening: the Gothic Quarter walk IS your neighbourhood — step outside and you're in it. Dinner, then sleep. Do not try to sightsee Madrid on this day; Madrid gets Sep 4, Sep 5 and the whole of Sep 28." },
      { day: "Sep 3 (Thu)", plan: "🆕 THE CLEAN BARCELONA DAY — you are based here, so this is the one full day on the trip with zero bags in hand. ✅ REBUILT AROUND THE REAL TICKET: Sagrada Família is 11:45 with the TOWER at 12:30, not 09:00. So the order flips. ⏰ 08:50 LEAVE THE APARTMENT — the Gothic Quarter is ~30–35 min from Park Güell (L3 Liceu → Lesseps, then a 15-min uphill walk, or a taxi). This is the one real cost of the Cathedral location and it only bites on this morning. 🌿 09:30 PARK GÜELL — 🔴 timed entry, book the 09:30 slot; allow 1h–1h15 for the Monumental Zone. Uphill, and the morning is far cooler and emptier than midday. 🚕 OUT BY 10:45–11:00 AND TAKE A TAXI (~15 min, €10–12) — the two sites are ~2.5 km apart with no direct metro, and the metro version is 35–40 min because you first walk 15–20 min DOWN the hill to Lesseps or Vallcarca (L3), then change at Diagonal to L5. €11 is cheap insurance for a non-transferable tower slot. ⛪ 11:45 SAGRADA FAMÍLIA — do the nave first, you have 45 minutes and that is enough. 🗼 12:30 TOWER — be at the tower base 10 minutes early, the slot is separate from your entry slot and non-transferable. Down by ~13:15. Late lunch in the Eixample. Afternoon: ✅ back to your own neighbourhood — the Gothic Quarter and La Boqueria are on the doorstep, so the afternoon needs no transport at all. Evening: Barceloneta beach (~20 min walk from the Cathedral) + seafood dinner. Home on foot." },
      { day: "Sep 4 (Fri)", plan: "🆕 Checkout, straight to Sants, morning AVE → Madrid Atocha (2h30). Drop bags at the Madrid hotel on arrival. 📅 YOUR MADRID EVENT — day 1. ⚠️ If the event starts before midday, take the ~07:00 departure (Sants 07:00 → Atocha 09:30), not the 09:00 one." },
      { day: "Sep 5 (Sat)", plan: "📅 YOUR MADRID EVENT — day 2. 🧳 Checkout is ~11:00 but the flight is not until 20:00, so leave the bags with the hotel (free) — do NOT plan to carry them through the event. If the venue is far from the hotel, use a Bounce or Stasher point near it instead (~€2/bag). Collect by 16:30. Airport by 17:30. ✈️ 8:00pm flight Madrid→Craiova, lands ~midnight." }
    ],
    highlights: [
      { icon: "⛪", img: "sagrada", text: "Sagrada Família + TOWER — ✅ PAID. Gaudí's masterpiece, the whole reason for the Barcelona hop. Entry 11:45, tower 12:30.", cost: "✅ $82 total for 2, towers included" },
      { icon: "🚄", text: "AVE high-speed train Madrid↔Barcelona — ✅ PAID. 2h30, 300km/h, city centre to city centre, both directions.", cost: "✅ $243 total for 2, round trip" },
      { icon: "🥘", img: "sanmiguel", text: "Mercado de San Miguel — Madrid's best tapas market, perfect first-night jet-lag dinner", cost: "$25–40/person" },
      { icon: "🏛️", img: "royalpalace", text: "Retiro Park + Plaza Mayor + Puerta del Sol — free, walkable, ideal jet-lag day", cost: "Free" },
      { icon: "🌿", img: "parkguell", text: "Park Güell — Gaudí mosaic terraces over the city. 🔴 Timed entry, book the 09:30 slot. Allow 1h–1h15 for the Monumental Zone.", cost: "~€10–13/person" }
    ],
    tips: [
      "✅ BARCELONA IS BOOKED AND PAID — Airbnb by the Cathedral, $272 for both nights, check-in 15:00, check-out 11:00. Neither time conflicts with anything: you arrive ~19:30 on Sep 2, and on Sep 4 you're on a morning train well before 11:00. 🎯 The Gothic Quarter is the right trade for this itinerary — your entire afternoon and evening on Sep 3 (Gothic Quarter, La Boqueria, Barceloneta) becomes walkable, and Sants is a direct L3 ride. The price is one commute: Park Güell and the Sagrada are 25–35 min away, so leave the apartment at 08:50 on Sep 3.",
      "🆕 WHY THIS LEG WAS FLIPPED: the old plan had you checking out of Barcelona at 11:00 on Sep 4 and then doing Park Güell and an evening train with two trolleys and two backpacks in hand. Barcelona now gets both nights, so Sep 3 is bag-free, and you move to Madrid on the morning of Sep 4 for your event. Same 3 nights, same 3 bag-moves — but no sightseeing day is spent carrying luggage.",
      "✅ SAGRADA FAMÍLIA IS PAID — Thu Sep 3, entry 11:45, TOWER 12:30, $82 for the two of you. $41/person with towers is a good price; the tower add-on is normally €36–44/person all-in.",
      "🗼 THE TOWER SLOT IS SEPARATE FROM YOUR ENTRY SLOT and it is non-transferable — miss 12:30 and it is gone, refund included. Be at the tower base by 12:20. You go UP by lift and come DOWN a narrow spiral staircase: no bags, no big camera, and skip it if either of you dislikes heights or tight stairs. Ask which facade when you check in — the Nativity tower is the better view of the two.",
      "🔴 BOOK PARK GÜELL — 09:30 SLOT. It is timed entry with capped capacity, in 30-minute slots, and September mornings sell out. It is no longer the optional filler it used to be: the 11:45 Sagrada slot made it the anchor of your morning. 🎫 Buy 'Visita Park Güell', the plain self-guided entry — not the guided tour (fixed 50–60 min group pace, exactly what you don't want with a 12:30 tower), not the Casa Museo Gaudí combo (+30 min), not 'en grupo', and not the Catalan-language tour: Catalan is a separate language, not a dialect of Spanish.",
      "🚕 PARK GÜELL → SAGRADA IS A TAXI, NOT A METRO RIDE. ~2.5 km but Park Güell sits on a hill with no direct metro: the transit version is 35–40 min because you walk 15–20 min downhill to Lesseps/Vallcarca (L3) before you even board. The taxi is ~15 min and €10–12. Leave the park at 10:45–11:00 regardless of how it's going — the 11:45 entry usually has some tolerance, the 12:30 tower has none.",
      "🔄 THE DAY ORDER FLIPPED because of that 11:45 slot. Park Güell now goes FIRST (opens 09:30, uphill, and far cooler and emptier before 11:00), then you cross to the Sagrada. This is better than the old 09:00-Sagrada version — Park Güell was always the wrong thing to do at midday in September heat.",
      "🛫 You leave Lima on Tue Sep 1 at 18:10 — the trip effectively starts a day before the itinerary does. Be at Jorge Chávez by 15:00.",
      "Sep 2 is a half day that is entirely consumed by getting to Barcelona: land 12:45, Atocha by 15:00, AVE ~16:30, hotel 19:30. Book nothing on it except dinner.",
      "✅ THE AVE IS PAID — $243 for both directions for the two of you (Sep 2 Madrid→Barcelona, Sep 4 Barcelona→Madrid). That is ~$61/person per leg, inside the $120–280 round-trip estimate this plan carried.",
      "🔴 NOW THE ONE OPEN ITEM IN SPAIN: check which Sep 4 Barcelona→Madrid departure you actually hold, against when your event starts. If the event begins before midday you want the ~07:00, not the 09:00. A Renfe time change is cheap while the date is far out and expensive near it — do this in the same sitting as reading this line.",
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
      { icon: "🕌", img: "hagiasophia", text: "Hagia Sophia — 1,500 years old, cathedral then mosque then museum then mosque again", cost: "~€25/person (foreign visitor fee)" },
      { icon: "🕌", img: "bluemosque", text: "Blue Mosque + Basilica Cistern — the cistern's sunken columns and Medusa heads are unforgettable", cost: "Mosque free · Cistern ~€25/person" },
      { icon: "🏰", img: "topkapi", text: "Topkapi Palace — Ottoman sultans' palace, harem, treasury, Bosphorus views", cost: "~€30/person" },
      { icon: "⛵", img: "bosphorus", text: "Bosphorus cruise — cross between two continents, palaces and fortresses along both shores", cost: "~€15–30/person" },
      { icon: "🛁", img: "hamam", text: "Traditional hamam (Turkish bath) — Çemberlitaş or Kılıç Ali Paşa. Perfect wedding recovery.", cost: "~€40–70/person" },
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
      { icon: "🎈", img: "balloon", text: "SUNRISE HOT-AIR BALLOON — the reason this stop exists. September is peak flying season: clear, calm, warm.", cost: "~€200–280/person" },
      { icon: "⛪", img: "goreme", text: "Göreme Open-Air Museum — UNESCO site, rock-cut monasteries and 10th-century frescoes", cost: "~€25/person" },
      { icon: "🕳️", img: "derinkuyu", text: "Derinkuyu or Kaymaklı underground city — 8 levels deep, sheltered 20,000 people", cost: "~€15/person" },
      { icon: "🏨", img: "cappadocia", text: "Cave hotel — sleeping inside carved volcanic rock. Genuinely worth paying up for one of the two nights.", cost: "$130–200/night" },
      { icon: "🌄", text: "Red Valley / Rose Valley at sunset — the light on the tuff is the second-best thing here after the balloon", cost: "Free" },
      { icon: "🏰", img: "uchisar", text: "Uçhisar Castle — highest point in Cappadocia, whole-valley panorama", cost: "~€6/person" }
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
      { icon: "🏛️", img: "acropolis", text: "The Acropolis + Parthenon — go at 08:00 opening, it's 30°C by 11am and packed by 10", cost: "€20/person (€30 combo covers 6 more sites)" },
      { icon: "🏺", img: "acropolismuseum", text: "Acropolis Museum — the Parthenon frieze displayed at real scale, glass floor over the excavations", cost: "€15/person" },
      { icon: "🏛️", text: "Ancient Agora + Temple of Olympian Zeus — included in the combo ticket", cost: "Combo ticket" },
      { icon: "🌆", img: "lycabettus", text: "Lycabettus Hill at sunset — funicular or a 25-min climb, the whole city and the Acropolis below you", cost: "€10/person funicular" },
      { icon: "🏘️", img: "acropolis", text: "Plaka + Anafiotika — the old town under the Acropolis, best evening wandering in Athens", cost: "Free" },
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
    nights: 2,
    dates: "Sep 14–16 (Mon–Wed)",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    dailyCost: 320,
    accommodation: "Caldera-view hotel — Oia or Imerovigli",
    accommodationCost: 260,
    transport: { from: "Athens", how: "Morning flight ATH→JTR (45 min) — fly, do not ferry. Hotel transfer from the airport to Oia, 25 min." },
    dayByDay: [
      { day: "Sep 14 (Mon)", plan: "Morning flight in, transfer to Oia, drop bags. Afternoon: the Fira→Oia caldera path (10km clifftop, or take the bus and walk the last stretch). 🌅 OIA SUNSET — be in position 90 minutes early, it is as crowded as it is famous. Then a booked caldera-view dinner." },
      { day: "Sep 15 (Tue)", plan: "🆕 THE FULL SANTORINI DAY — the whole reason for the second night, and 🧳 completely bag-free because you sleep in the same hotel tonight. Morning: down the ~300 steps to AMOUDI BAY for a swim off the rocks and seafood at the waterline, then back up in your own time instead of against a flight. Afternoon: choose one — a caldera boat trip to the volcano and the hot springs (~€35/person, the best thing on the island after the sunset), Red Beach, or the Akrotiri excavation. Evening: second Oia sunset, this time from a different spot with no pressure." },
      { day: "Sep 16 (Wed)", plan: "🧳 Check out and leave the bags with the hotel. Slow morning — coffee on the caldera, last photos, the Oia castle walk. ⚠️ Oia's lanes are stepped and vehicle-free, so budget 10–15 min of hand-carrying to the taxi pickup point whatever you do — book the transfer in advance and ask exactly where it meets you. ✈️ Afternoon flight → Rome. ✅ Amoudi Bay is no longer on this day, which is what made the old version the tightest day of the trip." }
    ],
    highlights: [
      { icon: "🌅", img: "oia", text: "Oia sunset — the single most famous sunset in Europe. Arrive 90 min early for a spot on the castle side.", cost: "Free" },
      { icon: "🏘️", img: "santorini", text: "Fira → Oia caldera walk — 10km along the cliff edge with the volcano below you the whole way", cost: "Free (bus ~€2)" },
      { icon: "🍽️", img: "oia", text: "Caldera-view dinner in Oia — expensive, touristy, completely worth doing once", cost: "$60–90/person" },
      { icon: "🏖️", img: "oia", text: "Amoudi Bay — 300 steps below Oia, swim off the rocks, seafood tavernas at the waterline. 🆕 Now on the Sep 15 full day, with no flight waiting at the top of the steps.", cost: "Free" },
      { icon: "⛵", img: "santorini", text: "🆕 Caldera boat trip — sail to the volcano crater and the sulphur hot springs, swim off the boat. Only possible because of the second night, and it is the best thing on the island after the sunset.", cost: "~€35–60/person" },
      { icon: "🏨", img: "santorini", text: "Caldera-view room, 2 nights — pay for the view. It is the entire point of coming here.", cost: "$220–300/night" }
    ],
    tips: [
      "🆕 WHY THE SECOND NIGHT: the old plan checked out on the morning of Sep 15 and asked you to climb 300 steps out of Amoudi Bay with a flight to Rome that afternoon. It was the single tightest day of the trip. Sep 15 is now a full, bag-free island day and Sep 16 is a slow departure.",
      "🌅 Two nights means TWO sunsets. Do the famous castle-side one on Sep 14 and watch the second from a caldera bar in Imerovigli or from a boat — same sun, a fraction of the crowd.",
      "Book the Oia hotel AND the sunset-window dinner table well ahead — both sell out in September, and now you are holding two nights.",
      "Fly, don't ferry. The ferry is 4h30–8h and would eat the day the second night just bought you.",
      "Stay in Oia or Imerovigli, not Fira — you want to walk to the sunset, not bus to it.",
      "Santorini→Rome direct is SEASONAL. Verify Sep 16 exists before you build the day around it; the fallback via Athens costs 3 extra hours.",
      "Luggage and Oia's stepped lanes do not mix. Arrange the hotel transfer, and ask how close the car can actually get."
    ],
    selectedActivities: ["🌅 Oia sunset ×2", "⛵ Caldera boat + hot springs", "🏖️ Amoudi Bay", "Caldera dinner"]
  },
  {
    id: 7,
    city: "Rome",
    country: "Italy",
    emoji: "🏛️",
    mandatory: true,
    nights: 2,
    dates: "Sep 16–18 (Wed–Fri)",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    dailyCost: 340,
    accommodation: "Boutique hotel — Trastevere",
    accommodationCost: 155,
    transport: { from: "Santorini", how: "Fly JTR→FCO (~2h30 direct seasonal, or via Athens). Arrive Rome evening Sep 16." },
    dayByDay: [
      { day: "Sep 16 (Wed)", plan: "Arrive Rome evening from Santorini. Check in Trastevere. Evening walk + dinner in the cobbled streets. Gelato. ⚠️ Nothing ticketed today — the flight is seasonal and this is the buffer." },
      { day: "Sep 17 (Thu)", plan: "🔴 THE ONE BIG ROME DAY, and it works because the Vatican Museums are out. 09:00 COLOSSEUM + Roman Forum + Palatine Hill with the Samsung Oculus VR add-on inside the arena. Lunch. Afternoon: Circo Massimo AR — chariot races overlaid on the real ruins — then ST. PETER'S BASILICA (free) and the DOME CLIMB (€10), which is the best view in Rome. Evening: Pantheon (€5), Piazza Navona, and the Trevi Fountain after dark when the crowd thins. 🦕 Optional swap: the Museo Civico di Zoologia dino hall instead of Circo Massimo." },
      { day: "Sep 18 (Fri)", plan: "🆕 Morning flight Rome (FCO) → Geneva (1h50), then train Geneva→Visp→Zermatt (~3h40) on the Swiss Travel Pass. Arrive Zermatt late afternoon — in daylight, with the rental shops still open." }
    ],
    highlights: [
      { icon: "🔴", img: "colosseum", text: "MANDATORY: Colosseum + Roman Forum + Palatine Hill + VR Oculus in the arena", cost: "€18 entry + €30 VR = ~€48/person" },
      { icon: "⛪", img: "stpeters", text: "🆕 St. Peter's Basilica + the DOME CLIMB — this survives the Vatican cut, because it is not a museum. Free entry; the dome is €10 and 551 steps to the best view in Rome.", cost: "FREE · dome €10/person" },
      { icon: "🏎️", img: "circusmaximus", text: "Circo Massimo AR — augmented-reality chariot races on the actual site. Not a museum — you walk the ruins.", cost: "~€12/person" },
      { icon: "🏛️", img: "pantheon", text: "Pantheon — 2,000 years old and still intact, the best building in Rome", cost: "€5/person" },
      { icon: "🦕", img: "zoologiaroma", text: "🆕 Museo Civico di Zoologia — dino hall with 3D reconstructions, near Villa Borghese. NOW A REAL OPTION: with the Vatican Museums gone and London dropped, this is one of only two dinosaur stops left on the trip.", cost: "~€10/person" },
      { icon: "❌", text: "Vatican Museums + Sistine Chapel — REMOVED BY CHOICE. A statue-and-vitrine museum, which is not what you enjoy. Be aware the Sistine Chapel is inside them and goes with them.", cost: "€0 — saved ~€44 for 2" },
      { icon: "🌆", img: "trastevere", text: "Trastevere evenings — cobblestones, the best food in Rome, no tourist-trap menus", cost: "$35–55/person" }
    ],
    tips: [
      "🆕 WHY ROME IS 2 NIGHTS NOW: you cut the Vatican Museums, which were half of a whole day. That freed one night, and it went to Santorini. Rome is now arrival evening + one full day — tight but honest, because the single biggest time sink is gone.",
      "⚠️ THE SISTINE CHAPEL IS INSIDE THE VATICAN MUSEUMS. There is no separate entrance. If you change your mind about it you need to put the Rome night back, which means taking it from Santorini or Grindelwald.",
      "⛪ ST. PETER'S BASILICA IS NOT PART OF THE MUSEUMS — free entry, separate door, and it stays in the plan. Do the €10 dome climb: 551 steps, and it is the best view in the city. Dress code: covered shoulders and knees, enforced.",
      "✅ Sep 17 is a THURSDAY, which dodges the Wednesday Papal Audience — St. Peter's Square is given over to the audience ~09:00–12:00 on Wednesdays and the Basilica is closed or heavily restricted. Do not move this day to Wednesday.",
      "Colosseum: book the guided tour WITH the VR add-on at ancientandrecent.com — you asked for the immersive stuff and this is the best of it. Take the earliest slot; the whole day chains back from it.",
      "🔴 Sep 17 is a genuinely full day. If it overruns, the honest drop is Circo Massimo AR — the Colosseum, the dome and the Pantheon are the ones you came for.",
      "Eat anywhere except within 500m of the Trevi Fountain. That rule alone doubles the quality of your meals.",
      "Pompeii and the Borghese Gallery do not fit this version. They didn't fit at 3 nights either.",
      "🆕 Sep 18 is a flight to Geneva. Book an FCO→GVA departure before ~11:00 — later and you arrive in Zermatt after the ski-rental shops shut, which costs you 40 minutes of Saturday's short glacier window.",
      "Leave Rome for the airport by 07:00 on Sep 18. Leonardo Express Termini→FCO is 32min, €14 — don't take a taxi."
    ],
    selectedActivities: ["🔴 Colosseum VR Sep 17 (MANDATORY)", "⛪ St. Peter's + dome climb", "Circo Massimo AR", "Pantheon", "❌ Vatican Museums REMOVED"]
  },
  {
    id: 8,
    city: "Berner Oberland — Grindelwald",
    country: "Switzerland",
    emoji: "🏔️",
    mandatory: true,
    nights: 4,
    dates: "Sep 18–22 (Fri–Tue)",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    dailyCost: 340,
    accommodation: "🆕 Guesthouse / Airbnb in Grindelwald — ONE base, all four nights",
    accommodationCost: 210,
    transport: { from: "Rome", how: "🆕 Flight FCO→Geneva (1h50), then train Geneva→Bern→Interlaken Ost (~2h) and Interlaken→Grindelwald (35 min). ✅ ZERMATT REMOVED: the old routing added 3h25 of rail on arrival plus a whole transfer day on Sep 20. This is ~2h35 of rail and then you do not touch a train station with luggage again until Sep 22." },
    dayByDay: [
      { day: "Sep 18 (Fri)", plan: "🆕 Fly Rome→Geneva in the morning, train Geneva→Bern→Interlaken Ost→Grindelwald, arrive ~15:15 — about an hour earlier than the Zermatt routing managed. 🧳 Bags into the room and that is the last you see of them until Tuesday. 🛷 PFINGSTEGG TOBOGGAN if you have the energy: its own cable car from the village every 15 min, 736m run, 40 km/h, ~CHF 10 a go, ~5 min queues. Be up by 16:00 — it closes ~17:00. Otherwise: village walk directly under the Eiger north face, early dinner, sleep." },
      { day: "Sep 19 (Sat)", plan: "🏔️ FIRST DAY, then the pool. 🧳 FIRST THING: check out of last night's guesthouse and walk all four bags the ~10 min to the HOTEL SPINNE — check-in is 15:00 but reception holds luggage from the morning. You are in three different places this leg, so there is no room to come back to. Then go up empty-handed. 08:00 FIRST GONDOLA, be on the first cabin. 🚶 FIRST CLIFF WALK — steel walkway bolted to a vertical cliff, ~30 min, the closest you get to the Eiger north face on foot. 🎿 FIRST FLIEGER — 800m at 84 km/h, head-first at the Eiger. 🛴 MOUNTAIN CART + TROTTIBIKE — 🔴 ride these BEFORE 10:00; by mid-day the queue reaches 110 minutes. 💧 THEN THE THING ZERMATT USED TO COST YOU: hike to BACHALPSEE, ~1h each way on an easy path from First. It is the mirror lake that reflects the Eiger, Mönch and Jungfrau — the most photographed view in Switzerland, and it is free. Back down mid-afternoon. 🏊 ~16:00 COLLECT YOUR ROOM AT THE HOTEL SPINNE (✅ booked, $544) — the bags have been at reception since morning. HEATED OUTDOOR INFINITY POOL with the Eiger straight ahead, plus whirlpool, Finnish and alpine-herb saunas, steam room and an ice Kneipp room. 🔴 The spa closes at 21:00, so this is the whole evening: you come off the mountain with wrecked legs and get into hot water looking at exactly what you just walked." },
      { day: "Sep 20 (Sun)", plan: "🪂 INTERLAKEN DAY. 🧳 Morning: check out of the Spinne (~10:00) and walk the bags ~10 min to guesthouse B, your last Grindelwald stay — leave them there and travel with a daypack. 🔴 Confirm at booking that B takes luggage before check-in. Train down (35 min). ⏰ Book the paraglide for ~13:00, which leaves the Spinne checkout completely unhurried. TANDEM PARAGLIDE FROM BEATENBERG: 20–30 min over Lake Thun and Lake Brienz with the Eiger–Mönch–Jungfrau wall behind you. ⚠️ Allow 2h–2h30 door to door: check-in 15 min · minibus up 25–30 min · briefing and wait 15–30 min · flight · landing and photos 15 min. Then choose: ⛵ LAKE BRIENZ CRUISE (turquoise glacial water, covered by the pass) or 🚡 HARDER KULM (10-min funicular to the two-lake panorama). 🍫 FUNKY CHOCOLATE CLUB in the late afternoon — make and take home your own bars. Back to Grindelwald for dinner." },
      { day: "Sep 21 (Mon)", plan: "🏔️ LAUTERBRUNNEN VALLEY + SCHILTHORN — the day the Zermatt version had no room for. Train to Lauterbrunnen (~40 min): 72 waterfalls, and STAUBBACH drops 300m off a vertical wall right behind the village, free from the street. 💧 TRÜMMELBACH FALLS (~CHF 14) — glacier meltwater carved INSIDE the mountain, lift-accessed. Then cable car up via Mürren — a car-free village pinned to a cliff with no access road — to 🏔️ SCHILTHORN / PIZ GLORIA, 2,970m: a 360° revolving restaurant, a James Bond filming location, and a panorama of roughly 200 peaks that many rate the best single view in the region. 🎫 50% off with the Swiss Travel Pass. ⚠️ ALTERNATIVE: swap this for JUNGFRAUJOCH, the 'Top of Europe' at 3,454m — see the tips for which one to pick." },
      { day: "Sep 22 (Tue)", plan: "🚞 GOLDENPASS DAY. Check out unhurried, 09:37 train to Interlaken Ost. 🚞 GOLDENPASS EXPRESS — take the 11:07 now that the chocolate workshop moved to Sunday: gauge-changing panoramic coaches over the Simmental, opening onto Lake Geneva. Montreux ~14:25 → Geneva ~15:40 → TGV Lyria → PARIS GARE DE LYON ~19:30, which leaves you an evening in the Marais instead of a midnight arrival. The 14:07 remains the fallback (Paris ~22:00). ❌ The 16:07 still does not work — Montreux ~19:20, after the last TGV out of Geneva." }
    ],
    highlights: [
      { icon: "🪂", img: "paragliding", text: "TANDEM PARAGLIDE FROM BEATENBERG — Sun Sep 20, 20–30 min over Lake Thun and Lake Brienz with the Jungfrau massif behind. The green-and-turquoise Switzerland you actually pictured. Chosen over the Grindelwald First flight, which launches higher at the Eiger north face but has no lakes and costs ~CHF 50/person more.", cost: "~CHF 180–190/person" },
      { icon: "🏔️", img: "schilthorn", text: "🆕 SCHILTHORN / PIZ GLORIA, 2,970m — 360° revolving restaurant, a Bond location, ~200 peaks in view. Reached via Mürren, a cliff village with no road. ✅ ONLY POSSIBLE BECAUSE ZERMATT CAME OUT — it was previously on the 'what you're not doing' list.", cost: "~CHF 54/person with the 50% pass discount" },
      { icon: "💧", img: "bachalpsee", text: "🆕 BACHALPSEE — the mirror lake reflecting the Eiger, Mönch and Jungfrau. ~1h walk each way from the top of the First gondola. The most photographed view in Switzerland, and it costs nothing.", cost: "FREE" },
      { icon: "🚶", img: "eiger", text: "First Cliff Walk — steel walkway bolted to a vertical cliff, included with the gondola", cost: "Included (gondola ~CHF 43, 50% off with the pass)" },
      { icon: "🎿", img: "ziplinegen", text: "First Flieger zipline — 800m, 84 km/h, head-first at the Eiger", cost: "~CHF 31/person" },
      { icon: "🛴", img: "grindelwald", text: "Mountain cart + Trottibike — downhill from First. Ride before 10:00 and the 110-minute mid-day queue never happens to you.", cost: "~CHF 19/person each" },
      { icon: "🛷", img: "rodelbahn", text: "Pfingstegg Rodelbahn — 736m alpine toboggan, 40 km/h, you control the brake. Its own cable car from the village, ~5-min queues.", cost: "~CHF 10/run + ~CHF 34 cable car" },
      { icon: "🏞️", img: "staubbach", text: "Lauterbrunnen — the valley of 72 waterfalls. Staubbach falls 300m off a vertical wall behind the village, free. Trümmelbach is glacier meltwater carved inside the mountain.", cost: "Free · Trümmelbach ~CHF 14/person" },
      { icon: "⛵", img: "brienz", text: "🆕 Lake Brienz cruise — turquoise glacial water, and scheduled boat services are FULLY covered by the Swiss Travel Pass.", cost: "Covered by the pass" },
      { icon: "🚡", img: "harderkulm", text: "Harder Kulm — 10-min funicular to the two-lake panorama. Also the weather fallback if the paraglide is scrubbed.", cost: "~CHF 38/person return, 50% off with the pass" },
      { icon: "🍫", img: "chocolate", text: "Funky Chocolate Club, Interlaken — hands-on workshop, you make and take home your own bars. 🆕 Moved to Sunday, so it no longer competes with a train.", cost: "~CHF 65/person" },
      { icon: "🚞", img: "goldenpass", text: "GOLDENPASS EXPRESS Interlaken→Montreux — gauge-changing panoramic coaches, the Bernese Oberland opening onto Lake Geneva. Your scenic train, and it is ON the route to Paris.", cost: "Base fare covered by the pass + CHF 20–35 seat reservation" }
    ],
    tips: [
      "✅ WHY ZERMATT CAME OUT, in one line: it cost 3h25 of rail on arrival plus an entire transfer day on Sep 20, for a 21km September glacier morning — and the skiing moved to Chile in August, where it is mid-winter and two full days. What you lose is real: the MATTERHORN, the Gornergrat railway and Chez Vrony. What you gain is a whole extra usable day, a single base for four nights, Schilthorn, Bachalpsee, Mürren and a lake cruise, and about $600.",
      "🏨 ONE BASE, FOUR NIGHTS. 🧳 This is the biggest quality-of-life change on the trip: bags go into the room on Sep 18 and come out on Sep 22. Everything — First, Interlaken, Beatenberg, Lauterbrunnen, Mürren, Schilthorn — is a day trip on the pass. Stay near Grindelwald station; the Firstbahn base is in the village too.",
      "🔴 THE 5-DAY SWISS TRAVEL PASS DOES NOT EXIST. Earlier versions of this plan said to buy one — that was wrong. Consecutive passes are 3, 4, 6, 8 and 15 days only: CHF 254 / 309 / 399 / 439 / 499 in 2nd class. Your Swiss block is five days, Sep 18–22, so you are choosing between a 4-day and a 6-day.",
      "🎫 THE PASS RECOMMENDATION: buy the 4-DAY (CHF 309) and ACTIVATE IT ON SEP 19, not Sep 18. Then buy the Sep 18 Geneva→Grindelwald arrival as an ordinary ticket (~CHF 60–72 full fare, and far less if you book a Supersaver in advance). That is roughly CHF 381/person against CHF 399 for the 6-day, and the four covered days are the ones carrying First, Schilthorn, the lake and the GoldenPass. ⚠️ Removing Zermatt WEAKENED the case for the pass — Geneva→Zermatt and Zermatt→Interlaken were the two most expensive rail legs on the trip and they are gone. Run your actual legs through sbb.ch before buying.",
      "🎫 WHAT THE PASS ACTUALLY COVERS — and it is not everything: ✅ FULLY covered — all trains, buses and boats nationwide, city transport in 90+ towns, 500+ museums, the GoldenPass Express base fare, the Lake Brienz cruise. ⚠️ HALF PRICE only — Grindelwald First, Schilthorn, Harder Kulm and most mountain lifts are 50% off, NOT free. Jungfraujoch is free only as far as Kleine Scheidegg, then 25% off the top section. ❌ NOT covered — the GoldenPass seat reservation (CHF 20–35, and it is mandatory), and ❌ there are NO restaurant or dining discounts of any kind. Budget for the mountains separately.",
      "💡 THE THIRD OPTION, worth ten minutes of your time: the HALF FARE CARD, CHF 150 for a whole month, gives 50% off nearly everything including the lifts. On a five-day stay with one long arrival leg it can land within CHF 20–40 of the pass. The pass wins on convenience — no tickets, no machines, no thinking — but it is not automatically the cheapest, and it is NOT mandatory.",
      "🏔️ SCHILTHORN vs JUNGFRAUJOCH — the honest comparison. SCHILTHORN: 2,970m, ~CHF 54/person with the pass, open cable car the whole way, a 360° revolving restaurant, ~200 peaks, and it comes bundled with Mürren and Lauterbrunnen in one day. JUNGFRAUJOCH: 3,454m, the highest railway station in Europe, reached through a 7km tunnel hand-dug inside the Eiger; the Sphinx observatory, an Ice Palace carved in the glacier, an outdoor snow plateau, and the 23km UNESCO-listed ALETSCH GLACIER, which is genuinely like nothing else — but ~CHF 150–200/person with the pass plus a mandatory CHF 10 reservation, and it needs a FULL DAY of its own. ⭐ TAKE SCHILTHORN. Not because Jungfraujoch is bad but because 4 nights give you exactly 3 full days and all three are already spoken for. Swapping it in means dropping the First day — trading the mountain cart, the zipline, the Cliff Walk and Bachalpsee for altitude and a glacier. Defensible, but that is the actual trade. 🔴 If you do go: check the jungfrau.ch webcams that morning. Cloud means CHF 200 for fog, with no refund.",
      "🌦️ FOUR DAYS IN ONE REGION IS WEATHER INSURANCE. Sep 19, 20 and 21 are interchangeable — check the forecast on arrival and put First and Schilthorn on the clear days, Interlaken and the chocolate workshop on the grey one. The Zermatt version had no such flexibility: a wet Sep 19 lost you the ski day and Gornergrat with no replacement.",
      "🪂 BOOK THE PARAGLIDE WITH FREE CANCELLATION and ask exactly where they meet you — several Interlaken operators collect at Interlaken Ost. ✅ You now have a three-day window (Sep 19, 20 or 21) to fit the flight into, which is the strongest possible protection for a wind-dependent activity. If all three blow out, Harder Kulm gives you the same two-lake panorama from the ground.",
      "🛴 Ride the mountain cart and Trottibike BEFORE 10:00 on Sep 19. Reported queues reach 110 minutes by mid-day. Being on the 08:00 gondola solves it for free.",
      "🔴 Book the GoldenPass seat reservation at sbb.ch — panoramic cars sell out, and the reservation is not covered by any pass.",
      "🍽️ Eat like a local or it gets expensive fast: Coop and Migros supermarkets do excellent packed lunches, and mountain restaurants cost about half at lunch what they cost at dinner. Switzerland is the priciest leg of this trip per night."
    ],
    selectedActivities: ["🏔️ First: Cliff Walk, Flieger, mountain cart (Sep 19)", "💧 Bachalpsee hike (Sep 19)", "🪂 Paraglide Beatenberg (Sep 20)", "⛵ Lake Brienz cruise (Sep 20)", "🍫 Funky Chocolate Club (Sep 20)", "🏞️ Lauterbrunnen + Trümmelbach (Sep 21)", "🏔️ Schilthorn / Piz Gloria (Sep 21)", "🛷 Pfingstegg toboggan", "🚞 GoldenPass Express (Sep 22)"]
  },
  {
    id: 9,
    city: "Paris",
    country: "France",
    emoji: "🗼",
    mandatory: true,
    nights: 4,
    dates: "Sep 22–26 (Tue–Sat)",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    dailyCost: 370,
    accommodation: "Airbnb 1BR — Le Marais or 11th arrondissement",
    accommodationCost: 185,
    transport: { from: "Grindelwald", how: "GoldenPass Express → Montreux → Geneva → TGV Lyria → Paris Gare de Lyon. Arrive ~22:00 Sep 22 on the 14:07, or ~19:30 on the 11:07." },
    dayByDay: [
      { day: "Sep 22 (Tue)", plan: "Arrive ~22:00 from Switzerland. Check in. Sleep — Disney starts early. ✅ Disney is Wednesday, so a Tuesday-night arrival costs you nothing. If you skipped the chocolate class and took the 11:07 GoldenPass, you're in the Marais by ~20:15 with an evening to spare." },
      { day: "Sep 23 (Wed)", plan: "🎡 DISNEYLAND PARK — the FULL day, 09:30 to close. This is the big park: Sleeping Beauty Castle, Big Thunder Mountain, Phantom Manor, Pirates of the Caribbean, Peter Pan, Hyperspace Mountain, Indiana Jones, Buzz Lightyear — ~15 headline attractions, the daytime parade, and 🌟 THE NIGHT SHOW projected onto the castle. ✅ Wednesday is one of the two lowest-crowd weekdays in September: 15–30 min waits. Be at rope drop 09:30 — the first 90 minutes run 5–10 min queues. RER A from Châtelet, €2.55." },
      { day: "Sep 24 (Thu)", plan: "🗼 EIFFEL TOWER DAY — LOCKED by the booking, and now it gets the whole day it deserves. Morning: Montmartre + Sacré-Coeur. Midday: Eiffel summit + 2nd floor decks in daylight. Afternoon: Champ de Mars, the Louvre pyramid from OUTSIDE (courtyard only — no museum), Seine river cruise. Evening: 🍽️ LE JULES VERNE, 8:00pm — ✅ BOOKED, and it has its own private lift in the south pillar, so no queue. Jacket required for men. Afterwards: the tower sparkles on the hour after dark — walk to Trocadéro for it." },
      { day: "Sep 25 (Fri)", plan: "🎢 DISNEY ADVENTURE WORLD — A FULL DAY, 09:30 to close. ✅ VERIFIED AGAINST THE PARK AS IT ACTUALLY IS: this park reopened 29 Mar 2026, refreshed 90%+ of its offering and nearly DOUBLED in size. It is no longer a half-day annexe. 13 attractions: 🆕 Frozen Ever After (boats through Arendelle under a 36m North Mountain with Elsa's ice palace), 🆕 Raiponce Tangled Spin, Ratatouille, Crush's Coaster, Tower of Terror, Avengers Flight Force, Spider-Man W.E.B., Cars ROAD TRIP, Cars Quatre Roues, RC Racer, Slinky Dog, Toy Soldiers, Tapis Volants. ⏰ ROPE DROP FROZEN EVER AFTER FIRST, then Crush's Coaster second — newest land and lowest capacity respectively, so they build the longest queues. Shows through the day: A Celebration in Arendelle, Mickey and the Magician, TOGETHER: A Pixar Musical, Stitch Live!. 🌊 FINISH ON DISNEY CASCADE OF LIGHTS — a 16-minute 360° nighttime spectacular on Adventure Bay with aquatic drones, water screens and pyrotechnics, staged at closing time. Get a lakeside spot ~30 min ahead; 360° staging means more room than a castle show, but it is popular. 🔴 DO NOT buy a second park for tonight hoping to catch both shows: Cascade of Lights and the castle's Tales of Magic run SIMULTANEOUSLY, ten minutes apart, and Disney states you need two days to see both. You already saw the castle on Sep 23 from a reserved spot. This is the other half of the pair." },
      { day: "Sep 26 (Sat)", plan: "✈️ PARIS → MADRID. Check out, metro line 14 direct to Orly (~25 min from central Paris), fly ORY→MAD. ⭐ Iberia 07:25→09:30 (~$198 for 2, full cabin bag included) lands you in Madrid with the whole day intact; the 10:55 Air Europa is the 2h00 fastest if you'd rather sleep in. Orly beats CDG twice over: shorter flight and half the transfer time." }
    ],
    highlights: [
      { icon: "🎡", img: "disneylandpark", text: "🆕 DISNEYLAND PARK — Wed Sep 23, full day. ~15 headline rides, the castle, the parade and the night show. Wednesday is one of the two quietest weekdays: 15–30 min waits.", cost: "Part of the 2-day ticket" },
      { icon: "🎢", img: "disneystudios", text: "🎢 DISNEY ADVENTURE WORLD — Fri Sep 25, a FULL day. Reopened 29 Mar 2026 having refreshed 90%+ of its offering and nearly doubled in size. 13 attractions across World of Frozen, Adventure Way, Worlds of Pixar, Avengers Campus and World Premiere. Ratatouille and Crush's Coaster exist nowhere else on earth.", cost: "1-day 1-park ticket, €89–114/person" },
      { icon: "🌊", img: "disneylandpark", text: "🌊 DISNEY CASCADE OF LIGHTS — Adventure World's own nighttime show, and the reason you don't need a park hopper. 16 minutes on Adventure Bay: aquatic drones, water screens, pyrotechnics, 360° around the lake. Included with park entry.", cost: "Included" },
      { icon: "❄️", img: "disneystudios", text: "❄️ FROZEN EVER AFTER + World of Frozen — opened 29 Mar 2026. Boat ride through Arendelle beneath a 36m North Mountain topped by Elsa's ice palace. 🔴 Newest thing in the park: rope-drop it first or expect the longest queue of your day.", cost: "Included" },
      { icon: "🍽️", img: "eiffel", text: "LE JULES VERNE — ✅ BOOKED Sep 24, 8:00pm. 2 Michelin stars inside the Eiffel Tower.", cost: "€295–330/person" },
      { icon: "🗼", img: "eiffel", text: "Eiffel Tower — summit + 2nd floor decks. Do this the same day as the dinner.", cost: "€29.40/person summit" },
      { icon: "⛵", img: "louvre", text: "Seine river cruise — 1h, the whole city from the water", cost: "~€17/person" },
      { icon: "🏘️", img: "sacrecoeur", text: "Montmartre + Sacré-Coeur — free, and the best panorama in Paris", cost: "Free" },
      { icon: "🖼️", img: "louvre", text: "Louvre — EXTERIOR ONLY (glass pyramid + courtyard). You said you don't like the museum; you're not going in.", cost: "Free" },
      { icon: "🥽", text: "Optional: Eclipso or The Gate VR — dark-room immersive / haptic free-roam", cost: "€28–32/person" }
    ],
    tips: [
      "✅ THE WHOLE RESTRUCTURE WAS BUILT AROUND THIS: Le Jules Verne is booked for Thu Sep 24, 8pm, and it pins Paris to Sep 22–26. Every other change on this trip had to work around that date. Nothing to rebook. Reconfirm 48h ahead — jacket required for men.",
      "✅ CORRECTED, AND THE CORRECTION MATTERS. Earlier versions of this plan described the second park as a half-day annexe that closes at 18:00 with ~6 rides, no castle and no nighttime show. That description was years out of date. Disney Adventure World reopened on 29 MARCH 2026, refreshed more than 90% of its offering, nearly DOUBLED in size, runs the same 09:30–21:00 hours as Disneyland Park, has 13 attractions, and has its OWN nighttime spectacular. Plan it as a full day.",
      "🔴 THE TWO NIGHTTIME SHOWS ARE SIMULTANEOUS — this is the fact that settles the whole ticket question. Disney Cascade of Lights starts in Adventure World at closing time, and Disney Tales of Magic starts on Sleeping Beauty Castle about ten minutes later. Disney states plainly that you need two days to see both. So a two-park ticket on Sep 25 would buy you NOTHING at night: you still could only watch one. ✅ Your structure already solves it — castle show Sep 23 from a reserved spot you have paid for, water show Sep 25. One each, on separate nights, which is the only way it works.",
      "🎟️ THEREFORE: TWO SEPARATE 1-DAY / 1-PARK TICKETS, NOT A HOPPER. Sep 23 = Disneyland Park (✅ bought, $213 for two including the reserved castle-show viewing). Sep 25 = Adventure World only, €89–114/person. Save the ~€20/person hopper — it cannot give you a second show, and both parks are full days in their own right.",
      "❄️ ROPE-DROP ORDER ON SEP 25 — this is the highest-leverage decision of the day. 1) Frozen Ever After, the newest ride in the park. 2) Crush's Coaster, which has the lowest capacity and builds a queue that never really clears. Everything else falls into place after those two. The first 90 minutes run 5–10 min waits on rides that hit 45+ by noon.",
      "💸 SKIP PREMIER ACCESS ULTIMATE ON SEP 25. It runs €110–230 per person by date, so €220–460 for the two of you, and it is aimed at Super Magic days when you'd otherwise face 90–120 min standby. You have a low-season Friday, 11.5 hours of park, and 13 attractions — the maths does not work. ✅ The sensible middle: buy a SINGLE Premier Access for Frozen Ever After only (~€10–25/person) if the queue looks bad when you arrive. Decide it that morning in the app, looking at real wait times, not now.",
      "🎟️ BUY: 2-day / 2-park ticket WITH the park-hopper upgrade, ~€170–210/person. The hopper is ~€20 and it is the single best-value add-on at Disney — it converts a dead Friday afternoon into a second evening in the good park, including a second night show.",
      "🌟 THE NIGHT SHOW ONLY EXISTS IN DISNEYLAND PARK. Both of your park days should therefore END in Disneyland Park. That is exactly what the Wed-full-day + Fri-hop shape gives you.",
      "✅ THE REBUILD IS FINISHED, NOT ONGOING. 'Walt Disney Studios is mid-rebuild, expect construction walls' was true when this plan was first written and is not true now — Disney Adventure World opened on 29 Mar 2026. Ratatouille and Crush's Coaster remain the two rides there you cannot experience anywhere else on earth, and Frozen Ever After and Raiponce Tangled Spin joined them.",
      "⏰ ROPE DROP MATTERS MORE THAN ANYTHING ELSE. The first 90 minutes of the day run 5–10 minute queues on rides that hit 45+ by noon. Being at the gate for 09:30 is worth more than any paid skip-the-line.",
      "🌊 DISNEY CASCADE OF LIGHTS is Adventure World's own nighttime spectacular on Adventure Bay — 16 minutes of aquatic drones, water screens and pyrotechnics, staged 360° around the lake, included with entry. It is the single biggest reason the plan changed: it makes Sep 25 a complete day that ends properly, with no need to run back to the castle. Take a lakeside spot ~30 min ahead; 360° staging means more room than a castle show, but Disney flags it as very popular.",
      "📅 CONFIRMED HOURS: both parks 09:30–21:00 on the late-September dates (August runs to 22:40 — September tapers by ~1h40). ✅ That shorter day is in your favour, not against it: the nighttime show lands at ~21:00 instead of ~22:40, so you're out at 21:15 and back in the Marais by ~22:15 rather than near midnight — which matters on Sep 25, with the Orly flight the next morning. 11.5 hours is more park than anyone can actually walk.",
      "⚠️ 'EXTRA MAGIC TIME' 08:30–09:30 IS FOR DISNEY HOTEL GUESTS ONLY. You're in a Marais Airbnb, so it does not apply to you. Plan on 09:30 as your entry and know that some people will already have been inside for an hour. Rope drop at 09:30 is still the single most valuable thing you can do — it just doesn't make you first.",
      "Book advance Disney tickets at disneylandparis.com — advance is €89–114/person/day versus €130+ at the gate. Transport: RER A from Châtelet-Les-Halles, €2.55/person, ~40 min. NEVER pay for the €23 shuttle.",
      "🗼 Sep 24 keeps the Eiffel Tower to itself — daylight summit, then the dinner, then the tower sparkling on the hour from Trocadéro. An earlier draft put Studios on this morning to free a day; it worked, but it cost you the tower in daylight and stacked a theme park in front of a $700 non-refundable dinner. Not worth it.",
      "Louvre: courtyard and pyramid from outside only — noted, no ticket booked.",
      "🥽 Eclipso or The Gate VR fits on Thursday afternoon if you skip the Seine cruise. Optional.",
      "🎃 One near-miss worth knowing: Disneyland Paris starts its Halloween season around Sep 26, the day you leave. You miss it by a day. Catching it would mean moving the booked dinner — not worth it."
    ],
    selectedActivities: ["🎡 Disneyland Park full day (Wed 23)", "🎢 Studios + hop (Fri 25)", "🍽️ Jules Verne ✅ BOOKED", "🗼 Eiffel Tower", "Montmartre", "Louvre exterior only"]
  },
  {
    id: 10,
    city: "Madrid — Final + Day Trips",
    country: "Spain",
    emoji: "🏰",
    nights: 3,
    dates: "Sep 26–29 (Sat–Tue)",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
    dailyCost: 230,
    accommodation: "Hotel — near Atocha (you need the AVE station for the day trips)",
    accommodationCost: 130,
    transport: { from: "Paris", how: "🆕 Flight ORY→MAD (2h00–2h05), Sat Sep 26 morning. Metro line 14 goes direct from central Paris to Orly in ~25 min. Iberia 07:25→09:30 or Air Europa 10:55→12:55, ~$198 for the two of you." },
    dayByDay: [
      { day: "Sep 26 (Sat)", plan: "🆕 Land Madrid morning or midday from Paris. Check in near Atocha. Afternoon: the Madrid you never got on Sep 2 — Royal Palace, Plaza Mayor, Puerta del Sol, Retiro Park. Evening: Mercado de San Miguel, or tapas in La Latina. ✅ This day exists because London came out." },
      { day: "Sep 27 (Sun)", plan: "🏰 TOLEDO DAY TRIP — 33 min each way on the AVE from Atocha, ~€14 each way. A complete walled medieval city on a rock in a river bend: the Gothic cathedral, the Alcázar, the Jewish quarter, and streets that have not changed shape in 500 years. The single best day trip in Spain. Go early, come back for dinner in Madrid. ⚠️ Book the AVE both directions in advance — the Toledo line is short and sells out on weekends." },
      { day: "Sep 28 (Mon)", plan: "🦕 DINOSAURS + SEGOVIA, or a deliberately slow last day — your call on the morning. 🦕 MUSEO NACIONAL DE CIENCIAS NATURALES (~€7): the paleontology hall has a full Diplodocus and the original Megatherium. This is now one of only two dino stops on the trip. Or 🏛️ SEGOVIA, 27 min on the AVE: a 2,000-year-old Roman aqueduct still standing without mortar, and the Alcázar that Disney used as a reference for Sleeping Beauty Castle — a nice bookend to Wednesday. ⚠️ Don't do both Segovia and the museum; pick one and keep the evening free. Repack properly. Early night." },
      { day: "Sep 29 (Tue)", plan: "✈️ MADRID → LIMA — Plus Ultra PU 0301, departs 11:00, lands Lima 16:10 the same day (12h 10m). Be at Barajas by 08:00. Trip ends." }
    ],
    highlights: [
      { icon: "🏰", img: "toledo", text: "🆕 TOLEDO — 33 min by AVE. Walled medieval city on a granite outcrop inside a river bend. Cathedral, Alcázar, Jewish quarter. The best day trip in Spain and it only exists because London came out.", cost: "~€28/person return + €14 cathedral" },
      { icon: "🏛️", img: "segoviaaqueduct", text: "🆕 SEGOVIA — 27 min by AVE. Roman aqueduct, 2,000 years old, still standing with no mortar. Plus the Alcázar that inspired the Disney castle.", cost: "~€26/person return + €9 Alcázar" },
      { icon: "🦕", img: "madriddino", text: "🆕 Museo Nacional de Ciencias Naturales — full Diplodocus and the original Megatherium. With London gone, this and Rome are your only dinosaur stops.", cost: "~€7/person" },
      { icon: "👑", img: "royalpalace", text: "Royal Palace of Madrid — Europe's largest functioning royal palace. Now on Sep 26 afternoon, with time to actually go in.", cost: "€14/person" },
      { icon: "🛡️", text: "Buffer before the flight — Sep 28 stays deliberately light. If anything slips earlier in the trip, it absorbs it.", cost: "Free" },
      { icon: "🥘", text: "Three Spanish dinners to finish — jamón, tortilla, vermut, and La Latina on a Sunday", cost: "$30–45/person" }
    ],
    tips: [
      "🆕 WHY MADRID GOT A THIRD NIGHT: London came out, and days freed after Sep 25 could only go here — Paris is pinned by the booked Jules Verne, so nothing could travel backwards to Greece or Switzerland. This is also the fix for a real gap: with Sep 2 a transit day and Sep 4–5 taken by your event, Madrid previously had almost no sightseeing time at all.",
      "🔴 STILL DO NOT COMPRESS THE LAST NIGHT. Sep 28 stays light and you fly out Sep 29 at 11:00. Three nights means the Toledo day is a bonus, not a raid on your buffer.",
      "🚄 BOOK BOTH DAY TRIPS ON THE AVE, NOT THE BUS. Toledo 33 min, Segovia 27 min, from Atocha and Chamartín respectively — check which station before booking the hotel. renfe.com, and book returns in advance.",
      "🏰 If you only do one day trip, do TOLEDO. Segovia is a great aqueduct and a great castle; Toledo is an entire intact city.",
      "⚠️ Segovia's AVE station (Guiomar) is ~6 km outside town — there's a connecting bus, so add 20 min each way. Toledo's station is a 15-min walk from the old town. That difference alone favours Toledo.",
      "🦕 The dino museum is the consolation for losing London's Natural History Museum. It is genuinely good and it is not the same thing — the NHM stays a headline reason for the UK trip.",
      "Be at Barajas by 8:00am on Sep 29 for the 11:00am departure — Terminal 4S, non-Schengen, allow the extra transfer time.",
      "Consolidate luggage the night of Sep 28, not the morning of Sep 29.",
      "Claim the VAT refund at the DIVA kiosks before security if you bought anything significant in Spain."
    ],
    selectedActivities: ["🏰 Toledo day trip (Sun 27)", "🏛️ Segovia or 🦕 dino museum (Mon 28)", "👑 Royal Palace", "🛡️ Buffer before the flight"]
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
      { name: "✅ PAID — Disneyland Park, Wed Sep 23 (1 park) + reserved castle-show viewing", price: "✅ $213 total for 2", note: "✅ BOUGHT: $80/person entry ($160) plus ~$53 for the two reserved castle-show spots. The $80 entry is a good advance price against a €130+ gate. 🌟 That reserved spot is worth more than it looks — the two parks' nighttime shows are simultaneous, so Sep 23 is your ONLY castle show, and you'll watch it seated instead of fighting for a view." },
      { name: "🔴 TO BUY — Disney Adventure World, Fri Sep 25 (1 park)", price: "€89–114/person", note: "🔴 THE ONE DISNEY TICKET STILL OPEN. A FULL day, not a half: the park reopened 29 Mar 2026, refreshed 90%+ of its offering, nearly doubled in size, and has 13 attractions plus its own nighttime show. Buy a plain 1-day 1-park ticket. disneylandparis.com, advance — the gate price is €130+." },
      { name: "❌ Park hopper / 2-park on Sep 25 — NOT NEEDED", price: "❌ saves ~€20/person", note: "❌ DON'T BUY IT, and the reason is decisive: 🔴 THE TWO NIGHTTIME SHOWS RUN AT THE SAME TIME. Cascade of Lights starts as Adventure World closes; Tales of Magic starts on the castle ~10 minutes later. Disney says outright you need two days to see both. A two-park ticket on Sep 25 cannot give you a second show — you would still watch only one. You already have the castle show on Sep 23 from a reserved spot." },
      { name: "❌ Premier Access ULTIMATE — skip it on Sep 25", price: "€110–230/person (€220–460 for 2)", note: "❌ Priced for Super Magic days where standby runs 90–120 min. You have a low-season Friday, 11.5 hours of park and 13 attractions. The maths does not work." },
      { name: "⚠️ Premier Access — single ride, Frozen Ever After only", price: "~€10–25/person", note: "✅ THE SENSIBLE MIDDLE, if any. Frozen Ever After is the newest ride in the park and will hold the longest queue of the day. Buy it in the app ON THE DAY and only if the real wait justifies it — it is dynamically priced. Rope-dropping it is free and usually works instead." },
      { name: "Eiffel Tower — Summit (lift)", price: "€29.40/person", note: "Book at toureiffel.paris. Sep 24 midday, before the dinner." },
      { name: "Eiffel Tower — 2nd floor (lift)", price: "€19.40/person", note: "The Jules Verne level. Separate booking from the restaurant." },
      { name: "Le Jules Verne", price: "€295–330/person", note: "✅ BOOKED Sep 24, 8:00pm. Tasting menu only. Jacket required for men." },
      { name: "Seine River Cruise (Bateaux Parisiens)", price: "~€17/person", note: "1h. Good Sep 24 afternoon filler before the dinner." },
      { name: "Eclipso / The Gate VR", price: "€28–32/person", note: "Optional — Thursday afternoon if you skip the Seine cruise." },
      { name: "Flight Paris Orly → Madrid", price: "~$99/person (~$198 for 2)", note: "🆕 Sat Sep 26. Iberia 07:25→09:30 or Air Europa 10:55→12:55 (2h00, the fastest). Orly beats CDG: shorter flight, and metro line 14 goes there direct in ~25 min. Iberia and Air Europa include a full cabin bag — Transavia is ~$45 cheaper but charges for the trolleys, which erases it." },
      { name: "Louvre", price: "€0 — EXTERIOR ONLY", note: "Courtyard + glass pyramid from outside. Not entering, per your call." }
    ]
  },
  {
    city: "Switzerland",
    flag: "🇨🇭",
    attractions: [
      { name: "🎫 Swiss Travel Pass — 4 DAYS ⭐ RECOMMENDED", price: "CHF 309/person (~$344)", note: "🔴 CORRECTED: THERE IS NO 5-DAY PASS. Consecutive durations are 3/4/6/8/15 days only — CHF 254/309/399/439/499 in 2nd class. Your Swiss block is 5 days (Sep 18–22). ⭐ Buy the 4-day and ACTIVATE IT SEP 19, then pay for the Sep 18 arrival separately: ~CHF 381/person all-in versus CHF 399 for the 6-day, and the four covered days carry First, Schilthorn, the lake boat and the GoldenPass." },
      { name: "🎫 Swiss Travel Pass — 6 days (alternative)", price: "CHF 399/person (~$444)", note: "The simpler option: activate Sep 18, covers everything including the arrival leg, nothing separate to think about. ~CHF 18/person more than the 4-day-plus-arrival route. Buy this if you would rather not deal with sbb.ch at all." },
      { name: "🎫 Half Fare Card (the third option)", price: "CHF 150/person (~$167)", note: "💡 Valid a whole month, 50% off nearly everything including the mountain lifts. On a 5-day stay with one long arrival leg it can land within CHF 20–40 of the pass. ⚠️ Removing Zermatt WEAKENED the pass case — Geneva→Zermatt and Zermatt→Interlaken were the two dearest rail legs and both are gone. Price your actual legs on sbb.ch before choosing." },
      { name: "🚂 Geneva → Interlaken Ost (Sep 18 arrival)", price: "~CHF 60–72/person full fare", note: "🆕 Buy this one separately if you take the 4-day pass. Much cheaper as an advance Supersaver on sbb.ch — often CHF 30–45." },
      { name: "🏔️ Schilthorn / Piz Gloria", price: "~CHF 54/person with the pass (~CHF 108 full)", note: "🆕 THE BIG ADDITION FROM DROPPING ZERMATT. 2,970m, 360° revolving restaurant, Bond filming location, ~200 peaks in view. 50% off with the Swiss Travel Pass. Mon Sep 21, reached via Lauterbrunnen and Mürren. schilthorn.ch" },
      { name: "🚡 First gondola (Grindelwald)", price: "~CHF 22/person with the pass (CHF 43 full return)", note: "🔴 CORRECTED: the pass gives 50% OFF, it is NOT free — an earlier version of this plan said 'covered', which was wrong. Includes the Cliff Walk. Sat Sep 19." },
      { name: "🎿 First Flieger zipline", price: "~CHF 31/person (~$35)", note: "800m at 84 km/h, head-first at the Eiger. jungfrau.ch" },
      { name: "🛴 Mountain cart / Trottibike", price: "~CHF 19/person each (~$21)", note: "Sat Sep 19 morning. Downhill from First. 🔴 Ride before 10:00 — reported queues hit 110 min by mid-day." },
      { name: "💧 Bachalpsee hike", price: "FREE", note: "🆕 ~1h each way on an easy path from the top of the First gondola. The mirror lake reflecting the Eiger, Mönch and Jungfrau — the most photographed view in Switzerland, and it costs nothing." },
      { name: "🛷 Pfingstegg toboggan (Rodelbahn)", price: "~CHF 10/run + ~CHF 34 cable car", note: "736m alpine slide, ~5-min queues. Fri Sep 18 on arrival, or any spare afternoon. Closes ~17:00 in September and shuts in bad weather — check pfingstegg.ch." },
      { name: "💧 Trümmelbach Falls (Lauterbrunnen)", price: "~CHF 14/person (~$16)", note: "Mon Sep 21. Glacier meltwater carved inside the mountain, lift-accessed. Staubbach Falls in the village is free and drops 300m." },
      { name: "⛵ Lake Brienz cruise", price: "FREE with the pass", note: "🆕 Sun Sep 20. Scheduled boat services on Swiss lakes are FULLY covered by the Swiss Travel Pass — one of the few things that genuinely costs nothing extra." },
      { name: "🚡 Harder Kulm", price: "~CHF 19/person with the pass (CHF 38 full return)", note: "10-min funicular to the two-lake panorama above Interlaken. Also the fallback if the paraglide is scrubbed for wind." },
      { name: "🍫 Funky Chocolate Club, Interlaken", price: "~CHF 65/person (~$72)", note: "🆕 Moved to Sun Sep 20, so it no longer competes with a train. Make and take home your own bars. funkychocolateclub.com" },
      { name: "🚞 GoldenPass Express seat reservation", price: "~CHF 20–35/person", note: "Tue Sep 22. ❌ NOT covered by any pass and it is MANDATORY on the panoramic coaches. The base fare IS covered. Reserve at sbb.ch — they sell out." },
      { name: "⚠️ Jungfraujoch 'Top of Europe' — left OUT, by day-arithmetic not by quality", price: "🔴 CORRECTED: ~CHF 150–200/person from Grindelwald with the pass (CHF 201–261 full) + CHF 10 mandatory seat reservation", note: "3,454m, the highest railway station in Europe, reached through a 7km tunnel hand-dug inside the Eiger and finished in 1912. INCLUDED: Sphinx observatory (3,571m), the Ice Palace carved inside the glacier, the outdoor snow Plateau, the Alpine Sensation walkway, a 360° cinema — and the real prize, the ALETSCH GLACIER, 23km long and UNESCO-listed. ⏰ A FULL DAY: ~45 min up via the Eiger Express from Grindelwald, then the tunnel section, plus 2h+ at the top. ❌ WHY IT IS OUT: your 4 nights give exactly 3 full days and all three are spoken for (First, Interlaken, Lauterbrunnen+Schilthorn). Adding it means dropping one. Schilthorn costs a quarter as much, rides in the open the whole way, and comes bundled with Mürren and Lauterbrunnen. 🔴 IF YOU DO GO: check the jungfrau.ch webcams THAT MORNING — cloud means you paid CHF 200 for fog and there is no refund. Otherwise save it for the week-long Swiss trip alongside Zermatt." },
      { name: "❌ Zermatt ski pass + rental + Gornergrat — REMOVED", price: "❌ saved ~$525 for 2", note: "🆕 Zermatt is out. The skiing moved to Chile in August, where it is mid-winter and two full days instead of one September glacier morning. Also gone with it: the Matterhorn, the Gornergrat railway and Chez Vrony — the honest cost of this decision." }
    ]
  },
  {
    city: "Rome",
    flag: "🇮🇹",
    attractions: [
      { name: "❌ Vatican Museums + Sistine Chapel", price: "€0 — REMOVED", note: "🆕 CUT BY CHOICE: a statue-and-vitrine museum, which is not what you enjoy. ⚠️ The Sistine Chapel is inside them and there is no separate entrance, so it goes too. Saves ~€44 for 2 and half a day — that half day is what let Rome drop to 2 nights." },
      { name: "St. Peter's Basilica + dome climb", price: "FREE (dome €10 lift/stairs)", note: "✅ STAYS — it is NOT part of the Museums and has its own door. Sep 17 afternoon. 551 steps to the best view in Rome. ⚠️ Avoid Wednesday mornings (Papal Audience); Sep 17 is a Thursday, which is why the day sits there. Dress code: covered shoulders and knees, enforced." },
      { name: "Colosseum + Forum + Palatine Hill", price: "€18/person", note: "coopculture.it. 🆕 Sep 17 THU — take the earliest slot, the whole day chains back from it." },
      { name: "Colosseum VR (Samsung Oculus)", price: "~€30/person add-on", note: "ancientandrecent.com — bundle with entry. Gladiators in the real arena. Sep 17 morning." },
      { name: "Circo Massimo AR Experience", price: "~€12/person", note: "circomaximoexperience.it — AR chariot races on the actual ruins. Sep 17 afternoon. 🔴 This is the honest drop if the day overruns." },
      { name: "Pantheon", price: "€5/person", note: "Timed entry online, no queue. Sep 17 evening." },
      { name: "🦕 Museo Civico di Zoologia (dinos)", price: "~€10/person", note: "🆕 NOW A REAL OPTION near Villa Borghese — with the Vatican Museums gone and London dropped, this and Madrid are your only dinosaur stops. Swap it in against Circo Massimo AR." },
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
      { name: "Oia sunset", price: "FREE", note: "🆕 TWICE — Sep 14 and Sep 15. Do the famous castle-side one first (arrive 90 min early), then a quieter spot in Imerovigli the second night." },
      { name: "🆕 Caldera boat trip — volcano + hot springs", price: "~€35–60/person", note: "🆕 Sep 15 afternoon. Only possible because of the second Santorini night. Sail into the crater, swim in the sulphur springs. The best thing on the island after the sunset." },
      { name: "🆕 Akrotiri excavation (optional)", price: "~€12/person", note: "Bronze-age town buried by the eruption. Alternative to the boat on Sep 15 if the sea is rough." }
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
      { name: "Sagrada Família + TOWER — ✅ PAID", price: "✅ $82 total for 2, towers included", note: "✅ BOUGHT. Thu Sep 3 — entry 11:45, TOWER 12:30. $41/person WITH the tower is a good price (the tower ticket normally runs €36–44/person all-in). 🗼 The 12:30 tower slot is separate from the 11:45 entry and non-transferable — be at the tower base by 12:20. Up by lift, down a narrow spiral staircase: no bags, and skip it if either of you dislikes heights." },
      { name: "Park Güell — Monumental Zone", price: "~€10–13/person", note: "🔴 NOW A FIXED PART OF SEP 3, NOT OPTIONAL — the 11:45 Sagrada slot pushed it into the 09:30 opening. ⚠️ IT IS TIMED ENTRY with capped capacity, sold in 30-minute slots. Book the 09:30 at parkguell.barcelona. 🎫 Choose 'Visita Park Güell' — the plain self-guided entry. NOT the guided tour (~€22–28 and a fixed 50–60 min group pace, which is the last thing you want with a non-transferable tower slot at 12:30), NOT the Casa Museo Gaudí combo (+~30 min you don't have today), NOT 'en grupo' (large-group rate), and definitely NOT the Catalan-language tour — Catalan is a separate language from Spanish." },
      { name: "AVE Madrid↔Barcelona — ✅ PAID", price: "✅ $243 total for 2, both directions (paid)", note: "✅ BOUGHT. Sep 2 Madrid→Barcelona and Sep 4 Barcelona→Madrid, 2h30 each way. ~$61/person per leg — a fair price for locking in the dates that carry your Sep 4–5 event. 🔴 Check the Sep 4 departure time against when your event starts: if it starts before midday you want the ~07:00, not the 09:00." },
      { name: "Royal Palace of Madrid", price: "€14/person", note: "🆕 Sep 26 afternoon — with three final nights there's now time to go inside, not just walk past." },
      { name: "🆕 AVE Madrid ↔ Toledo", price: "~€28/person return", note: "🆕 Sun Sep 27. 33 min each way from Atocha; the station is a 15-min walk from the old town. renfe.com — book both directions, the line is short and sells out at weekends." },
      { name: "🆕 Toledo Cathedral", price: "~€14/person", note: "Spanish Gothic at its peak. The Alcázar and the Jewish quarter are the other two things to see." },
      { name: "🆕 AVE Madrid ↔ Segovia", price: "~€26/person return", note: "🆕 Optional Sep 28. 27 min from Chamartín. ⚠️ Guiomar station is ~6 km outside town — add a 20-min bus each way. The aqueduct is free to stand under." },
      { name: "🆕 Alcázar of Segovia", price: "~€9/person", note: "The castle Disney used as a reference for Sleeping Beauty Castle. Nice bookend after Sep 23." },
      { name: "🦕 Museo Nacional de Ciencias Naturales (Madrid)", price: "~€7/person", note: "🆕 Sep 28. Full Diplodocus and the original Megatherium. With London gone, this and Rome are your only dinosaur stops." }
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
    verdict: "⚠️ TIGHTER THAN IT LOOKED — the real Sagrada ticket is 11:45 with the tower at 12:30, so the middle of Sep 3 is now spoken for and Park Güell moved to the 09:30 opening. The aquarium would have to displace the Gothic Quarter or Barceloneta in the late afternoon. Doable, but it is a straight either/or, not a bonus.",
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
    verdict: "❌ OFF THE TRIP — London was dropped entirely and saved for a dedicated UK trip. Kept here only so the comparison still makes sense: Barcelona is the better aquarium anyway.",
    rating: 3,
    onRoute: false
  }
];

// ============================================================
// SKIING — ❌ REMOVED FROM THIS TRIP. Moved to Chile, August 2026.
// Kept in full because the reasoning still matters: it is WHY Zermatt came out,
// and it is the reference for the Chile decision.
// ============================================================
const SKIING = {
  snowGuarantee: {
    title: "Why Glacier Snow is GUARANTEED (unlike those TikTok videos)",
    explanation: "The 'thin snow with grass showing' videos are from REGULAR ski resorts at 1,500–2,200m that haven't had fresh snowfall yet. A glacier is a completely different thing — a permanent body of compressed ice 20–100 metres deep that never fully melts. At 3,000–3,900m in September, night temperatures drop well below 0°C and refreeze the surface daily. You are skiing on ancient glacier ice, not on seasonal snowfall. This is exactly why national ski teams do their pre-season training on glaciers in September.",
    valSenalesNote: "Zermatt / Theodul Glacier (3,899m — your choice): the highest ski area in the Alps and open 365 days a year. ~21km of groomed piste in September. Because it's year-round there is zero opening-date risk — unlike Val Senales, which opens around Sep 19 and whose opening date routinely slips.",
    stelvioNote: "Reality check on timing: glacier lifts run roughly 07:00–13:00 in September and the snow softens by 11am. Be on the FIRST cable car. This is a spectacular half-day, not a full ski day — treat it as 'ski the Alps in summer with the Matterhorn beside you', not a ski week.",
    bottomLine: "✅ The physics above is still true — September glacier snow is guaranteed. The problem was never the snow, it was that a glacier morning is ~5 hours on ~21km with the lifts shutting at 13:00. Chile in August gives two full days on a mid-winter mountain for less money per ski day. That is why this section is now reference material rather than a plan."
  },
  recommendation: "❌ NO LONGER IN THIS TRIP — and the reasoning is worth keeping. Zermatt was chosen because it satisfied BOTH 'skiing matters' AND 'Switzerland matters' in one stop. It stopped making sense once the skiing moved to CHILE in AUGUST 2026, where it is mid-winter, two full days, and 120+ runs across the Tres Valles domain instead of one 21km September glacier morning. What Zermatt really cost inside the Eurotrip was not the ~$330 ski add-on — it was 3h25 of rail into a dead-end valley, a whole extra transfer day on Sep 20, and the priciest beds of the trip at $230–290/night. Removing it bought a single four-night base in the Berner Oberland plus Schilthorn, Bachalpsee, Mürren and a lake cruise. ⚠️ THE HONEST LOSS: the Matterhorn, the Gornergrat railway and Chez Vrony. Save them for the week-long Swiss trip.",
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
      { name: "Colosseum VR (Ancient & Recent) ✅", type: "Historic site VR", price: "~€30 add-on", desc: "Samsung Oculus inside the REAL Colosseum. Gladiators fight around you in the actual arena. 🆕 Sep 17 (Thu) morning.", rating: 5 },
      { name: "Circo Massimo AR ✅", type: "Historic site AR", price: "~€12/person", desc: "See-through AR walk — ancient chariot races overlaid on the real ruins. 🆕 Sep 17 afternoon. This is the honest drop if the one big Rome day overruns.", rating: 4 },
      { name: "Domus Aurea VR", type: "Underground historic VR", price: "~€20/person", desc: "Nero's Golden House, VR through 30 frescoed halls. Thu–Sun only, and Sep 17 is a Thursday — but ⚠️ Rome is down to 2 nights, so this now competes directly with the Colosseum day. Only if you drop something.", rating: 4 }
    ]
  },
  {
    city: "Paris", flag: "🇫🇷",
    options: [
      { name: "Eclipso (Bercy Village)", type: "Dark room immersive", price: "~€28/person", desc: "300–1,000m² total-immersion dark room. Thursday Sep 24 afternoon if you skip the Seine cruise — both Disney days are now full.", rating: 5 },
      { name: "The Gate VR", type: "Free-roam haptic", price: "~€32/person", desc: "100m² arena, haptic guns, latest headsets. Best pure VR in Paris. Same slot competition as Eclipso — pick one.", rating: 5 }
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
  { city: "Madrid", flag: "🇪🇸", status: "open", selected: true, name: "🆕 Museo Nacional de Ciencias Naturales ✅", highlight: "🆕 YOUR MAIN DINO STOP NOW. Paleontology hall with a full Diplodocus cast and the original Megatherium — the specimen the species was described from. Mon Sep 28, and it only fits because Madrid gained a third night when London came out.", admission: "~€7/person", rating: 4 },
  { city: "Rome", flag: "🇮🇹", status: "open", selected: true, name: "🆕 Museo Civico di Zoologia ✅", highlight: "🆕 NOW PLAUSIBLE — 5M specimens, dino section with interactive 3D reconstructions, near Villa Borghese. Cutting the Vatican Museums freed the time; swap it in against Circo Massimo AR on Sep 17.", admission: "~€10/person", rating: 3 },
  { city: "London", flag: "🇬🇧", status: "dropped", selected: false, name: "❌ Natural History Museum — OFF THE TRIP", highlight: "World-class dinosaur gallery, FREE entry, and the best of these by a distance. ❌ London was dropped and saved for a dedicated UK trip — this is the single biggest thing that decision costs you, and it is a headline reason to make that trip happen.", admission: "FREE (special exhibition ~£15)", rating: 5 },
  { city: "Paris", flag: "🇫🇷", status: "closed", name: "MNHN Galerie de Paléontologie", warning: "CLOSED Jan 2026 – late 2027 for renovation. Do NOT plan this.", alternative: "Grande Galerie de l'Évolution (same park, open) — €9/person. But you have no spare Paris time.", rating: 0 },
  { city: "Barcelona", flag: "🇪🇸", status: "open", selected: false, name: "Museu Blau", highlight: "4M+ specimens, strong paleontology, FREE Sunday afternoons. ❌ Still doesn't fit — even with the second Barcelona night, Sep 3 is already Sagrada Família, Park Güell, the Gothic Quarter and Barceloneta. And Sep 3 is a Thursday, so the free Sunday doesn't apply.", admission: "€6 (free Sun PM)", rating: 4 }
];

// ============================================================
// DINING
// ============================================================
const DINING = [
  { name: "Le Jules Verne", city: "Paris", location: "Eiffel Tower, 2nd floor — private elevator", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80", stars: 2, pricePerPerson: "€295–330", totalFor2: "~$660–740", description: "2 Michelin stars. Chef Frédéric Anton. Tasting menus only. You dine inside the Eiffel Tower with Paris at your feet.", mustBook: true, bookingNote: "✅ BOOKED — Thursday Sep 24, 8:00pm. Reconfirm 48h ahead. Jacket required for men.", priority: 1 },
  { name: "❌ Chez Vrony — OFF THE TRIP", city: "Zermatt, Switzerland", location: "Findeln hamlet, 2,130m above Zermatt", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", stars: 0, pricePerPerson: "$60–70", totalFor2: "~$130", description: "Michelin Guide-listed mountain restaurant with the Matterhorn from your table. ❌ Lost when Zermatt came out — one of the three honest costs of that decision, alongside the Matterhorn itself and the Gornergrat railway. Replace it with a mountain lunch at Schilthorn's revolving restaurant or at Bort above Grindelwald.", mustBook: false, bookingNote: "❌ Nothing to book. Kept here so the trade-off stays visible.", priority: 2 },
  { name: "Caldera-view dinner, Oia", city: "Santorini, Greece", location: "Oia clifftop", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80", stars: 0, pricePerPerson: "$60–90", totalFor2: "~$120–180", description: "Dinner over the caldera as the sun goes down. Expensive and touristy and completely worth doing once. 🆕 Sep 14 (Mon).", mustBook: true, bookingNote: "Book a sunset-window table days ahead for Sep 14 — every restaurant in Oia is full at 19:00. 🆕 The second night gives you an unbooked sunset on Sep 15 as well.", priority: 3 },
  { name: "Rooftop dinner, Sultanahmet", city: "Istanbul, Turkey", location: "Sultanahmet rooftop terraces", image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80", stars: 0, pricePerPerson: "$30–45", totalFor2: "~$60–90", description: "Hagia Sophia on one side, Blue Mosque on the other, the Bosphorus behind. Cheap by European standards, unmatched view.", mustBook: false, bookingNote: "Walk-in mostly fine. Go at sunset for the call to prayer across the city.", priority: 4 },
  { name: "Trastevere dinner", city: "Rome, Italy", location: "Trastevere backstreets", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", stars: 0, pricePerPerson: "$35–55", totalFor2: "~$70–110", description: "Cacio e pepe and carbonara done properly, on cobblestones, with no tourist-trap menu in sight. 🆕 Two Rome evenings now instead of three — use both of them here.", mustBook: false, bookingNote: "Mostly walk-in, but book the popular places (Da Enzo, Roma Sparita) a few days ahead. 🆕 Sep 16–17.", priority: 5 },
  { name: "Mercado de San Miguel", city: "Madrid, Spain", location: "Near Plaza Mayor", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80", stars: 0, pricePerPerson: "$25–40", totalFor2: "~$50–80", description: "Madrid's best tapas market under a glass-and-iron roof. 🆕 Now on Sep 26, your first evening back in Madrid — Sep 2 is a transit day straight to Barcelona.", mustBook: false, bookingNote: "Walk-in. Busy after 21:00.", priority: 6 }
];

// ============================================================
// SPENT SO FAR — actually-paid amounts, not estimates
// ------------------------------------------------------------
// Only put a number in `amount` when real money has left the account
// and you know the figure. Things that are booked but whose price was
// never recorded go in with amount: null — they still show, because a
// tracker that quietly omits them would understate the committed total.
// ============================================================
const SPENT = {
  updated: "Aug 3, 2026",
  items: [
    { what: "🎡 Disneyland Park, Wed Sep 23 (1 park, 2 pax) + reserved castle-show viewing", when: "Wed Sep 23", amount: 213, note: "$80/person entry = $160, plus ~$53 for the two reserved castle-show spots. ✅ That reserved spot is what makes the Sep 25 decision easy: the two nighttime shows are SIMULTANEOUS, so you were always going to need two days to see both. You have them." },
    { what: "🏠 Airbnb Barcelona, 2 nights — near the Cathedral", when: "Sep 2 → Sep 4 · in 15:00 · out 11:00", amount: 272, note: "$136/night, BELOW the $140–180 this plan estimated. Gothic Quarter location: the Cathedral, La Boqueria and the Barceloneta walk are all on your doorstep, and Sants is a straight L3 ride. Neither check-in nor check-out conflicts — you arrive ~19:30 on Sep 2 and leave on a morning train on Sep 4." },
    { what: "🚄 AVE Madrid↔Barcelona, both directions (2 pax)", when: "Sep 2 + Sep 4", amount: 243, note: "Round trip, both legs, both people — ~$61/person per leg. Inside the $120–280 round-trip estimate the plan carried. 🔴 Still to check: whether the Sep 4 departure is early enough for your Madrid event." },
    { what: "⛪ Sagrada Família + tower (2 pax)", when: "Thu Sep 3 · entry 11:45 · tower 12:30", amount: 82, note: "$41/person WITH the tower — a good price; that add-on normally runs €36–44/person all-in. Both slots are timed and the tower one is separate and non-transferable." },
    { what: "✈️ Lima ↔ Madrid round-trip, Plus Ultra (2 pax) — the biggest single line", when: "Sep 1 out · Sep 29 back", amount: 2022, note: "$1,968 for both people both ways, plus ~€50 (~$54) for seat selection. 🎯 A genuinely good buy: comparable dates and airlines were quoting ~$1,700 PER PERSON ($3,400 for two), so the offer saved roughly $1,400. ⚠️ It still exceeds the $1,300–1,800 this plan estimated — that range was too optimistic for LIM–MAD in September, not a sign you overpaid." },
    { what: "🏊 Hotel Spinne Grindelwald, 1 night — infinity pool with Eiger view", when: "Sat Sep 19 → Sun Sep 20 · check-in 15:00", amount: 544, note: "4★ at the foot of the Eiger north face. Heated OUTDOOR infinity pool with an unobstructed Eiger panorama, plus whirlpool, Finnish and alpine-herb saunas, steam room, ice Kneipp room. 🔴 Spa and pool open 12:00–21:00 only. ~$334 above the $180–240/night this leg budgets — bought deliberately for the one thing four nights of guesthouse could not provide." },
    { what: "🍽️ Le Jules Verne (2 pax)", when: "Thu Sep 24, 20:00", amount: 705, note: "~$353/person for the tasting menu, 2 Michelin stars, inside the Eiffel Tower. Inside the $660–740 estimate. 🔴 This is the fixed point the whole itinerary was rebuilt around — it pins Paris to Sep 22–26. Reconfirm 48h ahead; jacket required for men." },
    { what: "✈️ Madrid → Craiova, one way (2 pax)", when: "Sat Sep 5, 20:00", amount: 215, note: "~$107/person one way, lands ~midnight. 🔴 The one thing still outstanding on this leg is not the ticket — it's the airport pickup. Book it before you fly; taxis are scarce at Craiova at that hour." }
  ],
  note: "✅ Every committed booking now carries a real figure — there is nothing left in the 'booked but unpriced' column. The confirmed total is now a complete picture of money already spent, not a floor."
};

// ============================================================
// BUDGET
// ============================================================
const BUDGET = {
  categories: [
    { label: "✅ PAID — Flights: Lima↔Madrid round-trip (×2)", min: 2022, max: 2022, note: "✅ BOOKED AND PAID: $1,968 for two, both directions, Plus Ultra PNR XYJSDU, plus ~€50 (~$54) for seat selection. 🎯 Well bought — the comparable market was ~$1,700/person ($3,400 for two) and he caught an offer, saving ~$1,400. ⚠️ BUT it lands $222 above the $1,300–1,800 this plan had estimated. That estimate was too low for LIM–MAD in September; the overrun is my forecast being wrong, not a bad purchase. This is now a fixed number and the single largest line in the budget." },
    { label: "Accommodation (27 nights, 2 pax)", min: 3956, max: 5156, note: "✅ HOTEL SPINNE IS PAID: $544 for Sep 19, the one night with an outdoor infinity pool facing the Eiger. That is 2.3–3× the $180–240 nightly budget for this leg, spent knowingly on ONE night rather than spread over four. 🆕 Grindelwald is now three separate stays (Sep 18 · Spinne Sep 19 · Sep 20–22), and the floor on the other three dropped to $150 because going cheaper there is the easiest way to offset it. Swiss leg: $1,024–1,264 against $720–960 budgeted. ✅ BARCELONA IS PAID: $272 for both nights, i.e. $136/night against a $140–180 estimate — the first booking to come in UNDER plan (min −$8, max −$88). 🆕 LONDON'S 2 NIGHTS ($360–460) CAME OUT and were redistributed: Santorini +1 ($220–300), Grindelwald +1 ($180–240), Madrid-end +1 ($110–150), Rome −1 (−$140–190). Net roughly +$10–40 — the two extra experience nights are essentially free because London paid for them. 🆕 ZERMATT REMOVED: its 2 nights at $230–290 became 2 more Grindelwald nights at $180–240, saving ~$100–100 and collapsing the Swiss leg to a single base. Santorini is now the most expensive bed on the trip." },
    { label: "Food (28 days)", min: 2040, max: 2900, note: "🆕 −$80–120: two London days at London prices became Madrid days at Madrid prices. Airbnb kitchen in Paris + supermarket lunches in Switzerland still save the most." },
    { label: "Intra-Europe transport (9 flights + 3 train legs)", min: 1718, max: 2168, note: "✅ MADRID→CRAIOVA IS PAID: $215 for two one-way (~$107/person), against a ~$150–300 allowance — min +$65, max −$85. ✅ THE AVE IS PAID: $243 for both Madrid↔Barcelona legs, so a $120–280 estimate became a fixed number (min +$123, max −$37). Remaining: the Eurostar and the London→Madrid flight are gone with London, replaced by one ORY→MAD hop (~$198 for 2) — Orly over CDG, 2h00 flight and metro line 14 straight there. Book the rest 2–3 months out." },
    { label: "🎈 Cappadocia sunrise balloon (2 pax)", min: 440, max: 620, note: "~€200–280/person for a standard 1-hour sunrise flight, Fri Sep 11. Government-regulated pricing, so shop on operator reputation and basket size, not price." },
    { label: "Activities (Disney ×2 days, Colosseum VR, Toledo, Segovia, Acropolis, Göreme, Hagia Sophia…)", min: 1643, max: 2291, note: "✅ DISNEY SEP 23 IS PAID: $213 for two ($160 entry + ~$53 reserved castle-show viewing). The Disney structure also changed from one 2-day hopper (~$370–457) to two 1-park tickets ($213 paid + $194–248 for Sep 25) = $407–461, so min +$37 and max +$4. ✅ SAGRADA FAMÍLIA IS PAID: $82 for 2, replacing a $56–95 estimate (min +$26, max −$13). Vatican Museums removed (−$48 for 2). Added: Disney park-hopper upgrade (+$45), Santorini caldera boat (+$80–130), Toledo and Segovia AVE + entries (+$120–160), the two dinosaur museums (+$35), Trümmelbach Falls (+$32). Warner Bros and the Tower of London are gone with London." },
    { label: "✅ PAID — Jules Verne dinner (2 persons)", min: 705, max: 705, note: "✅ $705 paid, ~$353/person, inside the $660–740 estimate. Sep 24, 8pm — and the reason Paris could not move a single day in any restructure." },
    { label: "🎫 Swiss rail — 4-day Travel Pass + the Sep 18 arrival (×2)", min: 780, max: 850, note: "🔴 CORRECTED: there is NO 5-day Swiss Travel Pass (durations are 3/4/6/8/15 days). Buy the 4-DAY at CHF 309/person, activate Sep 19, and pay the Sep 18 Geneva→Grindelwald arrival separately (~CHF 60–72, less on an advance Supersaver): ~CHF 381/person all-in against CHF 399 for the 6-day. ⚠️ Dropping Zermatt WEAKENED the pass case — Geneva→Zermatt and Zermatt→Interlaken were the two dearest rail legs and both are gone. The Half Fare Card (CHF 150/month, 50% off nearly everything) can land within CHF 20–40 — worth ten minutes on sbb.ch before you buy." },
    { label: "🏔️ Switzerland — paragliding, Schilthorn, toboggan, cart, chocolate, lifts", min: 800, max: 1010, note: "🆕 REBUILT WITHOUT ZERMATT. Paraglide from Beatenberg ~CHF 180–190/person ($400–430) · 🆕 SCHILTHORN/Piz Gloria ~CHF 54/person with the pass ($120) · Pfingstegg cable car + 3–4 runs ($90–125) · mountain cart + Trottibike ($85) · First gondola at 50% + Cliff Walk + Flieger ($120) · chocolate workshop ($130–160) · Trümmelbach ($32) · Harder Kulm ($45). 🆕 Bachalpsee and the Lake Brienz cruise cost nothing — the lake boat is fully covered by the pass. ❌ Ski pass, rental and Gornergrat all removed: −$525." },
    { label: "🧳 Cabin-bag fees + luggage storage", min: 90, max: 170, note: "🆕 DOWN, because the easyJet London→Madrid leg is gone and Iberia/Air Europa on ORY→MAD both include a full cabin bag. Your 10kg trolleys are still NOT the free bag on Ryanair/Vueling/Wizz/Transavia — those include one small under-seat bag only, so a trolley is a paid 'large cabin bag' at ~€25–35 each, per flight. Plus €3–10 of locker/storage on the days you're between hotels." },
    { label: "Misc (travel insurance, SIMs, tips, gifts)", min: 500, max: 800, note: "Travel insurance STRONGLY recommended — 11 separate transport legs." }
  ],
  total: { min: 14694, max: 18692, target: 15000 },
  savingTips: [
    "📊 WHAT DROPPING LONDON ACTUALLY DID TO THE MONEY — READ THIS ONE. London cost about $900–1,000 all-in (2 hotel nights $360–460, food ~$300, Warner Bros $136, Tower of London ~$88, minus the transport swap). That money did NOT come back to you: it was reinvested into the second Santorini night, the second Grindelwald night, the 5-day Swiss pass, the Toledo and Segovia day trips and the Disney hopper. Net effect on the total is roughly flat — the minimum drops only ~$110. You traded two nights of London for two much better days elsewhere, at about the same price.",
    "✅ $4,296 CONFIRMED PAID — AND EVERY COMMITTED BOOKING NOW HAS A REAL FIGURE: Lima↔Madrid flights $2,022 · Le Jules Verne $705 · 🆕 Hotel Spinne $544 · Barcelona Airbnb $272 · AVE $243 · Madrid→Craiova $215 · Disneyland Park Sep 23 $213 · Sagrada Família $82. That is 29% of the target, and there is nothing left in the 'booked but unpriced' column — the number you see is the number you have spent.",
    "🎯 TARGET IS $15,000 WITH A CUSHION — not a hard ceiling. ✅ THE FLOOR IS BACK UNDER IT: $14,694. Building the per-city lodging table exposed that the accommodation line had drifted $350–520 above the sum of its own rows across many edits — corrected, and the correction more than absorbed the Spinne night. Realistic landing ~$16,200–16,900, ceiling $18,692 (every category topping out at once, which does not happen). Expect roughly $1,400–2,000 into the cushion. ✅ With 25% of the trip paid and every committed figure known, that estimate is now built on real prices for the biggest lines rather than guesses — it will not swing much further.",
    "📉 THE FLIGHT MOVED THE FLOOR, AND I SHOULD SAY WHY. My $1,300–1,800 estimate for LIM↔MAD was too optimistic for September; the real market was ~$1,700/person and he bought well at $2,022 for two, saving ~$1,400 against the alternatives. But it still lifted the trip's floor by $722. When a forecast is wrong, the honest move is to correct the forecast, not to shave the itinerary to defend it.",
    "📈 ON THE OTHER FIVE BOOKINGS, THE EVIDENCE IS GOOD: the Barcelona Airbnb came in BELOW its estimated floor, Disney Sep 23 landed on its midpoint, Sagrada and the AVE slightly above. Only the long-haul flight broke its range, and it was the one line where the market, not the plan, set the price. Keep booking early — that is what holds the rest in the middle of the range.",
    "⚠️ THE TWO BIGGEST DISCRETIONARY LINES, so you know where the money is: the Cappadocia sunrise balloon ($440–620) and the Jules Verne dinner ($660–740, already committed and unrefundable). Neither is a mistake. Together they are ~$1,200, which is most of the gap between target and the realistic landing.",
    "🎯 LEVERS IF YOU EVER WANT THEM — kept on file, not recommended today: drop Segovia and just do the Madrid dino museum (~$60) · skip the chocolate workshop (~$145) · skip the Santorini caldera boat (~$100). ⚠️ Skipping the second Disney day is NOT on this list any more: Adventure World reopened 29 Mar 2026 as a genuine full-day park with 13 attractions and its own nighttime show. ✅ You have already banked the two big Disney savings by skipping the hopper (~€40) and Premier Access Ultimate (~€220–460).",
    "✅ WHAT THE RESTRUCTURE DID TO THE SCHEDULE (the real payoff): the trip's one hard deadline — the 14:07 GoldenPass — is gone entirely; the tightest day (Santorini's 300 steps in front of a flight) became a full island day; the mountain cart and Lauterbrunnen came back into Switzerland; Madrid went from almost no sightseeing time to three nights with Toledo; and Disney is now shaped correctly, with both parks getting a full day each and a different nighttime show on each of them.",
    "🎟️ Disney: two separate 1-day / 1-park tickets, no hopper. Sep 23 Disneyland Park is bought at $213 for two including reserved castle-show seating; Sep 25 needs an Adventure World ticket at €89–114/person. The two nighttime shows run simultaneously, so a hopper cannot buy you both — only two separate days can, which is exactly what you have.",
    "🔴 DO NOT claw money back by cutting a Grindelwald or Santorini night. Those two nights are what fixed the two most fragile days on the trip, and they cost ~$400 each in exchange for removing real risk.",
    "Second biggest: Zermatt lodging. Staying in Täsch (one stop down the valley) instead of Zermatt village saves ~$80/night.",
    "Book ALL intra-Europe flights and trains 2–3 months ahead. On this route that's worth $400–700 alone — prices roughly double inside 3 weeks.",
    "Free and worth doing: Montmartre, Sacré-Coeur, both Oia sunsets, the Blue Mosque, St. Peter's Basilica, Staubbach Falls in Lauterbrunnen, and standing under the Segovia aqueduct.",
    "Disneyland advance tickets: €89–114/person/day vs €130+ at the gate — and the 2-day/2-park ticket for Sep 23 + Sep 25 beats both.",
    "Airbnb with a kitchen in Paris (4 nights): save $20–40/day on breakfast versus a hotel.",
    "Switzerland: Coop/Migros supermarkets for packed lunches. Mountain restaurant lunch is ~50% the price of dinner — so make Chez Vrony your lunch, which is what the Sep 19 plan already does.",
    "🆕 The Swiss Travel Pass is now 5 days, not 4 — activate Sep 18 so it runs Sep 18–22 and covers the Geneva→Zermatt arrival, both Grindelwald gondola days, Lauterbrunnen and the GoldenPass out. Activating a day late costs you ~$70 for nothing.",
    "Istanbul and Craiova are the cheap stops — don't economise there, economise in Switzerland."
  ],
  // Every `cost` here is the WHOLE-ROOM nightly rate for BOTH travellers,
  // not per person — same convention as the rest of the budget. He asked,
  // which means the table was not saying so clearly enough.
  hotelVsAirbnb: [
    { city: "Barcelona", nights: 2, recommendation: "✅ BOOKED — Airbnb, Gothic Quarter near the Cathedral", reason: "✅ PAID: $272 for both nights ($136/night, under the estimate). Same place both nights, which is what makes Sep 3 a bag-free day. The Gothic Quarter is better than the Eixample for how this day actually runs: the Cathedral, La Boqueria and the walk to Barceloneta are all on foot, and Sants is a direct L3 ride for the Sep 4 train. ⚠️ The trade is the morning — Park Güell and Sagrada Família are both 25–35 min away, so Sep 3 starts with a commute.", cost: "✅ $136/night, paid" },
    { city: "Madrid (start)", nights: 1, recommendation: "🆕 Hotel near the event venue", reason: "🆕 Down to 1 night (Sep 4). Pick this one by where your event is, not by the station — you arrive by train on Sep 4 and leave for Barajas on Sep 5, so Atocha proximity no longer buys anything. Confirm they hold bags after checkout.", cost: "$120–150/night" },
    { city: "Craiova", nights: 3, recommendation: "Hotel near the venue", reason: "Wedding logistics beat everything. Cheapest stop of the trip.", cost: "$60–80/night" },
    { city: "Istanbul", nights: 2, recommendation: "Hotel — Sultanahmet", reason: "🆕 Down from 4 nights. With only one core day, staying inside Sultanahmet (walk to Hagia Sophia, Blue Mosque, Topkapi, the cistern) stops being a preference and becomes the plan.", cost: "$90–130/night" },
    { city: "Cappadocia", nights: 2, recommendation: "🆕 Cave hotel — Göreme or Uçhisar", reason: "🆕 The two nights Istanbul gave up. Pay for a cave room with an east-facing terrace — you watch Saturday's balloons rise over breakfast. Two nights also buys a second balloon morning if Friday is cancelled for wind.", cost: "$130–200/night" },
    { city: "Athens", nights: 2, recommendation: "Hotel — Plaka/Monastiraki", reason: "Rooftop with an Acropolis view is worth the small premium.", cost: "$110–150/night" },
    { city: "Santorini", nights: 2, recommendation: "🆕 Caldera-view hotel — Oia or Imerovigli", reason: "🆕 UP FROM 1 NIGHT. Pay for the view — it's the entire point of going, and now you get two sunsets from it. Book both nights in the same room so Sep 15 is a fully bag-free island day.", cost: "$220–300/night" },
    { city: "Rome", nights: 2, recommendation: "🆕 Boutique hotel — Trastevere", reason: "🆕 DOWN FROM 3. Cutting the Vatican Museums freed the day, and the night went to Santorini. Best food neighbourhood, walkable to everything — which matters more now that Rome is arrival evening plus one full day.", cost: "$140–190/night" },
    { city: "Grindelwald — night 1 (Sep 18→19)", nights: 1, recommendation: "Guesthouse near the station", reason: "🆕 THREE SEPARATE STAYS BY CHOICE — a different view and a different feel each time, rather than one room for four nights. This first one only has to do one job: be near the station for a ~15:15 arrival and near the Firstbahn for an 08:00 start. Go cheap here; the money is spent on Sep 19.", cost: "$150–240/night" },
    { city: "Grindelwald — Hotel Spinne (Sep 19→20)", nights: 1, recommendation: "✅ BOOKED — $544", reason: "✅ PAID, and the deliberate splurge of the trip. Bought for one thing: the heated OUTDOOR INFINITY POOL with an unobstructed Eiger panorama and a balcony view, which no guesthouse in the village offers. Also whirlpool, Finnish and alpine-herb saunas, steam room, ice Kneipp room. 🔴 Spa 12:00–21:00, check-in 15:00 — which is exactly why it lands on Sep 19: you come down from First and the Bachalpsee around 16:00 and walk straight in. ⚠️ 2.3–3× the $180–240 nightly budget, spent knowingly on one night rather than spread thin over four.", cost: "✅ $544, paid" },
    { city: "Grindelwald — nights 3–4 (Sep 20→22)", nights: 2, recommendation: "A third guesthouse — pick a different outlook", reason: "🆕 Sep 20 and 21, and the last one to book. 🧳 THIS IS THE ONE THAT MATTERS FOR BAGS: it takes your trolleys on the morning of Sep 20 and holds them through the Interlaken day trip, so ask at booking whether they will accept luggage before check-in. Going cheaper here is the easiest way to offset the Spinne.", cost: "$150–240/night" },
    { city: "Paris", nights: 4, recommendation: "Airbnb — Le Marais / 11th", reason: "🆕 Now Sep 22–26. Kitchen breakfasts across 4 nights, and easy RER A access for both Disney days.", cost: "$170–210/night" },
    { city: "Madrid (end)", nights: 3, recommendation: "🆕 Hotel near Atocha — NOT the airport", reason: "🆕 UP FROM 2 NIGHTS (London's). Atocha is now the right call rather than an airport hotel, because the Toledo AVE leaves from there and you arrive at a civilised hour from Orly instead of late at night. ⚠️ If you decide to do Segovia instead of Toledo, that one leaves from Chamartín — check before booking.", cost: "$110–150/night" }
  ]
};

// ============================================================
// BOOKING PRIORITY — today is late July 2026, several of these are URGENT
// ============================================================
const BOOKINGS = [
  { priority: 1, what: "🎈 CAPPADOCIA SUNRISE BALLOON — Fri Sep 11", when: "🔴 NOW — most urgent item on the list", urgency: "critical", note: "🆕 September is the peak flying month and the reputable operators (Butterfly, Royal, Voyager, Turquaz) sell out months ahead. Book the standard 1-hour sunrise flight for Fri Sep 11 and get the wind-cancellation policy in writing — a cancellation should be a full refund or a free move to Sat Sep 12, which is exactly why you have two nights there.", estimatedCost: "€200–280/person" },
  { priority: 2, what: "🆕 Cappadocia flights — IST→NAV/ASR (Sep 10 eve) + NAV/ASR→IST→ATH (Sep 12) as ONE ticket", when: "🔴 NOW", urgency: "critical", note: "🆕 Two new legs created by the Turkey change. Book the Sep 12 return as a SINGLE Turkish Airlines itinerary through Istanbul to Athens — separate tickets mean a missed connection is your problem, and there is no second flight that day that still gets you to Athens for dinner. Compare Nevşehir (NAV, 40min from Göreme) against Kayseri (ASR, 1h15 but more frequencies) on total cost including the shuttle.", estimatedCost: "$260–540 for 2 total" },
  { priority: 3, what: "🆕 Cave hotel, Göreme or Uçhisar — 2 nights (Sep 10 + 11)", when: "🔴 NOW", urgency: "critical", note: "🆕 Ask for an east-facing terrace room: you watch Saturday's balloons rise over breakfast even after flying on Friday. Confirm they run the 04:30 balloon pickup and a late check-in for the Thursday evening arrival.", estimatedCost: "$130–200/night" },
  { priority: 4, what: "🆕 Flight Rome (FCO) → Geneva (GVA), Fri Sep 18 morning", when: "🔴 NOW", urgency: "critical", note: "easyJet / ITA / Swiss, 1h50. 🆕 Now feeds Geneva→Bern→Interlaken→Grindelwald (~2h35), not the 3h40 into Zermatt. Take a departure before ~11:00 — with no ski rental to beat it is less critical than it was, but it still buys you the Pfingstegg toboggan on arrival afternoon.", estimatedCost: "$100–220 for 2" },
  { priority: 5, what: "Craiova midnight airport pickup (Sep 5)", when: "🔴 THIS WEEK", urgency: "critical", note: "You land at ~midnight. Taxis are scarce at Craiova at that hour. Arrange a transfer through your hotel now.", estimatedCost: "$25–50" },
  { priority: 6, what: "✅ DONE — Sagrada Família + TOWER, THU SEP 3 (entry 11:45 · tower 12:30)", when: "✅ Paid", urgency: "medium", note: "✅ BOUGHT — $82 for the two of you, towers included. 🔄 The 11:45 slot flipped the day: Park Güell now goes first at 09:30, then you cross to the Sagrada. 🗼 The 12:30 tower is a SEPARATE, non-transferable slot — be at the tower base by 12:20. Keep both QR codes offline on your phone.", estimatedCost: "✅ $82 paid" },
  { priority: 7, what: "🔴 Park Güell — 09:30 SLOT, THU SEP 3", when: "🔴 NOW — September mornings sell out", urgency: "high", note: "🆕 NEWLY REQUIRED. It was optional filler until the real Sagrada ticket came in at 11:45; now it anchors the morning. ⚠️ Timed entry, capped capacity, 30-minute slots — you cannot just turn up. 🎫 Buy 'VISITA PARK GÜELL', the plain self-guided entry. Not the guided tour (~€22–28, fixed 50–60 min group pace — the opposite of what you want in front of a non-transferable 12:30 tower slot), not the Casa Museo Gaudí combo (+30 min), not 'en grupo' (large-group rate), and not the Catalan-language tour — Catalan is a separate language from Spanish. parkguell.barcelona.", estimatedCost: "~€10–13/person" },
  { priority: 8, what: "🆕 Craiova → Bucharest OTP private transfer (Sep 8 morning)", when: "1–2 weeks ahead", urgency: "high", note: "🆕 3h by car, ~€90–130 for the two of you, hotel door to terminal. Book through the Craiova hotel or the wedding hosts. The train + airport bus is far cheaper but CFR runs late routinely — and this is the morning after two wedding days.", estimatedCost: "€90–130 total" },
  { priority: 9, what: "🪂 Tandem paraglide, Beatenberg/Interlaken — SUN SEP 20 midday", when: "1 month ahead, WITH free cancellation", urgency: "high", note: "🆕 NEW. ~CHF 180–190/person, 20–30 min over Lake Thun and Lake Brienz with the Jungfrau massif behind — the green-and-lakes flight, chosen over the Grindelwald First flight (higher and more dramatic at the Eiger north face, but no lakes and ~CHF 50/person more). Operators: Paragliding Interlaken, Twin Paragliding, Skywings. Book an EARLY slot and insist on free cancellation — it is weather-dependent and gets scrubbed for wind. If cancelled, Harder Kulm gives you the same panorama by funicular the same afternoon.", estimatedCost: "~CHF 180–190/person" },
  { priority: 10, what: "🍫 Funky Chocolate Club workshop, Interlaken — 🆕 TUE SEP 22, ~10:15", when: "2–3 weeks ahead", urgency: "medium", note: "🆕 MOVED off the old deadline day. Make-your-own-bar class, ~1h15, 20 min walk from Interlaken Ost, bags in the station lockers. It now has clear hours in front of the 14:07 GoldenPass instead of seventy minutes. Still the designated drop if anything slips. funkychocolateclub.com", estimatedCost: "~CHF 65/person" },
  { priority: 11, what: "🆕 Flight Paris Orly → Madrid, SAT SEP 26", when: "🔴 NOW", urgency: "high", note: "🆕 REPLACES the Eurostar and the London→Madrid flight. ORLY, not CDG: metro line 14 runs there direct in ~25 min and the flight is 2h00–2h05. ⭐ Iberia 07:25→09:30 (~$198 for 2, full cabin bag included) keeps the whole Madrid day; Air Europa 10:55→12:55 is the fastest. Transavia is ~$45 cheaper but charges for both trolleys, which erases it.", estimatedCost: "~$198 for 2" },
  { priority: 12, what: "🔴 Disney Adventure World — 1-DAY / 1-PARK ticket, FRI SEP 25", when: "🔴 NOW", urgency: "high", note: "🔴 THE LAST DISNEY TICKET OPEN. ✅ Sep 23 (Disneyland Park + reserved castle-show spot) is already bought. ❌ Do NOT buy a hopper and do NOT buy Premier Access Ultimate (€110–230/person): Adventure World reopened 29 Mar 2026 with 13 attractions and its own nighttime show, Disney Cascade of Lights, so Sep 25 is a self-contained full day. Just a plain 1-day 1-park ticket. ⏰ Rope drop 09:30: Frozen Ever After first, Crush's Coaster second. Only consider a single-ride Premier Access for Frozen, decided that morning in the app. disneylandparis.com.", estimatedCost: "€89–114/person" },
  { priority: 13, what: "🆕 Toledo — AVE both directions, SUN SEP 27", when: "1 month ahead", urgency: "high", note: "🆕 NEW, and only possible because London came out. 33 min each way from Atocha, ~€28/person return. The line is short and sells out at weekends, so book both directions now. renfe.com. Cathedral ~€14/person on the day.", estimatedCost: "~€28/person + €14 cathedral" },
  { priority: 14, what: "Colosseum + Roman Forum + VR add-on — 🆕 THU SEP 17, earliest slot", when: "NOW", urgency: "high", note: "🆕 Moved to Thursday and it is now the anchor of the ONLY full Rome day — take the earliest slot, everything chains back from it. Thursday also dodges the Wednesday Papal Audience, which matters because St. Peter's is on the same day. ❌ The Vatican Museums are no longer booked at all. ancientandrecent.com for the VR bundle, or coopculture.it for entry only.", estimatedCost: "~€48/person" },
  { priority: 15, what: "🆕 Santorini caldera-view hotel × 2 NIGHTS + sunset dinner table (Sep 14 + 15)", when: "NOW", urgency: "high", note: "🆕 UP FROM ONE NIGHT. Book both nights in the SAME room so Sep 15 is completely bag-free. Book the 19:00-window restaurant table for Sep 14; you now get a second, unbooked sunset on Sep 15. Also worth booking: the caldera boat trip to the volcano and hot springs (~€35–60/person) for Sep 15 afternoon — that trip is the whole reason for the extra night.", estimatedCost: "$220–300/night + $120–180 dinner" },
  { priority: 16, what: "🕌 Hagia Sophia + Topkapi timed entry (WED Sep 9)", when: "2–4 weeks ahead", urgency: "high", note: "🆕 Newly urgent. Istanbul is down to a single core day, so a 90-minute queue is no longer survivable. Book both online for Sep 9.", estimatedCost: "~€55/person combined" },
  { priority: 17, what: "Remaining intra-Europe flights: Craiova→Istanbul (Sep 8), Athens→Santorini (Sep 14), 🆕 Santorini→Rome (Sep 16)", when: "Within 2 weeks", urgency: "high", note: "🔴 Verify the seasonal Santorini→Rome direct operates on SEP 16 — the date moved when Santorini gained a night. If it doesn't run, route via Athens and add 3h; Rome is only 2 nights now, so an evening arrival is the plan either way.", estimatedCost: "$350–800 for 2 total" },
  { priority: 18, what: "Acropolis 8:00am timed entry (SUN Sep 13)", when: "1 month ahead", urgency: "medium", note: "Sunday — local crowds on top of the cruise groups. Timed entry is mandatory now: hhticket.gr. By 11am it's 30°C and full. The €30 combo also covers the Agora.", estimatedCost: "€20–30/person" },
  { priority: 19, what: "✅ DONE — AVE Madrid↔Barcelona, both directions (Sep 2 + Sep 4)", when: "✅ Paid", urgency: "medium", note: "✅ BOUGHT — $243 for the two of you, both legs. 🔴 ONE THING TO VERIFY: check the Sep 4 Barcelona→Madrid departure time against when your event actually starts. If it starts before midday you need the ~07:00 train, not the 09:00 — and a Renfe time change is cheap now and expensive later.", estimatedCost: "✅ $243 paid" },
  { priority: 20, what: "🎫 Swiss Travel Pass 4 DAYS (ACTIVATE SEP 19) + GoldenPass seat reservation (Sep 22)", when: "1 month ahead", urgency: "medium", note: "🔴 CORRECTED: THERE IS NO 5-DAY PASS. Durations are 3/4/6/8/15 days — CHF 254/309/399/439/499 in 2nd class. Buy the 4-DAY, activate SEP 19, and pay the Sep 18 Geneva→Grindelwald arrival separately (~CHF 60–72, or CHF 30–45 on an advance Supersaver): ~CHF 381/person against CHF 399 for the 6-day. ⚠️ The pass covers trains, buses, boats and the GoldenPass BASE fare — but mountain lifts are only 50% OFF, not free, and there are NO restaurant discounts. 🔴 The GoldenPass seat reservation (CHF 20–35) is mandatory, NOT covered, and sells out. Also compare the Half Fare Card (CHF 150/month): dropping Zermatt removed the two dearest rail legs, so the pass no longer wins automatically.", estimatedCost: "~CHF 381/person all-in" },
  { priority: 21, what: "Göreme Open-Air Museum + underground city (Fri Sep 11)", when: "2 weeks ahead", urgency: "medium", note: "🆕 Walk-up is usually fine, but the Museum Pass Cappadocia bundles Göreme, Derinkuyu/Kaymaklı and Zelve at a discount if you'll do 3+ sites.", estimatedCost: "~€40/person" },
  { priority: 22, what: "✅ DONE — Hotel Spinne Grindelwald, SAT SEP 19 (1 night)", when: "✅ Paid", urgency: "medium", note: "✅ BOOKED — $544. The heated OUTDOOR INFINITY POOL with an unobstructed Eiger panorama, which is the one thing four guesthouse nights could not buy. 🔴 SPA AND POOL OPEN 12:00–21:00 ONLY, check-in 15:00 — so it works precisely because you come down from First and the Bachalpsee around 16:00. 🧳 Bags go to the Spinne reception on the morning of Sep 19 and move on to guesthouse B on the morning of Sep 20 — two ~10-minute walks inside the village, no lockers, no trains.", estimatedCost: "✅ $544 paid" },
  { priority: 23, what: "🏨 Grindelwald — guesthouse A (Sep 18→19) + guesthouse B (Sep 20→22)", when: "🔴 NOW", urgency: "high", note: "🆕 TWO SEPARATE BOOKINGS, by choice — a different view and feel each time: one night Sep 18→19, then two nights Sep 20→22 after the Spinne. 🔴 On the SECOND one, ask whether they take luggage before check-in: it receives your bags on the morning of Sep 20 and holds them through the Interlaken day. 💡 Go cheaper on both — Grindelwald has guesthouses well under $180, and that is the easiest way to offset the $544 Spinne night. Stay near the station; the Firstbahn base is in the village too.", estimatedCost: "$150–240/night × 3 nights" },
  { priority: 24, what: "🆕 Madrid hotel near ATOCHA — 3 nights (Sep 26, 27, 28)", when: "1 month ahead", urgency: "medium", note: "🆕 UP FROM 2 NIGHTS, and the neighbourhood changed: Atocha, not the airport. You now land from Orly at a civilised hour instead of late at night, and Atocha is where the Toledo AVE leaves from. ⚠️ Segovia leaves from Chamartín instead — decide which day trip you want before booking.", estimatedCost: "$110–150/night" },
  { priority: 25, what: "Reconfirm Le Jules Verne (Sep 24, 8pm)", when: "Sep 22", urgency: "medium", note: "✅ Already booked, and it is the fixed point the entire itinerary was rebuilt around. Reconfirm 48h ahead and check the dress code — jacket required for men.", estimatedCost: "Already committed" },
  { priority: 26, what: "✅ DONE — Lima↔Madrid round-trip, Plus Ultra PNR XYJSDU", when: "✅ Paid", urgency: "medium", note: "✅ $1,968 for two both ways + ~€50 seat selection. Well bought — comparable options were ~$1,700/person. Lima Sep 1 18:10 → Madrid Sep 2 12:45 (PU0302) · Madrid Sep 29 11:00 → Lima 16:10 (PU0301). Seats are already chosen, so all that's left is online check-in 24h before each leg.", estimatedCost: "✅ $2,022 paid" }
];

// ============================================================
// CROWD CALENDAR
// ============================================================
const CROWD_DATA = {
  disneylandParis: {
    lateAugust: { level: "8–9/10", waitTimes: "60–90 min on major rides", notes: "French summer holidays end Sep 1 — irrelevant to you now" },
    september7_13: { level: "5–6/10", waitTimes: "30–45 min", notes: "Schools just returned — transition week" },
    september14_30: { level: "3–4/10", waitTimes: "15–30 min on major rides", notes: "Lowest crowds of the year. Weekdays Tue–Thu = the sweet spot; Fridays tick up as the weekend starts." },
    yourDates: "✅ WED SEP 23 — Disneyland Park, full day (BOUGHT, with a reserved castle-show viewing spot). Wednesday is one of the two quietest days of the week in the quietest fortnight of the year: 15–30 min on the headliners. ✅ FRI SEP 25 — Disney Adventure World, also a FULL day. Friday runs a little busier (25–40 min) as the weekend builds, and the honest counterweight is that Adventure World reopened on 29 Mar 2026 and is brand new, so the two newest rides — Frozen Ever After and Raiponce Tangled Spin — will draw the sharpest queues in the park. 🔴 THE ANSWER IS ROPE DROP, NOT MONEY: be at the gate for 09:30 and go Frozen Ever After first, Crush's Coaster second. The first 90 minutes run 5–10 min waits on rides that hit 45+ by noon, which beats anything Premier Access Ultimate sells you at €110–230/person. ⚠️ Both parks run 09:30–21:00 on these dates — no early close, as an earlier version of this plan wrongly claimed. ⚠️ The 08:30 'Extra Magic Time' is for Disney hotel guests only, so it does not apply to a Marais Airbnb."
  }
};
