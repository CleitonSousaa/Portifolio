const projetos = [
    {
      "id": "web",
      "nome": "Nome Do Projeto",
      "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, maxime animi asperiores molestiae odit illo, ea deserunt quia accusantium soluta magnam laboriosam doloribus placeat eius? Harum unde sunt quis quibusdam.",
      "tecnologias": ["TECNOLOGIA1", "TECNOLOGIA2"],
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

      const tecnologiasElement = document.createElement('span');
      tecnologiasElement.textContent = `| ${projeto.tecnologias.join(' | ')} |`;
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
  