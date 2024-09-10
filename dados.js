let dados = [
    // Objeto representando o Athletico Paranaense
    {
      clube: "Club Athletico Paranaense", // Nome completo do clube
      descricao: "O Club Athletico Paranaense mais conhecido como Athletico Paranaense, cujo acrônimo é CAP, é um clube de futebol do Brasil, da cidade de Curitiba, capital do estado do Paraná. Foi fundado em 26 de março de 1924, a partir da fusão do International Foot-Ball Club e do América Futebol Clube.", // Descrição do clube
      namestudion : "Estádio Mário Celso Petraglia (Ligga Arena)", // Nome do estádio e link para mais informações
      link: "https://www.liggaarena.com/", // Link para o site do estádio
      capacidade: "42.372", // Capacidade do estádio
      site: "https://www.athletico.com.br/", // Site oficial do clube
      instagram: "https://www.instagram.com/athleticoparanaense/?hl=pt-br", // Perfil do Instagram
      GE: "https://ge.globo.com/pr/futebol/times/athletico-pr/", // Página do clube no GE
      serieA: "Série A:", // Indica que o clube já jogou na Série A
      anoA: "2001", // Ano em que o clube jogou na Série A
      tags: "Athletico athletico paranaense Paranaense Curitiba 1924 parana Paraná paraná Parana ligga arena Liga arena liga arena Ligga Arena estadio mauro celso petraglia 26/03/1924 caveira atleticoparanaense Atleticoparanaense"//tags para ajudar na busca do clube
    },

    {
        clube: "Atlético Clube Goianiense", // Nome oficial do clube
        link: "https://atleticogoianiense.com.br/o-clube/estrutura.html", // Link para a página sobre a estrutura do clube
        descricao: "O Atlético Goianiense é um clube de futebol brasileiro, com sede na cidade de Goiânia, capital do estado de Goiás. Fundado em 10 de abril de 1943, é um dos principais clubes do futebol goiano.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Antônio Accioly (Castelo do Dragão)", // Nome oficial e apelido do estádio
        capacidade: "12.089", // Capacidade máxima do estádio
        site: "https://atleticogoianiense.com.br/", // Link para o site oficial do clube
        instagram: "https://www.instagram.com/acgoficial/?igsh=MWZpdG84emdpZWxjMg%3D%3D", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/go/futebol/times/atletico-go/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2016", // Ano em que o clube disputou a Série B
        serieC: "Série C: 1990 e 2008", // Indica que o clube disputou a Série C nestes anos
        anoC: "1990 e 2008", // Repete os anos da Série C para facilitar a leitura (opcional)
        tags: "atletico Atlético goianiense Goias Goiás goias Goias atg ATG 10/04/1943 dragao Dragão dragão goiano Goiano atleticogoianiense Atleticogoianiense"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Clube Atlético Mineiro", // Nome oficial do clube
        link: "https://www.arenamrv.com.br/", // Link para o site da Arena MRV, estádio do clube
        descricao: "O Atlético Mineiro, conhecido como Galo, é um clube de futebol brasileiro, com sede na cidade de Belo Horizonte, capital do estado de Minas Gerais. Fundado em 25 de março de 1908, é um dos clubes mais tradicionais do Brasil.", // Descrição resumida do clube, sua história e localização
        namestudion: "Arena MRV", // Nome do estádio do clube
        capacidade: "46.000", // Capacidade máxima do estádio
        site: "https://atletico.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/atletico/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/atletico-mg/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1971, 2021", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2006", // Ano em que o clube disputou a Série B
        tags: "galo Galo galão Galão atetico mineiro Atlético Mineiro atlético mineiro belo horizonte Belo Horizonte minas gerais Minas Gerais Arena MRV arena mrv 25/03/1908"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Esporte Clube Bahia", // Nome oficial do clube
        link: "https://www.casadeapostasfontenova.com.br/", // Link para um site de apostas (possivelmente com informações sobre o estádio)
        descricao: "O Esporte Clube Bahia, conhecido como Tricolor de Aço, é um clube de futebol brasileiro, com sede na cidade de Salvador, capital do estado da Bahia. Fundado em 1º de janeiro de 1931, é um dos clubes mais populares do Nordeste.", // Descrição resumida do clube, sua história e localização
        namestudion: "Casa de Apostas Arena Fonte Nova", // Nome do estádio e de um patrocinador
        capacidade: "48.902", // Capacidade máxima do estádio
        site: "https://www.esporteclubebahia.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/ecbahia/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/ba/futebol/times/bahia/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1988", // Ano em que o clube disputou a Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2010", // Ano em que o clube disputou a Série B
        tags: "bahia Bahia triunfo Triunfo tricolor de aco Tricolor de Aço salvador grupo city Grupo City nordeste Nordeste arena fonte nova Arena Fonte Nova 01/01/1931 ECB ecb bora bahia minha porra Bora Bahia Minha Porra"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Botafogo de Futebol e Regatas", // Nome oficial do clube
        link: "https://www.botafogo.com.br/nilton-santos", // Link para uma página específica do site do Botafogo relacionada ao Nilton Santos
        descricao: "O Botafogo de Futebol e Regatas, conhecido como Glorioso, é um clube de futebol brasileiro, com sede na cidade do Rio de Janeiro, capital do estado do Rio de Janeiro. Fundado em 12 de agosto de 1904, é um dos clubes mais tradicionais do Brasil.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Olímpico Nilton Santos (Engenhão):", // Nome oficial e popular do estádio
        capacidade: "44.661", // Capacidade máxima do estádio
        site: "https://www.botafogo.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/botafogo/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/botafogo/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1968, 1995", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2015, 2021", // Anos em que o clube disputou a Série B
        tags: "fogao Fogao Fogão fogão Bota Fogo bota fogo botafogo BotaFogo textor Textor glorioso Glorioso engenhão Engenhão engenhao Engenhao 12/08/1904"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Red Bull Bragantino", // Nome oficial do clube
        link: "https://www.redbullbragantino.com.br/estadio", // Link para a página sobre o estádio no site oficial
        descricao: "O Red Bull Bragantino, popularmente conhecido como Bragantino, é um clube de futebol brasileiro, com sede na cidade de Bragança Paulista, interior do estado de São Paulo. Fundado em 1928, o clube passou por diversas transformações até se tornar uma das forças do futebol paulista.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Nabi Abi Chedid (Arena Red Bull):", // Nome oficial e popular do estádio
        capacidade: "17.022", // Capacidade máxima do estádio
        site: "https://www.redbullbragantino.com/", // Site oficial do clube
        instagram: "https://www.instagram.com/redbullbragantino/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/sp/vale-do-paraiba-regiao/futebol/times/bragantino/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "1989, 2019", // Anos em que o clube disputou a Série B
        serieC: "Série C:", // Indica que o clube já disputou a Série C
        anoC: "2007", // Ano em que o clube disputou a Série C
        tags: "redbull RedBull Red Bull red bull redbullbragantino RedBullBragantino bragantino Bragantino braga Braga Bragança bragança braganca touro"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Sport Club Corinthians Paulista", // Nome oficial do clube
        link: "https://www.neoquimicaarena.com.br/", // Link para o site da Neo Química Arena, estádio do Corinthians
        descricao: "O Sport Club Corinthians Paulista, popularmente conhecido como Corinthians, é um dos clubes de futebol mais populares do Brasil, com sede na cidade de São Paulo. Fundado em 15 de setembro de 1910, o Timão, como é carinhosamente chamado, possui uma das maiores torcidas do mundo.", // Descrição resumida do clube, sua história e localização
        namestudion: "Neo Química Arena", // Nome do estádio do clube
        capacidade: "49.205", // Capacidade máxima do estádio
        site: "https://www.corinthians.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/corinthians/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/corinthians/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1990, 1998, 1999, 2005, 2011, 2015 e 2017", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2008", // Ano em que o clube disputou a Série B
        tags: "corinthians Corinthians Timão timão Timao timao neo quimica arena 15/10/1910"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Criciúma Esporte Clube", // Nome oficial do clube
        link: "https://www.criciuma.com.br/estrutura/heriberto-hulse", // Link para uma página específica sobre o estádio Heriberto Hülse
        descricao: "O Criciúma Esporte Clube é um clube de futebol brasileiro, com sede na cidade de Criciúma, em Santa Catarina. Fundado em 13 de maio de 1948, o Tigre, como é conhecido, é um dos principais clubes de futebol do estado.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Heriberto Hülse (Majestoso)", // Nome oficial e popular do estádio
        capacidade: "19.225", // Capacidade máxima do estádio
        site: "https://www.criciuma.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/criciumaoficial/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/sc/futebol/times/criciuma/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2002", // Ano em que o clube disputou a Série B
        tags: "criciuma Criciuma criciúma Criciúma majestoso Masjetoso santa catarina Santa Catarina tigrão Tigrão tigrao Tigrao 13/04/1948"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Cruzeiro Esporte Clube", // Nome oficial do clube
        link: "https://mineirao.com.br/", // Link para o site do Mineirão, estádio do Cruzeiro
        descricao: "O Cruzeiro Esporte Clube, popularmente conhecido como Raposa, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade de Belo Horizonte, em Minas Gerais. Fundado em 2 de janeiro de 1921, o clube possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Governador Magalhães Pinto (Mineirão)", // Nome oficial e popular do estádio
        capacidade: "61.927", // Capacidade máxima do estádio
        site: "https://www.cruzeiro.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/cruzeiro/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/cruzeiro/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1966, 2003, 2013 e 2014", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2022", // Ano em que o clube disputou a Série B
        tags: "Cruzeiro cruzeiro Raposa raposa Rapoza rapoza belo horinzote Belo Horizonte Minas Gerais minas gerais cruseiro Cruseiro"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Cuiabá Esporte Clube", // Nome oficial do clube
        link: "https://www.secel.mt.gov.br/complexo-arena-pantanal", // Link para o site oficial do complexo onde está localizada a Arena Pantanal
        descricao: "O Cuiabá Esporte Clube é um clube de futebol brasileiro, com sede na cidade de Cuiabá, em Mato Grosso. Fundado em 1º de abril de 2009, o Dourado, como é conhecido, é um dos principais clubes de futebol do estado.", // Descrição resumida do clube, sua história e localização
        namestudion: "Arena Pantanal:", // Nome do estádio do clube
        capacidade: "42.968", // Capacidade máxima do estádio
        site: "http://cuiabaesporteclube.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/cuiabaec/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/mt/futebol/times/cuiaba/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2020", // Ano em que o clube disputou a Série B
        tags: "Cuiabá cuiabá Cuiaba cuiaba Dourado dourado Mato Grosso mato grosso 01/05/2009"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Clube de Regatas do Flamengo", // Nome oficial do clube
        link: "https://www.estadiodomaracana.com.br/", // Link para o site oficial do Maracanã, estádio onde o Flamengo manda seus jogos
        descricao: "O Clube de Regatas do Flamengo, popularmente conhecido como Flamengo, é um dos clubes de futebol mais populares do Brasil, com sede na cidade do Rio de Janeiro. Fundado em 18 de novembro de 1895, o Mengão, como é carinhosamente chamado, possui uma das maiores torcidas do mundo.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Jornalista Mário Filho (Maracanã):", // Nome oficial e popular do estádio
        capacidade: "78.838", // Capacidade máxima do estádio
        site: "https://www.flamengo.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/flamengo/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/flamengo/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube nunca disputou a Série B
        tags: "Flamengo flamengo Mengo mengo Mengão mengão Mengao mengao FLA fla Rio de Janeiro rio de janeiro gavea Gavea Maracanã maracanã maracana Maracana framengo Framengo"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Fluminense Football Club", // Nome oficial do clube
        link: "https://www.estadiodomaracana.com.br/", // Link para o site oficial do Maracanã, estádio onde o Fluminense manda seus jogos
        descricao: "O Fluminense Football Club, popularmente conhecido como Fluminense, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade do Rio de Janeiro. Fundado em 21 de julho de 1902, o Tricolor, como é carinhosamente chamado, possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Jornalista Mário Filho (Maracanã):", // Nome oficial e popular do estádio
        capacidade: "78.838", // Capacidade máxima do estádio
        site: "https://www.fluminense.com.br/site/", // Site oficial do clube
        instagram: "https://www.instagram.com/fluminensefc/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/fluminense/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1970, 1984, 2010 e 2012", // Anos em que o clube conquistou o título da Série A
        serieC: "Série C:", // Indica que o clube já disputou a Série C
        anoC: "1999", // Ano em que o clube disputou a Série C
        tags: "FLU flu Fluminense fluminense flusão Flusão flusao Flusao tricolor Tricolor laranjeira Laranjeira Rio de Janeiro rio de janeiro 21/07/1902"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Fortaleza Esporte Clube", // Nome oficial do clube
        link: "https://www.arenacastelao.net/", // Link para o site oficial da Arena Castelão, estádio onde o Fortaleza manda seus jogos
        descricao: "O Fortaleza Esporte Clube, popularmente conhecido como Leão do Pici, é um dos principais clubes de futebol do estado do Ceará, com sede na cidade de Fortaleza. Fundado em 18 de outubro de 1918, o Tricolor de Aço, como também é conhecido, possui uma torcida apaixonada e crescente.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Governador Plácido Castelo (Castelão)", // Nome oficial e popular do estádio
        capacidade: "63.903", // Capacidade máxima do estádio
        site: "https://fortaleza1918.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/fortalezaec/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/ce/futebol/times/fortaleza/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2018", // Ano em que o clube disputou a Série B
        tags: "Fortaleza fortaleza Tricolor de Aço tricolor de aço tricolor de aco Leão do Pici leão do pici leao do pici Leao do Pici 18/10/1918"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Grêmio Foot-Ball Porto Alegrense", // Nome oficial do clube
        link: "https://arenapoa.com.br/", // Link para o site oficial da Arena do Grêmio, estádio do clube
        descricao: "O Grêmio Foot-Ball Porto Alegrense, popularmente conhecido como Grêmio, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade de Porto Alegre, no Rio Grande do Sul. Fundado em 15 de fevereiro de 1903, o Imortal Tricolor, como é carinhosamente chamado, possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Arena do Grêmio", // Nome do estádio do clube
        capacidade: "55.396", // Capacidade máxima do estádio
        site: "https://www.gremio.net/", // Site oficial do clube
        instagram: "https://www.instagram.com/gremio/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/rs/futebol/times/gremio/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1981 e 1996", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2005", // Ano em que o clube disputou a Série B
        tags: "Gremio gremio Grêmio grêmio Imortal Tricolor Gaucho imortal tricolor gaucho Porto Alegre porto alegre 15/02/1903"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Sport Club Internacional", // Nome oficial do clube
        link: "https://estadiobeirario.com.br/", // Link para o site oficial do Beira-Rio, estádio do Internacional
        descricao: "O Sport Club Internacional, popularmente conhecido como Internacional, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade de Porto Alegre, no Rio Grande do Sul. Fundado em 4 de abril de 1909, o Colorado, como é carinhosamente chamado, possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio José Pinheiro Borda (Beira-Rio)", // Nome oficial e popular do estádio
        capacidade: "50.842", // Capacidade máxima do estádio
        site: "https://www.internacional.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/scinternacional/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/rs/futebol/times/internacional/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1975, 1976 e 1979", // Anos em que o clube conquistou o título da Série A
        tags: "Internacional internacional Inter inter Colorado colorado BeiraRio beirario beira rio Beira Rio 04/04/1909"//tags para ajudar na busca do clube
      },

      {
        clube: "Esporte Clube Juventude", // Nome oficial do clube
        link: "https://www.juventude.com.br/estrutura-fisica", // Link para a página sobre a estrutura física do clube, incluindo o estádio
        descricao: "O Esporte Clube Juventude, popularmente conhecido como Juventude, é um dos clubes de futebol mais tradicionais do estado do Rio Grande do Sul, com sede na cidade de Caxias do Sul. Fundado em 12 de setembro de 1913, o Alviverde, como é carinhosamente chamado, possui uma torcida apaixonada e fiel.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Alfredo Jaconi", // Nome do estádio do clube
        capacidade: "19.924", // Capacidade máxima do estádio
        site: "https://www.juventude.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/ecjuventude/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/rs/futebol/times/juventude/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "1994", // Ano em que o clube disputou a Série B
        tags: "Juventude juventude juvetude Juvetude alviverde gaucho Alviverde Gaucho Caxias caxias 12/09/1913"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Sociedade Esportiva Palmeiras", // Nome oficial do clube
        link: "https://allianzparque.com.br/", // Link para o site oficial do Allianz Parque, estádio do Palmeiras
        descricao: "O Palmeiras, oficialmente Sociedade Esportiva Palmeiras, é um dos clubes de futebol mais populares e vitoriosos do Brasil, com sede na cidade de São Paulo. Fundado em 26 de agosto de 1914, o Verdão, como é carinhosamente chamado, possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Allianz Parque", // Nome do estádio do clube
        capacidade: "43.713", // Capacidade máxima do estádio
        site: "https://www.palmeiras.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/palmeiras/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/palmeiras/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1960, 1967, 1967, 1969, 1972, 1973, 1993, 1994, 2016, 2018, 2022 e 2023", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2003 e 2013", // Anos em que o clube disputou a Série B
        tags: "PAL pal Palmeiras palmeiras palmeras Palmeras palmera Palmera Porco porco Verdão verdão Verdao verdao 26/08/1914"//tags para ajudar na busca do clube
      },
    
      {
        clube: "São Paulo Futebol Clube", // Nome oficial do clube
        link: "https://www.saopaulofc.net/estrutura/morumbis/", // Link para a página do Morumbi no site oficial do São Paulo
        descricao: "O São Paulo Futebol Clube, popularmente conhecido como São Paulo, é o Maior clube de futebol do Brasil, com sede na cidade de São Paulo. Fundado em 25 de janeiro de 1930, o Tricolor, como é carinhosamente chamado, possui a torcida mais popular e uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Cícero Pompeu de Toledo (MorumBis)", // Nome oficial e popular do estádio
        capacidade: "66.795", // Capacidade máxima do estádio
        site: "https://www.saopaulofc.net/", // Site oficial do clube
        instagram: "https://www.instagram.com/saopaulofc/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/sao-paulo/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1977, 1986, 1991, 2006, 2007 e 2008", // Anos em que o clube conquistou o título da Série A
        tags: " São Paulo são paulo sãopaulo SãoPaulo Sãopaulo sao paulo Sao Paulo sp SP spfc SPFC Tricolor Paulista tricolor paulista morumbi Morumbi morumbis Morumbis 25/01/1930"//tags para ajudar na busca do clube
      },

      {
        clube: "Club de Regatas Vasco da Gama", // Nome oficial do clube
        link: "https://vasco.com.br/sao-januario/", // Link para a página do São Januário no site oficial do Vasco
        descricao: "O Club de Regatas Vasco da Gama, popularmente conhecido como Vasco, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade do Rio de Janeiro. Fundado em 21 de agosto de 1898, o Gigante da Colina, como é carinhosamente chamado, possui uma das maiores torcidas do país.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio São Januário", // Nome do estádio do clube
        capacidade: "21.880", // Capacidade máxima do estádio
        site: "https://vasco.com.br/", // Site oficial do clube
        instagram: "https://www.instagram.com/vascodagama/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/futebol/times/vasco/", // Página do clube no portal esportivo GE
        serieA: "Série A:", // Indica que o clube já disputou a Série A
        anoA: "1974, 1989, 1997 e 2000", // Anos em que o clube conquistou o título da Série A
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2009", // Ano em que o clube disputou a Série B
        tags: "Vasco da Gama vasco da gama VAS vas Gigante da Colina gigante da colina 21/08/1898"//tags para ajudar na busca do clube
      },
    
      {
        clube: "Esporte Clube Vitória", // Nome oficial do clube
        link: "https://ecvitoria.com.br/public/historia/", // Link para a página da história do clube no site oficial
        descricao: "O Esporte Clube Vitória, popularmente conhecido como Vitória, é um dos clubes de futebol mais tradicionais do Brasil, com sede na cidade de Salvador, na Bahia. Fundado em 1 de maio de 1899, o Leão, como é carinhosamente chamado, possui uma das maiores torcidas do Nordeste.", // Descrição resumida do clube, sua história e localização
        namestudion: "Estádio Manoel Barradas (Barradão)", // Nome oficial e popular do estádio
        capacidade: "30.618", // Capacidade máxima do estádio
        site: "https://ecvitoria.com.br/public/Inicio/", // Site oficial do clube
        instagram: "https://www.instagram.com/ecvitoria/", // Perfil oficial do clube no Instagram
        GE: "https://ge.globo.com/ba/futebol/times/vitoria/", // Página do clube no portal esportivo GE
        serieB: "Série B:", // Indica que o clube já disputou a Série B
        anoB: "2023", // Ano em que o clube disputou a Série B
        tags: "Vitória vitória Vitoria vitoria Leão leão Leao leao 01/04/1899"//tags para ajudar na busca do clube
      }]