const projetos = [
    {
      "id": "web",
      "nome": "Projeto Web",
      "descricao": "Descrição do projeto .",
      "tecnologias": ["HTML", "CSS", "JavaScript"],
      "links": {
        "deploy": "#",
        "repositorio": "#"
      }
    }
  ];
  
  function exibirProjetos() {
    const divProjetos = document.getElementById('projetos');

    projetos.forEach(projeto => {
      const projetoDiv = document.createElement('div');
      projetoDiv.classList.add('projeto');
  
      const nomeElement = document.createElement('h2');
      nomeElement.textContent = projeto.nome;
      projetoDiv.appendChild(nomeElement);

      const descricaoElement = document.createElement('p');
      descricaoElement.textContent = projeto.descricao;
      projetoDiv.appendChild(descricaoElement);

      const tecnologiasElement = document.createElement('p');
      tecnologiasElement.textContent = `Tecnologias: ${projeto.tecnologias.join(', ')}`;
      projetoDiv.appendChild(tecnologiasElement);

      const linksElement = document.createElement('div');

      const deployLink = document.createElement('a');
      deployLink.href = projeto.links.deploy;
      deployLink.textContent = 'Deploy';
      linksElement.appendChild(deployLink);
  
      const repositorioLink = document.createElement('a');
      repositorioLink.href = projeto.links.repositorio;
      repositorioLink.textContent = 'Código';
      linksElement.appendChild(repositorioLink);
  
      projetoDiv.appendChild(linksElement);
  
      divProjetos.appendChild(projetoDiv);
})};
  

window.onload = exibirProjetos;
  