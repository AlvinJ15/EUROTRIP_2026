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
  kit: "2 cabin trolleys (10 kg each) + 2 backpacks — one trolley and one backpack each. Nothing checked, nothing in a hold, so all four items are with you the whole trip. It is lighter than 'four bags' sounds: two of them are on your back.",

  principles: [
    "🧳 Hotel storage is free, universal, and almost always the right answer. Every hotel on this itinerary will hold bags after checkout and before check-in. Confirm it at booking, not on the morning.",
    "🔒 Paid lockers are the fallback for when the day ends far from where you slept. Budget €2–6 per bag per day. You'd normally store the two trolleys and keep the backpacks.",
    "🚫 Do not assume a train station has left luggage. Madrid Atocha's consigna closed years ago; Barcelona Sants and Interlaken Ost do have them. 🆕 On this version of the trip you barely need lockers at all — the only day between accommodations with anything scheduled is Sep 10 in Istanbul.",
    "✅ 🆕 ALL THREE BAG-HOSTILE DAYS ARE NOW SOLVED BY GEOGRAPHY, NOT BY LOCKERS. The Grindelwald zipline, mountain cart and paraglide all sit inside a four-night single base, so the bags never leave the room. Amoudi Bay moved onto Santorini's second night the same way. Only the Istanbul hamam on Sep 10 still needs a storage step, and the hotel there does it free.",
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
      headline: "🆕 No longer an event day — take the earliest train",
      action: "Check out, metro to Sants, AVE to Atocha, drop everything at the Estrecho hotel, and the rest of the day is yours. 🆕 The event is Sep 5 ONLY, so Sep 4 became a full Madrid day — which makes the ~07:00 departure worth more than it was, not less: it lands you at Atocha 09:30 instead of 11:30. 🔴 Kindergarten visits do NOT work today; the Madrid school year starts Mon Sep 7. Those moved to Sep 28.",
      cost: "—" },

    { day: 5, date: "Sat Sep 5", city: "Madrid", status: "store",
      headline: "Checkout 11:00, flight 20:00 — nine hours to cover",
      action: "Leave the two trolleys and two backpacks with the Madrid hotel (free) and collect at ~16:30 on the way to Barajas. If the event venue is nowhere near the hotel, use a Stasher or Bounce point beside the venue instead — 200+ points around Sol and Gran Vía. Atocha has no consigna, so the station is not a fallback.",
      cost: "Free at the hotel, or €3–10 for the two trolleys" },

    { day: 8, date: "Tue Sep 8", city: "Craiova → Istanbul", status: "move",
      headline: "Pure travel day",
      action: "Car to Bucharest OTP, flight to IST, hotel. Nothing scheduled that luggage interferes with.",
      cost: "—" },

    { day: 10, date: "Thu Sep 10", city: "Istanbul → Cappadocia", status: "tight",
      headline: "🔴 A hamam with suitcases is not possible",
      action: "Check out in the morning and leave both trolleys and the backpacks at the Sultanahmet hotel — free, and every hotel there does it. The Bosphorus cruise leaves from Eminönü, a 10-minute walk. The hamam has lockers for a wallet and a phone, not for luggage. Collect around 16:00 for the evening flight.",
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

    { day: 18, date: "Fri Sep 18", city: "Rome → Grindelwald", status: "move",
      headline: "Arrival — then two short bag-moves in four days",
      action: "Fly FCO→Geneva, train Geneva→Bern→Interlaken Ost→Grindelwald, check in ~15:15, bags into the room. ✅ REMOVING ZERMATT DELETED A WHOLE TRANSFER DAY. 🆕 The bags now move twice more and both are cheap: a ~10-min walk to the Spinne on Sep 19, and a ride down to Interlaken on Sep 20 aboard the train the Interlaken day needed anyway, with the bags waiting in a station locker until you head up to Lauterbrunnen that evening. Neither one costs you a journey you were not already making.",
      cost: "—" },

{ day: 19, date: "Sat Sep 19", city: "Guesthouse A → First → Hotel Spinne", status: "store",
      headline: "🔴 Three different hotels this leg — so the Spinne holds the bags today",
      action: "🆕 CORRECTED. He is staying in three separate places (Grindelwald Sep 18 · the Spinne Sep 19 · Lauterbrunnen Sep 20–21), so there is no room to come back to today. Check out of guesthouse A early, walk the two trolleys and two backpacks the ~10 minutes to the HOTEL SPINNE and leave them at reception — check-in is 15:00 but they hold luggage from the morning. Then go up to First empty-handed: you cannot ride a zipline or a mountain cart holding a trolley. Collect the room at ~16:00 when you come down. Everything is inside the village, so this is two short walks, not a transfer.",
      cost: "Free — hotel reception, ask when you book" },

{ day: 20, date: "Sun Sep 20", city: "🆕 Grindelwald → Interlaken → Lauterbrunnen", status: "store",
      headline: "🔴 The one day the Lauterbrunnen move costs you something — a locker and an early start",
      action: "🆕 THE LAST TWO NIGHTS MOVED TO LAUTERBRUNNEN (Hotel Schützen, $555 for the pair, against ~$800 in Grindelwald), and this is the day the bags follow. 🔴 DO NOT DROP THEM AT THE HOTEL FIRST. Grindelwald→Lauterbrunnen is ~40 min with a change at Zweilütschinen, then another 20 min back out to Interlaken — ~60 min of travel before a ~13:00 flight, against 35 min direct. ✅ DO THIS INSTEAD, AND RUN IT EARLY: check out of the Spinne 08:30, ride 35 min straight to INTERLAKEN OST, everything into a station locker by 09:30, then day-trip with a daypack — 🆕 paraglide ~10:30 (not 13:00), chocolate 14:00–15:30, bags out 15:45, and up to Lauterbrunnen by ~16:30. 🕑 THE SCHÜTZEN CHECK-IN IS 14:00 AND NEVER BINDS EITHER WAY — you are in the air at 14:00. What the early start protects is not the desk, it is the DAYLIGHT: the 13:00 flight put you into a 500m-walled valley at 18:45, in the dark, on the single evening you arrive there. ✅ The morning was buying nothing to begin with, because the Spinne spa opens at 12:00. 🔴 THE LOCKER IS NOT OPTIONAL, BECAUSE YOU BOTH FLY. There is nobody left on the ground to watch two trolleys and two backpacks, and you cannot take them to the launch site. The professional camera goes in too: tandem operators fly their own camera and will not let you carry yours. ⚠️ GO TO THE LOCKERS FIRST THING ON ARRIVAL, before food or anything else — a large locker runs about CHF 6–9 a day and two trolleys may well need two of them, so leave margin to sort it out. 💡 ASK THE PARAGLIDING OPERATOR AT BOOKING whether they store bags at their office during the flight; most Interlaken operators do, and a yes removes the station from the plan entirely.",
      cost: "~CHF 6–9 per locker, likely two — or free at the paraglide office if they take them" },

    { day: 21, date: "Mon Sep 21", city: "Lauterbrunnen + Schilthorn", status: "free",
      headline: "🆕 Bag-free AND commute-free — you sleep inside today's destination",
      action: "🆕 THE BEST ARGUMENT FOR LAUTERBRUNNEN: this day used to open with ~40 min and a change at Zweilütschinen from Grindelwald and close with the same in reverse. All ~80 min of it is gone — you walk out of the hotel into Staubbach. Trümmelbach, cable car via Mürren to Schilthorn, and back to the same room. The Schilthorn cable cars and the Trümmelbach lifts are cramped; going up with luggage would be miserable and this plan never asks you to.",
      cost: "Free" },

    { day: 22, date: "Tue Sep 22", city: "Lauterbrunnen → Paris", status: "move",
      headline: "🆕 An unhurried travel morning",
      action: "🆕 Check out of the Schützen around 10:00 and take the 20-min train to Interlaken Ost, in good time for the 11:07. The old Grindelwald plan needed a 09:37 with every bag just to reach the start line. Bags straight onto the GoldenPass Express at 11:07. Panoramic coaches to Montreux, then Geneva, then the TGV into Paris ~19:30. The bags sit on a luggage rack the whole way and you never need a locker.",
      cost: "—" },

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
