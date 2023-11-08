//SECTION DEFINITION

let home = document.querySelector("#home");

let about = document.querySelector("#about");

let benefits = document.querySelector("#benefits");

let requisites = document.querySelector("#requisites");

//FUNCTION DEFINITION
function scrollTo (element) {
    element.scrollIntoView({ behavior: 'smooth'});
    
}

//HANDLERS - NAV
document.getElementById("navbar-brand").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(home)
  });

 document.getElementById("nav__home").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(home)
  });

  document.getElementById("nav__about").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(about)
  });

  document.getElementById("nav__benefits").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(benefits)
  });

  document.getElementById("nav__requisites").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(requisites)
  });

  //HANDLERS - FOOTER

  document.getElementById("footer__links-item-01").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(about)
  });

  document.getElementById("footer__links-item-02").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(benefits)
  });

  document.getElementById("footer__links-item-03").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(requisites)
  });