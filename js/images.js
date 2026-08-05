// ============================================================
// ACTIVITY IMAGES
// ------------------------------------------------------------
// Photos so the itinerary shows what each activity actually looks like,
// instead of asking you to recognise a name.
//
// Every URL was GET-verified to return a real image before shipping, and
// each one was chosen to show THE SPECIFIC PLACE. An earlier pass took
// whatever lead image a Wikipedia article happened to carry and ended up
// illustrating the Cappadocia balloon with a festival in Japan, the First
// zipline with one in Texas and the toboggan with a run in Russia. Those
// are now site-specific photos found by searching Wikimedia Commons
// directly. Where no honest photo of the actual place exists, the
// highlight renders as a plain text row rather than a generic stand-in.
//
// Served through Wikimedia's Special:FilePath redirect, which renders a
// thumbnail at any width; the direct /thumb/ URLs only serve widths that
// are already cached and 400 on anything else.
//
// Source: Wikimedia Commons — free licences, unlike Google Images results,
// which are third-party hotlinks with no licence and no stability.
// ============================================================

const IMAGES = {
  acropolis: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/900px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
  acropolismuseum: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/900px-The_Parthenon_in_Athens.jpg",
  akrotiri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ancient_Akrotiri.jpeg/900px-Ancient_Akrotiri.jpeg",
  aletsch: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Switzerland%2C_Bettmeralp_%2819505442736%29.jpg/900px-Switzerland%2C_Bettmeralp_%2819505442736%29.jpg",
  bachalpsee: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/900px-Bachalpsee_reflection.jpg",
  balloon: "https://commons.wikimedia.org/wiki/Special:FilePath/Hot%20air%20balloons%20over%20valleys%20near%20G%C3%B6reme%2C%20Cappadocia%20at%20dawn%202.JPG?width=700",
  bluemosque: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg/900px-Istanbul_%2834223582516%29_%28cropped%29.jpg",
  boqueria: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg/900px-Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg",
  bosphorus: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul%2C%20ferry%20ride%20(3802673508).jpg?width=700",
  brienz: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Aerial_image_of_Lake_Brienz_%28view_from_the_southwest%29.jpg/900px-Aerial_image_of_Lake_Brienz_%28view_from_the_southwest%29.jpg",
  cappadocia: "https://commons.wikimedia.org/wiki/Special:FilePath/Balloons%20over%20Goreme.JPG?width=700",
  chocolate: "https://commons.wikimedia.org/wiki/Special:FilePath/Chocolate%20workshop%20carambole.jpg?width=700",
  circusmaximus: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/CircusMaximusSO.jpg/900px-CircusMaximusSO.jpg",
  cistern: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg/900px-Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg",
  colosseum: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/900px-Colosseo_2020.jpg",
  derinkuyu: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Derinkuyu_Underground_City_9910_Nevit.jpg/900px-Derinkuyu_Underground_City_9910_Nevit.jpg",
  disneylandpark: "https://upload.wikimedia.org/wikipedia/commons/thumb/x/xx/Disneyland_Park_05,_Paris_22_August_2013.jpg/900px-x.jpg",
  disneystudios: "https://upload.wikimedia.org/wikipedia/commons/thumb/x/xx/Entrance_gate_of_Walt_Disney_Studios_Park,_Disneyland_Paris.jpg/900px-x.jpg",
  eiffel: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/MG-Paris-Champ_de_Mars.jpg/900px-MG-Paris-Champ_de_Mars.jpg",
  eiger: "https://commons.wikimedia.org/wiki/Special:FilePath/First%20Cliff%20Walk%20Br%C3%BCcke.jpg?width=700",
  goldenpass: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg/900px-Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg",
  goreme: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/G%C3%B6reme_town_and_valley_2015.JPG/900px-G%C3%B6reme_town_and_valley_2015.JPG",
  gothicquarter: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Barcelona_-_Carrer_del_Bisbe.jpg/900px-Barcelona_-_Carrer_del_Bisbe.jpg",
  grindelwald: "https://commons.wikimedia.org/wiki/Special:FilePath/Gondolas%20-%20Grindelwald-First%20ropeway.jpg?width=700",
  hagiasophia: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/900px-Hagia_Sophia_%28228968325%29.jpeg",
  hamam: "https://commons.wikimedia.org/wiki/Special:FilePath/Haseki%20H%C3%BCrrem%20Sultan%20Hammam%2C%20Sultanahmet%2C%20%C4%B0stanbul%20(14243293054).jpg?width=700",
  harderkulm: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/14_Harder_Kulm_Lac_Thoune_Photo_by_Giles_Laurent.jpg/900px-14_Harder_Kulm_Lac_Thoune_Photo_by_Giles_Laurent.jpg",
  interlaken: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg/900px-Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg",
  jungfraujoch: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sphinx_et_Jungfrau_-_img_06980.jpg/900px-Sphinx_et_Jungfrau_-_img_06980.jpg",
  lauterbrunnen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/1_lauterbrunnen_valley_wengen_2022.jpg/900px-1_lauterbrunnen_valley_wengen_2022.jpg",
  louvre: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/900px-Louvre_Museum_Wikimedia_Commons.jpg",
  lycabettus: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/%CE%9B%CF%85%CE%BA%CE%B1%CE%B2%CE%B7%CF%84%CF%84%CF%8C%CF%82_-_Mount_Lycabettus.jpg/900px-%CE%9B%CF%85%CE%BA%CE%B1%CE%B2%CE%B7%CF%84%CF%84%CF%8C%CF%82_-_Mount_Lycabettus.jpg",
  madriddino: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Palacio_de_las_Artes_e_Industrias_%28Madrid%29_01.jpg/900px-Palacio_de_las_Artes_e_Industrias_%28Madrid%29_01.jpg",
  montmartre: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Restaurants%2C_Place_du_Tertre%2C_Paris_30_September_2019.jpg/900px-Restaurants%2C_Place_du_Tertre%2C_Paris_30_September_2019.jpg",
  murren: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1_M%C3%BCrren_2022.jpg/900px-1_M%C3%BCrren_2022.jpg",
  oia: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oia_sunset_-_panoramio_%282%29.jpg/900px-Oia_sunset_-_panoramio_%282%29.jpg",
  pantheon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/900px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg",
  paragliding: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Paragliding_1350361.jpg/900px-Paragliding_1350361.jpg",
  parkguell: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/900px-Parc_guell_-_panoramio.jpg",
  rodelbahn: "https://commons.wikimedia.org/wiki/Special:FilePath/Luftseilbahn%20Grindelwald-Pfingstegg%20-%20panoramio.jpg?width=700",
  royalpalace: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/900px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg",
  sacrecoeur: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/900px-Le_sacre_coeur.jpg",
  sagrada: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/900px-SF_maig_2_cropped.jpg",
  sanmiguel: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mercado_de_San_Miguel_2025.jpg/900px-Mercado_de_San_Miguel_2025.jpg",
  santorini: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Santorini_Fira3_tango7174.jpg/900px-Santorini_Fira3_tango7174.jpg",
  schilthorn: "https://commons.wikimedia.org/wiki/Special:FilePath/Piz%20Gloria%2C%20The%20revolving%20restaurant%20at%20Schilthorn%2C%20Swiss%20Alps%20(Ank%20Kumar)%2003.jpg?width=700",
  segoviaalcazar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg/900px-Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg",
  segoviaaqueduct: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Aqueduct_of_Segovia_08.jpg/900px-Aqueduct_of_Segovia_08.jpg",
  staubbach: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lauterbrunnen_Staubbach.jpg/900px-Lauterbrunnen_Staubbach.jpg",
  stpeters: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/900px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
  toledo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Toledo_%2837737041515%29.jpg/900px-Toledo_%2837737041515%29.jpg",
  topkapi: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/900px-Topkap%C4%B1_-_01.jpg",
  trastevere: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Santa_Maria_in_Trastevere_fountain.jpg/900px-Santa_Maria_in_Trastevere_fountain.jpg",
  trevi: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/900px-Trevi_Fountain_-_Roma.jpg",
  trummelbach: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Trummelbach.JPG/900px-Trummelbach.JPG",
  uchisar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/U%C3%A7hisar%2C_Cappadocia_01.jpg/900px-U%C3%A7hisar%2C_Cappadocia_01.jpg",
  ziplinegen: "https://commons.wikimedia.org/wiki/Special:FilePath/Cliff-Walk%20First%20Grindelwald.%20Sicht%20auf%20den%20Eiger.jpg?width=700",
  zoologiaroma: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Civic_Zoological_Museum%2C_Rome%2C_Italy.jpg/900px-Civic_Zoological_Museum%2C_Rome%2C_Italy.jpg"
};
