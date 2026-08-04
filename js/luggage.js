// ============================================================
// LUGGAGE PLAN — 2 cabin trolleys (10 kg) + 2 backpacks, no checked bags
// ------------------------------------------------------------
// Every day where you are between accommodations gets an explicit answer to
// "where are the bags while we do this?". A day plan is not finished until it
// has an entry below. This exists because the answer used to live in one
// route note and nowhere else, which is how Sep 21 ended up asking you to
// ride a zipline holding a suitcase.
//
// status: 'free'  — based in one place, bags stay in the room
//         'move'  — pure travel day, bags with you, nothing scheduled
//         'store' — checked out but the day continues: store and collect
//         'tight' — the activity is bag-hostile; the storage step is mandatory
// ============================================================

const LUGGAGE = {
  kit: "2 cabin trolleys (10 kg each) + 2 backpacks. Nothing checked — all four items are with you the whole trip.",

  principles: [
    "🧳 Hotel storage is free, universal, and almost always the right answer. Every hotel on this itinerary will hold bags after checkout and before check-in. Confirm it at booking, not on the morning.",
    "🔒 Paid lockers are the fallback for when the day ends far from where you slept. Budget €2–6 per bag per day. You'd normally store the two trolleys and keep the backpacks.",
    "🚫 Do not assume a train station has left luggage. Madrid Atocha's consigna closed years ago. Zermatt station and Barcelona Sants do have lockers; Atocha does not.",
    "✅ 🆕 THE RESTRUCTURE REMOVED TWO OF THE THREE BAG-HOSTILE DAYS. The Grindelwald zipline and mountain cart moved to Sep 21, a day you sleep in Grindelwald either side of — so the bags never leave the room. Amoudi Bay moved to Sep 15, the same way. The only remaining one is the Istanbul hamam on Sep 10, where storage is mandatory rather than convenient.",
    "🎒 Passports, the PNR, medication and one change of clothes live in a backpack — never in a stored trolley."
  ],

  cabinFeeWarning: {
    headline: "⚠️ Your 10 kg trolley is NOT the free cabin bag on the budget airlines",
    detail: "easyJet, Ryanair, Vueling and Wizz include ONE small under-seat bag only, roughly 45×36×20 cm. A 10 kg trolley is a paid 'large cabin bag' at about €25–35 per bag per flight, and two to three times that if you buy it at the gate. Turkish Airlines includes 8 kg free; Iberia, Air France and Swiss include a full cabin bag; Eurostar and every train have no limit at all.",
    affects: "🆕 REDUCED — the easyJet London→Madrid leg is gone with London, and the flight that replaced it (ORY→MAD, Sat Sep 26) is Iberia or Air Europa, both of which include a full cabin bag. The live example is now Transavia on that same route: ~$45 cheaper on the fare, then ~€25–35 per trolley, which erases it completely. Still watch the Vueling and Ryanair alternatives in the route planner. Add the large-cabin-bag fee for TWO bags to any budget fare before comparing it against a full-service carrier.",
    estimate: "$80–150 across the trip if you use budget carriers, or $0 if every flight is on a full-service airline."
  },

  days: [
    { day: 2, date: "Wed Sep 2", city: "Madrid → Barcelona", status: "move",
      headline: "Airport straight to the AVE, then straight to the room",
      action: "Bags never leave your side and nothing is planned around them. Cercanías from Barajas to Atocha, AVE to Sants, metro to the hotel. Do not attempt Madrid sightseeing with luggage on landing day — 🆕 Madrid gets Sep 4, Sep 5, and then three full days at the end (Sep 26, 27, 28) now that London is out.",
      cost: "—" },

    { day: 3, date: "Thu Sep 3", city: "Barcelona", status: "free",
      headline: "🆕 The clean day — zero bags in hand",
      action: "You sleep in the same hotel on Sep 2 and Sep 3, so Park Güell, Sagrada Família, the Gothic Quarter and Barceloneta are all done empty-handed. This is the entire reason the Spain leg was restructured. 🗼 It matters more than usual on this day: the Sagrada tower at 12:30 comes DOWN a narrow spiral staircase, and they will not let you take a trolley up it.",
      cost: "Free" },

    { day: 4, date: "Fri Sep 4", city: "Barcelona → Madrid", status: "move",
      headline: "Morning train, bags into the Madrid hotel before the event",
      action: "Check out, metro to Sants, AVE to Atocha, drop the bags at the Madrid hotel, then go to your event. If the event starts before midday, take the ~07:00 departure instead of the 09:00 one.",
      cost: "—" },

    { day: 5, date: "Sat Sep 5", city: "Madrid", status: "store",
      headline: "Checkout 11:00, flight 20:00 — nine hours to cover",
      action: "Leave all four bags with the Madrid hotel (free) and collect at ~16:30 on the way to Barajas. If the event venue is nowhere near the hotel, use a Stasher or Bounce point beside the venue instead — 200+ points around Sol and Gran Vía. Atocha has no consigna, so the station is not a fallback.",
      cost: "Free at the hotel, or €3–10 for the two trolleys" },

    { day: 8, date: "Tue Sep 8", city: "Craiova → Istanbul", status: "move",
      headline: "Pure travel day",
      action: "Car to Bucharest OTP, flight to IST, hotel. Nothing scheduled that luggage interferes with.",
      cost: "—" },

    { day: 10, date: "Thu Sep 10", city: "Istanbul → Cappadocia", status: "tight",
      headline: "🔴 A hamam with suitcases is not possible",
      action: "Check out in the morning and leave all four bags at the Sultanahmet hotel — free, and every hotel there does it. The Bosphorus cruise leaves from Eminönü, a 10-minute walk. The hamam has lockers for a wallet and a phone, not for luggage. Collect around 16:00 for the evening flight.",
      cost: "Free" },

    { day: 12, date: "Sat Sep 12", city: "Cappadocia → Athens", status: "store",
      headline: "Low risk — the shuttle collects you from the hotel door",
      action: "Check out, leave the bags with the cave hotel, do the backup balloon or a short valley walk, and be back in Göreme for the airport shuttle. Don't book a walk that finishes anywhere but Göreme.",
      cost: "Free" },

    { day: 14, date: "Mon Sep 14", city: "Athens → Santorini", status: "move",
      headline: "Breakfast, metro, fly — clean",
      action: "Bags come with you to the airport directly. In Oia the plan already says 'drop bags' before the caldera path, which is the correct order.",
      cost: "—" },

    { day: 15, date: "Tue Sep 15", city: "Santorini", status: "free",
      headline: "🆕 The clean island day — zero bags in hand",
      action: "🆕 The second Santorini night means you sleep in the same caldera room on Sep 14 and Sep 15, so Amoudi Bay, the caldera boat trip and the second sunset are all done empty-handed. This is the whole reason the night was added: the old plan asked you to climb ~300 steps out of Amoudi with a flight to Rome waiting.",
      cost: "Free" },

    { day: 16, date: "Wed Sep 16", city: "Santorini → Rome", status: "store",
      headline: "🆕 A slow departure instead of a scramble",
      action: "🆕 Check out and leave the bags with the hotel for the morning — coffee on the caldera, the Oia castle walk, last photos. ⚠️ Oia's lanes are stepped and vehicle-free, so you hand-carry the bags 10–15 minutes to the transfer pickup no matter what. Book the transfer in advance and ask exactly where it meets you. ✅ Amoudi Bay is no longer on this day.",
      cost: "Free" },

    { day: 18, date: "Fri Sep 18", city: "Rome → Zermatt", status: "move",
      headline: "Pure travel day",
      action: "Fly FCO→Geneva, train to Zermatt, check in, then collect the ski rental. The bags are in the room before anything else happens.",
      cost: "—" },

    { day: 20, date: "Sun Sep 20", city: "Zermatt → Interlaken → Grindelwald", status: "tight",
      headline: "🔴 You cannot paraglide holding a suitcase",
      action: "Gornergrat moved to Sep 19, so this is a clean early transfer. Check out of Zermatt, take the ~09:30 train, and put all four bags in the lockers at Interlaken Ost on arrival (~11:30). Paraglide from Beatenberg 12:00–14:00 — the minibus up and the landing field are both in Interlaken, so the station stays your anchor. Collect around 14:30, train on to Grindelwald, and the bags are in the room before Pfingstegg. 🆕 You now check into that room for TWO nights, so this is the last time you touch the bags until Sep 22.",
      cost: "CHF 6–12 for the lockers at Interlaken Ost" },

    { day: 21, date: "Mon Sep 21", city: "Grindelwald", status: "free",
      headline: "🆕 The clean mountain day — zero bags in hand",
      action: "🆕 THE SECOND GRINDELWALD NIGHT FIXED THIS. You sleep in the same guesthouse on Sep 20 and Sep 21, so the First gondola, the Cliff Walk, the Flieger, the mountain cart and Lauterbrunnen are all done empty-handed. The old version asked you to ride a zipline on a checkout day in front of a hard train — that is exactly the failure this whole luggage plan exists to catch.",
      cost: "Free" },

    { day: 22, date: "Tue Sep 22", city: "Grindelwald → Paris", status: "store",
      headline: "🆕 A calm transfer — the deadline is gone",
      action: "🆕 Check out unhurried, nothing on the mountain today. 09:37 train to Interlaken Ost, all four bags into the station lockers, chocolate workshop ~10:15–11:30, unhurried lunch, collect the bags, GoldenPass 14:07. If you skip the workshop, take the 11:07 and keep the bags with you the whole way.",
      cost: "CHF 6–12 for the lockers at Interlaken Ost" },

    { day: 26, date: "Sat Sep 26", city: "Paris → Madrid", status: "move",
      headline: "🆕 One bag-move, and it replaces two",
      action: "🆕 REPLACES the old Eurostar-to-London day AND the London→Madrid day. Check out, metro line 14 direct to Orly (~25 min, no change — this is why Orly beats CDG with luggage), fly to Madrid. 🧳 Iberia and Air Europa both include a full cabin bag, so the two 10 kg trolleys fly free; Transavia would charge for both. Metro to the Atocha hotel on arrival.",
      cost: "—" },

    { day: 29, date: "Tue Sep 29", city: "Madrid → Lima", status: "move",
      headline: "Barajas by 08:00, done",
      action: "Everything is packed the night before, on the Sep 28 day. Nothing scheduled. 🆕 You have had three nights in the same Madrid hotel, which is the most settled the end of this trip has ever been.",
      cost: "—" }
  ]
};
