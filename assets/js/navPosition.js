

const home = document.querySelector('.estilo_home');
const sobre = document.querySelector('.estilo_sobre');
const projetos = document.querySelector('.estilo_projetos');
const contatos = document.querySelector('.estilo_contato');

function atualizarComprimentoPagina() {
    const comprimentoPagina = document.body.scrollHeight;
    return comprimentoPagina
}

const comprimento_em_tempo_real = atualizarComprimentoPagina();
window.addEventListener('scroll', atualizarComprimentoPagina);

var scrollPosition = 0;
window.addEventListener('scroll', function() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollPosition >= 0 && scrollPosition < comprimento_em_tempo_real / 5){
    home.style.borderBottom= '2px solid #ffbb33'
    home.style.paddingBottom= '3px'
    sobre.style.borderBottom= 'none'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition >= comprimento_em_tempo_real / 5 && scrollPosition < comprimento_em_tempo_real / 3){
    home.style.borderBottom= 'none'
    sobre.style.borderBottom= '2px solid #ffbb33'
    sobre.style.paddingBottom= '3px'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition > comprimento_em_tempo_real / 3 && scrollPosition < comprimento_em_tempo_real / 1.5){
    home.style.borderBottom= 'none'
    sobre.style.borderBottom= 'none'
    projetos.style.borderBottom= '2px solid #ffbb33'
    projetos.style.paddingBottom= '3px'
    contatos.style.borderBottom= 'none'
  }
  if(scrollPosition > comprimento_em_tempo_real / 1.4) {
    home.style.borderBottom= 'none'
    sobre.style.borderBottomr= 'none'
    projetos.style.borderBottom= 'none'
    contatos.style.borderBottom= '2px solid #ffbb33'
    contatos.style.paddingBottom= '3px'
  }
});