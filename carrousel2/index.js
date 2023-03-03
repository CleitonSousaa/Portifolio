const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () => {
    //mostrando e ocultando o ícone anterior/próximo de acordo com o valor esquerdo da rolagem do carrossel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obtendo largura máxima de rolagem
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; //obtendo a largura da primeira imagem e adicionando 14 valores de margem
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //chamando showhideicons após 60ms
    });
});

const autoSlide = () => {
    //se não houver imagem para rolar, retorne daqui
    if(carousel.scrollLeft = (carousel.scrollWidth - carousel.clientWidth)) return;

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
        