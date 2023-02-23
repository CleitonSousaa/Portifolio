/*cabecalho*/ 
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
}

animateLinks() {
    this.navLinks.forEach((link, index) => {
    link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
        }s`);
    });
}

handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
}

init() {
    if (this.mobileMenu) {
    this.addClickEvent();
    }
    return this;
}
}

const mobileNavbar = new MobileNavbar(
".mobile-menu",
".nav-list",
".nav-list li",
);
mobileNavbar.init();

/*--------------------------------------------*/


/*projetos*/

var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });

/*--------------------------------------------- */


/*habilidades */

var primeiro = document.querySelector('.card1')
const segundo = document.querySelector('.card2')
const terceiro = document.querySelector('.card3')
const quarto = document.querySelector('.card4')
const quinto = document.querySelector('.card5')
const sexto = document.querySelector('.card6')
const setimo = document.querySelector('.card7')
const oitavo = document.querySelector('.card8')
const nono = document.querySelector('.card9')


primeiro.addEventListener("click", function(){
  this.style.display='none'
});