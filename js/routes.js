// ============================================================
// EUROTRIP 2026 — DOOR-TO-DOOR ROUTE PLANNER
// One entry per travel day. Each route breaks the journey into
// the actual segments you have to book, with times, costs and
// where to buy — plus the alternatives and why they lose.
//
// ⚠️ Times are schedule-realistic for September 2026 but fares
// are ESTIMATES for 2 people. Verify on the booking site listed
// in each segment before paying.
// ============================================================

// ============================================================
// ROUTING DECISIONS — the "why this order" calls, shown above
// the leg-by-leg breakdown.
// ============================================================
const ROUTE_PLANS = [
  {
    id: 'turkey-shape',
    title: '🇹🇷 Turkey — how to fit Istanbul AND Cappadocia into 4 nights',
    question: 'You arrive Sep 8 from the wedding and must be in Rome by Sep 15. Turkey and Greece share a 7-night window. How much of it goes to Turkey, and how is it split?',
    chosenLabel: 'Istanbul 2 nights → Cappadocia 2 nights',
    chain: [
      { label: 'Sep 8–10 · Istanbul', sub: '2 nights · 1 full Sultanahmet day + a Bosphorus morning' },
      { label: 'Sep 10 eve · ✈️ IST → NAV', sub: '1h 20m · fly in the evening, not the next morning' },
      { label: 'Sep 10–12 · Cappadocia', sub: '2 nights · balloon Fri sunrise, Sat morning in reserve' }
    ],
    options: [
      {
        label: 'Istanbul 2 + Cappadocia 2',
        chosen: true,
        pros: [
          'Two sunrise windows for the balloon. Roughly 1 flight in 5 is scrubbed for wind, and the operator moves you to the next morning — which only helps if you are still in Cappadocia.',
          'Istanbul\'s core is genuinely one packed day: Hagia Sophia, Blue Mosque, the Cistern and Topkapi are all inside the same few streets.',
          'The Bosphorus cruise and hamam fit the morning of the departure day, so day 3 is not wasted.'
        ],
        cons: [
          'Istanbul loses the Asian side, Balat, Süleymaniye, the Princes\' Islands and any slow bazaar time.',
          'Sep 9 becomes a scheduled march rather than a wander.'
        ]
      },
      {
        label: 'Istanbul 3 + Cappadocia 1',
        chosen: false,
        pros: ['Istanbul keeps a free day.', 'Cheaper — one fewer cave-hotel night.'],
        cons: [
          '🔴 One balloon morning only. A wind cancellation kills the entire reason for going, with no second chance.',
          'You would fly in at ~22:00 and out at midday, so Göreme, the underground city and the valleys all get squeezed into a single afternoon after a 04:30 start.'
        ]
      },
      {
        label: 'Cappadocia 2 + Istanbul 1, seen only in transit',
        chosen: false,
        pros: ['Maximum Cappadocia.'],
        cons: [
          'One night in Istanbul means choosing between Hagia Sophia and Topkapi. You would fly past one of the great cities of the world.',
          'The arrival from Craiova already lands in the evening, so a single night is really just a hotel bed.'
        ]
      }
    ],
    bottomLine: 'Two and two. The second Cappadocia night is insurance on a €200–280/person flight that weather can cancel, and Istanbul\'s headline sights genuinely compress into one well-booked day. The honest cost is that Istanbul becomes a highlights visit — book Hagia Sophia and Topkapi online for Sep 9 and it works.'
  },
  {
    id: 'greece-order',
    title: '🇬🇷 Greece — Athens first or Santorini first?',
    question: 'You land from Cappadocia on Sep 12 and fly to Rome on Sep 15. Three nights, two places. Which order?',
    chosenLabel: '⭐ Athens first (2 nights), Santorini last (1 night)',
    chain: [
      { label: 'Sep 12 · ✈️ arrive Athens ~20:00', sub: 'rooftop dinner under the lit Acropolis' },
      { label: 'Sep 13 · Athens full day', sub: 'Acropolis at 08:00, Agora, Plaka, Lycabettus sunset' },
      { label: 'Sep 14 · ✈️ ATH → JTR, 45 min', sub: 'afternoon caldera walk, 🌅 Oia sunset, booked dinner' },
      { label: 'Sep 15 · Amoudi Bay morning → ✈️ Rome', sub: 'swim, then the afternoon flight out' }
    ],
    options: [
      {
        label: 'Athens → Santorini (recommended)',
        chosen: true,
        pros: [
          '⭐ No backtracking. Istanbul → Athens → Santorini → Rome is one continuous westward chain; every hop is 45–90 minutes.',
          'Your flight from Cappadocia arrives into Athens anyway — the connection you already have to make becomes the first stop instead of a stopover.',
          'Santorini ends the leg on the Oia sunset, which is the better emotional finale before three days of Rome.',
          'Athens on a full day beats Athens on arrival-evening scraps. The Acropolis at 08:00 needs a real morning.'
        ],
        cons: [
          '⚠️ The exit is Santorini → Rome, which is a SEASONAL direct. If it is not flying on Sep 15 you route via Athens and lose ~3 hours.'
        ]
      },
      {
        label: 'Santorini → Athens',
        chosen: false,
        pros: [
          'The Rome exit becomes Athens → Rome: daily, multiple carriers, far more reliable than the seasonal Santorini route.',
          'The Acropolis on the final morning is a strong closer too.'
        ],
        cons: [
          '🔴 It forces a backtrack. Cappadocia lands you at Athens, so you would fly Athens → Santorini → Athens: an extra domestic hop, extra fare, and an extra airport morning out of a 3-night window.',
          'Santorini would fall on Sep 12–13, meaning you arrive on the island after a 7-hour Cappadocia travel day and go straight to a sunset you are too tired for.',
          'Two hotel check-ins in Athens, or luggage juggling between them.'
        ]
      },
      {
        label: 'Skip Athens, all 3 nights on Santorini',
        chosen: false,
        pros: ['Genuinely restful. One hotel, one island, no airports mid-leg.'],
        cons: [
          'You would fly past the Acropolis. On a first trip through Greece that is hard to defend.',
          'Santorini at 3 nights in September is the most expensive lodging on the trip after Zermatt.'
        ]
      },
      {
        label: 'Skip Santorini, all 3 nights in Athens',
        chosen: false,
        pros: ['Cheapest option by far — saves the flight and the $260 caldera room.', 'Delphi or Cape Sounion become possible day trips.'],
        cons: ['Loses the single most memorable evening of the Greek leg for a day trip you will not remember as clearly.']
      }
    ],
    bottomLine: 'Athens first, Santorini last. It is the only order with no backtracking, it gives the Acropolis a proper morning, and it ends on the Oia sunset. The one risk it carries is the seasonal Santorini → Rome flight: verify Sep 15 the moment you book anything else on this leg, and keep the JTR → ATH → FCO fallback in your pocket.'
  }
];

const ROUTES = [
  // ---------------------------------------------------------- Sep 1
  {
    id: 'lim-departure',
    day: 1,
    date: 'Tue Sep 1',
    from: 'Lima',
    to: 'In the air',
    fromEmoji: '🏠',
    toEmoji: '✈️',
    tag: '✅ flight booked',
    recommended: {
      label: 'Be at Jorge Chávez by 15:00 for the 18:10 Plus Ultra departure',
      doorToDoor: '11h 35m overnight, lands Sep 2',
      totalCost: 'Flight booked · transfer to LIM only',
      why: 'Lima traffic to the airport is the only variable here. Three hours before an intercontinental departure, and leave home earlier than feels necessary if you are crossing the city at rush hour.',
      segments: [
        { mode: '🚗', title: 'Home → Jorge Chávez (LIM)', operator: 'Taxi / Uber / airport express', duration: '40–90 min depending on traffic', cost: 'S/ 50–90', when: 'aim to arrive 15:00', booking: '—', notes: 'Lima→Callao at rush hour is unpredictable. The new LIM terminal has a different access road than the old one — check your driver knows it.' },
        { mode: '✈️', title: 'Lima (LIM) → Madrid (MAD)', operator: 'Plus Ultra PU 0302 — ✅ BOOKED', duration: '11h 35m', cost: 'Booked', when: 'departs 18:10, lands 12:45 next day', booking: 'PNR XYJSDU', notes: 'Overnight eastbound. Check in online 24h ahead. Sleep on this flight — Sep 2 is a jet-lag day in Madrid either way.' }
      ]
    },
    alternatives: [],
    watchOuts: [
      '🔴 Wedding outfits in carry-on from here on. The bag has to survive Lima→Madrid→Craiova with a Sep 6 wedding at the end.',
      'Have euros in cash before you leave Lima — you land in Madrid at midday and will want them immediately.'
    ]
  },

  // ---------------------------------------------------------- Sep 2
  {
    id: 'mad-arrival',
    day: 2,
    date: 'Wed Sep 2',
    from: 'Madrid Barajas (MAD) T1',
    to: 'Madrid city centre',
    fromEmoji: '🛬',
    toEmoji: '🇪🇸',
    tag: 'airport transfer',
    recommended: {
      label: 'Metro Line 8 → Nuevos Ministerios → transfer to your hotel',
      doorToDoor: '~50 min from the belt',
      totalCost: '$12–14 for 2',
      why: 'Plus Ultra lands at T1. The Metro runs from the terminal itself, costs a tenth of a taxi, and after 11h 35m in economy you do not want to sit in Madrid traffic. Cercanías is the alternative if your hotel is near Atocha.',
      segments: [
        { mode: '🛂', title: 'Immigration + baggage, T1', operator: 'Barajas', duration: '40–60 min', cost: 'Free', when: 'lands 12:45', booking: '—', notes: 'Non-EU arrival at midday is a busy slot. Assume you clear the terminal around 13:45.' },
        { mode: '🚇', title: 'T1 → Nuevos Ministerios', operator: 'Metro Line 8', duration: '17 min', cost: '€4.50–5.00/person (incl. €3 airport supplement)', when: 'every 4–7 min', booking: 'Buy at the machine — get the Multi card once, reload it all trip', notes: 'One change onward to most central hotels. Lifts and ramps the whole way, so it works with big luggage.' },
        { mode: '🚇', title: 'Nuevos Ministerios → your hotel', operator: 'Metro L10/L1/L6', duration: '10–15 min', cost: '€1.50–2.00/person', when: '—', booking: 'Same Multi card', notes: 'If you stay near Atocha for the Barcelona train, take Cercanías C1/C10 from T4 instead — 25 min direct, €2.60pp.' }
      ]
    },
    alternatives: [
      { label: 'Taxi — flat airport rate', duration: '30–45 min', cost: '€35 flat, one fare for both', verdict: 'ok', why: 'Legally fixed at €35 to anywhere inside the M-30. Genuinely defensible on this specific day given the flight length — it is the one transfer worth overpaying for.' },
      { label: 'Cercanías train from T4', duration: '25 min + 20 min inter-terminal bus', cost: '€5.20 for 2', verdict: 'avoid', why: 'Cheapest on paper, but you land at T1 and the free inter-terminal bus to T4 eats the time saving.' }
    ],
    watchOuts: ['Don\'t plan anything before 15:00 — you land 12:45 and the day is already half gone.']
  },

  // ---------------------------------------------------------- Sep 2 (2nd leg of the day)
  {
    id: 'mad-bcn',
    day: 2,
    date: 'Wed Sep 2',
    from: 'Madrid',
    to: 'Barcelona',
    fromEmoji: '🇪🇸',
    toEmoji: '⛪',
    tag: 'high-speed rail',
    recommended: {
      label: '🆕 AVE Madrid Atocha → Barcelona Sants, late-afternoon departure on landing day',
      doorToDoor: '~3h 15m door to door',
      totalCost: '$60–140 for 2',
      why: 'Flying MAD→BCN is 1h15 in the air but 4h+ door-to-door once you add two airport transfers and security. The train puts you in the middle of Barcelona with no transfer at either end. This is not close.',
      segments: [
        { mode: '🚆', title: 'Barajas T4 → Madrid Atocha', operator: 'Cercanías C-1 (or Metro L8 + L1)', duration: '~35 min', cost: '€2.60/person on Cercanías', when: 'land 12:45, clear immigration ~13:45, at Atocha ~15:00', booking: 'Buy at the station', notes: '🆕 You go straight from the plane to the train — no Madrid hotel on Sep 2 any more. Cercanías runs from inside T4, which is why it beats a taxi with four bags.' },
        { mode: '🚄', title: 'Madrid Atocha → Barcelona Sants', operator: 'Renfe AVE (also Iryo, Ouigo)', duration: '2h 30m', cost: '€25–60/person', when: '🆕 aim for ~16:30 — arrives Sants ~19:00 with a real dinner still ahead', booking: 'renfe.com — book with the Sep 4 return, round-trips price lower', notes: '300 km/h. Compare Iryo and Ouigo on the same route: same journey, often 30–50% cheaper, slightly less legroom. Leave yourself a 90-min cushion after landing — if the flight is late you want the next departure, not the last one.' },
        { mode: '🚇', title: 'Barcelona Sants → hotel', operator: 'Metro L3/L5', duration: '10–15 min', cost: '€5 for 2', when: '—', booking: 'T-Casual 10-trip card, €12.15 shared between you', notes: 'Sants is on two metro lines. Buy the T-Casual — single tickets are €2.65 each and you will make 6+ trips.' }
      ]
    },
    alternatives: [
      { label: 'Fly MAD → BCN (Iberia/Vueling/Ryanair)', duration: '1h 15m air, 4h–4h 30m door-to-door', cost: '$50–160 for 2', verdict: 'avoid', why: 'Two airport transfers, security, and a 40-min bus from BCN into town. You lose 1h+ and land outside the city. Only worth it on a dirt-cheap Vueling fare.' },
      { label: 'ALSA bus', duration: '7h 30m', cost: '$40–70 for 2', verdict: 'avoid', why: 'Saves maybe $40 and costs five hours. You have one Barcelona night — do not spend the day on the A-2.' }
    ],
    watchOuts: [
      '🧳 This is a bag-move day by design. Nothing is scheduled in Madrid — you land, you cross the city, you ride to Barcelona, you check in. Trying to squeeze Retiro or Plaza Mayor in between means doing it with two trolleys after an 11h35 overnight flight.',
      '⏰ Do not book the last AVE of the evening. If your inbound is delayed you want a later train to fall back to, and the Sep 3 Sagrada Família slot is at 09:00.',
      'Book the outbound AVE and the Sep 4 return together — Renfe prices round-trips lower.'
    ]
  },

  // ---------------------------------------------------------- Sep 4
  {
    id: 'bcn-mad',
    day: 4,
    date: 'Fri Sep 4',
    from: 'Barcelona',
    to: 'Madrid',
    fromEmoji: '⛪',
    toEmoji: '🇪🇸',
    tag: 'high-speed rail',
    recommended: {
      label: '🆕 AVE Barcelona Sants → Madrid Atocha, morning departure',
      doorToDoor: '~3h 15m door to door',
      totalCost: '$60–140 for 2',
      why: '🆕 Flipped from an evening train to a morning one. The old plan had you checking out at 11:00 and then doing Park Güell and a night train with all four bags in hand. Now Barcelona holds both nights, Sep 3 is bag-free, and this leg is a clean morning transfer that delivers you to Madrid in time for your event.',
      segments: [
        { mode: '🚇', title: 'Hotel → Barcelona Sants', operator: 'Metro L3/L5', duration: '10–15 min', cost: 'T-Casual', when: 'check out ~07:30, be at Sants 30 min before departure', booking: '—', notes: '🧳 Bags come straight from the room to the train. No storage needed anywhere on this day — that is the whole point of the restructure.' },
        { mode: '🚄', title: 'Barcelona Sants → Madrid Atocha', operator: 'Renfe AVE / Iryo / Ouigo', duration: '2h 30m', cost: '€25–60/person', when: '🆕 ~09:00 arrives Atocha ~11:30. If your event starts before midday, take the ~07:00 instead (Atocha ~09:30).', booking: 'renfe.com (booked with the Sep 2 leg)', notes: 'First departures are around 06:00 and they run roughly hourly, so there is a fallback if you miss one.' },
        { mode: '🚇', title: 'Atocha → Madrid hotel', operator: 'Metro L1', duration: '10–20 min', cost: '€3–4 for 2', when: 'drop bags before the event', booking: 'Multi card', notes: '🆕 Choose the Madrid hotel by where your event is, not by the station — you only sleep there one night and you leave for Barajas the next day.' }
      ]
    },
    alternatives: [
      { label: 'Keep the old shape: 2 nights Madrid, 1 night Barcelona', duration: '—', cost: 'about $25 cheaper', verdict: 'avoid', why: 'Saves roughly $25 on one hotel night and costs you a whole sightseeing day spent carrying luggage around Park Güell. It also puts the Barcelona→Madrid train on the evening of Sep 4, which no longer works now that the Madrid event is on Sep 4 and Sep 5.' },
      { label: 'Overnight in Barcelona, fly to Craiova from BCN', duration: '—', cost: 'Forfeits the booked flight', verdict: 'avoid', why: 'The Madrid→Craiova flight on Sep 5 is already booked and paid, and the Madrid event runs Sep 4–5. Barcelona is a there-and-back.' }
    ],
    watchOuts: [
      '📅 The Sep 4 departure time depends on when your event starts — confirm that before booking the ticket.',
      '🧳 Confirm the Madrid hotel holds bags after the Sep 5 checkout. That single question is what makes Sep 5 workable: checkout is 11:00 and the flight is at 20:00.'
    ]
  },

  // ---------------------------------------------------------- Sep 5
  {
    id: 'mad-craiova',
    day: 5,
    date: 'Sat Sep 5',
    from: 'Madrid',
    to: 'Craiova',
    fromEmoji: '🇪🇸',
    toEmoji: '💍',
    tag: '✅ flight booked',
    recommended: {
      label: 'Madrid Barajas → Craiova, 20:00 departure (booked) + pre-arranged pickup',
      doorToDoor: '~7h including the midnight transfer',
      totalCost: 'Flight booked · $25–45 for the pickup',
      why: 'The flight is already paid. The only decision left is the arrival end — and landing at midnight in a small Romanian city is the one leg where booking a car in advance is not optional.',
      segments: [
        { mode: '🚇', title: 'Hotel → Barajas', operator: 'Metro L8 / Cercanías', duration: '30–45 min', cost: '€10 for 2', when: 'leave by 17:00 for a 20:00 flight', booking: 'Multi card', notes: 'Confirm the terminal on your booking the day before — Madrid–Romania flights leave from T1 or T2 depending on carrier.' },
        { mode: '✈️', title: 'Madrid (MAD) → Craiova (CRA)', operator: '✅ BOOKED', duration: '~3h 40m + 1h timezone', cost: 'Booked', when: 'departs 20:00, lands ~00:00', booking: '—', notes: 'Lands after midnight. Nothing at CRA is open at that hour — no exchange desk, no car rental, few taxis.' },
        { mode: '🚗', title: 'Craiova airport → hotel', operator: 'Pre-booked private transfer', duration: '15–20 min', cost: '€20–40 total', when: 'arrange for 00:30', booking: '🔴 Book by email/WhatsApp a week ahead, or ask the wedding hosts', notes: 'CRA is a small airport 7 km from the centre. Have euros AND lei in cash, and the driver\'s phone number saved offline.' }
      ]
    },
    alternatives: [
      { label: 'Taxi on arrival', duration: '15 min', cost: '40–70 lei (~$9–16)', verdict: 'ok', why: 'Cheap if a taxi is there. The risk is that at 00:15 there may be none, and you have a wedding in nine hours.' }
    ],
    watchOuts: ['🔴 Wedding outfits in carry-on. A lost bag on Sep 5 has zero recovery time.', 'Download an offline Craiova map and save the hotel address in Romanian.']
  },

  // ---------------------------------------------------------- Sep 8
  {
    id: 'craiova-istanbul',
    day: 8,
    date: 'Tue Sep 8',
    from: 'Craiova',
    to: 'Istanbul',
    fromEmoji: '💍',
    toEmoji: '🕌',
    tag: '⭐ the tricky one',
    recommended: {
      label: 'Craiova → Bucharest overland, then a direct Bucharest → Istanbul flight',
      doorToDoor: '~9h door to door',
      totalCost: '$170–330 for 2',
      why: 'Craiova airport has no Istanbul route. Any single ticket out of CRA is a connecting itinerary through a western hub — Craiova→Vienna→Istanbul style — which means 10–14h, two takeoffs and a higher fare. Going overland to Bucharest first and buying a separate direct OTP→IST ticket is faster, cheaper, and the flight is only 1h 30m. Two tickets instead of one is the entire trick here.',
      segments: [
        { mode: '🚗', title: 'Craiova → Bucharest Otopeni (OTP), direct', operator: 'Private transfer / long-distance taxi', duration: '3h–3h 30m', cost: '€90–130 for the car (both of you)', when: 'leave ~08:00 for an afternoon flight', booking: 'Book the day before through the hotel', notes: '⭐ BEST OPTION. ~230 km, door to terminal, no changes, luggage handled. Split between two people it is barely more than two train tickets plus the airport bus — and it removes every connection risk on the leg that matters most.' },
        { mode: '🚂', title: 'Alternative: Craiova → Bucharest Gara de Nord', operator: 'CFR Călători InterRegio', duration: '3h 15m–4h', cost: '€14–22 for 2', when: 'several departures 06:00–10:00', booking: 'cfrcalatori.ro (or at the station)', notes: 'Cheapest by far, and comfortable enough. But CFR runs late routinely — build 3h of buffer, not 1h.' },
        { mode: '🚌', title: '…then Gara de Nord → OTP airport', operator: 'STB bus 100 / Airport Express', duration: '50–70 min', cost: '~€3 for 2', when: 'every 20–30 min', booking: 'Contactless card on board', notes: 'There is also a rail link from Gara de Nord to OTP (~25 min) — check whether it is running, it is much better than the bus when it is.' },
        { mode: '✈️', title: 'Bucharest (OTP) → Istanbul (IST)', operator: 'Turkish Airlines · also Pegasus into SAW', duration: '1h 30m', cost: '€60–130/person', when: '4–6 daily departures', booking: 'turkishairlines.com — book 6–8 weeks out', notes: '⚠️ Choose IST (the big new airport), not Sabiha Gökçen (SAW). SAW is on the Asian side and adds 60–90 min to reach Sultanahmet. A cheap Pegasus fare into SAW is usually not cheap once you price the transfer.' },
        { mode: '🚌', title: 'IST airport → Sultanahmet', operator: 'Havaist bus IST-12/IST-19, or M11 metro', duration: '60–90 min', cost: '~€8–10 for 2', when: 'every 30 min', booking: 'Istanbulkart at the airport machine', notes: 'Buy one Istanbulkart each on arrival — it works on the metro, tram, buses and the ferries you will use all week. Taxi is €25–35 and no faster in traffic.' }
      ]
    },
    alternatives: [
      { label: 'Single connecting ticket out of Craiova (CRA)', duration: '10h–14h with a European hub connection', cost: '$260–450 for 2', verdict: 'avoid', why: '⭐ This is exactly what to avoid. CRA has no Istanbul service, so the routing goes the wrong way across Europe first. More time, more money, and a missed connection strands you mid-continent.' },
      { label: 'Direct CRA → IST, if it exists', duration: '~2h', cost: '$180–300 for 2', verdict: 'ok', why: 'Worth 5 minutes of checking on Google Flights before you commit — Craiova\'s route list changes seasonally. If a direct exists it beats everything. Do not count on it.' },
      { label: 'Train Bucharest → Istanbul (Bosfor sleeper)', duration: '19–20h with a bus replacement section', cost: '$70–120 for 2', verdict: 'avoid', why: 'A great trip on a different holiday. It costs you a full Istanbul day and part of a night.' },
      { label: 'Fly into Sabiha Gökçen (SAW) on Pegasus', duration: '1h 30m + 90 min transfer', cost: '$90–180 for 2', verdict: 'ok', why: 'Only if the fare gap is more than €40/person. SAW is on the Asian side; the transfer to Sultanahmet is long and the savings usually evaporate.' }
    ],
    watchOuts: [
      '🔴 Buy the Bucharest→Istanbul flight as its OWN ticket. It is not connected to the Craiova leg, so leave 3h+ between arriving at OTP and boarding.',
      'You leave the day after two wedding days. Book the private car and stop optimising this one for money.',
      'Romanian trains are cheap but not punctual. If you take the train, take an early one.'
    ]
  },

  // ---------------------------------------------------------- Sep 10
  {
    id: 'istanbul-cappadocia',
    day: 10,
    date: 'Thu Sep 10',
    from: 'Istanbul',
    to: 'Cappadocia (Göreme)',
    fromEmoji: '🕌',
    toEmoji: '🎈',
    tag: '⭐ which airport?',
    recommended: {
      label: 'Evening IST → Nevşehir (NAV) flight, then the cave hotel shuttle to Göreme',
      doorToDoor: '~5h 30m door to door',
      totalCost: '$100–200 for 2',
      why: 'An evening departure is the whole trick: you keep the Bosphorus cruise and the hamam on your last Istanbul day, and still reach the cave hotel in time to sleep before a 04:30 balloon pickup. NAV is the closer of the two airports — 40 minutes to Göreme against Kayseri\'s 1h15.',
      segments: [
        { mode: '🛁', title: 'Hamam → hotel → IST airport', operator: 'Havaist bus or M11 metro', duration: '60–90 min', cost: '~€8–10 for 2', when: 'leave Sultanahmet by ~15:30 for a 19:00 flight', booking: 'Istanbulkart', notes: 'Check out in the morning and leave the bags with the hotel — you do not want to be crossing Istanbul at rush hour twice.' },
        { mode: '✈️', title: 'Istanbul (IST) → Nevşehir (NAV)', operator: 'Turkish Airlines · AJet', duration: '1h 20m', cost: '€40–80/person', when: '2–3 daily; take a 17:00–20:00 departure', booking: 'turkishairlines.com / ajet.com', notes: '⚠️ Domestic flights also leave from Sabiha Gökçen (SAW) — make sure you book out of IST, the airport you can actually reach from Sultanahmet.' },
        { mode: '🚐', title: 'NAV airport → Göreme cave hotel', operator: 'Hotel shuttle, or the Helios/Cappadocia Express shuttle', duration: '40 min', cost: '€10–15/person shuttle · €40–50 private', when: 'meets the arriving flights', booking: '⭐ Arrange with the cave hotel when you book the room', notes: 'Confirm they will hold a late check-in. Arriving ~22:00 with nobody at the desk and a 04:30 pickup ahead is the one avoidable mistake on this leg.' }
      ]
    },
    alternatives: [
      { label: 'Fly IST → Kayseri (ASR) instead', duration: '1h 25m + 1h 15m transfer', cost: '$80–170 for 2', verdict: 'ok', why: 'ASR has more daily frequencies and often cheaper fares, but it is 75 km from Göreme. Worth it only if the fare gap beats the extra ~€10–20 of shuttle and 35 minutes each way. Compare total cost, not ticket price.' },
      { label: 'Overnight bus Istanbul → Göreme', duration: '10–11h', cost: '$50–90 for 2', verdict: 'avoid', why: 'Turkish intercity coaches are genuinely comfortable, but you would arrive at dawn on the morning you want to be airborne in a balloon. Wrong night to not sleep in a bed.' },
      { label: 'Fly on Sep 11 morning instead', duration: 'same', cost: 'same', verdict: 'avoid', why: '🔴 That deletes a balloon morning. The Thursday-evening flight is what gives you two sunrise windows instead of one — which is the entire reason Cappadocia gets 2 nights.' }
    ],
    watchOuts: [
      '🔴 Fly Thursday EVENING, not Friday morning. Two nights in Cappadocia = two chances at the balloon.',
      'Pack a jacket in your day bag — it is 1,000m up and cold at 04:30.',
      'Have the hotel confirm the balloon operator\'s pickup time and place the night you arrive.'
    ]
  },

  // ---------------------------------------------------------- Sep 12
  {
    id: 'cappadocia-athens',
    day: 12,
    date: 'Sat Sep 12',
    from: 'Cappadocia',
    to: 'Athens',
    fromEmoji: '🎈',
    toEmoji: '🏛️',
    tag: '⭐ one ticket, not two',
    recommended: {
      label: 'NAV/ASR → Istanbul → Athens booked as a SINGLE Turkish Airlines itinerary',
      doorToDoor: '~7h 30m–8h door to door',
      totalCost: '$190–400 for 2',
      why: 'Cappadocia has no international flights, so you have to come back through Istanbul either way. The decision that matters is how you buy it: one through-ticket means Turkish Airlines owns the connection and rebooks you if the first leg slips. Two separate tickets means a 40-minute delay out of Nevşehir strands you at IST overnight — and there is no later flight that still gets you to Athens for dinner.',
      segments: [
        { mode: '🚐', title: 'Göreme → NAV airport', operator: 'Hotel shuttle', duration: '40 min', cost: '€10–15/person', when: 'leave 2h 30m before departure', booking: 'Arrange the night before', notes: 'Domestic departure, so 2h at the airport is plenty. Keep the morning free as the balloon backup slot.' },
        { mode: '✈️', title: 'Nevşehir (NAV) → Istanbul (IST)', operator: 'Turkish Airlines', duration: '1h 20m', cost: 'part of the through-fare', when: 'midday departure', booking: 'turkishairlines.com — one booking, two legs', notes: 'Ask for a connection of 2h+ at IST. It is a huge airport and you change from the domestic to the international side.' },
        { mode: '🔁', title: 'Connection at Istanbul (IST)', operator: 'Turkish Airlines', duration: '2h–3h', cost: '—', when: '—', booking: '—', notes: 'Long enough to be safe, short enough not to waste the day. You stay airside, so there is no re-check of bags on a single ticket.' },
        { mode: '✈️', title: 'Istanbul (IST) → Athens (ATH)', operator: 'Turkish Airlines (Aegean also flies it)', duration: '1h 30m', cost: 'part of the through-fare · €55–125/person if bought alone', when: '4–5 daily', booking: 'Same booking', notes: 'Aim to land Athens by ~20:00 so the rooftop dinner with the lit Acropolis still happens.' },
        { mode: '🚇', title: 'ATH airport → Monastiraki / Syntagma', operator: 'Metro Line 3 (blue)', duration: '40 min', cost: '€9/person', when: 'every 30 min until ~23:30', booking: 'Machine in the arrivals hall', notes: '⭐ Runs directly to Syntagma and Monastiraki, both a walk from Plaka. The taxi is a €40 flat rate and no faster.' }
      ]
    },
    alternatives: [
      { label: 'Two separate tickets (NAV→IST, then IST→ATH)', duration: 'same on paper', cost: '$20–60 cheaper', verdict: 'avoid', why: '🔴 Saves a little and risks the whole day. If the domestic leg is late, the Athens flight leaves without you and nobody owes you anything. Not worth it on the one day with a connection in it.' },
      { label: 'Kayseri (ASR) → Athens via Istanbul', duration: '8h–9h', cost: '$180–380 for 2', verdict: 'ok', why: 'Fine if you flew into ASR and the fares work. The 1h15 drive to the airport makes it a longer morning.' },
      { label: 'Fly Cappadocia → Antalya → Athens', duration: '9h+', cost: '$220–420 for 2', verdict: 'avoid', why: 'Fewer frequencies, longer layovers, no advantage. Istanbul is the hub — use it.' },
      { label: 'Stay a 3rd Cappadocia night, fly Sep 13', duration: '—', cost: 'Costs an Athens day', verdict: 'avoid', why: 'It would leave one night for Athens, which is not enough for the Acropolis done properly. Two nights each is the balance.' }
    ],
    watchOuts: [
      '🔴 ONE ticket, 2h+ connection at IST. This is the single most fragile transfer of the trip.',
      'This is a long travel day right after a 04:30 start. Do not schedule anything in Athens beyond dinner.',
      'Keep Saturday morning clear — if Friday\'s balloon was cancelled, this is when you fly, and a midday flight still works.'
    ]
  },

  // ---------------------------------------------------------- Sep 14
  {
    id: 'athens-santorini',
    day: 14,
    date: 'Mon Sep 14',
    from: 'Athens',
    to: 'Santorini',
    fromEmoji: '🏛️',
    toEmoji: '🌅',
    tag: 'fly, do not sail',
    recommended: {
      label: 'ATH → JTR morning flight, then the local bus or a transfer to Oia',
      doorToDoor: '~3h 30m door to door',
      totalCost: '$110–240 for 2',
      why: 'The flight is 45 minutes against 5–8h for the ferry. With one Santorini night, the ferry would eat the sunset you came for. This is the clearest fly-not-sail call on the whole trip.',
      segments: [
        { mode: '🚇', title: 'Plaka → ATH airport', operator: 'Metro Line 3', duration: '40 min', cost: '€18 for 2', when: 'leave 2h 30m before departure', booking: 'Machine', notes: 'Domestic departures need less lead time than international — 2h is genuinely enough.' },
        { mode: '✈️', title: 'Athens (ATH) → Santorini (JTR)', operator: 'Aegean / Olympic / Sky Express / Volotea', duration: '45–50 min', cost: '€45–110/person', when: 'many daily; take an 08:00–10:00 slot', booking: 'aegeanair.com, skyexpress.gr', notes: 'Sky Express is often half the Aegean fare on this route. Both are fine for 45 minutes.' },
        { mode: '🚐', title: 'JTR airport → Oia', operator: 'Hotel transfer, or KTEL bus via Fira', duration: '25 min transfer · 60–75 min by bus with a change in Fira', cost: 'Transfer €25–35 total · bus €3.60 for 2', when: '—', booking: 'Ask the hotel when you book the room', notes: '⭐ Take the transfer. The bus requires changing in Fira with luggage, and Oia\'s streets are stepped — arriving hot and dragging a suitcase is a bad start to your one Santorini day.' }
      ]
    },
    alternatives: [
      { label: 'Blue Star ferry (conventional)', duration: '5h–8h', cost: '$70–130 for 2', verdict: 'avoid', why: 'Cheap and pleasant, but it consumes the entire day you have for Santorini. With one night here that is disqualifying.' },
      { label: 'Seajets high-speed ferry', duration: '4h 30m–5h', cost: '$130–220 for 2', verdict: 'avoid', why: 'Slower than flying AND more expensive. Also the first thing cancelled when the meltemi wind picks up.' }
    ],
    watchOuts: ['🌅 Book the Oia sunset dinner table before you fly — every restaurant is full at 19:00 in September.', 'Santorini in September still runs at high-season prices; the €45 Sky Express fares go first.']
  },

  // ---------------------------------------------------------- Sep 15
  {
    id: 'santorini-rome',
    day: 15,
    date: 'Tue Sep 15',
    from: 'Santorini',
    to: 'Rome',
    fromEmoji: '🌅',
    toEmoji: '🏛️',
    tag: 'check direct first',
    recommended: {
      label: 'Direct JTR → FCO if the seasonal route is running, then Leonardo Express to Termini',
      doorToDoor: '~6h door to door',
      totalCost: '$180–380 for 2',
      why: 'A seasonal direct Santorini→Rome exists in September on low-cost carriers. It saves 3–4h over connecting through Athens. Check it first — but book early, because these routes run a few times a week, not daily.',
      segments: [
        { mode: '🚐', title: 'Oia → JTR airport', operator: 'Hotel transfer', duration: '25 min', cost: '€25–35 total', when: 'leave 2h 30m before departure', booking: 'Arrange with the hotel the night before', notes: 'JTR is a small airport that gets badly congested in September. Do not cut it fine.' },
        { mode: '✈️', title: 'Santorini (JTR) → Rome Fiumicino (FCO)', operator: 'Volotea / Ryanair / ITA (seasonal)', duration: '2h 30m', cost: '€70–160/person', when: 'a few days a week — check your date', booking: '⭐ Verify on Google Flights for Sep 15 specifically', notes: 'If it is not running on your date, the fallback is JTR→ATH→FCO, which is 6–8h door-to-door. Check this before anything else on this leg.' },
        { mode: '🚄', title: 'FCO → Roma Termini', operator: 'Leonardo Express', duration: '32 min', cost: '€14/person', when: 'every 15 min until 23:00', booking: 'trenitalia.com or the platform machine', notes: 'Non-stop, luggage racks, no traffic. The FL1 regional is cheaper (€8) but stops short of Termini and needs a change.' },
        { mode: '🚕', title: 'Termini → Trastevere', operator: 'Taxi or tram 8', duration: '15–20 min', cost: '€12–15 taxi · €3.20 for 2 by tram', when: '—', booking: '—', notes: 'Arriving in the evening with bags on Trastevere cobblestones — take the taxi.' }
      ]
    },
    alternatives: [
      { label: 'JTR → ATH → FCO connection', duration: '6h–8h door-to-door', cost: '$200–400 for 2', verdict: 'ok', why: 'The reliable fallback. Book it as one Aegean ticket so a delay is their problem, not yours.' },
      { label: 'Ferry to Athens then fly', duration: '10h+', cost: '$150–280 for 2', verdict: 'avoid', why: 'A full travel day. Rome only gets 3 nights and two of them are committed to the Vatican and Colosseum.' }
    ],
    watchOuts: ['⚠️ FCO has a flat €50 taxi rate into the historic centre — the Leonardo Express is better on both time and money.', 'Do not book a Rome dinner before 21:00 on this day.']
  },

  // ---------------------------------------------------------- Sep 18
  {
    id: 'rome-zermatt',
    day: 18,
    date: 'Fri Sep 18',
    from: 'Rome',
    to: 'Zermatt',
    fromEmoji: '🏛️',
    toEmoji: '⛷️',
    tag: '⭐ longest transfer day',
    recommended: {
      label: 'Early FCO → Geneva flight, then Swiss rail Geneva → Visp → Zermatt on the Travel Pass',
      doorToDoor: '~9h door to door',
      totalCost: '$120–260 for 2 + the Swiss Travel Pass',
      why: 'Geneva airport has its own railway station under the terminal, so the flight hands you straight to the train with no transfer. Activate the Swiss Travel Pass on this date and the whole Swiss rail portion — including Sep 20 and 21 — costs nothing extra.',
      segments: [
        { mode: '🚕', title: 'Trastevere → FCO', operator: 'Taxi (flat rate) or Leonardo Express', duration: '45 min taxi · 55 min via Termini', cost: '€50 flat taxi · €28 for 2 by train', when: 'leave 3h before an early flight', booking: '—', notes: 'For a pre-09:00 departure take the taxi — the Leonardo Express first train may be too late.' },
        { mode: '✈️', title: 'Rome (FCO) → Geneva (GVA)', operator: 'easyJet / ITA / Swiss', duration: '1h 50m', cost: '€50–110/person', when: '⭐ take a departure before 11:00', booking: 'easyjet.com — 6–8 weeks out', notes: 'The morning departure is the whole plan: it gets you into Zermatt in daylight with the rental shops still open.' },
        { mode: '🚂', title: 'Geneva Airport station → Visp', operator: 'SBB InterCity', duration: '2h 20m', cost: 'Covered by Swiss Travel Pass', when: 'twice hourly', booking: 'sbb.ch (pass: mystsnet.com)', notes: '⭐ The station is INSIDE the airport — no transfer, no bus. Buy the Swiss Travel Pass 4-day (~CHF 289/person 2nd class) and activate it today; it also covers Sep 20 Zermatt→Grindelwald and Sep 21 to the French border.' },
        { mode: '🚞', title: 'Visp → Zermatt', operator: 'Matterhorn Gotthard Bahn', duration: '1h 5m', cost: 'Covered by Swiss Travel Pass', when: 'hourly', booking: 'Same pass', notes: 'One easy cross-platform change at Visp. Zermatt is car-free and the train runs right into the village.' }
      ]
    },
    alternatives: [
      { label: 'Rome → Milan → Zermatt by train all the way', duration: '9h–11h', cost: '$200–350 for 2', verdict: 'ok', why: 'Scenic and zero flying, but longer and pricier than the flight, and you would reach Zermatt after dark with the rental shops shut.' },
      { label: 'Fly FCO → Milan/Zurich instead of Geneva', duration: '8h–10h', cost: '$120–280 for 2', verdict: 'avoid', why: 'Zurich is 4h from Zermatt by rail and Milan needs a border change. Geneva is the shortest rail tail of the three.' },
      { label: 'An afternoon FCO → GVA flight', duration: 'same', cost: 'same', verdict: 'avoid', why: '⚠️ You arrive in Zermatt at 21:00+, in the dark, with no skis for the morning. The early flight IS the optimisation.' }
    ],
    watchOuts: [
      '🔴 Departure before 11:00 or the ski day is compromised.',
      'Collect ski and boot rental on arrival Friday evening, not Saturday morning.',
      'Do the Swiss Travel Pass maths once: 4 consecutive days covering Sep 18–21 including the GoldenPass Express and the Gornergrat discount. It wins comfortably over point-to-point tickets.'
    ]
  },

  // ---------------------------------------------------------- Sep 20
  {
    id: 'zermatt-grindelwald',
    day: 20,
    date: 'Sun Sep 20',
    from: 'Zermatt',
    to: 'Grindelwald',
    fromEmoji: '⛷️',
    toEmoji: '🛷',
    tag: 'scenic rail',
    recommended: {
      label: '🆕 Zermatt → Visp → Interlaken Ost (paraglide) → Grindelwald',
      doorToDoor: '~2h 15m of rail, split by a 2h stop in Interlaken',
      totalCost: 'Rail covered by the Swiss Travel Pass',
      why: '🆕 Rebuilt as a morning departure with a deliberate stop. Gornergrat moved to Sep 19, which frees this morning — so instead of arriving Grindelwald exhausted at dusk, you leave at 09:30, break the journey in Interlaken for the Beatenberg paraglide, and still check in by 15:15 with the whole Pfingstegg afternoon ahead.',
      segments: [
        { mode: '🚞', title: 'Zermatt → Visp', operator: 'Matterhorn Gotthard Bahn', duration: '1h 5m', cost: 'Swiss Travel Pass', when: '🆕 take the ~09:30 — this is now a morning departure', booking: '—', notes: 'Gornergrat happens on Sep 19 afternoon instead, which is what makes this early start possible.' },
        { mode: '🚂', title: 'Visp → Interlaken Ost', operator: 'SBB via Spiez', duration: '55 min', cost: 'Swiss Travel Pass', when: 'twice hourly, arrive ~11:30', booking: '—', notes: 'Through the Lötschberg base tunnel. Swiss connections are timed to the minute — a 6-minute change is genuinely enough.' },
        { mode: '🪂', title: 'Beatenberg tandem paraglide', operator: 'Paragliding Interlaken / Twin / Skywings', duration: '~2h total, 20–30 min airborne', cost: '~CHF 180–190/person', when: '~12:00–14:00', booking: 'Book direct with free cancellation — weather-dependent', notes: '🧳 Bags stay in the Interlaken Ost lockers. The minibus up and the landing field are both in Interlaken, so the station is your anchor the whole time.' },
        { mode: '🚞', title: 'Interlaken Ost → Grindelwald', operator: 'Berner Oberland Bahn', duration: '35 min', cost: 'Swiss Travel Pass', when: 'every 30 min; collect bags ~14:30', booking: '—', notes: 'Sit on the right. Stay near Grindelwald station — the First gondola starts at 08:00 tomorrow.' }
      ]
    },
    alternatives: [
      { label: 'Keep the old afternoon departure (Gornergrat this morning)', duration: '—', cost: 'Same', verdict: 'avoid', why: 'Arrives Grindelwald at dusk with nothing left in the day, and pushes the toboggan, the Cliff Walk and the zipline all into Sep 21 in front of a hard 14:07 train. That is the version that did not survive contact with the mountain cart queues.' },
      { label: 'Zermatt → Grindelwald via the Glacier Express', duration: '8h+', cost: 'Pass + CHF 49 reservation', verdict: 'avoid', why: 'The Glacier Express runs the wrong way, towards St. Moritz. Your scenic train is the GoldenPass Express tomorrow.' }
    ],
    watchOuts: [
      '🪂 If the paraglide is cancelled for wind, take the Harder Kulm funicular instead — same two-lake panorama from the ground, 10 min from the station, 50% off with the pass. You lose the flight, not the afternoon.',
      '🛷 Aim to be on the Pfingstegg cable car by 15:45; the toboggan closes around 17:00 in September.'
    ]
  },

  // ---------------------------------------------------------- Sep 21
  {
    id: 'grindelwald-paris',
    day: 21,
    date: 'Mon Sep 21',
    from: 'Grindelwald',
    to: 'Paris',
    fromEmoji: '🛷',
    toEmoji: '🗼',
    tag: '⭐ scenic + TGV',
    recommended: {
      label: 'GoldenPass Express Interlaken → Montreux, then TGV Lyria Geneva → Paris',
      doorToDoor: '~8h 30m, with the panoramic train built in',
      totalCost: '$200–320 for 2 (TGV) + pass covers the Swiss legs',
      why: 'This routes your scenic panoramic train INTO the journey you were making anyway — zero detour. The alternative is a plain 6h transfer via Basel with no view. Same day, better day.',
      segments: [
        { mode: '🚞', title: 'Grindelwald → Interlaken Ost', operator: 'Berner Oberland Bahn', duration: '35 min', cost: 'Swiss Travel Pass', when: '🆕 the 11:00 — off the mountain by 10:30, bags 10:45', booking: '—', notes: '🆕 The morning is now gondola 08:00 → Cliff Walk → First Flieger → down. The mountain cart is OUT: reported queues up to 110 min by mid-day, which is what used to put this connection at risk.' },
        { mode: '🍫', title: 'Funky Chocolate Club, Interlaken', operator: 'Funky Chocolate Club', duration: '~1h 15m', cost: '~CHF 65/person', when: '12:00–13:15, back at Ost by 13:40', booking: 'funkychocolateclub.com — book ahead', notes: '🆕 OPTIONAL AND THE DESIGNATED DROP. 20 min walk each way from Interlaken Ost. If you are not on the 11:00 train out of Grindelwald, skip it and have a relaxed lunch by the station instead. Never run for the 14:07.' },
        { mode: '🚞', title: 'Interlaken Ost → Montreux', operator: '⭐ GOLDENPASS EXPRESS', duration: '3h 15m', cost: 'Pass + seat reservation CHF 20–35/person', when: '🔴 14:07 — departures are 09:07, 11:07, 14:07, 16:07', booking: 'gpx.swiss — 🔴 reserve the panoramic seats ahead', notes: '🆕 THE 14:07 IS EFFECTIVELY THE LAST USABLE ONE. The 16:07 reaches Montreux ~19:20, by which time the last TGV Lyria out of Geneva to Paris has gone. The signature ride: gauge-changing panoramic coaches over the Simmental to Lake Geneva.' },
        { mode: '🚂', title: 'Montreux → Geneva', operator: 'SBB InterCity', duration: '1h 5m', cost: 'Swiss Travel Pass', when: 'twice hourly', booking: '—', notes: 'Lakeside the whole way.' },
        { mode: '🚄', title: 'Geneva → Paris Gare de Lyon', operator: 'TGV Lyria', duration: '3h 10m', cost: '€45–90/person', when: 'last departure ~19:00 — 🔴 verify yours', booking: 'sncf-connect.com or tgv-lyria.com — book 3 months out', notes: 'Cheap fares vanish. Arriving Gare de Lyon ~22:00 puts you in the Marais by 22:45.' },
        { mode: '🚇', title: 'Gare de Lyon → your Airbnb', operator: 'Metro L1/L14', duration: '15–20 min', cost: '€4.60 for 2', when: '—', booking: 'Navigo Easy card, or a carnet of 10', notes: 'Buy a Navigo Easy at the station — you need RER A tickets for Disney on both of the next two days.' }
      ]
    },
    alternatives: [
      { label: 'Grindelwald → Basel → Paris by TGV', duration: '6h 30m', cost: '$180–300 for 2', verdict: 'ok', why: 'Two hours faster and slightly cheaper, but you skip the GoldenPass Express entirely. Take this only if the adventure morning overruns.' },
      { label: 'Fly Zurich/Geneva → Paris', duration: '5h–6h door-to-door', cost: '$150–300 for 2', verdict: 'avoid', why: 'Barely faster once you add the rail leg to the airport plus security plus CDG into Paris — and it throws away the best train ride of the trip.' }
    ],
    watchOuts: [
      '🔴 THIS IS THE ONE HARD DEADLINE ON THE TRIP. GoldenPass departures from Interlaken Ost are 09:07, 11:07, 14:07 and 16:07; you need the 14:07, because the 16:07 lands in Montreux after the last TGV Lyria has left Geneva. Everything on Sep 21 chains back from it.',
      '🆕 The morning now has genuine slack: down from First by 10:30, bags 10:45, 11:00 train, and the chocolate workshop is optional padding you can drop without consequence. That was not true before the mountain cart came out.',
      'Verify the GoldenPass and the last TGV Lyria against each other before you book — the whole chain hangs on that connection.',
      'This is a long day. Eat before the TGV; the on-board options are thin.'
    ]
  },

  // ---------------------------------------------------------- Sep 25
  {
    id: 'paris-london',
    day: 25,
    date: 'Fri Sep 25',
    from: 'Paris',
    to: 'London',
    fromEmoji: '🗼',
    toEmoji: '🦕',
    tag: 'Eurostar',
    recommended: {
      label: 'Eurostar Gare du Nord → St Pancras, mid-morning',
      doorToDoor: '~4h door to door',
      totalCost: '$140–320 for 2',
      why: 'City centre to city centre with no airport at either end. Flying is 1h 20m in the air and 5h+ in practice, plus a UK border queue at the gate instead of in Paris.',
      segments: [
        { mode: '🚇', title: 'Airbnb → Gare du Nord', operator: 'Metro L4/L5', duration: '15–25 min', cost: '€4.60 for 2', when: 'arrive 75–90 min before departure', booking: 'Navigo Easy', notes: '⚠️ Eurostar closes check-in 30–45 min before departure and you clear BOTH French exit and UK entry controls in Paris. Do not treat it like a normal train.' },
        { mode: '🚄', title: 'Paris Gare du Nord → London St Pancras', operator: 'Eurostar', duration: '2h 20m', cost: '€65–150/person', when: '⭐ 09:00–10:00 departure', booking: 'eurostar.com — 🔴 book 3+ months out; fares only go up', notes: 'Arrive London around midday, which leaves the Tower of London or Westminster genuinely doable that afternoon.' },
        { mode: '🚶', title: 'St Pancras → hotel', operator: 'Walk, or one Tube stop', duration: '5–15 min', cost: '£0–7 for 2', when: '—', booking: 'Contactless bank card — no Oyster needed', notes: 'A King\'s Cross hotel makes this a walk, and puts Euston next door for tomorrow\'s Watford train.' }
      ]
    },
    alternatives: [
      { label: 'Fly CDG/ORY → LHR/LGW', duration: '1h 20m air, 5h–5h 30m door-to-door', cost: '$100–260 for 2', verdict: 'avoid', why: 'Two airport transfers plus a UK border queue on arrival. Slower and more stressful for roughly the same money.' },
      { label: 'Bus + ferry via Calais', duration: '8h–10h', cost: '$60–120 for 2', verdict: 'avoid', why: 'You have two London nights. Do not spend one of the days on a coach.' }
    ],
    watchOuts: ['🔴 Eurostar fares climb steeply as the date approaches — this is one of the first things to book.', 'Passports, not ID cards. Post-Brexit UK entry requires the passport.']
  },

  // ---------------------------------------------------------- Sep 27
  {
    id: 'london-madrid',
    day: 27,
    date: 'Sun Sep 27',
    from: 'London',
    to: 'Madrid',
    fromEmoji: '🦕',
    toEmoji: '🛫',
    tag: 'must be today',
    recommended: {
      label: 'Evening flight from Gatwick or Heathrow into Madrid',
      doorToDoor: '~6h door to door',
      totalCost: '$140–340 for 2',
      why: 'There is no rail alternative worth considering for London→Madrid. The optimisation is airport choice: pick the one that is cheap AND reachable, and count the transfer cost, not just the fare.',
      segments: [
        { mode: '🚇', title: 'Hotel → the airport', operator: 'Gatwick Express / Piccadilly line / Stansted Express', duration: 'LHR 50 min by Tube · LGW 30 min from Victoria · STN 50 min from Liverpool St', cost: 'LHR £5.60pp Tube · LGW £20pp express · STN £20pp express', when: 'leave 4h before an international departure', booking: 'Contactless for the Tube; book express trains online for half price', notes: '⭐ Heathrow is the cheapest to reach (Piccadilly line, no premium fare) and often has the Iberia fare anyway. Stansted only wins if the Ryanair fare is €40+/person lower.' },
        { mode: '✈️', title: 'London → Madrid (MAD)', operator: 'Iberia / British Airways / easyJet / Ryanair', duration: '2h 20m', cost: '€55–150/person', when: 'evening departure after the museum morning', booking: 'iberia.com / easyjet.com — 6–8 weeks out', notes: '🔴 It MUST be Sep 27. The Sep 29 Lima flight leaves at 11:00, and you need a buffer night in Madrid before it.' },
        { mode: '🚇', title: 'MAD → hotel', operator: 'Metro L8, or taxi', duration: '30–45 min', cost: '€10 for 2 by metro · €35 flat by taxi', when: '—', booking: 'Multi card', notes: 'Landing late — an airport-adjacent hotel for the final night is genuinely the smart move, and Barajas hotels run free shuttles.' }
      ]
    },
    alternatives: [
      { label: 'Fly Sep 28 instead', duration: 'same', cost: 'same', verdict: 'avoid', why: '🔴 Removes your entire buffer before an 11:00 intercontinental departure. One delay and you miss a booked, paid Lima flight.' },
      { label: 'Train London → Paris → Madrid', duration: '20h+ with an overnight', cost: '$300–500 for 2', verdict: 'avoid', why: 'Slower and more expensive than flying, and there is no through sleeper to Madrid any more.' }
    ],
    watchOuts: ['🦕 Natural History Museum opens at 10:00 — do it in the morning, then collect bags. Do not book a flight before ~17:00.', 'Confirm which London airport BEFORE booking the Madrid hotel; an airport hotel only makes sense with a late arrival.']
  },

  // ---------------------------------------------------------- Sep 29
  {
    id: 'mad-departure',
    day: 29,
    date: 'Tue Sep 29',
    from: 'Madrid',
    to: 'Lima',
    fromEmoji: '🛫',
    toEmoji: '🏠',
    tag: '✅ flight booked',
    recommended: {
      label: 'Be at Barajas by 08:00 for the 11:00 Plus Ultra departure',
      doorToDoor: 'Lands Lima 16:10 the same day',
      totalCost: 'Flight booked · $10–35 for the transfer',
      why: 'Three hours for an intercontinental check-in is the standard, and Barajas is large. This is the one morning of the trip to be boring and early.',
      segments: [
        { mode: '🚇', title: 'Hotel → Barajas T1', operator: 'Metro L8, hotel shuttle, or taxi', duration: '30–45 min', cost: '€10 for 2 metro · €35 taxi · shuttle free', when: 'leave by 07:00', booking: '—', notes: 'Metro L8 starts around 06:00. If you are at an airport hotel, confirm the shuttle\'s first run the night before.' },
        { mode: '✈️', title: 'Madrid (MAD) → Lima (LIM)', operator: 'Plus Ultra PU 0301 — ✅ BOOKED', duration: '12h 10m', cost: 'Booked', when: 'departs 11:00, lands 16:10', booking: 'PNR XYJSDU', notes: 'Check in online 24h ahead and pick seats. Confirm the terminal — Plus Ultra usually operates from T1.' }
      ]
    },
    alternatives: [],
    watchOuts: ['🔴 08:00 at the airport. Non-negotiable — this ticket is paid and there is no next flight.', 'Claim your VAT refund (DIVA kiosks) before security if you bought anything significant in Spain.']
  }
];
