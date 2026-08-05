// ============================================================
// ACTIVITY IMAGES
// ------------------------------------------------------------
// Photos so the itinerary shows what each activity actually looks like,
// instead of asking you to recognise a name.
//
// URLs point DIRECTLY at upload.wikimedia.org — the CDN — at 330px, which
// is ~22 KB each and 2.5x the 132px the cards render at. Two earlier
// attempts got this wrong and are worth recording so it does not happen
// a third time:
//
//   1. 900px /thumb/ URLs. Wikimedia only serves widths it has already
//      generated; everything else is HTTP 400. 48 of 58 shipped broken.
//   2. commons.wikimedia.org/wiki/Special:FilePath. That is a MediaWiki
//      special page, not a CDN. Fine for one request, throttled hard when
//      a page fires fifty-five at once.
//
// These URLs come from the Commons API's own imageinfo.thumburl at
// iiurlwidth=330, i.e. the exact file Wikimedia says it serves at that
// size. The renderer also hides any image that still fails to load, so a
// bad URL degrades to a plain text row instead of a broken-image icon.
//
// Each photo was chosen to show THE SPECIFIC PLACE. An earlier pass took
// whatever lead image a Wikipedia article carried and illustrated the
// Cappadocia balloon with a festival in Japan, the First zipline with one
// in Texas and the toboggan with a run in Russia. Where no honest photo of
// the actual place exists, the highlight has no image at all.
//
// Source: Wikimedia Commons — free licences, unlike Google Images results,
// which are third-party hotlinks with no licence and no stability.
// ============================================================

const IMAGES = {
  acropolis: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/330px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
  acropolismuseum: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/330px-The_Parthenon_in_Athens.jpg",
  akrotiri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ancient_Akrotiri.jpeg/330px-Ancient_Akrotiri.jpeg",
  aletsch: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Switzerland%2C_Bettmeralp_%2819505442736%29.jpg/330px-Switzerland%2C_Bettmeralp_%2819505442736%29.jpg",
  bachalpsee: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/330px-Bachalpsee_reflection.jpg",
  balloon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Hot_air_balloons_over_valleys_near_G%C3%B6reme%2C_Cappadocia_at_dawn_2.JPG/330px-Hot_air_balloons_over_valleys_near_G%C3%B6reme%2C_Cappadocia_at_dawn_2.JPG",
  bluemosque: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg/330px-Istanbul_%2834223582516%29_%28cropped%29.jpg",
  boqueria: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg/330px-Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg",
  bosphorus: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Istanbul%2C_ferry_ride_%283802673508%29.jpg/330px-Istanbul%2C_ferry_ride_%283802673508%29.jpg",
  brienz: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aerial_image_of_Lake_Brienz_%28view_from_the_southwest%29.jpg/330px-Aerial_image_of_Lake_Brienz_%28view_from_the_southwest%29.jpg",
  cappadocia: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Balloons_over_Goreme.JPG/330px-Balloons_over_Goreme.JPG",
  chocolate: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chocolate_workshop_carambole.jpg/330px-Chocolate_workshop_carambole.jpg",
  circusmaximus: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/CircusMaximusSO.jpg/330px-CircusMaximusSO.jpg",
  cistern: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/330px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg",
  colosseum: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/330px-Colosseo_2020.jpg",
  derinkuyu: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Derinkuyu_Underground_City_9910_Nevit.jpg/330px-Derinkuyu_Underground_City_9910_Nevit.jpg",
  disneylandpark: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Disneyland_Park_05%2C_Paris_22_August_2013.jpg/330px-Disneyland_Park_05%2C_Paris_22_August_2013.jpg",
  disneystudios: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Entrance_gate_of_Walt_Disney_Studios_Park%2C_Disneyland_Paris.jpg/330px-Entrance_gate_of_Walt_Disney_Studios_Park%2C_Disneyland_Paris.jpg",
  eiffel: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MG-Paris-Champ_de_Mars.jpg/330px-MG-Paris-Champ_de_Mars.jpg",
  eiger: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/First_Cliff_Walk_Br%C3%BCcke.jpg/330px-First_Cliff_Walk_Br%C3%BCcke.jpg",
  goldenpass: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg/330px-Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg",
  goreme: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/G%C3%B6reme_town_and_valley_2015.JPG/330px-G%C3%B6reme_town_and_valley_2015.JPG",
  gothicquarter: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Barcelona_-_Carrer_del_Bisbe.jpg/330px-Barcelona_-_Carrer_del_Bisbe.jpg",
  grindelwald: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gondolas_-_Grindelwald-First_ropeway.jpg/330px-Gondolas_-_Grindelwald-First_ropeway.jpg",
  hagiasophia: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/330px-Hagia_Sophia_%28228968325%29.jpeg",
  hamam: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Haseki_H%C3%BCrrem_Sultan_Hammam%2C_Sultanahmet%2C_%C4%B0stanbul_%2814243293054%29.jpg/330px-Haseki_H%C3%BCrrem_Sultan_Hammam%2C_Sultanahmet%2C_%C4%B0stanbul_%2814243293054%29.jpg",
  harderkulm: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/14_Harder_Kulm_Lac_Thoune_Photo_by_Giles_Laurent.jpg/330px-14_Harder_Kulm_Lac_Thoune_Photo_by_Giles_Laurent.jpg",
  interlaken: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg/330px-Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg",
  jungfraujoch: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sphinx_et_Jungfrau_-_img_06980.jpg/330px-Sphinx_et_Jungfrau_-_img_06980.jpg",
  lauterbrunnen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/1_lauterbrunnen_valley_wengen_2022.jpg/330px-1_lauterbrunnen_valley_wengen_2022.jpg",
  louvre: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/330px-Louvre_Museum_Wikimedia_Commons.jpg",
  lycabettus: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/%CE%9B%CF%85%CE%BA%CE%B1%CE%B2%CE%B7%CF%84%CF%84%CF%8C%CF%82_-_Mount_Lycabettus.jpg/330px-%CE%9B%CF%85%CE%BA%CE%B1%CE%B2%CE%B7%CF%84%CF%84%CF%8C%CF%82_-_Mount_Lycabettus.jpg",
  madriddino: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Palacio_de_las_Artes_e_Industrias_%28Madrid%29_01.jpg/330px-Palacio_de_las_Artes_e_Industrias_%28Madrid%29_01.jpg",
  montmartre: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Restaurants%2C_Place_du_Tertre%2C_Paris_30_September_2019.jpg/330px-Restaurants%2C_Place_du_Tertre%2C_Paris_30_September_2019.jpg",
  murren: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1_M%C3%BCrren_2022.jpg/330px-1_M%C3%BCrren_2022.jpg",
  oia: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oia_sunset_-_panoramio_%282%29.jpg/330px-Oia_sunset_-_panoramio_%282%29.jpg",
  pantheon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/330px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
  paragliding: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Paragliding_1350361.jpg/330px-Paragliding_1350361.jpg",
  parkguell: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/330px-Parc_guell_-_panoramio.jpg",
  rodelbahn: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Luftseilbahn_Grindelwald-Pfingstegg_-_panoramio.jpg/330px-Luftseilbahn_Grindelwald-Pfingstegg_-_panoramio.jpg",
  royalpalace: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/330px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg",
  sacrecoeur: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/330px-Le_sacre_coeur.jpg",
  sagrada: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/330px-SF_maig_2_cropped.jpg",
  sanmiguel: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mercado_de_San_Miguel_2025.jpg/330px-Mercado_de_San_Miguel_2025.jpg",
  santorini: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Santorini_Fira3_tango7174.jpg/330px-Santorini_Fira3_tango7174.jpg",
  schilthorn: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Piz_Gloria%2C_The_revolving_restaurant_at_Schilthorn%2C_Swiss_Alps_%28Ank_Kumar%29_03.jpg/330px-Piz_Gloria%2C_The_revolving_restaurant_at_Schilthorn%2C_Swiss_Alps_%28Ank_Kumar%29_03.jpg",
  segoviaalcazar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg/330px-Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg",
  segoviaaqueduct: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Aqueduct_of_Segovia_08.jpg/330px-Aqueduct_of_Segovia_08.jpg",
  staubbach: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lauterbrunnen_Staubbach.jpg/330px-Lauterbrunnen_Staubbach.jpg",
  stpeters: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/330px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
  toledo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Toledo_%2837737041515%29.jpg/330px-Toledo_%2837737041515%29.jpg",
  topkapi: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/330px-Topkap%C4%B1_-_01.jpg",
  trastevere: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Santa_Maria_in_Trastevere_fountain.jpg/330px-Santa_Maria_in_Trastevere_fountain.jpg",
  trevi: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/330px-Trevi_Fountain_-_Roma.jpg",
  trummelbach: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Trummelbach.JPG/330px-Trummelbach.JPG",
  uchisar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/U%C3%A7hisar%2C_Cappadocia_01.jpg/330px-U%C3%A7hisar%2C_Cappadocia_01.jpg",
  ziplinegen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg/330px-Cliff-Walk_First_Grindelwald._Sicht_auf_den_Eiger.jpg",
  zoologiaroma: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Civic_Zoological_Museum%2C_Rome%2C_Italy.jpg/330px-Civic_Zoological_Museum%2C_Rome%2C_Italy.jpg"
};
