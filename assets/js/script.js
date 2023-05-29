const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
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

//sobre mim
const SobreMimTitulo = document.querySelector('.apresentacao')
const SobreMim01 = document.querySelector('.conteudo_lateral')
const SobreMim02 = document.querySelector('.imagem_sobremim')

const diferencial1= document.querySelector('.diferencial1')
const diferencial2= document.querySelector('.diferencial2')


const onScroll = (event) => {
const scrollPosition = event.target.scrollingElement.scrollTop;
console.log(scrollPosition)
    //sobre mim
    if(scrollPosition < 800){
      
      SobreMimTitulo.style.opacity = '0';
      SobreMim01.style.transform = 'translateX(-1000px)';
      SobreMim02.style.transform = 'translateX(1000px)';
    }else{
      
      SobreMim01.style.transform = 'translateX(0px)';
      SobreMim02.style.transform = 'translateX(0px)';
      SobreMimTitulo.style.opacity = '1';
    }
    //diferencias
    if(scrollPosition < 1800){
      diferencial1.style.transform = 'translateX(350px)';
      diferencial2.style.transform = 'translateX(-200px)';
    }else{
      diferencial1.style.transform = 'translateX(0px)';
      diferencial2.style.transform = 'translateX(0px)';
    }
    
    
}
document.addEventListener("scroll", onScroll)
