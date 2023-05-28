//inputs diferenciais
const checkbox1 = document.querySelector('#check01')
const checkbox2 = document.querySelector('#check02')
const checkbox3 = document.querySelector('#check03')
const checkbox4 = document.querySelector('#check04')

//inputs preferencias
const checkbox1a = document.querySelector('#check01a')
const checkbox2a = document.querySelector('#check02a')
const checkbox3a = document.querySelector('#check03a')
const checkbox4a = document.querySelector('#check04a')

//texto alteravel
const textoCheck = document.querySelector('.texto01check')
const textoCheck2 = document.querySelector('.texto01check2')
 

//funcoes alterar  estilos
function time01(){
    checkbox4.style.color="#ffdd33"
    checkbox1.style.color="#fff"
    checkbox2.style.color="#fff"
    checkbox3.style.color="#fff"
    textoCheck.innerHTML='texto04'
    checkbox2a.style.color="#ffdd33"
    checkbox1a.style.color="#fff"
    checkbox3a.style.color="#fff"
    checkbox4a.style.color="#fff"
    textoCheck2.innerHTML='texto02'
}
function time02(){
    checkbox2.style.color="#ffdd33"
    checkbox3.style.color="#fff"
    checkbox1.style.color="#fff"
    checkbox4.style.color="#fff"
    textoCheck.innerHTML='texto02'
    checkbox1a.style.color="#ffdd33"
    checkbox2a.style.color="#fff"
    checkbox3a.style.color="#fff"
    checkbox4a.style.color="#fff"
    textoCheck2.innerHTML='texto01'
}
function time03(){
    checkbox3.style.color="#ffdd33"
    checkbox1.style.color="#fff"
    checkbox2.style.color="#fff"  
    checkbox4.style.color="#fff"
    textoCheck.innerHTML='texto03'
    checkbox4a.style.color="#ffdd33"
    checkbox1a.style.color="#fff"
    checkbox2a.style.color="#fff"
    checkbox3a.style.color="#fff"
    textoCheck2.innerHTML='texto04'
}
function time04(){
    checkbox1.style.color="#ffdd33"
    checkbox2.style.color="#fff"
    checkbox3.style.color="#fff"
    checkbox4.style.color="#fff"
    textoCheck.innerHTML='texto01'
    checkbox3a.style.color="#ffdd33"
    checkbox1a.style.color="#fff"
    checkbox2a.style.color="#fff"  
    checkbox4a.style.color="#fff"
    textoCheck2.innerHTML='texto03'
}


//funcao geral
function executarAcao() {
    setTimeout(time01, 3000);
    setTimeout(time02, 6000); 
    setTimeout(time03, 9000); 
    setTimeout(time04, 12000); 
    setTimeout(executarAcao, 14000); 
}
executarAcao();




