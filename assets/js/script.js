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
    if(scrollPosition < 800){
      diferencial1.style.transform = 'translateX(350px)';
      diferencial2.style.transform = 'translateX(-200px)';
    }else{
      diferencial1.style.transform = 'translateX(0px)';
      diferencial2.style.transform = 'translateX(0px)';
    }
    
    
}
document.addEventListener("scroll", onScroll)


//carroocel

const Carrocel_projetos = document.querySelector('.Carrocel_projetos');
const conteiner_carrocel = document.querySelector('.Conteiner_carrocel');

const btn_carrocel_left = document.querySelector('#btn_carrocel_left');
const btn_carrocel_right = document.querySelector('#btn_carrocel_right');

var Contador = 1;

btn_carrocel_left.addEventListener('click', () => {
  if (Contador > 1) {
    Contador--;
    console.log(`Contador: ${Contador}`);
    conteiner_carrocel.style.left = `${(Contador - 1) * -100}vw`;
    console.log(`Left: ${conteiner_carrocel.style.left}`);
  }
});

btn_carrocel_right.addEventListener('click', () => {
  if (Contador < 4) {
    Contador++;
    console.log(`Contador: ${Contador}`);
    conteiner_carrocel.style.left = `${(Contador - 1) * -100}vw`;
    console.log(`Left: ${conteiner_carrocel.style.left}`);
  }
});







function validarFormulario() {
  // Obtém referências aos campos do formulário
  var nome = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('message').value;

  // Verifica se todos os campos estão preenchidos
  if (nome === '' || email === '' || mensagem === '') {
      alert('Por favor, preencha todos os campos antes de enviar o formulário.');
      return false; // Impede o envio do formulário
  }

  // Se todos os campos estão preenchidos, permite o envio do formulário
  return true;
}





window.addEventListener('resize', function() {
  if (window.innerWidth < 900) {
    
    alert('Não disponivel para dispositivos moveis!');
    }
  if (window.innerWidth < 901) {
      document.body.style.display = 'none';
      
  }else {
    document.body.style.display = 'block'; // Exibe o body
  }
});
