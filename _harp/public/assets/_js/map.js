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
                "description": "<img src=\"https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ\" height=\"200\" width=\"auto\" /><br><br>--------------------------Viitorului 154----------------------------<br><br>LINK: https://www.facebook.com/casa.jurnalistului/?fref=ts<br>DESCRIERE:<br><br>Suntem o comunitate de reporteri independenți. Ne-am adunat într-o casă și punem la cale jurnalismul viitorului.<br><br>Anul trecut am deschis prima școală de jurnalism independent din România (https://www.facebook.com/casa.jurnalistului/videos/1123620707709257/) și ne-am ales cu noi colegi de Casă și de breaslă. Sâmbătă seara vă invităm să descoperiți materialele jurnalistice la care au lucrat rezidenții noștri în ultimul an. Sub motto-ul The Happy House, vă așteptăm cu dezbateri, expoziții, proiecții video și, inevitabil, o petrecere nebună.<br><br><img src=\"https://lh3.googleusercontent.com/6qZHMH3EI5pg2k9iacyAWn9_5T8IRVeoiqJgw850NuIonC3wrND81WzWLCQKgGEztkJYT4qD5qUXUHTsg8e3bPURJmhizZw6D5l24EAW_kJjgjPBBMRKBvLlR9ctoSE\" height=\"200\" width=\"auto\" />",
                "gx_media_links": "https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ https://lh3.googleusercontent.com/6qZHMH3EI5pg2k9iacyAWn9_5T8IRVeoiqJgw850NuIonC3wrND81WzWLCQKgGEztkJYT4qD5qUXUHTsg8e3bPURJmhizZw6D5l24EAW_kJjgjPBBMRKBvLlR9ctoSE"
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
                "description": "<img src=\"https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg\" height=\"200\" width=\"auto\" /><br><br>---------------------Pache Protopopescu 9------------------<br>LINK: https://www.facebook.com/ColiviaLuVrabioiu/?fref=ts<br><br>Casă veche de 100 de ani, geamuri cristal și sobe cu model venețian, cuib ideal pentru activiștii Funky Citizens. <br><br>Casa boierească din Pache Protopopescu nr. 9 a aparținut inițial unui negustor grec, care a donat-o bisericii grecești, actualul proprietar cumpărând-o de la Biserică în 1987. În istoria recentă a fost sediu pentru o sală de net și pentru o grădiniță. Cineva glumea spunând că, la cum arată azi, Colivia ar putea fi lejer un show-room Versace. Colivia îmbină când armonios, când eclectic tehnologia cu stucaturile și geamurile de cristal vechi de o sută de ani. Norișorii colorați care atârnă din tavan și își schimbă cameleonic culoarea dau bine alături de sobele monumentale și biblioteca încastrată din salonul interbelic. Casa e intimă, sobră, bine conservată, ideală pentru mici concerte, piese de teatru sau expoziții intime.<br><br>PROGRAM:<br><br><img src=\"https://lh6.googleusercontent.com/nF9FKjwBetHSyt8LyX5cs8p0FQNEKA3ieefn9Ie8IA6zde_XbnpVqdSUlKo0s_fEpEYmlCnnzMAuPiDB8_OOq6NUa0lllUsJSczciQi4mgVq1v1Xt00ATgiFAdZdJzyt\" height=\"200\" width=\"auto\" />",
                "gx_media_links": "https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg https://lh6.googleusercontent.com/nF9FKjwBetHSyt8LyX5cs8p0FQNEKA3ieefn9Ie8IA6zde_XbnpVqdSUlKo0s_fEpEYmlCnnzMAuPiDB8_OOq6NUa0lllUsJSczciQi4mgVq1v1Xt00ATgiFAdZdJzyt"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.1290591,
                    44.438546,
                    0
                ]
            },
            "properties": {
                "name": "Home Mătăsari",
                "styleUrl": "#icon-503-EE9C96-labelson",
                "styleHash": "-1087682a",
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw\" height=\"200\" width=\"auto\" /><br><br>----------------------------Mătăsari 17--------------------------LINK: https://www.facebook.com/Home-Matasari-111608808922130/?ref=br_rs<br><br>De la apariția pe harta Bucureștiului până acum, Home Mătăsari a devenit cunoscut ca un spațiu alternativ pentru diverse evenimente sociale și culturale. Home Mătăsari înseamnă și „acoperișul” pentru o mână de oameni tineri, studenți, artiști, muzicieni și pictori.<br><br>Un party cu voie buna alături de un pahar de vin ascultând muzica faina și admirând cele mai recente lucrări ale artistilor Florin Pantelimon, Raisa Hagiu și Ioana Double eye pe care o veți putea vedea în procesul de creație.<br>La Home Mătăsari, de Noaptea Caselor sau în orice altă zi, dacă ai chef să dai ochii cu un artist… doar vino! <br>PROGRAM :",
                "gx_media_links": "https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw"
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
                "description": "<img src=\"https://lh6.googleusercontent.com/RxRH_G6pfbk_pHAuXc9R-8vhhJZCsrvp0lGYDPdbcWFBpet3b77PoHVCOsOh0gTPMEvwBXrAl4n10WB_phV5qYnRhEz6gV-d93AdcHX_0ZVBgxQkqZ6pf6aV1i2qXrgW\" height=\"200\" width=\"auto\" /><br><br>--------------------Stelea Spătarul Nr.13--------------------<br>https://www.facebook.com/manasiahub/?fref=ts<br><br>Manasia Hub – căminul proiectelor artistice și inițiativelor antreprenoriale. <br><br>Manasia a apărut încet, tăcut și mai ales organic. Întâi a fost dorința fondatorilor, apoi, cu greu, a venit și spațiul de pe Stelea Spătarul 13, loc care a atras oamenii cu pofte de proiecte. Cu chef de artă și de muncă. Acum, Manasia Hub găzduiește permanent studiouri de arhitectura, de muzica, de design, ateliere și chiar birouri \"la 4 ace\" și temporar expoziții, proiecții, mici concerte. Un amalgam de creație bucureșteană într-un spațiu cu o istorie rece, dar care devine din ce în ce mai cald și primitor. <br><br>Casa noastră este o clădire interbelică construită de un disident anticomunist, Onisifor Ghibu. Are o istorie bogată și profundă, care o diferențiază de celelalte clădiri din jur. Când am găsit-o, clădirea maiestuoasă de-abia mai stătea în picioare și, de atunci, ne-am luat misiunea de a-i reda famecul inițial.<br>În 1 an, 2 luni și 22 de zile de la deschidere Manasia Hub a ajuns să găzduiască sub acoperiș mai multe inițiative artistice și antreprenoriale. Fiecare dintre noi, gașca de pe Stelea Spătaru 13, vom fi pregătiți pentru ceea ce va fi Noaptea Ușilor Deschise. <br><br>PROGRAM:",
                "gx_media_links": "https://lh6.googleusercontent.com/RxRH_G6pfbk_pHAuXc9R-8vhhJZCsrvp0lGYDPdbcWFBpet3b77PoHVCOsOh0gTPMEvwBXrAl4n10WB_phV5qYnRhEz6gV-d93AdcHX_0ZVBgxQkqZ6pf6aV1i2qXrgW"
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
                "description": "<img src=\"https://lh3.googleusercontent.com/Fmny60NDlz_u_9K-ZKYl-Gv8Sb1XhhC98g8OlF0mgOTgFNBYoLaY9SvJ92-M_qhcDXgaxqjPir__tKdCURcOUo_E7tLTVVI-OgFew3DtKBaenwVYiV5kvSaeLvbMfOjK\" height=\"200\" width=\"auto\" /><br><br>Pache Protopopescu 66   ( curtea Facultatii de Inginerie a Instalatiilor )                                        <br><br>https://www.facebook.com/EFdeN.casa.solara.eficienta.energetic/<br><br>Urmărim conştientizarea publicului larg asupra importanţei calităţii unei locuinţe raportată la siguranţă, parametrii de confort şi influenţa lor asupra sănătăţii ocupanţilor, a eficientizării consumurilor, eficienţa energetică şi avantajele economice ale unei astfel de locuinţe.<br><br>Proiectul EFdeN are la bază casa proiectată și construită integral de o echipă multidisciplinară de studenți voluntari, de la mai multe specialități, printre care arhitectură, inginerie, comunicare, management, cu ocazia participării la cea mai prestigioasă competiție de locuințe solare, Solar Decathlon Europe, în 2014, la Versailles.<br><br>Proiectul educațional a luat naștere în urmă cu mai bine de trei ani, din dorința de a contribui la îmbunătățirea condițiilor de locuire din România, la ridicarea standardelor de confort, având întotdeauna în minte grija față de natură, sursele regenerabile de energie, sustenabilitatea materialelor folosite şi o cât mai mare eficienţă energetică.<br><br>Casa a fost proiectată, prefabricată pe mai multe şantiere simultane în Bucureşti, transportată în 9 tiruri până la Versailles şi asamblată în doar 10 zile. Odată reîntoarsă în ţară, după finalizarea reconstrucţiei, casa funcţionează ca EFdeN 4C (Centru de Cercetare al Condiţiilor de Confort) şi este deschisă săptămânal publicului larg care vrea să descopere ce înseamnă locuinţa viitorului.<br><br>PROGRAM:",
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
                "description": "<img src=\"https://lh4.googleusercontent.com/b-rnOrDtASvce-GU7VlmFcXK8ncsUt-mv3qzET8VSNLoR0LrEfd07uHEnsPQIVMJDfWVHcngyJrSlcxrCW_4J5S-Sm-9MmVSt-0Cc9GHr_7WFG_aduHsLgceUh-_XyhI\" height=\"200\" width=\"auto\" /><br><br>Casa Costa-Foru este un spațiu socio-cultural alternativ bucureștean revitalizat prin implicarea comunității: voi, cei interesați de a (re)descoperi orașul. Credem că viețile sale trecute merită repovestite prin explorarea și reinterpretarea spațiilor ce stau astăzi uitate, pentru că lectura acestora ca exercițiu urban este accesibilă fiecăruia dintre noi și creează o legătură afectivă cu orașul în care trăim. <br><br>PROGRAM:",
                "gx_media_links": "https://lh4.googleusercontent.com/b-rnOrDtASvce-GU7VlmFcXK8ncsUt-mv3qzET8VSNLoR0LrEfd07uHEnsPQIVMJDfWVHcngyJrSlcxrCW_4J5S-Sm-9MmVSt-0Cc9GHr_7WFG_aduHsLgceUh-_XyhI"
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
                "description": "<img src=\"https://lh5.googleusercontent.com/p4Vku7_Xow9o23AmQlcLuVSGvoKqn_yA7fnZlroGu4xAYkM2ayPptuM4HGw8A1EH7xQ9IQ3rDvDMobhQ26oXFm9KMebYNivtc_okwOGGOhGj_3jOOSfFADy1IJucAxCV4Q\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Crăciun 8<br><br>LINK: https://www.facebook.com/avanpost8/?fref=ts<br>DESCRIERE:<br><br>Spațiul Avanpost s-a coagulat în timp, adunând laolaltă artiști independenți, liberi, boemi, cu idei și pasiuni comune manifestate prin intermediul artelor vizuale și auditive. Este rezultatul unor legături de prietenie, fiecare dintre noi având rolul său în actul creației artistice, a unei forme invizibile de energie comună. Avanpost a evoluat organizând evenimente cultural-artistice la care au participat artiști din toate domeniile: graffiti, artă urbană, muzică, arte vizuale, sculptură, fotografie. <br><br>Prin amprenta lăsată de persoanele care au ocupat spațiul, locul poartă o puternică încărcătură energetică a creativității artistice, un exemplu în acest sens fiind compozitorul Temistocle Popa, care a trăit și creat în acest spațiu. <br><br>PROGRAM:",
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
                "description": "<img src=\"https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2\" height=\"200\" width=\"auto\" /><br><br>-------------------------Bd. Carol Nr.53--------------------------LINK: https://www.facebook.com/casacarol53/?fref=ts<br><br>După aproape 4 ani de activitate, Carol 53 se dezvoltă ca un hub de ateliere creative, punând la dispoziție o parte din spațiile casei, pe perioade determinate de timp, unor persoane sau grupuri ce doresc să dezvolte proiecte cu impact în dezvoltarea social-culturală a orașului.<br>În prezent, ne bucurăm că alături de noi își desfășoară activitatea un colectiv de aproximativ 10-15 persoane din diverse domenii precum arhitectură, artă decorativă, meșteșug, ecologie, teatru, muzică, pictură și serigrafie.<br><br><br>PROGRAM:<br><br><img src=\"https://lh5.googleusercontent.com/5bMc1GfivFrSFKFL96FvCruX3M7DIFJqztMUW8AuW7rkXFO4HXPBiHlmqkLLqJMvLH6DQEDAfzwVGleWXrL10nqlnFQA-Jvc_mJ68zeTI33QXdTrDf-eIoZm209WFIVR\" height=\"200\" width=\"auto\" />",
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
                "description": "Str. Educatiei Nr. 32"
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
                "description": "Piata Rosetti Nr. 3"
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
                "description": "Pache Protopopescu-- Nr. 214"
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
                "description": "Str. Vasile Lascar Nr. 39"
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
                "description": "Str. General Traian Doda"
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
                    26.102027,
                    44.441629,
                    0
                ]
            },
            "properties": {
                "name": "Casa Lupu",
                "styleUrl": "#icon-503-3F5BA9-labelson",
                "styleHash": "-7c346b8a",
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh4.googleusercontent.com/qWzNmmChg1rERI1h1C56fG6jrs-AlNnGlOMaiFZzwC-1irqZtG8PgZBtVhH-yu_803nNW6CbrCjqc2NGziVzblHYahB0qwJRadI26JuqLR-_L_r-SCz1gC0Nq7Q_VA_qfA\" height=\"200\" width=\"auto\" /><br><br>------------------------Dionisie Lupu 31-------------------------→ La început a fost un apartament pus la comun, folosit pentru lucru și joacă de un grup de vreo 30 de prieteni. Apoi, spațiul s-a deschis pentru prietenii prietenilor și, în timp, prietenii prietenilor prietenilor. La seri de film, serate dansante și evenimente culturale diverse, s-a legat o comunitate informală care a depășit rapid capacitatea spațiului și de înțelegere a vecinilor.<br><br>Între timp lucrurile s-au mai calmat. Azi, Casa Lupu este un veritabil exemplu de locuire la comun format din 3 etaje de spatii de locuit și grădina unde se adună atât cei 15 rezidenți permanenți, 3 câni cât și un cerc dinamic de prieteni care formează comunitatea de bază.<br><br>PROGRAM:",
                "gx_media_links": "https://lh4.googleusercontent.com/qWzNmmChg1rERI1h1C56fG6jrs-AlNnGlOMaiFZzwC-1irqZtG8PgZBtVhH-yu_803nNW6CbrCjqc2NGziVzblHYahB0qwJRadI26JuqLR-_L_r-SCz1gC0Nq7Q_VA_qfA"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.0887071,
                    44.4429704,
                    0
                ]
            },
            "properties": {
                "name": "Insula 42",
                "styleUrl": "#icon-503-0BA9CC-labelson",
                "styleHash": "c18bb16",
                "icon": "http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png",
                "description": "<img src=\"https://lh6.googleusercontent.com/JB-Tzw3toDZiwXXFcPwEuLSwkbs4PD94n50W5hJ0bjQ1hviU3Cmb2jQbe5Jvicinf2d4whCFDmZEkZl_yVXDDMYF0OzOyU0MBl6wNaMOPCBEBwF4tHBBAtxrmzvctx4\" height=\"200\" width=\"auto\" /><br><br>-----------------------Theodor Aman 42------------------------<br><br>LINK: https://www.facebook.com/insula42/?fref=ts<br><br>Insula 42 este un apartament dintr-un imobil Art Deco bucureștean care și-a propus să găzduiască proiecte, idei și dialoguri între oamenii care le-au creat. Inițiată de Corina Suteu și lansată la apă chiar de Noaptea Caselor 2015, peste Insula 42 a trecut un an plin de inițiative dintre care unele s-au și concretizat. În 2016 au prins avânt pe Insulă publicația culturală Scena9 și agenția de artă Unicat, dedicată scenei emergente din România. Tot aici s-a lucrat intens la strategia culturală a orașului București și la festivalul de film documentar FARAD, printre altele. Pregătim un sfârșit de an cu noi proiecte creative în dezvoltare care își vor găsi refugiul, sperăm că nu în urma vreunui naufragiu, pe Insula 42.<br><br>PROGRAM:",
                "gx_media_links": "https://lh6.googleusercontent.com/JB-Tzw3toDZiwXXFcPwEuLSwkbs4PD94n50W5hJ0bjQ1hviU3Cmb2jQbe5Jvicinf2d4whCFDmZEkZl_yVXDDMYF0OzOyU0MBl6wNaMOPCBEBwF4tHBBAtxrmzvctx4"
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