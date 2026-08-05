// ============================================================
// ACTIVITY IMAGES
// ------------------------------------------------------------
// Photos so the itinerary shows what each activity actually looks like,
// instead of asking you to recognise a name.
//
// Every URL below was resolved from Wikipedia's REST summary endpoint and
// then GET-verified to return a real image — none are guessed, and logos,
// maps and coats of arms that the API returned were rejected rather than
// shipped. Highlights with no verified photo render as plain text rows.
//
// Served through Wikimedia's Special:FilePath redirect, which renders a
// thumbnail at any width; the direct /thumb/ URLs only serve widths that
// happen to be cached already and 400 on anything else.
//
// Source: Wikimedia Commons. Licence and attribution for each file live on
// its Commons page.
// ============================================================

const IMAGES = {
  acropolis: "https://commons.wikimedia.org/wiki/Special:FilePath/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg?width=700",
  acropolismuseum: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Parthenon_in_Athens.jpg?width=700",
  akrotiri: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Akrotiri.jpeg?width=700",
  aletsch: "https://commons.wikimedia.org/wiki/Special:FilePath/Switzerland%2C_Bettmeralp_%2819505442736%29.jpg?width=700",
  bachalpsee: "https://commons.wikimedia.org/wiki/Special:FilePath/Bachalpsee_reflection.jpg?width=700",
  balloon: "https://commons.wikimedia.org/wiki/Special:FilePath/2006_Ojiya_balloon_festival_011.jpg?width=700",
  bluemosque: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_%2834223582516%29_%28cropped%29.jpg?width=700",
  boqueria: "https://commons.wikimedia.org/wiki/Special:FilePath/Barcelona_-_Mercat_de_Sant_Josep_%28la_Boqueria%29_-_Entrance.jpg?width=700",
  bosphorus: "https://commons.wikimedia.org/wiki/Special:FilePath/Bosphorus_Bridge_%281973%29_in_Istanbul.jpg?width=700",
  brienz: "https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_image_of_Lake_Brienz_%28view_from_the_southwest%29.jpg?width=700",
  cappadocia: "https://commons.wikimedia.org/wiki/Special:FilePath/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg?width=700",
  chocolate: "https://commons.wikimedia.org/wiki/Special:FilePath/Three_Bars_%281%29.jpg?width=700",
  circusmaximus: "https://commons.wikimedia.org/wiki/Special:FilePath/CircusMaximusSO.jpg?width=700",
  cistern: "https://commons.wikimedia.org/wiki/Special:FilePath/Cisterna_Bas%C3%ADlica%2C_Estambul%2C_Turqu%C3%ADa%2C_2024-09-28%2C_DD_58-60_HDR.jpg?width=700",
  colosseum: "https://commons.wikimedia.org/wiki/Special:FilePath/Colosseo_2020.jpg?width=700",
  derinkuyu: "https://commons.wikimedia.org/wiki/Special:FilePath/Derinkuyu_Underground_City_9910_Nevit.jpg?width=700",
  disneylandpark: "https://commons.wikimedia.org/wiki/Special:FilePath/Disneyland_Park_05,_Paris_22_August_2013.jpg?width=700",
  disneystudios: "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance_gate_of_Walt_Disney_Studios_Park,_Disneyland_Paris.jpg?width=700",
  eiffel: "https://commons.wikimedia.org/wiki/Special:FilePath/MG-Paris-Champ_de_Mars.jpg?width=700",
  eiger: "https://commons.wikimedia.org/wiki/Special:FilePath/North_face.jpg?width=700",
  goldenpass: "https://commons.wikimedia.org/wiki/Special:FilePath/Zweisimmen_20220802E177_384-284-194-184-291-465006.jpg?width=700",
  goreme: "https://commons.wikimedia.org/wiki/Special:FilePath/G%C3%B6reme_town_and_valley_2015.JPG?width=700",
  gothicquarter: "https://commons.wikimedia.org/wiki/Special:FilePath/Barcelona_-_Carrer_del_Bisbe.jpg?width=700",
  grindelwald: "https://commons.wikimedia.org/wiki/Special:FilePath/Grindelwald_View_02.jpg?width=700",
  hagiasophia: "https://commons.wikimedia.org/wiki/Special:FilePath/Hagia_Sophia_%28228968325%29.jpeg?width=700",
  hamam: "https://commons.wikimedia.org/wiki/Special:FilePath/Istanbul_-_panoramio_%28116%29.jpg?width=700",
  harderkulm: "https://commons.wikimedia.org/wiki/Special:FilePath/14_Harder_Kulm_Lac_Thoune_Photo_by_Giles_Laurent.jpg?width=700",
  interlaken: "https://commons.wikimedia.org/wiki/Special:FilePath/Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg?width=700",
  jungfraujoch: "https://commons.wikimedia.org/wiki/Special:FilePath/Sphinx_et_Jungfrau_-_img_06980.jpg?width=700",
  lauterbrunnen: "https://commons.wikimedia.org/wiki/Special:FilePath/1_lauterbrunnen_valley_wengen_2022.jpg?width=700",
  louvre: "https://commons.wikimedia.org/wiki/Special:FilePath/Louvre_Museum_Wikimedia_Commons.jpg?width=700",
  lycabettus: "https://commons.wikimedia.org/wiki/Special:FilePath/%CE%9B%CF%85%CE%BA%CE%B1%CE%B2%CE%B7%CF%84%CF%84%CF%8C%CF%82_-_Mount_Lycabettus.jpg?width=700",
  madriddino: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_de_las_Artes_e_Industrias_%28Madrid%29_01.jpg?width=700",
  montmartre: "https://commons.wikimedia.org/wiki/Special:FilePath/Restaurants%2C_Place_du_Tertre%2C_Paris_30_September_2019.jpg?width=700",
  murren: "https://commons.wikimedia.org/wiki/Special:FilePath/1_M%C3%BCrren_2022.jpg?width=700",
  oia: "https://commons.wikimedia.org/wiki/Special:FilePath/Oia_sunset_-_panoramio_%282%29.jpg?width=700",
  pantheon: "https://commons.wikimedia.org/wiki/Special:FilePath/Pantheon_%28Rome%29_-_Right_side_and_front.jpg?width=700",
  paragliding: "https://commons.wikimedia.org/wiki/Special:FilePath/Paragliding_1350361.jpg?width=700",
  parkguell: "https://commons.wikimedia.org/wiki/Special:FilePath/Parc_guell_-_panoramio.jpg?width=700",
  rodelbahn: "https://commons.wikimedia.org/wiki/Special:FilePath/Bobrovy_Log_rodelbahn.mpg?width=700",
  royalpalace: "https://commons.wikimedia.org/wiki/Special:FilePath/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg?width=700",
  sacrecoeur: "https://commons.wikimedia.org/wiki/Special:FilePath/Le_sacre_coeur.jpg?width=700",
  sagrada: "https://commons.wikimedia.org/wiki/Special:FilePath/SF_maig_2_cropped.jpg?width=700",
  sanmiguel: "https://commons.wikimedia.org/wiki/Special:FilePath/Mercado_de_San_Miguel_2025.jpg?width=700",
  santorini: "https://commons.wikimedia.org/wiki/Special:FilePath/Santorini_Fira3_tango7174.jpg?width=700",
  schilthorn: "https://commons.wikimedia.org/wiki/Special:FilePath/Schilthorn_with_Bernese_Alps%2C_2012_August.jpg?width=700",
  segoviaalcazar: "https://commons.wikimedia.org/wiki/Special:FilePath/Panor%C3%A1mica_Oto%C3%B1o_Alc%C3%A1zar_de_Segovia.jpg?width=700",
  segoviaaqueduct: "https://commons.wikimedia.org/wiki/Special:FilePath/Aqueduct_of_Segovia_08.jpg?width=700",
  staubbach: "https://commons.wikimedia.org/wiki/Special:FilePath/Lauterbrunnen_Staubbach.jpg?width=700",
  stpeters: "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg?width=700",
  toledo: "https://commons.wikimedia.org/wiki/Special:FilePath/Toledo_%2837737041515%29.jpg?width=700",
  topkapi: "https://commons.wikimedia.org/wiki/Special:FilePath/Topkap%C4%B1_-_01.jpg?width=700",
  trastevere: "https://commons.wikimedia.org/wiki/Special:FilePath/Santa_Maria_in_Trastevere_fountain.jpg?width=700",
  trevi: "https://commons.wikimedia.org/wiki/Special:FilePath/Trevi_Fountain_-_Roma.jpg?width=700",
  trummelbach: "https://commons.wikimedia.org/wiki/Special:FilePath/Trummelbach.JPG?width=700",
  uchisar: "https://commons.wikimedia.org/wiki/Special:FilePath/U%C3%A7hisar%2C_Cappadocia_01.jpg?width=700",
  ziplinegen: "https://commons.wikimedia.org/wiki/Special:FilePath/Texas_Zip_liner_5430.JPG?width=700",
  zoologiaroma: "https://commons.wikimedia.org/wiki/Special:FilePath/Civic_Zoological_Museum%2C_Rome%2C_Italy.jpg?width=700"
};
