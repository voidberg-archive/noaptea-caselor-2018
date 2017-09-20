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
                "color": "#C6A4CF",
                "styleUrl": "#icon-503-C6A4CF-labelson",
                "styleHash": "-19998ca",
                "description": "<img src=\"https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ\" height=\"200\" width=\"auto\" /><br><br>--------------------------Viitorului 154----------------------------<br><br>LINK: https://www.facebook.com/casa.jurnalistului/?fref=ts<br>DESCRIERE:<br><br>Suntem o comunitate de reporteri independenți. Ne-am adunat într-o casă și punem la cale jurnalismul viitorului.<br><br>Anul trecut am deschis prima școală de jurnalism independent din România (https://www.facebook.com/casa.jurnalistului/videos/1123620707709257/) și ne-am ales cu noi colegi de Casă și de breaslă. Sâmbătă seara vă invităm să descoperiți materialele jurnalistice la care au lucrat rezidenții noștri în ultimul an. Sub motto-ul The Happy House, vă așteptăm cu dezbateri, expoziții, proiecții video și, inevitabil, o petrecere nebună.<br><br><img src=\"https://lh3.googleusercontent.com/qeh9A9xOhS--ga0sotz2jp7zOwFpY9ho9E_RS8x9UVJm4mv9OCLh_oDR_oYX9XffRrGHKL65nN2MC85IpukClCsKMD__6INBiCfBGThTMf1DWe_4rmoXj3v2MaX38s0\" height=\"200\" width=\"auto\" />",
                "gx_media_links": "https://lh6.googleusercontent.com/proxy/Z34wq5tEmRa19p5ob6-1TsdV9VXWpBzsnZjMlWrKxeKxsVHPYN_I2WnQ0dz396HWgQ https://lh3.googleusercontent.com/qeh9A9xOhS--ga0sotz2jp7zOwFpY9ho9E_RS8x9UVJm4mv9OCLh_oDR_oYX9XffRrGHKL65nN2MC85IpukClCsKMD__6INBiCfBGThTMf1DWe_4rmoXj3v2MaX38s0"
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
                "color": "#F4EB36",
                "styleUrl": "#icon-503-F4EB37-labelson",
                "styleHash": "-25d9bea",
                "description": "<img src=\"https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg\" height=\"200\" width=\"auto\" /><br><br>---------------------Pache Protopopescu 9------------------<br>LINK: https://www.facebook.com/ColiviaLuVrabioiu/?fref=ts<br><br>Casă veche de 100 de ani, geamuri cristal și sobe cu model venețian, cuib ideal pentru activiștii Funky Citizens. <br><br>Casa boierească din Pache Protopopescu nr. 9 a aparținut inițial unui negustor grec, care a donat-o bisericii grecești, actualul proprietar cumpărând-o de la Biserică în 1987. În istoria recentă a fost sediu pentru o sală de net și pentru o grădiniță. Cineva glumea spunând că, la cum arată azi, Colivia ar putea fi lejer un show-room Versace. Colivia îmbină când armonios, când eclectic tehnologia cu stucaturile și geamurile de cristal vechi de o sută de ani. Norișorii colorați care atârnă din tavan și își schimbă cameleonic culoarea dau bine alături de sobele monumentale și biblioteca încastrată din salonul interbelic. Casa e intimă, sobră, bine conservată, ideală pentru mici concerte, piese de teatru sau expoziții intime.<br><br>PROGRAM:<br>Protestataria<br><br>Reflectăm activ la ce-a ajuns să însemne protestul în România. După ce ne-am dorit cu ardoare mișcări de stradă care să fie la fel de autentice ca cele din 90, parcă protestele din ultimii zece ani reușesc să schimbe prea puține. E sănătos să fii atent la ce se-ntâmplă în sferele înalte ale politicii și să țipi atunci când deciziile lor îți încalcă drepturile. Dar oare suferim de protest fatigue? Ne uităm la acțiunile de rezistență civilă în fața nedreptăților ca să înțelegem cum putem să protestăm mai bine.<br> <br>1) Live drawing + expoziție foto-video cu mișcări de stradă din România ultimilor zece ani + album foto „PROTEST”<br>2) Educație civică - ce poți să faci pe termen lung (ex: învață Constituția, citește îndreptarul pentru primari). Lansare site educatiecivica.ro si cumarfi.ro<br>3) Campanie de crowd-funding offline: donează o monedă ca să ne plătim taxele în bani cash.<br>.<br><br><img src=\"https://lh3.googleusercontent.com/KqVaf_RUcvxMpZPaPpp-BGvZu9w7ufk3DalF9XUU3QfJJAY43MdRLR3g9cG0sx9m6Qvu3hmVEHAuUMTOyJzH-0EjFwee5IcH2Xx7PBXLWRDkii54xjsF22uxXC2EyaT2\" height=\"200\" width=\"auto\" />",
                "gx_media_links": "https://lh4.googleusercontent.com/proxy/seH7F__wEWXPKxV9BYjtuqVKQvjqoYl5lL6sCEEJruAm-eEDaY_g1b0NhkqNS80wNg https://lh3.googleusercontent.com/KqVaf_RUcvxMpZPaPpp-BGvZu9w7ufk3DalF9XUU3QfJJAY43MdRLR3g9cG0sx9m6Qvu3hmVEHAuUMTOyJzH-0EjFwee5IcH2Xx7PBXLWRDkii54xjsF22uxXC2EyaT2"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.1083356,
                    44.4396153,
                    0
                ]
            },
            "properties": {
                "name": "Grădina Sticlarilor",
                "color": "#7C3592",
                "styleUrl": "#icon-503-7C3592-labelson",
                "styleHash": "16fbb3d6",
                "description": "<img src=\"https://lh6.googleusercontent.com/QmNDR8VrcYC24gymyVkzllPsfBTLYzSYfZPwMjCwXn5FdE4Tnxupxe3Ydv9XBU8h4LAAJ5zma4fPVCvKDSUmD_0JqhMCgXWlJvNtNX0FgqhtW8amU4rXoxmf3idYujDa\" height=\"200\" width=\"auto\" /><br><br>--------------------Strada Vasile Lascăr 36------------------<br><br>LINK: https://www.facebook.com/gradinasticlarilor/?fref=ts<br><br>Casa din inima Bucureștiului, idilic ascunsă sub bolte de viță de vie și straturi de regina-nopții și-a deschis larg porțile în 2008 găzduind la început ateliere de pictură, sculptură, ceramică, design de produs. Treptat, Grădina s-a transformat într-un spațiu expozițional care invită la un dialog activ între producătorii de artă și devoratorii acesteia. Dorim să reintegrăm artele și meseriile care se pierd odată cu revoluția tehnologică și să găsim o simbioză între mijloacele de azi și tehnicile de altădată. Ne propunem să înotăm împotriva curentului de mass production și a consumerismului, să insuflăm conceptul de Recycle/Reuse/Repurpose. Această congruență artistică a fost cea care a anunțat că e momentul ca grădina să adăpostească, pe lângă toate expresiile artistice, și o șezătoare zilnică cu iz de ceainărie construită din istoria și obiectele adăpostite, uitate sau donate.<br><br>PROGRAM:<br>O incursiune multiculturală in universul atemporal al muzicii. O expoziţie de artă a sticlei semnată de artista Iulia Năstase. Un concept de relaxare intr-o alternativă sălbatică a grădinilor posibile.<br><br>Sâmbătă, 23 septembrie, arta prin sunet prinde viaţă in spaţiul fluid al forţei creative, îmbrăţişat de irizaţii şi reflexii muzicale translucide, desfăşurat în forma unui jam session integrat simbiotic într-un spaţiu alternativ dedicat serenităţii. Cadenţa o vor ţine Andrei Bălan la chitară, Ciprian Baciu la tabla (instrument de percuţie indian) şi Vlad Alexe la clarinet",
                "gx_media_links": "https://lh6.googleusercontent.com/QmNDR8VrcYC24gymyVkzllPsfBTLYzSYfZPwMjCwXn5FdE4Tnxupxe3Ydv9XBU8h4LAAJ5zma4fPVCvKDSUmD_0JqhMCgXWlJvNtNX0FgqhtW8amU4rXoxmf3idYujDa"
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
                "color": "#EE9C96",
                "styleUrl": "#icon-503-EE9C96-labelson",
                "styleHash": "-1087682a",
                "description": "<img src=\"https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw\" height=\"200\" width=\"auto\" /><br><br>----------------------------Mătăsari 17--------------------------LINK: https://www.facebook.com/Home-Matasari-111608808922130/?ref=br_rs<br><br>De la apariția pe harta Bucureștiului până acum, Home Mătăsari a devenit cunoscut ca un spațiu alternativ pentru diverse evenimente sociale și culturale. Home Mătăsari înseamnă și „acoperișul” pentru o mână de oameni tineri, studenți, artiști, muzicieni și pictori.<br><br>Un party cu voie buna alături de un pahar de vin ascultând muzica faina și admirând cele mai recente lucrări ale artistilor Florin Pantelimon, Raisa Hagiu și Ioana Double eye pe care o veți putea vedea în procesul de creație.<br>La Home Mătăsari, de Noaptea Caselor sau în orice altă zi, dacă ai chef să dai ochii cu un artist… doar vino! <br>PROGRAM :<br>De la 20:00 și de la 01:00 avem teatru:<br>prietenii noștri de la 8pt vin cu metroul și ne pun să reflectăm asupra vieții, pornind de la textul lui Cormac McCarthy – The Sunset Limited. <br><br>O adaptare cu Dani Ionescu și Radu Catană, în regia lui Alexandru Nagy. Producător Adrian Petrariu. Guest Star: Iisus<br>Mai multe despre 8pt: https://m.facebook.com/8PerformanceTheatre/<br><br>Diana Tudose își deschide atelierul și...<br><br>Așa că treci și pe la noi pentru programul artistic, dar și pentru una dintre deja tradiționalele noastre petreceri.",
                "gx_media_links": "https://lh3.googleusercontent.com/proxy/FK_UMp3vjhOs8UhbaRe9r_QBPclNY8nhzNu7V3473v_-vmqqMiwbEw_8BBHkwLtkYw"
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
                "color": "#00A9CC",
                "styleUrl": "#icon-503-0BA9CC-labelson",
                "styleHash": "c18bb16",
                "description": "<img src=\"https://lh5.googleusercontent.com/f55DXbhUnbDBVkHH3O0XrJrflx13NYXvloXD2QI33oiZ4ThfQZ5U-5CPQ8pW3aHaQ7pQwAWzg6207i7ZWTwxzvEqzvf7Y8-2jcDy8H1llrOra1gJ10QsExiVkSyGcps\" height=\"200\" width=\"auto\" /><br><br>-----------------------Theodor Aman 42------------------------<br><br>LINK: https://www.facebook.com/insula42/?fref=ts<br><br>Insula 42 este un apartament dintr-un imobil Art Deco bucureștean care și-a propus să găzduiască proiecte, idei și dialoguri între oamenii care le-au creat. Inițiată de Corina Suteu și lansată la apă chiar de Noaptea Caselor 2015, peste Insula 42 a trecut un an plin de inițiative dintre care unele s-au și concretizat. În 2016 au prins avânt pe Insulă publicația culturală Scena9 și agenția de artă Unicat, dedicată scenei emergente din România. Tot aici s-a lucrat intens la strategia culturală a orașului București și la festivalul de film documentar FARAD, printre altele. Pregătim un sfârșit de an cu noi proiecte creative în dezvoltare care își vor găsi refugiul, sperăm că nu în urma vreunui naufragiu, pe Insula 42.<br><br>PROGRAM:<br>Pe Insula 42 ai ocazia să vizitezi Roșia Montană într-o călătorie la capătul Nopții Caselor. Cea mai cunoscută comună din România ți se prezintă într-o lumină caldă și umană, cu un optimism care depășește toate încercările de a fi înlocuită de un lac cu cianuri.<br><br>După ani de acțiune, de reacțiune, de protest și de muncă, încă mai sunt unii care pretind că viitorul Roșiei stă în distrugerea ei. Așa că vă invităm să vedeți o altă față a Roșiei Montane. De la inițiative \"insulare\" la campanii de conștientizare sau reconstrucție, toate spun povestea unui loc și a unei comunități cu mult mai extinse decât granițele sale geografice. Un exemplu, dar și un prilej pentru proiecte de dezvoltare durabilă.<br><br>Deschidem la ora 18:00, închidem la miez de noapte și vă așteptăm cu: Depunerea Jurământului pentru Roșia Montană / Amintiri din Roșia Montană (arată-ne pe unde ai fost și ce nostalgii ai din Roșia și împrejurimile ei pe o hartă mare cât un perete) / Proiecții video cu oamenii și locurile din Roșia Montană / Suveniruri Made in Roșia Montană.",
                "gx_media_links": "https://lh5.googleusercontent.com/f55DXbhUnbDBVkHH3O0XrJrflx13NYXvloXD2QI33oiZ4ThfQZ5U-5CPQ8pW3aHaQ7pQwAWzg6207i7ZWTwxzvEqzvf7Y8-2jcDy8H1llrOra1gJ10QsExiVkSyGcps"
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
                "color": "#4186F0",
                "styleUrl": "#icon-503-4186F0-labelson",
                "styleHash": "7a751256",
                "description": "<img src=\"https://lh3.googleusercontent.com/F2NFc4Dt8dyeatoqx8aL10eh6pPn79tZNN8ob1mFVal9NcKMY68keXEkjVGeZbisBj5e5JHoNjMGnNgMRXY45sbTNsHQ1yVrWWIGJIbCJ0b4a6lNeNuAHJcdkwlxs9Wc\" height=\"200\" width=\"auto\" /><br><br>--------------------Stelea Spătarul Nr.13--------------------<br>https://www.facebook.com/manasiahub/?fref=ts<br><br>Manasia Hub – căminul proiectelor artistice și inițiativelor antreprenoriale. <br><br>Manasia a apărut încet, tăcut și mai ales organic. Întâi a fost dorința fondatorilor, apoi, cu greu, a venit și spațiul de pe Stelea Spătarul 13, loc care a atras oamenii cu pofte de proiecte. Cu chef de artă și de muncă. Acum, Manasia Hub găzduiește permanent studiouri de arhitectura, de muzica, de design, ateliere și chiar birouri \"la 4 ace\" și temporar expoziții, proiecții, mici concerte. Un amalgam de creație bucureșteană într-un spațiu cu o istorie rece, dar care devine din ce în ce mai cald și primitor. <br><br>Casa noastră este o clădire interbelică construită de un disident anticomunist, Onisifor Ghibu. Are o istorie bogată și profundă, care o diferențiază de celelalte clădiri din jur. Când am găsit-o, clădirea maiestuoasă de-abia mai stătea în picioare și, de atunci, ne-am luat misiunea de a-i reda famecul inițial.<br>În 1 an, 2 luni și 22 de zile de la deschidere Manasia Hub a ajuns să găzduiască sub acoperiș mai multe inițiative artistice și antreprenoriale. Fiecare dintre noi, gașca de pe Stelea Spătaru 13, vom fi pregătiți pentru ceea ce va fi Noaptea Ușilor Deschise. <br><br>PROGRAM:<br>Doar în seara cu Noaptea Caselor #4, fostul arest preventiv din subsolul casei va fi deschis vizitatorilor, precum și birourile din clădire. O să organizăm și o petrecere în spațiul barului și pe terasă.<br><br>Hosts: Asociația Vira, Studio Est, Lisseau Design Lab, Studio X & other inmates.",
                "gx_media_links": "https://lh3.googleusercontent.com/F2NFc4Dt8dyeatoqx8aL10eh6pPn79tZNN8ob1mFVal9NcKMY68keXEkjVGeZbisBj5e5JHoNjMGnNgMRXY45sbTNsHQ1yVrWWIGJIbCJ0b4a6lNeNuAHJcdkwlxs9Wc"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.0877939,
                    44.4412259,
                    0
                ]
            },
            "properties": {
                "name": "CZVL 12",
                "color": "#DB4436",
                "styleUrl": "#icon-503-DB4436-labelson",
                "styleHash": "-511c140a",
                "description": "<img src=\"https://lh3.googleusercontent.com/p7P_nGv8Mxccf_Y7ydlSMUGV_6XL31eDbiwOSXVDG5joVjp_OiPYkNRCFVlKg_WGpxCWqaeq3mwhkJLpW4p5N-aVG1Yk0KQ5tMVq8z6BCIlZwyRIpUg77HkwFJKRYPFQ\" height=\"200\" width=\"auto\" /><br><br>Luigi Cazzavillan 12<br><br>LINK: https://www.facebook.com/CZLV12/?fref=ts<br><br>Experiența senzorială pe care o oferă trecerea, măcar pentru un minut, prin spațiul CZVL12 începe din momentul în care ai deschis ușa. Cu o arhitectură de sfarșit de secol 19, CZVL12 adăpostește parcă nativ activitatea de socializare și interconectare. Evenimente de media, petreceri, fresh wear brands, sunt doar o parte din activitățile casei.<br><br>Proiectul a luat ființă pe data de 18 ianuarie 2014 și este unul ongoing, întrucât functionează ca un hub artistic. Asta înseamnă că oamenii ce ne pășesc pragul pot să bea un soup-shot sau încerca o gustare dulce (producții proprii), în timp ce ascultă o muzica fină sau poartă o discuție legată de artă sau design. Ca atare, etajul 1 funcționează ca un spațiu deschis de întâlnire și socializare, oferind si șansa vizitatorilor de a admira colecții de urban-wear 100% românești prezentate de shop-ul Open Minds, precum si opere de artă expuse de colegii si prietenii noștri. La mansardă funcționează biroul de arhitectură și design Coplanar Studio. Colegi de proiect i-am avut mult timp și pe băieții de la MadPiano Record Shop care au organizat expoziții cu vânzări de vinil precum și streamuri de la evenimentele lor Vinyl Only. Casa a găzduit streamuri chiar si pentru colegii de la Rts FM , reușind astfel să își creeze un public vizitator numeros, cât și mulți prieteni care numesc CZVL12 second home.<br><br>PROGRAM:<br>Muzică live, expoziție și mâncare urbană.",
                "gx_media_links": "https://lh3.googleusercontent.com/p7P_nGv8Mxccf_Y7ydlSMUGV_6XL31eDbiwOSXVDG5joVjp_OiPYkNRCFVlKg_WGpxCWqaeq3mwhkJLpW4p5N-aVG1Yk0KQ5tMVq8z6BCIlZwyRIpUg77HkwFJKRYPFQ"
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
                "color": "#009D57",
                "styleUrl": "#icon-503-009D57-labelson",
                "styleHash": "7284c516",
                "description": "<img src=\"https://lh5.googleusercontent.com/Mg2yJlj_G0x6t5_dn7WpO-Bo2-RUGrTtMbmWvKMiPqP7vhk_VcPKO57wnlPbgrlI1ijWtszLPB0yqq7gTEm5CJkor1rzlslPQr8hvdOpsihGxUIZXaZRGtI-uGp0p7Lp\" height=\"200\" width=\"auto\" /><br><br>Pache Protopopescu 66   ( curtea Facultatii de Inginerie a Instalatiilor )                                        <br><br>https://www.facebook.com/EFdeN.casa.solara.eficienta.energetic/<br><br>Urmărim conştientizarea publicului larg asupra importanţei calităţii unei locuinţe raportată la siguranţă, parametrii de confort şi influenţa lor asupra sănătăţii ocupanţilor, a eficientizării consumurilor, eficienţa energetică şi avantajele economice ale unei astfel de locuinţe.<br><br>Proiectul EFdeN are la bază casa proiectată și construită integral de o echipă multidisciplinară de studenți voluntari, de la mai multe specialități, printre care arhitectură, inginerie, comunicare, management, cu ocazia participării la cea mai prestigioasă competiție de locuințe solare, Solar Decathlon Europe, în 2014, la Versailles.<br><br>Proiectul educațional a luat naștere în urmă cu mai bine de trei ani, din dorința de a contribui la îmbunătățirea condițiilor de locuire din România, la ridicarea standardelor de confort, având întotdeauna în minte grija față de natură, sursele regenerabile de energie, sustenabilitatea materialelor folosite şi o cât mai mare eficienţă energetică.<br><br>Casa a fost proiectată, prefabricată pe mai multe şantiere simultane în Bucureşti, transportată în 9 tiruri până la Versailles şi asamblată în doar 10 zile. Odată reîntoarsă în ţară, după finalizarea reconstrucţiei, casa funcţionează ca EFdeN 4C (Centru de Cercetare al Condiţiilor de Confort) şi este deschisă săptămânal publicului larg care vrea să descopere ce înseamnă locuinţa viitorului.<br><br>PROGRAM:<br>De Noaptea Caselor, acasă la EFdeN, facem o adunare a generațiile trecute de case solare și discutăm împreună despre case verzi, case sustenabile, casele câștigătoare și casele viitorului. Vizitarea prototipului EFdeN este ghidată de către colegii din echipă, parcurgând fiecare colțișor și cameră în parte și răspunzând chiar și la cea mai tehnică întrebare. Odată cu lăsarea serii, ne retragem cu picioarele în iarbă în Campus HUB, spațiul verde amenajat de către studenți, pentru a ne bucura împreună de relaxare în hamace, muzică live și alte surprize.",
                "gx_media_links": "https://lh5.googleusercontent.com/Mg2yJlj_G0x6t5_dn7WpO-Bo2-RUGrTtMbmWvKMiPqP7vhk_VcPKO57wnlPbgrlI1ijWtszLPB0yqq7gTEm5CJkor1rzlslPQr8hvdOpsihGxUIZXaZRGtI-uGp0p7Lp"
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
                "color": "#3F5BA9",
                "styleUrl": "#icon-503-3F5BA9-labelson",
                "styleHash": "-7c346b8a",
                "description": "<img src=\"https://lh6.googleusercontent.com/iJ8vb53Q0ZPYHbnpLKvXksogP8wzNcUmpT-RSAjUjV99jI0VYHvXqA2quqJ0AucKoYHsywogmMW8bGQlq228MWDnK0KX5rNBQ0iP00H9I_-OFsMvhZIfNKHt1b8JmmOnfQ\" height=\"200\" width=\"auto\" /><br><br>------------------------Dionisie Lupu 31-------------------------→ La început a fost un apartament pus la comun, folosit pentru lucru și joacă de un grup de vreo 30 de prieteni. Apoi, spațiul s-a deschis pentru prietenii prietenilor și, în timp, prietenii prietenilor prietenilor. La seri de film, serate dansante și evenimente culturale diverse, s-a legat o comunitate informală care a depășit rapid capacitatea spațiului și de înțelegere a vecinilor.<br><br>Între timp lucrurile s-au mai calmat. Azi, Casa Lupu este un veritabil exemplu de locuire la comun format din 3 etaje de spatii de locuit și grădina unde se adună atât cei 15 rezidenți permanenți, 3 câni cât și un cerc dinamic de prieteni care formează comunitatea de bază.<br><br>PROGRAM:<br>Petrecerea Zacusca",
                "gx_media_links": "https://lh6.googleusercontent.com/iJ8vb53Q0ZPYHbnpLKvXksogP8wzNcUmpT-RSAjUjV99jI0VYHvXqA2quqJ0AucKoYHsywogmMW8bGQlq228MWDnK0KX5rNBQ0iP00H9I_-OFsMvhZIfNKHt1b8JmmOnfQ"
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
                "name": "Costa-Foru",
                "color": "#9FC3FF",
                "styleUrl": "#icon-503-9FC3FF-labelson",
                "styleHash": "-19b5cd8a",
                "description": "<img src=\"https://lh3.googleusercontent.com/KMQXePE68_cgFRPwMswbKk4swp-S64yvIUP7mXUviDkCHOBc6J6eVXJg4a-12uDP6JumqBt7kVaDkoeZNslI-UvaFtfYjKhCcjwBFhskokCIbiPYpgCTZWKI_JDutW4g\" height=\"200\" width=\"auto\" /><br><br>Casa Costa-Foru este un spațiu socio-cultural alternativ bucureștean revitalizat prin implicarea comunității: voi, cei interesați de a (re)descoperi orașul. Credem că viețile sale trecute merită repovestite prin explorarea și reinterpretarea spațiilor ce stau astăzi uitate, pentru că lectura acestora ca exercițiu urban este accesibilă fiecăruia dintre noi și creează o legătură afectivă cu orașul în care trăim. <br><br>PROGRAM:<br><br>Din primul moment în care îi treci pragul te inspiră cu ideea de \"acasă\" ca spaţiu locativ, deschis, primitor şi potrivit creaţiei. Ce ne dorim noi? Să reinterpretăm atmosfera vremurilor de odinioară prin prisma prezentului şi să valorificăm energia Casei pentru a vă transmite un dram din sufletul ei.<br><br>Ora 14:00 | Instameet cu Cristi Radu<br>Ora 16:00 | La un ceai la Costa-Foru<br>Ora 19:00 | Concert \"Spectrum\"<br>Ora 21:00 | \"Maria Tănase 104\", cântare cu Elena Shulea<br> All night | Vinyl Night",
                "gx_media_links": "https://lh3.googleusercontent.com/KMQXePE68_cgFRPwMswbKk4swp-S64yvIUP7mXUviDkCHOBc6J6eVXJg4a-12uDP6JumqBt7kVaDkoeZNslI-UvaFtfYjKhCcjwBFhskokCIbiPYpgCTZWKI_JDutW4g"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.104928,
                    44.439368,
                    0
                ]
            },
            "properties": {
                "name": "SBang",
                "color": "#FF971C",
                "styleUrl": "#icon-503-F8971B-labelson",
                "styleHash": "6703f2f6",
                "description": "<img src=\"https://lh4.googleusercontent.com/BAtOnRsfluLbt4VFiikUlVtv3yOTwIcnIwG4R-ngZzwUUGhoRLT_TL8EUL3jIrjsECUqbnz8VNuixiuTu_TJ8UUH5AXxJ0Pi_0exRGCULaT3ukJqJ0GSjhCvTTBVsQ2r\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Jean Louis Calderon 33<br><br>LINK: https://www.facebook.com/SBangMaker/<br>DESCRIERE: <br>Aflat in fostul spatiu Sahia Film, din casa Calderon 33, cu ocazia evenimentului din 23Septembrie ne propunem sa deschidem pentru prima data publicului pentru a prezenta scenografia ca arta atat prin obiecte cat si prin amenajare, compozitare conceptuala a unui univers atemporal.<br><br>PROGRAM:Cine ești când nimeni nu te vede? <br><br>Atelier Instalatii. Dj Maria Balabaș. Cinema în debara. ZUM-A Journey Inside. Proiecție filme. Dj Claudia. Live Performance. Damian-Kaya Foundation. Videoteca. Temple Invisible. Circuit cu sens unic.",
                "gx_media_links": "https://lh4.googleusercontent.com/BAtOnRsfluLbt4VFiikUlVtv3yOTwIcnIwG4R-ngZzwUUGhoRLT_TL8EUL3jIrjsECUqbnz8VNuixiuTu_TJ8UUH5AXxJ0Pi_0exRGCULaT3ukJqJ0GSjhCvTTBVsQ2r"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    26.0960473,
                    44.4505101,
                    0
                ]
            },
            "properties": {
                "name": "Scrie despre tine",
                "color": "#D698AD",
                "styleUrl": "#icon-503-D698AD-labelson",
                "styleHash": "-165a904a",
                "description": "ADRESĂ: Căderea Bastiliei 56-58<br><br>LINK:<br>https://www.facebook.com/Scriedespretine/ https://writeyourselfproject.wordpress.com/<br>https://www.facebook.com/Scriedespretine/<br><br><br>DESCRIERE:<br><br>Scoala de dramaturgie si scenaristica \"Scrie despre tine\" este un proiect care isi propune sa dezvolte impreuna cu participantii instrumentele necesare pentru a scrie piese de teatru si scenarii pentru film inspirate din povesti reale.<br><br>Lucram din 2010, in regim independent, cu oameni care vor sa-si exploreze realitatea si sa scrie despre ce li se intampla. Vrem sa intelegem mai bine lumea in care traim gasind impreuna povestile care o reprezinta cel mai bine, in complexitatea ei. Din 2017, proiectul este co-finantat de Administratia Fondului Cultural National.<br><br>PROGRAM:<br><br>\"Scrie despre tine\" vă invită la un experiment numit \"Oul dramaturgului\". Experimentul conține: liniște, sinceritate, material autobiografic, text, hârtie și o călătorie. Rezultatul: texte în incubator, potențiale semințe pentru piese de teatru despre lumea în care trăim:<br><br>Între ora 19.00 și ora 24.00 pe Caderea Bastiliei 56-58<br>În fața unei uși cu termopan<br>Vă va aștepta cineva<br>Care vă va da un bilet<br>Biletul vă va duce într-un lift mic<br>Liftul vă va duce pe un hol<br>Către o ușă... "
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
                "color": "#DB4436",
                "styleUrl": "#icon-503-DB4436-labelson",
                "styleHash": "-511c140a",
                "description": "<img src=\"https://lh6.googleusercontent.com/PkU09-JA49mUJr8-0yu122rLzRgpN4lvNyKlFWcIRcqku7FJLBuXeR1O_YZUj5Ob-gvQhVfAS21Tw_zxx9eyYAzeeM9wiUzaj5JuJENisyVjjp249zAfT-1r8Kpue5Y8ww\" height=\"200\" width=\"auto\" /><br><br>ADRESĂ: Crăciun 8<br><br>LINK: https://www.facebook.com/avanpost8/?fref=ts<br>DESCRIERE:<br><br>Spațiul Avanpost s-a coagulat în timp, adunând laolaltă artiști independenți, liberi, boemi, cu idei și pasiuni comune manifestate prin intermediul artelor vizuale și auditive. Este rezultatul unor legături de prietenie, fiecare dintre noi având rolul său în actul creației artistice, a unei forme invizibile de energie comună. Avanpost a evoluat organizând evenimente cultural-artistice la care au participat artiști din toate domeniile: graffiti, artă urbană, muzică, arte vizuale, sculptură, fotografie. <br><br>Prin amprenta lăsată de persoanele care au ocupat spațiul, locul poartă o puternică încărcătură energetică a creativității artistice, un exemplu în acest sens fiind compozitorul Temistocle Popa, care a trăit și creat în acest spațiu. <br><br>PROGRAM:<br><br>Parter: proiecții, jocuri de lumini, expoziție colectivă<br>Beci: petrecere până-n zi",
                "gx_media_links": "https://lh6.googleusercontent.com/PkU09-JA49mUJr8-0yu122rLzRgpN4lvNyKlFWcIRcqku7FJLBuXeR1O_YZUj5Ob-gvQhVfAS21Tw_zxx9eyYAzeeM9wiUzaj5JuJENisyVjjp249zAfT-1r8Kpue5Y8ww"
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
                "color": "#A61B4A",
                "styleUrl": "#icon-503-A61B4A-labelson",
                "styleHash": "-49f23a2a",
                "description": "<img src=\"https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2\" height=\"200\" width=\"auto\" /><br><br>-------------------------Bd. Carol Nr.53--------------------------LINK: https://www.facebook.com/casacarol53/?fref=ts<br><br>După aproape 4 ani de activitate, Carol 53 se dezvoltă ca un hub de ateliere creative, punând la dispoziție o parte din spațiile casei, pe perioade determinate de timp, unor persoane sau grupuri ce doresc să dezvolte proiecte cu impact în dezvoltarea social-culturală a orașului.<br>În prezent, ne bucurăm că alături de noi își desfășoară activitatea un colectiv de aproximativ 10-15 persoane din diverse domenii precum arhitectură, artă decorativă, meșteșug, ecologie, teatru, muzică, pictură și serigrafie.<br><br><br>PROGRAM:<br><br>Atelierele din Carol 53 își deschid porțile și vă invită la inaugurarea unei mici galerii în curte, în care puteți descoperi o expoziție organizată de către artiștii din casă, împreună cu prietenii și invitații lor.<br>ora 20 :00 - Deschidem Galeria Foarte Mica          ora 00:30 - Concert Gramofone<br><br><img src=\"https://lh5.googleusercontent.com/5sQKfUlrNdgJ-FY5nIGTsq6eS-cwEzrHHtWT_yHb12dSVf8fkCyT955T1C1lN3NHFPqHJ3f8JWcrC-Taj2hqg-Oy1a14IpCfTvacwZNqZYdOO4NS5gzZz_TqHSH35ukP\" height=\"200\" width=\"auto\" />",
                "gx_media_links": "https://lh6.googleusercontent.com/proxy/XsDlYUKdBx2Kn9UEdMrWWIhJ8ekTapyKNBR-BJf3435ITKlsxOnubdlj-Z5zMIAWBGzFmLsrNLfVLaoRxeLXjLSw0ODsus1rOcdAcR2HRuq1-zi2_HXccfXb1zjlY5grvdbk3hdtC473CpWe2YREunO2 https://lh5.googleusercontent.com/5sQKfUlrNdgJ-FY5nIGTsq6eS-cwEzrHHtWT_yHb12dSVf8fkCyT955T1C1lN3NHFPqHJ3f8JWcrC-Taj2hqg-Oy1a14IpCfTvacwZNqZYdOO4NS5gzZz_TqHSH35ukP"
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