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
    "⛔ Three activities here are physically incompatible with luggage: the Grindelwald zipline and mountain cart (Sep 21), an Istanbul hamam (Sep 10), and the Amoudi Bay steps in Santorini (Sep 15). On those days storage is not a convenience.",
    "🎒 Passports, the PNR, medication and one change of clothes live in a backpack — never in a stored trolley."
  ],

  cabinFeeWarning: {
    headline: "⚠️ Your 10 kg trolley is NOT the free cabin bag on the budget airlines",
    detail: "easyJet, Ryanair, Vueling and Wizz include ONE small under-seat bag only, roughly 45×36×20 cm. A 10 kg trolley is a paid 'large cabin bag' at about €25–35 per bag per flight, and two to three times that if you buy it at the gate. Turkish Airlines includes 8 kg free; Iberia, Air France and Swiss include a full cabin bag; Eurostar and every train have no limit at all.",
    affects: "London→Madrid on Sep 27 (easyJet is the cheap option there), plus any Vueling or Ryanair alternative in the route planner. Add the large-cabin-bag fee for TWO bags to the fare before comparing it against a full-service carrier — it frequently erases the entire saving.",
    estimate: "$120–200 across the trip if you use budget carriers, or $0 if every flight is on a full-service airline."
  },

  days: [
    { day: 2, date: "Wed Sep 2", city: "Madrid → Barcelona", status: "move",
      headline: "Airport straight to the AVE, then straight to the room",
      action: "Bags never leave your side and nothing is planned around them. Cercanías from Barajas to Atocha, AVE to Sants, metro to the hotel. Do not attempt Madrid sightseeing with luggage on landing day — Madrid gets Sep 4, Sep 5 and the whole of Sep 28.",
      cost: "—" },

    { day: 3, date: "Thu Sep 3", city: "Barcelona", status: "free",
      headline: "🆕 The clean day — zero bags in hand",
      action: "You sleep in the same hotel on Sep 2 and Sep 3, so Sagrada Família, Park Güell, the Gothic Quarter and Barceloneta are all done empty-handed. This is the entire reason the Spain leg was restructured.",
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

    { day: 15, date: "Tue Sep 15", city: "Santorini → Rome", status: "tight",
      headline: "🔴 Amoudi Bay is ~300 steps below Oia",
      action: "Check out and leave the bags at the hotel before going down. Separately: Oia's lanes are stepped and vehicle-free, so you hand-carry the bags 10–15 minutes to the transfer pickup no matter what. Book the transfer in advance and ask exactly where it meets you.",
      cost: "Free" },

    { day: 18, date: "Fri Sep 18", city: "Rome → Zermatt", status: "move",
      headline: "Pure travel day",
      action: "Fly FCO→Geneva, train to Zermatt, check in, then collect the ski rental. The bags are in the room before anything else happens.",
      cost: "—" },

    { day: 20, date: "Sun Sep 20", city: "Zermatt → Grindelwald", status: "tight",
      headline: "🔴 Gornergrat is a 3,089 m summit, not an errand",
      action: "Check out and lock the bags at Zermatt station, or leave them at the hotel. The Gornergrat platform faces the main station, so the bags sit on your route in both directions. Back down around 13:00, collect, cross the platform for the Grindelwald train.",
      cost: "CHF 5–9 for a locker, or free at the hotel" },

    { day: 21, date: "Mon Sep 21", city: "Grindelwald → Paris", status: "tight",
      headline: "🔴 The tightest bag day of the trip",
      action: "You cannot ride the First Flieger zipline or a mountain cart holding a trolley. Check out early and leave all four bags at the guesthouse — the Firstbahn base station is in the village, so you pass the door on the way back down. Hard stops: off the mountain 12:15, bags collected 12:30, ~13:00 train to Interlaken Ost for the 14:00 GoldenPass. Pfingstegg does not fit once the bag collection is real.",
      cost: "Free" },

    { day: 25, date: "Fri Sep 25", city: "Paris → London", status: "move",
      headline: "🆕 One bag-move, and it buys the morning back",
      action: "The Eurostar moved from 09:00 to ~11:00 — Gare du Nord check-in closes 30–45 minutes ahead, so 09:00 meant leaving Le Marais at 07:45. Check out ~09:30, metro to Gare du Nord with the bags, nothing to see in between. St Pancras ~12:15, and the King's Cross hotel is a five-minute walk.",
      cost: "—" },

    { day: 27, date: "Sun Sep 27", city: "London → Madrid", status: "store",
      headline: "The museum has a bag-size limit and no luggage cloakroom",
      action: "Check out ~09:00 and leave the bags at the King's Cross hotel. Natural History Museum at the 10:00 opening, back by 15:00, collect, then straight to the airport. Check the easyJet large-cabin-bag fee before booking that flight.",
      cost: "Free" },

    { day: 29, date: "Tue Sep 29", city: "Madrid → Lima", status: "move",
      headline: "Barajas by 08:00, done",
      action: "Everything is packed the night before, on the Sep 28 buffer day. Nothing scheduled.",
      cost: "—" }
  ]
};
