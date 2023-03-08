const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

/*--------------⬇⬇--IMPLEMENTACAO DO MODO DARK--⬇⬇--------------*/
const chk = document.getElementById('chk')
const html = document.querySelector('html')

chk.addEventListener('change', () => {
  html.classList.toggle('dark')
  
})



/*--------------⬆⬆--IMPLEMENTACAO DO MODO DARK--⬆⬆--------------*/


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



/*projetos */
const btn_left = document.querySelector('.btn_left')
const btn_rigth = document.querySelector('.btn_rigth')
const corpo = document.querySelector('.corpo')



    

    var cont = 1
    console.log(cont)

    btn_left.addEventListener('click', () => {
        
        if(cont >= 2){
            cont = cont - 1
            console.log(cont)
        }

        //o que acontece se estiver na posicao
        if(cont == 1){
            
            corpo.style.marginLeft= '0vw'
            
        }
        if(cont == 2){
            
            corpo.style.marginLeft= '-100%'
            
        }
        if(cont == 3){
            
            corpo.style.marginLeft= '-200%'
        }
        
    });
    

    btn_rigth.addEventListener('click', () => {
        if(cont <= 3){
            cont = cont + 1
            console.log(cont)
        }

        //o que acontece se estiver na posicao 
        if(cont == 2){
            
            corpo.style.marginLeft= '-100%'  
        }
        if(cont == 3){
            
            corpo.style.marginLeft= '-200%'
        }
        if(cont == 4){
            
            corpo.style.marginLeft= '-300%'
        }
    });
/* */