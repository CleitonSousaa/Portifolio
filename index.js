const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 70;
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


/*carrousel */
const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () => {
    //mostrando e ocultando o ícone anterior/próximo de acordo com o valor esquerdo da rolagem do carrossel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obtendo largura máxima de rolagem
    arrowIcons[0].style.display = carousel.scrollLeft == 1 ? "none" : "block"
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 304; //obtendo a largura da primeira imagem e adicionando 14 valores de margem
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 120); //chamando showhideicons após 60ms
    });
});

const autoSlide = () => {
    //se não houver imagem para rolar, retorne daqui
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff); // tornando o valor positiondiff para positivo
    let firstImgWidth = firstImg.clientWidth + 14;
    // obtendo valor de diferença que precisa adicionar ou reduzir do carrossel para a esquerda para levar o meio img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft){ //se o usuário estiver rolando para a direita
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : positionDiff;
        
    }
    //se o usuário estiver rolando para a esquerda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : positionDiff;
}


const DragStart = (e) => {
    //atualizando o valor das variáveis ​​globais no evento mouse down
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //rolar as imagens/carrossel para a esquerda de acordo com o ponteiro do mouse
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
        
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(isDragging) return;
    isDragging = false;
    autoSlide();
}    
        
carousel.addEventListener('mousedown', DragStart);
carousel.addEventListener('mousestart', DragStart);


carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);


carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);
carousel.addEventListener('touchend', dragStop);













const sobre = document.querySelector('.sobree');
const projetos = document.querySelector('.projetoss');
const contatos = document.querySelector('.contatoo');


const sobreMim = document.querySelector(".sobre_mim");
const projejos = document.querySelector(".projetos_");
const contato = document.querySelector(".contato_");

const position_sobre = sobreMim.getBoundingClientRect();
const position_projetos = projetos.getBoundingClientRect();
const position_contato = contato.getBoundingClientRect();



window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  if(scrollTop === 0 && scrollTop < position_projetos.top)
  {
    sobre.style.color='tomato'
    projetos.style.color='white'
    contatos.style.color='white'

  }
  if(scrollTop > position_projetos.top && scrollTop < position_contato.top){
    sobre.style.color='white'
    projetos.style.color='tomato'
    contatos.style.color='white'
  }
  if(scrollTop > position_contato.top){
    sobre.style.color='white'
    projetos.style.color='white'
    contatos.style.color='tomato'
  }
});


// seleciona o elemento que você deseja obter a posição



// obtém a posição do elemento


// exibe as coordenadas do elemento
console.log(4 - position_sobre.top);
console.log(400 + position_projetos.top);
console.log(400 + position_contato.top);






