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
  
  //parametros 
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  //execução
  mobileNavbar.init();






















  const home = document.querySelector('.estilo_home');
  const sobre = document.querySelector('.estilo_sobre');
  const projetos = document.querySelector('.estilo_projetos');
  const contatos = document.querySelector('.estilo_contato');

var scrollPosition = 0;
window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollPosition >= 0 ){
    home.style.borderBottom= '2px solid #ffbb33'
    home.style.paddingBottom= '3px'
    sobre.style.borderBottom= 'none'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition >= 1200 && scrollPosition < 2600){
    home.style.borderBottom= 'none'
    sobre.style.borderBottom= '2px solid #ffbb33'
    sobre.style.paddingBottom= '3px'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition >= 2600 && scrollPosition < 3700){
    home.style.borderBottom= 'none'
    sobre.style.borderBottom= 'none'
    projetos.style.borderBottom= '2px solid #ffbb33'
    projetos.style.paddingBottom= '3px'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition >= 3700) {
    home.style.borderBottom= 'none'
    sobre.style.borderBottomr= 'none'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= '2px solid #ffbb33'
    contatos.style.paddingBottom= '3px'
  }
});