let lang = navigator.language || navigator.userLanguage;
let activeLanguage;


function dropdownSelected(lang) {
    document.getElementById("dropdown__selected").innerHTML = lang
}

if (!sessionStorage.getItem('preferedLanguage')) {
    if (lang.includes("es")) {
        activeLanguage = "es"
    } else if (lang.includes("pt")) {
        activeLanguage = "po"
    } else {
        activeLanguage = "en"
    }
} else {
    activeLanguage = sessionStorage.getItem('preferedLanguage');
}

translate(activeLanguage);
dropdownSelected(activeLanguage);


location.hash = "/" + activeLanguage;

function changeLanguage(lang) {
    location.hash = "/" + lang;
    sessionStorage.setItem('preferedLanguage', lang);
    translate(lang)
    activeLanguage = lang;
    dropdownSelected(activeLanguage);
    location.reload();
  }


  function stopDefAction(evt) {
    evt.preventDefault();
  }

  function translateSpanish() {
    document.getElementById("nav__home").innerHTML = 'Home';

    document.getElementById("nav__about").innerHTML = 'About';

    document.getElementById("nav__benefits").innerHTML = 'Beneficios';

    document.getElementById("nav__requisites").innerHTML = 'Requisitos';


    // HOME
    document.getElementById("home__heading").innerHTML = 'Nueva Visa para<br><span class="purple-span">Nómades Digitales</span>';

    document.getElementById("home__p").innerHTML = 'Tu oficina ideal se encuentra a tan sólo un par de clicks de distancia. ¡No esperes más!';

    document.getElementById("home__button").innerHTML = 'Tramitá tu visa';

    //VIDEO 
    document.getElementById("video__content").innerHTML = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/O3RdqF16piY?rel=0&modestbranding=1&autoplay=1" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>';
    
    // ABOUT
    document.getElementById("about__descriptor").innerHTML = 'Sobre Argentina';

    document.getElementById("about__heading").innerHTML = 'Un país donde abundan<br><span class="purple-span">las oportunidades</span>';

    document.getElementById("about__p").innerHTML = 'Argentina te espera con ciudades cosmopolitas repletas de espacios para trabajar, ubicadas a pocos kilómetros de incomparables destinos turísticos. Conectividad digital, costo de vida económico y educación y salud públicas: nada te faltará.';

    document.getElementById("about__number-data-01").innerHTML = 'Grandes ciudades<br>interconectadas';

    document.getElementById("about__number-data-02").innerHTML = 'Espacios para<br>coworking';

    document.getElementById("about__number-data-03").innerHTML = 'USD/mes como costo<br>de vida promedio';

   //BENEFITS
   document.getElementById("benefits__descriptor").innerHTML = 'Beneficios de la visa';

   document.getElementById("benefits__heading").innerHTML = 'Viví la experiencia <span class="purple-span">nómade digital en Argentina</span>';

   document.getElementById("card-title-01").innerHTML = 'Promociones únicas';

   document.getElementById("card-text-01").innerHTML = 'Tramitando tu Visa accederás a múltiples beneficios en experiencias gastronómicas y recreativas.';

   document.getElementById("card-title-02").innerHTML = 'Oficinas soñadas';

   document.getElementById("card-text-02").innerHTML = 'Infinidad de destinos en todo el país cuentan con espacios exclusivos para nómadas digitales.';

   document.getElementById("card-title-03").innerHTML = 'Trámites sencillos';

   document.getElementById("card-text-03").innerHTML = 'Obtener y renovar tu Visa es simple y rápido. No tendrás que preocuparte por dificultades administrativas.';

   //REQUISITOS

   document.getElementById("requisites__descriptor").innerHTML = 'Requisitos';

   document.getElementById("requisites__heading").innerHTML = 'Qué necesitás<br> <span class="purple-span">para obtenerla</span>';

   document.getElementById("requisites__p").innerHTML = 'Antes de iniciar tu viaje a Argentina deberás gestionarla y tendrá una validez de 180 días, prorrogable a un año.';

   document.getElementById("requisites__card-heading-01").innerHTML = 'Pasaporte vigente';

   document.getElementById("requisites__card-p-01").innerHTML = 'Se te solicitará cuando comiences el trámite a través de la Dirección de Migraciones.';

   document.getElementById("requisites__card-heading-02").innerHTML = 'Ingresos demostrables';

   document.getElementById("requisites__card-p-02").innerHTML = 'Deberás consignar documentación que pruebe la actividad económica que llevas adelante.';

   document.getElementById("requisites__card-heading-03").innerHTML = 'Documentación';

   document.getElementById("requisites__card-p-03").innerHTML = 'Tu CV, una foto 4x4 y tus datos personales es todo lo que se pedirá.';

   //GO SOUTH

   document.getElementById("goSouth__button").innerHTML = 'Tramitá tu visa';

   //FOOTER

   document.getElementById("footer__links-title-01").innerHTML = 'Sitio';

   document.getElementById("footer__links-item-01").innerHTML = 'About';

   document.getElementById("footer__links-item-02").innerHTML = 'Beneficios';

   document.getElementById("footer__links-item-03").innerHTML = 'Requisitos';

   document.getElementById("footer__links-title-02").innerHTML = 'Links de interés';

   document.getElementById("footer__links-item-04").innerHTML = 'Visit Argentina';

   document.getElementById("footer__links-item-05").innerHTML = 'Dir. de Migraciones';

   document.getElementById("footer__links-item-06").innerHTML = 'Ministerio de Turismo';
  };

  function translateEnglish() {
    // NAVBAR

    document.getElementById("nav__home").innerHTML = 'Home';

    document.getElementById("nav__about").innerHTML = 'About';

    document.getElementById("nav__benefits").innerHTML = 'Benefits';

    document.getElementById("nav__requisites").innerHTML = 'Requirements';


    // HOME
    document.getElementById("home__heading").innerHTML = 'New Visa for <br><span class="purple-span">Digital Nomads</span>';

    document.getElementById("home__p").innerHTML = 'Your ideal office is just some clicks away. Don’t wait any longer!';

    document.getElementById("home__button").innerHTML = 'Apply for your visa!';


    //VIDEO 
    document.getElementById("video__content").innerHTML = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Rtk5tVqjeqA?rel=0&modestbranding=1&autoplay=1" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>';

    
    // ABOUT
    document.getElementById("about__descriptor").innerHTML = 'About Argentina';

    document.getElementById("about__heading").innerHTML = 'A country where <br><span class="purple-span">possibilities abound</span>';

    document.getElementById("about__p").innerHTML = 'Argentina is waiting for you! Cosmopolitan cities packed with workspaces, located close to unique tourist destinations. Digital connectivity, low cost of living, and public education and health systems. You will have everything you need!';

    document.getElementById("about__number-data-01").innerHTML = 'Interlinked<br>big cities';

    document.getElementById("about__number-data-02").innerHTML = 'Coworking<br>spaces';

    document.getElementById("about__number-data-03").innerHTML = 'USD/month average<br>cost of living';

   //BENEFITS
   document.getElementById("benefits__descriptor").innerHTML = 'Visa Benefits';

   document.getElementById("benefits__heading").innerHTML = 'Have a digital nomad <span class="purple-span">experience in Argentina</span>';

   document.getElementById("card-title-01").innerHTML = 'Special Offers';

   document.getElementById("card-text-01").innerHTML = 'With your visa, you will have multiple benefits on gastronomic and recreational experiences.';

   document.getElementById("card-title-02").innerHTML = 'Dreamy Offices';

   document.getElementById("card-text-02").innerHTML = 'Countless destinations all over the country have exclusive spaces for digital nomads.';

   document.getElementById("card-title-03").innerHTML = 'Easy to Obtain';

   document.getElementById("card-text-03").innerHTML = 'Obtaining and renewing your visa is simple and fast. You won’t need to worry about complicated administrative processes.';

   //REQUISITOS

   document.getElementById("requisites__descriptor").innerHTML = 'REQUIREMENTS';

   document.getElementById("requisites__heading").innerHTML = 'What do you<br> <span class="purple-span">need to obtain it?</span>';

   document.getElementById("requisites__p").innerHTML = 'Before coming to Argentina, you’ll need to apply for a visa. It will be valid for 180 days and extendable for a year.';

   document.getElementById("requisites__card-heading-01").innerHTML = 'Valid passport';

   document.getElementById("requisites__card-p-01").innerHTML = 'It will be requested once you start the process through the National Migration Department.';

   document.getElementById("requisites__card-heading-02").innerHTML = 'Proof of income';

   document.getElementById("requisites__card-p-02").innerHTML = 'You must submit all the papers that prove the economic activity you are undertaking.';

   document.getElementById("requisites__card-heading-03").innerHTML = 'Documentation';

   document.getElementById("requisites__card-p-03").innerHTML = 'We will only request your CV, a 4x4 picture, and personal information.';

   //GO SOUTH

   document.getElementById("goSouth__button").innerHTML = 'Apply for your visa!';

   //FOOTER

   document.getElementById("footer__links-title-01").innerHTML = 'Site';

   document.getElementById("footer__links-item-01").innerHTML = 'About';

   document.getElementById("footer__links-item-02").innerHTML = 'Benefits';

   document.getElementById("footer__links-item-03").innerHTML = 'Requirements';

   document.getElementById("footer__links-title-02").innerHTML = 'Links of interest';

   document.getElementById("footer__links-item-04").innerHTML = 'Visit Argentina';

   document.getElementById("footer__links-item-05").innerHTML = 'National Migration Dept.';

   document.getElementById("footer__links-item-06").innerHTML = 'Ministry of Tourism';

};

function translatePortuguese() {
     // NAVBAR

     document.getElementById("nav__home").innerHTML = 'Home';

     document.getElementById("nav__about").innerHTML = 'About';
 
     document.getElementById("nav__benefits").innerHTML = 'Benefícios';
 
     document.getElementById("nav__requisites").innerHTML = 'Requisitos';
 
 
     // HOME
     document.getElementById("home__heading").innerHTML = 'Novo Visto para <br><span class="purple-span">Nômades Digitais</span>';
 
     document.getElementById("home__p").innerHTML = 'Seu escritório ideal fica a apenas alguns cliques de distância. Não espere demais!';
 
     document.getElementById("home__button").innerHTML = 'Tramite seu Visto!';
    
     
    //VIDEO 
    document.getElementById("video__content").innerHTML = ' <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lqD4iW24e34?rel=0&modestbranding=1&autoplay=1" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>';


     // ABOUT
     document.getElementById("about__descriptor").innerHTML = 'Sobre a Argentina';
 
     document.getElementById("about__heading").innerHTML = 'Um país onde as <br><span class="purple-span">oportunidades abundam</span>';
 
     document.getElementById("about__p").innerHTML = 'Argentina espera por você com cidades cosmopolitas cheias de espaços para trabalhar, localizadas a poucos quilômetros de destinos turísticos incomparáveis. Conectividade digital, custo de vida econômico e educação e saúde pública: para você nada vai faltar';
 
     document.getElementById("about__number-data-01").innerHTML = 'Grandes cidades<br>interconectadas';
 
     document.getElementById("about__number-data-02").innerHTML = 'Espaços<br>de coworking';
 
     document.getElementById("about__number-data-03").innerHTML = 'USD/mês o custo<br>médio de vida';
 
    //BENEFITS
    document.getElementById("benefits__descriptor").innerHTML = 'Benefícios do visto';
 
    document.getElementById("benefits__heading").innerHTML = 'Viva a experiência <span class="purple-span">nômade digital na Argentina</span>';
 
    document.getElementById("card-title-01").innerHTML = 'Promoções exclusivas';
 
    document.getElementById("card-text-01").innerHTML = 'Ao tramitar seu Visto você terá acesso a múltiplos benefícios em experiências gastronômicas e recreativas.';
 
    document.getElementById("card-title-02").innerHTML = 'Escritórios dos sonhos';
 
    document.getElementById("card-text-02").innerHTML = 'Inúmeros destinos em todo o país possuem espaços exclusivos para nômades digitais.';
 
    document.getElementById("card-title-03").innerHTML = 'Trâmites simples';
 
    document.getElementById("card-text-03").innerHTML = 'A obtenção e renovação do seu Visto é simples e rápida. Você não terá que se preocupar com dificuldades administrativas.';
 
    //REQUISITOS
 
    document.getElementById("requisites__descriptor").innerHTML = 'REQUISITOS';
 
    document.getElementById("requisites__heading").innerHTML = 'O que você<br> <span class="purple-span">precisa para obtê-lo</span>';
 
    document.getElementById("requisites__p").innerHTML = 'Antes de iniciar sua viagem para a Argentina você deve gerenciá-lo e ele será válido por 180 dias, prorrogável por um ano.';
 
    document.getElementById("requisites__card-heading-01").innerHTML = 'Passaporte válido';
 
    document.getElementById("requisites__card-p-01").innerHTML = 'O passaporte será solicitado quando iniciar o trâmite através da Diretoria de Migração.';
 
    document.getElementById("requisites__card-heading-02").innerHTML = 'Renda demonstrada';
 
    document.getElementById("requisites__card-p-02").innerHTML = 'Você deverá fornecer documentação que comprove a atividade econômica desenvolvida.';
 
    document.getElementById("requisites__card-heading-03").innerHTML = 'Documentação';
 
    document.getElementById("requisites__card-p-03").innerHTML = 'Seu CURRÍCULO, uma foto 4x4 e seus dados pessoais são tudo o que será solicitado.';
 
    //GO SOUTH
 
    document.getElementById("goSouth__button").innerHTML = 'Tramite seu Visto!';
 
    //FOOTER
 
    document.getElementById("footer__links-title-01").innerHTML = 'Site';
 
    document.getElementById("footer__links-item-01").innerHTML = 'About';
 
    document.getElementById("footer__links-item-02").innerHTML = 'Benefícios';
 
    document.getElementById("footer__links-item-03").innerHTML = 'Requisitos';
 
    document.getElementById("footer__links-title-02").innerHTML = 'Links de interesse';
 
    document.getElementById("footer__links-item-04").innerHTML = 'Visit Argentina';
 
    document.getElementById("footer__links-item-05").innerHTML = 'Diretoria de Migração';
 
    document.getElementById("footer__links-item-06").innerHTML = 'Ministério do Turismo';
};

function translate(language) {
    if (language == "es") translateSpanish()
    else if (language == "po") translatePortuguese()
    else translateEnglish()
}