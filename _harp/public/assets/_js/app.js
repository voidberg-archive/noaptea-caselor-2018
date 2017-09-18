$(document).ready(function ready() {
  var markers = {
    'aici': {
      name: 'AICI',
      address: 'Calderon 25',
        description: '<span class="hours">21:00-04:00</span> Expoziţii, instalaţii, muzică şi dichisuri. Tencuim căsuţa de la Urban Fest sub atenta îndrumare a celor de la 3e-concept.ro, care ne învaţă să facem lucruri trainice cu mânuţe proprii.',
    },
    'avanpost': {
      name: 'Avanpost8',
      address: 'Crăciun 8',
      description: '<span class="hours">19:00-03:00</span> Expoziție foto/pictură/sculptură<br/>Party cu muzică pe vinyl @Gramofon Records<br/>Moment acoustic - Parada<br/>Instalație Cuba<br/>Expoziție din arhiva lucrărilor marelui compozitor Temistocle Popa',
    },
    'carol': {
      name: 'Carol53',
      address: 'Carol I. 53',
      description: '<span class="hours">19:00-23:00</span> Grafică, pictură și animație – Daniel Alexandru, Andreea Toma, George Vasilescu, Irina Maria Iliescu, Iolanda Boban, Wood be Nice, Atelier Șnur.<br/><span class="hours">21.00-2.00</span> Galeria de multiple – Atelierul de Coregrafie de pe lângă Librăria ”Jumătatea Plină” - Octav Avramescu<br />Instalație și performance -JULAY&Renate',
    },
    'casa': {
      name: 'Casa Jurnalistului',
      address: 'Viitorului 154',
      description: '<span class="hours">18:00-05:00</span> Vă așteptăm cu povești și rezidenți noi, o proiecție cu filmele care iau pulsul străzii, bucătărie mexicană + party (latino, lăutărie live, manele).',
    },
    'lupu': {
      name: 'Casa Lupu',
      address: 'Dionisie Lupu 31',
      description: 'Ne strângem în grădina la un must. La ora 22 fix atacăm străzile și casele nopții în haită. Revenim în grădina Lupu pentru un ceaun a la shef Vatamanu să ne satisfacem pofetele!<br />(Casa rămâne închisă în timpul turului)',
    },
    'cetatea': {
      name: 'Cetatea Artelor',
      address: 'Henri Coandă 38',
      description: '<span class="hours">18:30-20:30</span> Curs deschis de tobe africane<br /><span class="hours">20:30-22:00</span> Piesa “Portrete III – Purgatoriul” – Trupa TEATRUL DE PICĂ<br /><span class="hours">22:00-23:30</span> Jam Session cu artiștii colaboratori ai centrului<br /><span class="hours">23:30-2:30</span> Proiecție filme de scurt metraj by Short to the Point.',
    },
    'colivia': {
      name: 'Colivia',
      address: 'Pache Protopopescu 9',
      description: '<span class="hours">18:30-04:00</span> Program all night civically fit: se va picta, se va dansa pe funk, se vor prezenta proiecte activiste și nstalații artistice:<br />Blackhorse Mansion // Ramon Sadîc // John.S <br />Foto-booth de epocă: eliberăm pe loc buletin de Funky Citizen - trage-te-n cadru vintage<br />Geeks for Democracy cu proiectul FiecareVot<br />Lettering (caligrafie) cu vederi civice<br />Democracy store: constituții Funky, dicționar finanțez-român, stickere cuMari Corupți',
    },
    'czvl': {
      name: 'CZVL12',
      address: 'Luigi Cazzavillan 12',
      description: '<span class="hours">18:00-06:00</span> Seară de audiție muzicală, susținută de Catalin Sharpe, Phlo Da Shaolin, Rage precum și o serie de alți invitați surpriză. Desfășurarea cuprinde deejay scratching, jazzy hip hop music, beat juggling si beatbox. ',
    },
    'efden': {
      name: 'EFdeN',
      address: 'Pache Protopopescu 66',
      description: '<span class="hours">20:00-04:00</span> Expoziţie tematică şi tururi ghidate ale locuinţei, ţinute de studenţii voluntari ai echipei EFdeN, prin care publicul va avea ocazia să cunoască cel mai bine casa, tehnologiile implementate şi inovaţiile care o fac eficientă energetic.',
    },
    'gradina': {
      name: 'Grădina Sticlarilor',
      address: 'Vasile Lascăr 36',
      description: '<span class="hours">18:00-00:00</span> Într-un performance live, S.E.M.N. oferă o viziune eclectică din punct de vedere artistic. Muzica, sculptura, grafica şi proiecţia 3D se îmbină pentru a oferi o perspectivă unică şi completă asupra subiectului.',
    },
    'matasari': {
      name: 'Home Matasari',
      address: 'Mătăsari 17',
      description: '<span class="hours">20:00-04:00</span> Expoziții de street art / Ioana Double Eye<br />Fotografie / Raisia Hagiu<br />Grafică / Florin Pantelimon',
    },
    'insula': {
      name: 'Insula42',
      address: 'Theodor Aman 42',
      description: '<span class="hours">19:00-00.00</span> Artefacte meseriașe produse la Atelierele Street Delivery Meserie! — fierărie, sticlărie, butaforie, croitorie, electronică, hârtie manuală, serigrafie, legătorie de carte, lemnărie, imprimerie, restaurare mobilier, producție video.<br /><span class="hours">21:00</span> Proiecție – Fragment din filmul "Acasă", un documentar din Casa Jurnalistului despre Delta Văcărești; discuție cu Florin Stoican, reprezentant Asociația Parcul Natural Văcărești',
    },
    'manasia': {
      name: 'Manasia Hub',
      address: 'Stelea Spătarul 13',
      description: '<span class="hours">18:00-05:00</span> De cum apune soarele, pregătim atâtea activități încât abia dacă ne ajung toate ungherele fostei secții de poliție de pe Stelea Spătarul 13. Muzică, arhitectură, expoziții, biciclete, vizite în studiourile casei și multe surprize. Se ține și party, evident.',
    },
    'modulab': {
      name: 'Modulab',
      address: 'Viitorului 153',
      description: '<span class="hours">19:00-00:00</span> Suntem mereu cu treabătreabătreabă. Așa că pentru ediția asta n-am pregătit mare coregrafie. Dar vă așteaptă cu poarta deschisă la o discuție și-un tur prin nava noastră spațială pe care am construit-o pe strada Viitorului.',
    },
    'room': {
      name: 'The Room',
      address: 'Intrarea Mihai Eminescu 5',
      description: '<span class="hours">20:00</span> Ateliere deschise (ceramică, pictură, sculptură, design, fashion, grafică)  <br /><span class="hours">20:30</span> Expoziție pictură cu Laura Coviaci, Magda Pelmus, Amalia Dulhan, Vika Tonu, Diana Tudose, Cati Moldoveanu<br /><span class="hours">21:30</span> Workshop și demonstrație ceramică<br /><span class="hours">21:30</span> Prezentare noua colecție de seară Moon by Pulse<br /><span class="hours">22:00</span> Discover “The Room” – instalație și un tur al casei într-o interpretare modernă.',
    },
  };

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.house-carousel').each(function iterator(i, carouselContainer) {
    var numImages = $('> div', carouselContainer).length;

    if (numImages > 1) {
      $(carouselContainer).owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        navText: [
          '<div class="house-carousel__prev">Precedenta</div>',
          '<div class="house-carousel__next">Urmatoarea</div>',
        ],
        items:1,
      })
    }
  });

  $('a.more__action').click(function () {
    var target = $(this).attr('target');
    if (target) {
      target = $(target);

      if (target.is(':visible')) {
        target.hide();
        $(this).html('Mai mult');
      } else {
        target.show();
        $(this).html('Mai puțin');
      }
    }
  });

  $('img[usemap]').rwdImageMaps();

  $('#map-popup').mouseleave(function () {
    $(this).fadeOut();
  });

  $('#header-map area').each(function () {
    var house = $(this).attr('id');
    $(this).mouseover(function () {
      var position = $(this).attr('coords').split(',');
      var data = markers[house];

      $('#map-popup .popup__title').html(data.name);
      $('#map-popup .popup__address').html(data.address);
      $('#map-popup .popup__description').html(data.description);

      $('#map-popup').css({
        left: position[0] - 200,
        top: position[1] - 100,
      }).fadeIn();
    });
  });
});