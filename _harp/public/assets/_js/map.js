function addMarker(data, map, bounds) {
  var mapLabel = new MapLabel({
    text: data.properties.name,
    map: map,
    fontSize: 12,
    align: 'center'
  });

  mapLabel.set('position', new google.maps.LatLng(data.geometry.coordinates[1], data.geometry.coordinates[0]));

  var marker = new google.maps.Marker({
    title: data.properties.name,
    map: map,
    icon: {
      path: "M27.648 -41.399q0 -3.816 -2.7 -6.516t-6.516 -2.7 -6.516 2.7 -2.7 6.516 2.7 6.516 6.516 2.7 6.516 -2.7 2.7 -6.516zm9.216 0q0 3.924 -1.188 6.444l-13.104 27.864q-0.576 1.188 -1.71 1.872t-2.43 0.684 -2.43 -0.684 -1.674 -1.872l-13.14 -27.864q-1.188 -2.52 -1.188 -6.444 0 -7.632 5.4 -13.032t13.032 -5.4 13.032 5.4 5.4 13.032z",
      scale: 0.6,
      strokeWeight: 0.2,
      strokeColor: 'black',
      strokeOpacity: 1,
      fillColor: data.properties.color,
      fillOpacity: 0.85,
    }
  });

  marker.bindTo('position', mapLabel);

  bounds.extend(marker.getPosition());
}

function initMap() {
  var data = {
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1173585,
                      44.4498486,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Jurnalistului",
                  "styleUrl": "#icon-503-C6A4CF-labelson",
                  "styleHash": "-19998ca",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ\" height=\"200\" width=\"auto\" /><br><br>--------------------------Viitorului 154----------------------------<br><br>ADRESĂ: Viitorului 154<br><br>LINK: https://www.facebook.com/casa.jurnalistului/?fref=ts<br><br>DESCRIERE:<br><br>Jurnalism de profunzime într-o lume nebună<br><br><br>PROGRAM:<br><br>21.00 - Încălzire, discuții<br>23.00 - CARNALvAL SPP<br>24.00 - Ceva să placă la toată lumea<br>04.00 - After Techno cu Zen<br><br><img src=\"https://lh3.googleusercontent.com/6qZHMH3EI5pg2k9iacyAWn9_5T8IRVeoiqJgw850NuIonC3wrND81WzWLCQKgGEztkJYT4qD5qUXUHTsg8e3bPURJmhizZw6D5l24EAW_kJjgjPBBMRKBvLlR9ctoSE\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://lh6.googleusercontent.com/2IGeGedjomnc7KCkAVU_zUoA-Q55hapcIcyBtPVrFAd45jPrpxZgp4hNIX1jHkc3tNrSx6V36q9bbYOCS69Cq167apC38tztTyNlCR2YUWvKLCiFrM_r-64OIqpDIkIj\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ https://lh3.googleusercontent.com/6qZHMH3EI5pg2k9iacyAWn9_5T8IRVeoiqJgw850NuIonC3wrND81WzWLCQKgGEztkJYT4qD5qUXUHTsg8e3bPURJmhizZw6D5l24EAW_kJjgjPBBMRKBvLlR9ctoSE https://lh6.googleusercontent.com/2IGeGedjomnc7KCkAVU_zUoA-Q55hapcIcyBtPVrFAd45jPrpxZgp4hNIX1jHkc3tNrSx6V36q9bbYOCS69Cq167apC38tztTyNlCR2YUWvKLCiFrM_r-64OIqpDIkIj"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1066967,
                      44.4316979,
                      0
                  ]
              },
              "properties": {
                  "name": "Manasia Hub",
                  "styleUrl": "#icon-503-4186F0-labelson",
                  "styleHash": "7a751256",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/RxRH_G6pfbk_pHAuXc9R-8vhhJZCsrvp0lGYDPdbcWFBpet3b77PoHVCOsOh0gTPMEvwBXrAl4n10WB_phV5qYnRhEz6gV-d93AdcHX_0ZVBgxQkqZ6pf6aV1i2qXrgW\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Stelea Spătarul 13<br>LINK: https://www.facebook.com/manasiahub/?fref=ts<br><br>DESCRIERE:<br><br>Manasia Hub – căminul proiectelor artistice și inițiativelor antreprenoriale. <br><br>Manasia a apărut încet, tăcut și mai ales organic. Întâi a fost dorința fondatorilor, apoi, cu greu, a venit și spațiul de pe Stelea Spătarul 13, loc care a atras oamenii cu pofte de proiecte. Cu chef de artă și de muncă. Casa noastră este o clădire interbelică construită de un disident anticomunist, Onisifor Ghibu. Are o istorie bogată și profundă, care o diferențiază de celelalte clădiri din jur. Când am găsit-o, clădirea maiestuoasă de-abia mai stătea în picioare și, de atunci, ne-am luat misiunea de a-i reda famecul inițial. <br><br>Fosta secție 10 de Poliție din rondul Stelea Spătaru adăpostește acum un birou de arhitectură, unul de design, unul de producție audio, un ONG, o sală de repetiție pentru actori, o cameră de pingpong, un bar, o rulotă de snacks și temporar expoziții, proiecții, mici concerte. Un amalgam de creație bucureșteană într-un spațiu cu o istorie rece, dar care devine din ce în ce mai cald și primitor.<br><br>PROGRAM:<br><br>De Noaptea Caselor puteți vizita orice încăpere. Iar, pentru că frumos este să îți întâmpini musafirii cu ceva, v-am pregătit următorul program:<br>Se începe în curte cu un grătar by Manasia Food, asociația MozaiQ ține un atelier de bannere „Iubirea nu se votează”, pentru protestul din 30 septembrie, iar în casă, la etajul 2, de la ora 18:00 -Sentiment (live), Alex Troubetzkoy, iar în paralel la studioul de producție muzicală DISC, îl veți putea asculta pe Radu Bourceanu cu un set de muzică electro combinată cu elemente românești, pe Jack Hide cu o sesiune live de muzică ambientală. <br>After-party: von Bülove și Dragoș Ilici.<br>This is Manasia Hub:<br> DISC / Dragoș Ilici / Asociatia Vira / Manasia Food / MadPiano / Liniar / Linia 1 / Film Scotch / Studio Est / Jamschek and Sons / IB Scenografie / MozaiQ <br><br><img src=\"https://lh3.googleusercontent.com/Ew4-LvrIBhtNkD1JyKiw_COWqoOu1_XwE2o-6YNbZa4IKK0lrKG10DzHg9mB72nSV37Jb8_CIdw9mhSWXW9OBz4o7f_ha6jPrr8bogIgxX_B9Azzj1ucW8EY1G38nEKK\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh6.googleusercontent.com/RxRH_G6pfbk_pHAuXc9R-8vhhJZCsrvp0lGYDPdbcWFBpet3b77PoHVCOsOh0gTPMEvwBXrAl4n10WB_phV5qYnRhEz6gV-d93AdcHX_0ZVBgxQkqZ6pf6aV1i2qXrgW https://lh3.googleusercontent.com/Ew4-LvrIBhtNkD1JyKiw_COWqoOu1_XwE2o-6YNbZa4IKK0lrKG10DzHg9mB72nSV37Jb8_CIdw9mhSWXW9OBz4o7f_ha6jPrr8bogIgxX_B9Azzj1ucW8EY1G38nEKK"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1266309,
                      44.4398892,
                      0
                  ]
              },
              "properties": {
                  "name": "EFdeN",
                  "styleUrl": "#icon-503-009D57-labelson",
                  "styleHash": "7284c516",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh3.googleusercontent.com/Fmny60NDlz_u_9K-ZKYl-Gv8Sb1XhhC98g8OlF0mgOTgFNBYoLaY9SvJ92-M_qhcDXgaxqjPir__tKdCURcOUo_E7tLTVVI-OgFew3DtKBaenwVYiV5kvSaeLvbMfOjK\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Pache Protopopescu 66<br><br>LINK: https://www.facebook.com/EFdeN.casa.solara.eficienta.energetic/<br><br>DESCRIERE:<br><br>Începând cu 2012, la EfdeN ne-am adunat într-o echipă multidisciplinară de tineri pasionați care am proiectat și construit integral o locuință solară, eficientă energetic, sustenabilă, sigură, confortabilă și foarte prietenoasă cu mediul, cu care am reprezentat România la cea mai prestigioasă competiție de case solare, Solar Decathlon Europe, în 2014, la Versailles.<br><br><br>Am reconstruit casa într-o zonă centrală a Bucureștiului și începând cu anul 2015, aceasta este deschisă ca EFdeN 4C - Centrul de Cercetare al Condițiilor de Confort, adresându-se atât publicului larg, cât și specialist, interesat să afle mai multe despre locuințele solare. În continuare, ne pregătim cu un nou prototip pentru ediția Solar Decathlon Middle East ce va avea loc în 2018, în Dubai, unde vom concura alături de alte 21 de țări.<br><br>PROGRAM: <br><br>20:00 - 01:00 casa deschisa pentru vizitatori<br>Tur public din 30 in 30 de minute, incepand cu 20:00<br>21:00 - moment artistic<br>22:00 - prezentare Ghidul conditiilor de confort (casa EFdeN este centru de cercetare al conditiilor de confort, avem un ghid disponibil şi online aici)<br>23.00 - prezentare prototip EFdeN Signature & Solar Decathlon Middle East, Dubai 2018, competitia de case verzi la care vom reprezenta Romania in anul centenarului",
                  "gx_media_links": "https://lh3.googleusercontent.com/Fmny60NDlz_u_9K-ZKYl-Gv8Sb1XhhC98g8OlF0mgOTgFNBYoLaY9SvJ92-M_qhcDXgaxqjPir__tKdCURcOUo_E7tLTVVI-OgFew3DtKBaenwVYiV5kvSaeLvbMfOjK"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1001315999999,
                      44.4255256,
                      0
                  ]
              },
              "properties": {
                  "name": "Costa-Foru ",
                  "styleUrl": "#icon-503-9FC3FF-labelson",
                  "styleHash": "-19b5cd8a",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh4.googleusercontent.com/b-rnOrDtASvce-GU7VlmFcXK8ncsUt-mv3qzET8VSNLoR0LrEfd07uHEnsPQIVMJDfWVHcngyJrSlcxrCW_4J5S-Sm-9MmVSt-0Cc9GHr_7WFG_aduHsLgceUh-_XyhI\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Aleea Dealul Mitropoliei 7<br><br>LINK: https://www.facebook.com/casacostaforu7/<br><br>DESCRIERE:<br><br>Explorăm modalități participative și colaborative de valorificare a patrimoniului material și imaterial, reintegrând în circuitul urban contemporan unul din spațiile-memorie ale secolului trecut: Casa Costa-Foru. De la locuinţă a familiei la primul sediu al Ligii pentru Drepturile Omului, la loc de lectură pentru tineri în căutare de inspiraţie, la redacţia pentru prima revistă dedicată copiilor sau chiar salon pentru balurile de altă dată, Casa păstrează şi azi în fiecare ungher instantanee ale trecutului.<br><br>Casa Costa-Foru este un spațiu socio-cultural alternativ bucureștean revitalizat prin implicarea comunității: voi, cei interesați de a (re)descoperi orașul. Credem că viețile sale trecute merită repovestite prin explorarea și reinterpretarea spațiilor ce stau astăzi uitate, pentru că lectura acestora ca exercițiu urban este accesibilă fiecăruia dintre noi și creează o legătură afectivă cu orașul în care trăim. <br><br>PROGRAM: <br><br>Ora 15:00 | deschidere<br>Ora 16:00 | Stiluri si mestesug cu Gheorghe - Restaurare<br><br>! Accesul la atelier se face numai pe baza de înscriere prin e-mail la casacostaforu@gmail.com. Numărul de locuri este limitat iar locurile se acordă în ordinea înscrierilor. Participare gratuită. Durata: 2h<br><br>Ora 20:00 | concert JAZÚ<br><br>Casa va rămâne apoi deschisă pentru vizitare până la ora 01:00 în cadrul circuitului propus de către Noaptea Caselor #5.<br><br><img src=\"https://lh3.googleusercontent.com/CYG72rn0AjC81xi3EJgbllUAtJbt6dgAumkb1HeQztst4GrdlDvMBIbJnSuOXWTKBus2-5og9FV8ZzhFFirea7MOIO7g_cj7GUCJPTU6FjJpQBE2D-mq9GchAe6w9C2ORg\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh4.googleusercontent.com/b-rnOrDtASvce-GU7VlmFcXK8ncsUt-mv3qzET8VSNLoR0LrEfd07uHEnsPQIVMJDfWVHcngyJrSlcxrCW_4J5S-Sm-9MmVSt-0Cc9GHr_7WFG_aduHsLgceUh-_XyhI https://lh3.googleusercontent.com/CYG72rn0AjC81xi3EJgbllUAtJbt6dgAumkb1HeQztst4GrdlDvMBIbJnSuOXWTKBus2-5og9FV8ZzhFFirea7MOIO7g_cj7GUCJPTU6FjJpQBE2D-mq9GchAe6w9C2ORg"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.09812,
                      44.450408,
                      0
                  ]
              },
              "properties": {
                  "name": "Avanpost8",
                  "styleUrl": "#icon-503-DB4436-labelson",
                  "styleHash": "-511c140a",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh5.googleusercontent.com/p4Vku7_Xow9o23AmQlcLuVSGvoKqn_yA7fnZlroGu4xAYkM2ayPptuM4HGw8A1EH7xQ9IQ3rDvDMobhQ26oXFm9KMebYNivtc_okwOGGOhGj_3jOOSfFADy1IJucAxCV4Q\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Crăciun 8<br><br>LINK: https://www.facebook.com/avanpost8/?fref=ts<br>DESCRIERE:<br><br>Spațiul Avanpost s-a coagulat în timp, adunând laolaltă artiști independenți, liberi, boemi, cu idei și pasiuni comune manifestate prin intermediul artelor vizuale și auditive. Este rezultatul unor legături de prietenie, fiecare dintre noi având rolul său în actul creației artistice, a unei forme invizibile de energie comună. Avanpost a evoluat organizând evenimente cultural-artistice la care au participat artiști din toate domeniile: graffiti, artă urbană, muzică, arte vizuale, sculptură, fotografie. <br><br>Prin amprenta lăsată de persoanele care au ocupat spațiul, locul poartă o puternică încărcătură energetică a creativității artistice, un exemplu în acest sens fiind compozitorul Temistocle Popa, care a trăit și creat în acest spațiu. <br><br>PROGRAM:<br><br>Instalații DDoTT - în curtea interioară<br>BarBar & music - subsol<br>Workshop de spiritualitate P.D.P - parter<br>Pictură - Victor Andrei Ionescu, Petre Ciprian, Marangos Alice, Garofalide, Daniela",
                  "gx_media_links": "https://lh5.googleusercontent.com/p4Vku7_Xow9o23AmQlcLuVSGvoKqn_yA7fnZlroGu4xAYkM2ayPptuM4HGw8A1EH7xQ9IQ3rDvDMobhQ26oXFm9KMebYNivtc_okwOGGOhGj_3jOOSfFADy1IJucAxCV4Q"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1124903,
                      44.4375126,
                      0
                  ]
              },
              "properties": {
                  "name": "Carol 53",
                  "styleUrl": "#icon-503-FAD199-labelson",
                  "styleHash": "75ed1236",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2\" height=\"200\" width=\"auto\" /><br><br>-------------------------Bd. Carol Nr.53--------------------------LINK: https://www.facebook.com/casacarol53/?fref=ts<br><br>După aproape 4 ani de activitate, Carol 53 se dezvoltă ca un hub de ateliere creative, punând la dispoziție o parte din spațiile casei, pe perioade determinate de timp, unor persoane sau grupuri ce doresc să dezvolte proiecte cu impact în dezvoltarea social-culturală a orașului.<br>În prezent, ne bucurăm că alături de noi își desfășoară activitatea un colectiv de aproximativ 10-15 persoane din diverse domenii precum arhitectură, artă decorativă, meșteșug, ecologie, teatru, muzică, pictură și serigrafie.<br><br><br>PROGRAM: 21:00 - 2.00 ; Ateliere casei deschid portile pentru vizitatori .<br>Expozitie la parter : <br>Pastila Roz - o grupare satirica, joviala si indiferenta. ; <br>Atelier - Wood be Nice; <br>Atelier expozitie : Andrea Toma; Alexandru Calin Mihalache;<br>Galeria Celula de Arta : Sasha Meret - Singularitate<br><br><img src=\"https://lh5.googleusercontent.com/5bMc1GfivFrSFKFL96FvCruX3M7DIFJqztMUW8AuW7rkXFO4HXPBiHlmqkLLqJMvLH6DQEDAfzwVGleWXrL10nqlnFQA-Jvc_mJ68zeTI33QXdTrDf-eIoZm209WFIVR\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2 https://lh5.googleusercontent.com/5bMc1GfivFrSFKFL96FvCruX3M7DIFJqztMUW8AuW7rkXFO4HXPBiHlmqkLLqJMvLH6DQEDAfzwVGleWXrL10nqlnFQA-Jvc_mJ68zeTI33QXdTrDf-eIoZm209WFIVR"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.114744,
                      44.451895,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Activistului",
                  "styleUrl": "#icon-503-A61B4A-labelson",
                  "styleHash": "-49f23a2a",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/cOqzEs7M5dx84FfflmpEUbFj1c0YixI0CAKY7kf7DEMTlZMy20qZcqMDAYkWqB1T2O1hHyLbP87L6rmi3AHUDvyFKh4ZpJIlBDkxtFLJsARhNwqgadGxSVEYvPdaIXY\" height=\"200\" width=\"auto\" /><br><br>*Casa Activistului este un incubator civic care va fi pus la dispoziția tuturor celor care doresc să organizeze training-uri, workshop-uri, proiecții de filme, dezbateri sau orice proiect civic pe care spațiul îl permite.*<br>LINK:https://www.facebook.com/events/470655856756154/                                                                                <br>PROGRAM<br><br>Va așteptăm la primul nostru eveniment important din Casa Activistului, înainte de lansarea oficiala din 20 octombrie. Programul include teme sociale, care sa ne aducă mai aproape de evenimentele desfășurate în România ultimilor ani. <br><br>Deschidem oficial ușile casei la ora 15:00, moment in care veți avea ocazia sa cunoașteți o parte din echipa de voluntari care lucrează la acest proiect. Pe toată perioada evenimentului puteți trece pe la biblioteca noastră, puteți citi o carte, stand relaxat în hamac sau pe beanbag- uri<br><br>Dacă și voi vreți să faceți parte din echipa noastră veniți de la ora 16:00 sa avem o discuție despre nevoile casei Activistului și cum puteți sa ne ajutați.<br><br>După ora 17 va așteptăm cu instrumentul tău preferat să iei parte la jam session-ul acustic din mansarda noastră.<br><br>Incurajam prezenta copiilor printr-un program special dedicat lor, desfasurat intre orele 15:00 si 19:00<br><br>De la ora 21 il avem invitat pe profesorul Gabriel Săndoiu, care va iniția o discuție la intersecția între filozofie și civism.<br><br>De la ora 22 și până la finalul nopții vor rula proiecții de filme printre care Portavoce + Q&A cu regizorii filmului Ruxandra Gubernat, Henry Rammelt și Ich Bin dubist, realizat de Vlad Ioachimescu, filme despre protestele din România ultimilor ani.             ",
                  "gx_media_links": "https://lh6.googleusercontent.com/cOqzEs7M5dx84FfflmpEUbFj1c0YixI0CAKY7kf7DEMTlZMy20qZcqMDAYkWqB1T2O1hHyLbP87L6rmi3AHUDvyFKh4ZpJIlBDkxtFLJsARhNwqgadGxSVEYvPdaIXY"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.129822,
                      44.440562,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Conspirativa",
                  "styleUrl": "#icon-503-B7DBAB-labelson",
                  "styleHash": "-510915ca",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/CgQOFWLFPGgLAN4Mh2AQGrHt4LoqjgoQLznXFzt3G1jvrVtw9oWsZ4N7oa-boPEkuq7NuBRe9LZEXhC1ephZeFx1upEyV3fXtmIeS57mKs0PfWs5OmwqH0VwgzoPSbXV\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Pache Protopopescu 214<br><br>LINK<br><br>https://www.facebook.com/events/2023043997986560/<br><br>DESCRIERE<br><br>Evenimente Underground, Muzica, Petreceri, Discoteca, Jocuri, Distractie, Galerie de arta Nonconformista, Sesiuni stiintifice, Carte, Expozitii Avant Garde<br><br>PROGRAM<br><br>Noaptea Caselor in asociere cu Casa Conspirativa, Blue Note Cafe, 486, Nicky Stevens si Iulian Ignat va prezinta un eveniment cultural fotografic si muzical:<br><br>Expoziția ”Venezia, pasaje, năluci, ocheade” prezintă fotografii în alb și negru realizate de Iulian Ignat pe parcursul a două ediții ale carnavalului. http://www.iulianignat.ro/news/ <br>”Expozția este cu vânzare și conține lucrari printate la dimensiuni mari și înrămate”<br><br>Maestrul Nicky Stevens va sustine pe durata evenimentului muzica interpretata la pian rece!<br><br>Va asteptam sa admirati si colectiile de arta ale galeriei, fotografii vechi, obiecte de colectie si nu numai!<br><br>Pentru pasionatii sportului avem: Bliard, fusball si ping-pong!<br><br>Va asteptam!",
                  "gx_media_links": "https://lh6.googleusercontent.com/CgQOFWLFPGgLAN4Mh2AQGrHt4LoqjgoQLznXFzt3G1jvrVtw9oWsZ4N7oa-boPEkuq7NuBRe9LZEXhC1ephZeFx1upEyV3fXtmIeS57mKs0PfWs5OmwqH0VwgzoPSbXV"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1087951,
                      44.4411259,
                      0
                  ]
              },
              "properties": {
                  "name": "Atelier S.M.L",
                  "styleUrl": "#icon-503-DB4436-labelson",
                  "styleHash": "-511c140a",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh4.googleusercontent.com/-IJmS5lka5uwinrsb-Sj0i5d4z8zsP-efgF5vI9DhyMifavF0pm3fh6EYKW7r93rH6YLXfrtMid-gtMRjM3vLHDhGarRL4NEZGj0gZFGj5MfYmza3E_QUO7r-cb_Ymd0\" height=\"200\" width=\"auto\" /><br><br>Str. Vasile Lascar Nr. 39                                                  Atelier Lucian Sandu-Milea - spatiu de creatie amenajat intr-un fost atelier de reparat incaltaminte ;                                                                    FB: https://www.facebook.com/events/1532323983534081/<br><br>PROGRAM : 21:00 - 3.00<br>EXPOZITIA : STOC – Bazar Creativ<br>Artă sau obiect?<br><br>Expoziția își propune explorarea graniței dintre artă si obiect. Ce se întâmplă atunci când arta se întâlnește cu spiritul practic, reușind astfel să co-creeze obiecte de uz comun?<br>expun:<br><br>Atelier de serigrafie Octav Avramescu<br>Sandu Milea Lucian <br>Toma Ana <br>Dia Falub <br>Emanuela Voinescu <br>Amina Burloiu <br>Raluca Ilaria Demetrescu <br>Viorela Popa <br>Irina Iliescu<br>Wood be nice <br>Toma Andreea <br>Obie Platon <br>Bita color <br>Șnur <br>Akira <br>Timotei <br>Drob <br>Sefeu <br>Raul Timis                                                                     Alexandra Iliescu    <br><br>*Bazar Creativ dorește să aducă împreună artiști contemporani care reușesc să creeze obiecte uzuale cu valoarea artistică<br>        ",
                  "gx_media_links": "https://lh4.googleusercontent.com/-IJmS5lka5uwinrsb-Sj0i5d4z8zsP-efgF5vI9DhyMifavF0pm3fh6EYKW7r93rH6YLXfrtMid-gtMRjM3vLHDhGarRL4NEZGj0gZFGj5MfYmza3E_QUO7r-cb_Ymd0"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.112161,
                      44.447037,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Doda",
                  "styleUrl": "#icon-503-FFDD5E-labelson",
                  "styleHash": "fb8bdf6",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh3.googleusercontent.com/CqbYimegLH1yej0O9UCr_XZdCdAkKjAq1TQQ4FmnDfZplPINQoIsI6TjN1MvaXTQiXr8TuLVVkPKDc6TsclNQeRECX13-73XLirIoQjdAk8Fe_zfRcrCjY8P321mer1l\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: General Doda Traian 3<br><br>DESCRIERE:<br><br>Casa Doda este locul unde se imbina arta si mestesugul si in care isi impart atelierele Bogdan Deliu Leather Design (atelier pielarie http://bogdandeliu.ro ), Vika Tonu (atelier bijuterie http://www.vikatonu.com ), Naiana Vatavu (artist vizual http://naiana-vatavu.com ), Atelier Snur (atelier pielarie http://mergesnur.ro si Creatorii de Nunti (organizare evenimente https://www.creatoriidenunti.ro )<br><br><br>PROGRAM:<br><br>Pentru o noapte, casa isi va deschide usile si se va transforma intr-o galerie, avand expuse lucrarile si piesele celor care activeaza in acest spatiu creativ.<br><br><img src=\"https://lh6.googleusercontent.com/oxZjkbTeBb4A590baoCnktWvjOQ8j2JIwdrnfwwIwz1i_GeqnrtWZz3iuT9sIgzJ-OoNk5ZTLe4z1C_RdLtshl-sobJJUA7-c228gjkWoDWd5wgeF6Tb-jJ2NLvLSOTP\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh3.googleusercontent.com/CqbYimegLH1yej0O9UCr_XZdCdAkKjAq1TQQ4FmnDfZplPINQoIsI6TjN1MvaXTQiXr8TuLVVkPKDc6TsclNQeRECX13-73XLirIoQjdAk8Fe_zfRcrCjY8P321mer1l https://lh6.googleusercontent.com/oxZjkbTeBb4A590baoCnktWvjOQ8j2JIwdrnfwwIwz1i_GeqnrtWZz3iuT9sIgzJ-OoNk5ZTLe4z1C_RdLtshl-sobJJUA7-c228gjkWoDWd5wgeF6Tb-jJ2NLvLSOTP"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1169276000001,
                      44.4496853,
                      0
                  ]
              },
              "properties": {
                  "name": "Gradina Viitorului",
                  "styleUrl": "#icon-503-93D7E8-labelson",
                  "styleHash": "5cb85716",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "Str. Vitorului Nr. 153"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1163851,
                      44.4364872,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Shukar",
                  "styleUrl": "#icon-503-DB4436-labelson",
                  "styleHash": "-511c140a",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "Plantelor 25 "
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1163851,
                      44.4364872,
                      0
                  ]
              },
              "properties": {
                  "name": "Casa Shukar",
                  "styleUrl": "#icon-503-009D57-labelson",
                  "styleHash": "7284c516",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh6.googleusercontent.com/BXOektwQ3e3oFx14JlULvTOOC8rjrsT6LwzsRW6NQ9OU0Y_SkrOQ-YGIlPdeiPFFfSjoSUtOJb9d81gv3ZrhxVJC4pMNk4-kl7w5ezQHoUIrm2l2mYoD6nqXaNmVH9e8\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Plantelor 25<br><br>LINK<br><br>https://www.facebook.com/plantelor25HUB/<br><br><br>DESCRIERE<br><br>Plantelor25, o casă colorată, o grădină și un brad verde. Spațiu cultural alternativ, evenimente, concerte, expoziții, târguri, workshop-uri. Aka Casa Shukar, unde s-au pus bazele proiectului editorial Shukar Magazin, platformă de cooperare culturală între romi și români. <br><br>PROGRAM<br><br>Shukar Social Party: A 12a călătorie a artistului norvegian Harald Rioșianu Medbøe în România, ediția de noapte. Îi veți putea întâlni pe cei care au editat primul număr al revistei Shukar și care în prezent lucrează la cel de-al doilea număr. Despre revista Shukar și alte proiecte de cooperare culturală între romi și români. Q&A, jam session, social party!",
                  "gx_media_links": "https://lh6.googleusercontent.com/BXOektwQ3e3oFx14JlULvTOOC8rjrsT6LwzsRW6NQ9OU0Y_SkrOQ-YGIlPdeiPFFfSjoSUtOJb9d81gv3ZrhxVJC4pMNk4-kl7w5ezQHoUIrm2l2mYoD6nqXaNmVH9e8"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1213067,
                      44.4390983,
                      0
                  ]
              },
              "properties": {
                  "name": "Colivia",
                  "styleUrl": "#icon-503-F4EB37-labelson",
                  "styleHash": "-25d9bea",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Pache Protopopescu 9<br><br>LINK: https://www.facebook.com/ColiviaLuVrabioiu/?fref=ts<br><br>DESCRIERE:<br><br><br>România. Aveți și pe roz?<br>Casă veche de 100 de ani, geamuri cristal și sobe cu model venețian, cuib ideal pentru activiștii Funky Citizens. <br><br>Casa boierească din Pache Protopopescu nr. 9 a aparținut inițial unui negustor grec, care a donat-o bisericii grecești, actualul proprietar cumpărând-o de la Biserică în 1987. În istoria recentă a fost sediu pentru o sală de net și pentru o grădiniță. Cineva glumea spunând că, la cum arată azi, Colivia ar putea fi lejer un show-room Versace. Colivia îmbină când armonios, când eclectic tehnologia cu stucaturile și geamurile de cristal vechi de o sută de ani. Norișorii colorați care atârnă din tavan și își schimbă cameleonic culoarea dau bine alături de sobele monumentale și biblioteca încastrată din salonul interbelic. Casa e intimă, sobră, bine conservată, ideală pentru mici concerte, piese de teatru sau expoziții intime.<br><br>Funky Citizens e locul în care se întâlnesc cetăţeni „civically fit” care vor să ia parte la procesul decizional. Cele mai puternice arme ale noastre sunt iniţiativele care folosesc deştept tehnologia, advocacy-ul bazat pe date şi educaţia civică.<br><br>PROGRAM:<br>Live painting în curte - mural cu Wanda https://www.instagram.com/que_nais/ <br>Implicăsuța<br><br><img src=\"https://lh6.googleusercontent.com/nF9FKjwBetHSyt8LyX5cs8p0FQNEKA3ieefn9Ie8IA6zde_XbnpVqdSUlKo0s_fEpEYmlCnnzMAuPiDB8_OOq6NUa0lllUsJSczciQi4mgVq1v1Xt00ATgiFAdZdJzyt\" height=\"200\" width=\"auto\" /><br><br><img src=\"https://lh5.googleusercontent.com/6pAdrqqtZancWM6HnrFSfoXEb982aBoiofP37KOz70AiNRWBmY5p9KBQCUGUhCG_h_eHuaURWpC4eHCmdusrniduJAU43u_xvnfxpPCX4e6BBvtb82GynWADhPI5pqs\" height=\"200\" width=\"auto\" />",
                  "gx_media_links": "https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg https://lh6.googleusercontent.com/nF9FKjwBetHSyt8LyX5cs8p0FQNEKA3ieefn9Ie8IA6zde_XbnpVqdSUlKo0s_fEpEYmlCnnzMAuPiDB8_OOq6NUa0lllUsJSczciQi4mgVq1v1Xt00ATgiFAdZdJzyt https://lh5.googleusercontent.com/6pAdrqqtZancWM6HnrFSfoXEb982aBoiofP37KOz70AiNRWBmY5p9KBQCUGUhCG_h_eHuaURWpC4eHCmdusrniduJAU43u_xvnfxpPCX4e6BBvtb82GynWADhPI5pqs"
              }
          },
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                      26.1066433,
                      44.436584,
                      0
                  ]
              },
              "properties": {
                  "name": "Cuib Studio",
                  "styleUrl": "#icon-503-F8971B-labelson",
                  "styleHash": "6703f2f6",
                  "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                  "description": "<img src=\"https://lh3.googleusercontent.com/LK7xvUekW9P-06XKgD4vB-Rw-d1CxZ8uhjcTho-169BH1Pe_0o-BD80XajxPHLbpPJM0i2XOQYCX73K1A98vwJ2GXtj_pqXaq6Dncdagk6ak_KG-jOMuuBCxVD2746Tn\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Piața Rosetti 3<br><br>LINK:<br><br>http://www.cuibstudio.com/<br><br>DESCRIERE:<br><br>Situat intr-un aparatment cu o personalitate aparte, Cuib este spatiul ideal pentru productiile fotografice novatoare. Interesul nostru este sa cream un mediu creativ in care oamenii, ideile, evenimentele si miscarile culturale se intersecteaza si devin proiecte fezabile; unde se stabilesc relatii si colaborari favorabile. Desi este amenjatat ca un studio foto, avand o camera alba cu o ciclorama, hair and make-up stationary, fundaluri, lumini, modificatoare si altele, Cuib Studio pastreaza ambienta spatiului original.<br><br><br>PROGRAM:<br><br>Petrecere Disco; Proiectii video, lumini si fotografie experimentala; Photo Corner; Vintage boutique cu haine si accesorii",
                  "gx_media_links": "https://lh3.googleusercontent.com/LK7xvUekW9P-06XKgD4vB-Rw-d1CxZ8uhjcTho-169BH1Pe_0o-BD80XajxPHLbpPJM0i2XOQYCX73K1A98vwJ2GXtj_pqXaq6Dncdagk6ak_KG-jOMuuBCxVD2746Tn"
              }
          }
      ]
  };

  var styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: { lat: 41.876, lng: -87.624 },
    styles: styles,
  });

  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < data.features.length; i++) {
    var feature = data.features[i];
    addMarker(feature, map, bounds);
  }

  map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initMap);