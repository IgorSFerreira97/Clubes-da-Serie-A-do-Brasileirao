function pesquisar() {
    // Inicializa uma string vazia para armazenar os resultados da pesquisa

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //  Função para realizar a pesquisa
    
    if (!campoPesquisa) {section.innerHTML = "<p>Nada foi encontrado</p>" 
      return}

      campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let clube = "";
    let descricao = "";
    let namestudion = "";
    let tags = "";
    let anoA = "";
    let anoB = "";
    let anoC = "";
    let anoD = "";

    // Itera sobre cada time nos dados
    for (let dado of dados) {
      clube = (dado.clube)?.toLowerCase()
      descricao = (dado.descricao).toLowerCase()
      namestudion = (dado.namestudion).toLowerCase()
      tags = (dado.tags).toLowerCase()

      if (dado.clube.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.namestudion.includes(campoPesquisa) || dado.tags.includes(campoPesquisa) || anoA.includes(campoPesquisa) || anoB.includes(campoPesquisa) || anoC.includes(campoPesquisa) || anoD.includes(campoPesquisa)) 

        
{// Cria um novo Elemento
// Constrói o HTML para cada time, incluindo:
      // - Nome do time
      // - Descrição
      // - Títulos (Série A, B, C, D)
      // - Informações do estádio
      // - Links para o site, Instagram e notícias
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.clube}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p>Títulos do Campeonato Brasileiro:</p>
          <ul>
            ${dado.serieA ? `<li>Série A: ${dado.anoA}</li>` : ''}
            ${dado.serieB ? `<li>Série B: ${dado.anoB}</li>` : ''}
            ${dado.serieC ? `<li>Série C: ${dado.anoC}</li>` : ''}
            ${dado.serieD ? `<li>Série D: ${dado.anoD}</li>` : ''}
          </ul>
          <p>Arena/Estádio: <a href=${dado.link}" target="_blank">${dado.namestudion}:</a> Com capacidade para ${dado.capacidade} Tocedores</p>
          <p><a href="${dado.site}" target="_blank">Site oficial do Clube</a></p>
          <p><a href="${dado.instagram}" target="_blank">Instagram Oficial do Clube</a></p>
          <p><a href="${dado.GE}" target="_blank">Principais notícias do ${dado.clube}</a></p>
        </div>
      `;

}
  
   if (!resultados) {resultados = "<p>Nada foi encontrado. Você precisa digitar o nome completo do Clube</p>"}
      
    }
  
    // Atribui os resultados construídos ao elemento HTML com o ID "resultados-pesquisa"
    section.innerHTML = resultados;
  }
  
  // Obtém o elemento HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);
  
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";





