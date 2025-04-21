import type { Simulado } from "./types"

// Dados de exemplo para os simulados
export const simuladosData: Simulado[] = [
  {
    id: "1",
    titulo: "Histórico e Evolução da Internet",
    descricao: "A internet surgiu inicialmente como um projeto",
    numQuestoes: 10,
    duracao: "45 minutos",
    duracaoEmSegundos: 2700,
    nivel: "Fácil",
    topicos: ["Historico", "Evolucao", "da", "Internet", "Porcentagem"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "A internet surgiu inicialmente como um projeto:",
        alternativas: [
          { id: "a", texto: "Comercial" },
          { id: "b", texto: "Educacional" },
          { id: "c", texto: "Militar" },
          { id: "d", texto: "Doméstico" },
        ],
        resposta: "b",
        explicacao:
          "Na matemática, a multiplicação tem precedência sobre a adição. Portanto, primeiro calculamos 4 × 2 = 8, e depois somamos 3, resultando em 11.",
      },
      {
        id: 2,
        enunciado: "O nome da primeira rede de computadores da história foi:",
        alternativas: [
          { id: "a", texto: "TCP/IP" },
          { id: "b", texto: "InternetNet" },
          { id: "c", texto: "WebBase" },
          { id: "d", texto: "ARPANET" },
        ],
        resposta: "d",
        explicacao:
          "Este é um triângulo retângulo (3-4-5). A área de um triângulo retângulo é metade do produto dos catetos: (3 × 4) ÷ 2 = 6 unidades quadradas.",
      },
      {
        id: 3,
        enunciado: "O primeiro protocolo usado na comunicação da ARPANET foi:",
        alternativas: [
          { id: "a", texto: "HTTP" },
          { id: "b", texto: "TCP/IP" },
          { id: "c", texto: "NCP" },
          { id: "d", texto: "DNS" },
        ],
        resposta: "c",
        explicacao:
          "Para resolver a equação 2x + 5 = 15, subtraímos 5 de ambos os lados: 2x = 10. Em seguida, dividimos ambos os lados por 2: x = 5.",
      },
      {
        id: 4,
        enunciado: "Em que ano surgiu a ARPANET?",
        alternativas: [
          { id: "a", texto: "1959" },
          { id: "b", texto: "1969" },
          { id: "c", texto: "1979" },
          { id: "d", texto: "1989" },
        ],
        resposta: "b",
        explicacao: "O valor de π (pi) é aproximadamente 3.14159... Arredondado para duas casas decimais, temos 3.14.",
      },
      {
        id: 5,
        enunciado: "Qual foi a primeira tentativa de palavra enviada pela ARPANET?",
        alternativas: [
          { id: "a", texto: "Hello" },
          { id: "b", texto: "Login" },
          { id: "c", texto: "Root" },
          { id: "d", texto: "Acess" },
        ],
        resposta: "b",
        explicacao:
          "O perímetro de um retângulo é calculado pela fórmula P = 2(comprimento + largura). Portanto, P = 2(8 + 6) = 2(14) = 28 cm.",
      },
      {
        id: 6,
        enunciado: "Qual país europeu foi o primeiro a se conectar à ARPANET após os EUA?",
        alternativas: [
          { id: "a", texto: "Alemanha" },
          { id: "b", texto: "França" },
          { id: "c", texto: "Noruega" },
          { id: "d", texto: "Inglaterra" },
        ],
        "resposta": "c",
        "explicacao": "Tim Berners-Lee criou a World Wide Web em 1989 enquanto trabalhava no CERN, propondo um sistema de hipertexto para compartilhar informações."
      },
      {
        id: 7,
        enunciado: "O protocolo TCP/IP surgiu a partir da junção de:",
        alternativas: [
          { id: "a", texto: "HTTP e DNS" },
          { id: "b", texto: "TCP e FTP" },
          { id: "c", texto: "TCP e IP" },
          { id: "d", texto: "IP e SSL" },
        ],
        "resposta": "c",
        "explicacao": "Tim Berners-Lee criou a World Wide Web em 1989 enquanto trabalhava no CERN, propondo um sistema de hipertexto para compartilhar informações."
      },
      {
        id: 8,
        enunciado: "Qual foi o investimento inicial para o projeto ARPANET?",
        alternativas: [
          { id: "a", texto: "US$ 10 milhões" },
          { id: "b", texto: "US$ 100 mil" },
          { id: "c", texto: "US$ 1 milhão" },
          { id: "d", texto: "US$ 50 mil" },
        ],
        "resposta": "c",
        "explicacao": "Tim Berners-Lee criou a World Wide Web em 1989 enquanto trabalhava no CERN, propondo um sistema de hipertexto para compartilhar informações."
      },
      {
        id: 9,
        enunciado: "No Brasil, a internet passou a ter uso comercial a partir de:",
        alternativas: [
          { id: "a", texto: "1990" },
          { id: "b", texto: "1991" },
          { id: "c", texto: "1995" },
          { id: "d", texto: "2000" },
        ],
        "resposta": "c",
        "explicacao": "Tim Berners-Lee criou a World Wide Web em 1989 enquanto trabalhava no CERN, propondo um sistema de hipertexto para compartilhar informações."
      },
      {
        id: 9,
        enunciado: "No Brasil, a internet passou a ter uso comercial a partir de:",
        alternativas: [
          { id: "a", texto: "NASA" },
          { id: "b", texto: "FBI" },
          { id: "c", texto: "CIA" },
          { id: "d", texto: "ARPA" },
        ],
        "resposta": "d",
        "explicacao": "Tim Berners-Lee criou a World Wide Web em 1989 enquanto trabalhava no CERN, propondo um sistema de hipertexto para compartilhar informações."
      },
    ],
  },
  {
    id: "2",
    titulo: "Por que temos Redes de Computadores?",
    descricao: "Questões sobre revisão para prova do João Ferlini",
    numQuestoes: 15,
    duracao: "30 minutos",
    duracaoEmSegundos: 1800,
    nivel: "Médio",
    topicos: ["Gramática", "Concordância", "Regência", "Ortografia", "Pontuação"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: "Qual é o modelo mais comum de funcionamento das redes de computadores?",
        alternativas: [
          { id: "a", texto: "Ponto-a-ponto." },
          { id: "b", texto: "Cliente/servidor." },
          { id: "c", texto: "Estrela." },
          { id: "d", texto: "Repetidor." },
        ],
        resposta: "c",
        explicacao:
          "A alternativa correta é 'Existem muitos problemas a serem resolvidos', pois o verbo 'existir' concorda com o sujeito 'muitos problemas'.",
      },
      {
        id: 2,
        enunciado: " O dispositivo que conecta redes diferentes e faz a ponte com a internet é o:",
        alternativas: [
          { id: "a", texto: "Hub" },
          { id: "b", texto: "Switch" },
          { id: "c", texto: "Modem" },
          { id: "d", texto: "Roteador" },
        ],
        resposta: "b",
        explicacao:
          "A grafia correta é: exceção (ato de excetuar), excesso (o que ultrapassa) e interseção (ponto comum).",
      },
      {
        id: 3,
        enunciado: "A função do NAT no roteador é:",
        alternativas: [
          { id: "a", texto: "Armazenar arquivos." },
          { id: "b", texto: "Converter IPs locais em IP público." },
          { id: "c", texto: "Atualizar a rede WI-FI." },
          { id: "d", texto: "Aumentar a largura de banda." },
        ],
        resposta: "b",
        explicacao:
          "A frase 'Assisti o filme ontem' apresenta erro de regência, pois o verbo 'assistir' no sentido de 'ver' exige a preposição 'a': 'Assisti ao filme ontem'.",
      },
      {
        id: 4,
        enunciado: "A frequência de 5 GHz no Wi-Fi oferece:",
        alternativas: [
          { id: "a", texto: "Mais alcance." },
          { id: "b", texto: "Mais interferência." },
          { id: "c", texto: "Menos velocidade." },
          { id: "d", texto: "Mais velocidade e menos interferência." },
        ],
        resposta: "a",
        explicacao:
          "Em 'Refiro-me à aluna que chegou atrasada', o uso da crase está correto, pois há a contração da preposição 'a' exigida pelo verbo 'referir-se' com o artigo 'a' que antecede o substantivo feminino 'aluna'.",
      },
      {
        id: 5,
        enunciado: "Qual protocolo o roteador usa para distribuir IPs automaticamente?",
        alternativas: [
          { id: "a", texto: "DNS" },
          { id: "b", texto: "TCP/IP" },
          { id: "c", texto: "DHCP" },
          { id: "d", texto: "FTP" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
      {
        id: 6,
        enunciado: "O hub envia dados para:",
        alternativas: [
          { id: "a", texto: "Apenas o destino correto" },
          { id: "b", texto: "Apenas o roteador" },
          { id: "c", texto: "Todos os dispositivos conectados" },
          { id: "d", texto: "Apenas redes externas" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
      {
        id: 7,
        enunciado: "O switch usa qual tipo de endereço para direcionar os dados?",
        alternativas: [
          { id: "a", texto: "IP" },
          { id: "b", texto: "MAC" },
          { id: "c", texto: "DNS" },
          { id: "d", texto: "URL" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
      {
        id: 8,
        enunciado: "O que é comunicação full-duplex?",
        alternativas: [
          { id: "a", texto: "Apenas envio de dados" },
          { id: "b", texto: "Envio e recebimento de dados simultaneamente" },
          { id: "c", texto: "Dados enviados em horários diferentes" },
          { id: "d", texto: "Comunicação entre switches" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
      {
        id: 9,
        enunciado: "Em uma rede com IPs 192.168.1.0/24 e 192.168.2.0/24, quem faz a ligação entre as redes?",
        alternativas: [
          { id: "a", texto: "Switch" },
          { id: "b", texto: "Hub" },
          { id: "c", texto: "Roteador" },
          { id: "d", texto: "Repetidor" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
      {
        id: 9,
        enunciado: "Para criar uma rede, é necessário:",
        alternativas: [
          { id: "a", texto: "Apenas um roteador" },
          { id: "b", texto: "Apenas um computador" },
          { id: "c", texto: "Dispositivos e equipamentos de comunicação nas pontas" },
          { id: "d", texto: "Internet via satélite" },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
    ],
  },
  {
    id: "3",
    titulo: "Topologias de Redes – Parte 1/2",
    descricao: "Refere-se à forma como os dispositivos (nodes) estão organizados e conectados numa rede.",
    numQuestoes: 5,
    duracao: "50 minutos",
    duracaoEmSegundos: 3000,
    nivel: "Médio",
    topicos: ["Período Colonial", "República", "Era Vargas", "Ditadura Militar"],
    tentativas: 1,
    mediaAcertos: 1,
    questoes: [
      {
        id: 1,
        enunciado: " Qual topologia conecta todos os dispositivos em formato circular, com fluxo unidirecional?",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Árvore" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "b",
        explicacao:
          "A Proclamação da República no Brasil ocorreu em 15 de novembro de 1889, quando um golpe militar liderado pelo Marechal Deodoro da Fonseca derrubou a monarquia e instaurou o regime republicano.",
      },
      {
        id: 2,
        enunciado: "Em qual topologia todos os dispositivos são conectados por um único cabo principal?",
        alternativas: [
          { id: "a", texto: "Malha" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Barramento" },
          { id: "d", texto: "Ponto a ponto" },
        ],
        resposta: "b",
        explicacao:
          "A Era Vargas compreende o período de 1930 a 1945, quando Getúlio Vargas governou o Brasil de forma contínua, primeiro como chefe do Governo Provisório, depois como presidente eleito pelo voto indireto e, por fim, como ditador durante o Estado Novo.",
      },
      {
        id: 3,
        enunciado: "A topologia com melhor confiabilidade e rotas alternativas é:",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Malha" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Anel" },
        ],
        resposta: "a",
        explicacao:
          "O período colonial brasileiro teve início com a chegada da esquadra de Pedro Álvares Cabral ao território que viria a ser o Brasil, em 22 de abril de 1500, marcando o começo da colonização portuguesa.",
      },
      {
        id: 4,
        enunciado: "A topologia mais usada no mercado por ser adaptável é:",
        alternativas: [
          { id: "a", texto: "Híbrida" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "c",
        explicacao:
          "D. Pedro II foi o segundo e último imperador do Brasil, governando de 1831 (efetivamente a partir de 1840, após o período regencial) até 1889, quando foi deposto pela Proclamação da República.",
      },
      {
        id: 5,
        enunciado: "Qual topologia depende de um único hub central e permite fácil diagnóstico de falhas?",
        alternativas: [
          { id: "a", texto: "Barramento" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
      {
        id: 6,
        enunciado: "Um problema comum nas topologias Estrela e Árvore é:",
        alternativas: [
          { id: "a", texto: "Alto custo de manutenção" },
          { id: "b", texto: "Dificuldade em adicionar novos dispositivos" },
          { id: "c", texto: "Falha no hub central afeta toda a rede" },
          { id: "d", texto: "Lentidão no tráfego por muitos cabos" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
      {
        id: 7,
        enunciado: " Qual das topologias não é recomendada para redes corporativas grandes?:",
        alternativas: [
          { id: "a", texto: "Ponto a ponto" },
          { id: "b", texto: "Estrela" },
          { id: "c", texto: "Árvore" },
          { id: "d", texto: "Híbrida" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
      {
        id: 8,
        enunciado: " Na topologia Barramento, se o cabo principal falhar:",
        alternativas: [
          { id: "a", texto: "A rede continua funcionando com rotas alternativas" },
          { id: "b", texto: "Nada acontece" },
          { id: "c", texto: "A rede para totalmente" },
          { id: "d", texto: "Os pacotes são redirecionados pelo hub" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
      {
        id: 9,
        enunciado: "A topologia que lembra galhos e tem hierarquia é a:",
        alternativas: [
          { id: "a", texto: "Estrela" },
          { id: "b", texto: "Árvore" },
          { id: "c", texto: "Anel" },
          { id: "d", texto: "Malha" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
      {
        id: 10,
        enunciado: "Uma das desvantagens da topologia Malha é:",
        alternativas: [
          { id: "a", texto: "Baixa velocidade" },
          { id: "b", texto: "Alta vulnerabilidade a falhas" },
          { id: "c", texto: "Complexidade e custo alto de instalação" },
          { id: "d", texto: "Uso exclusivo de Wi-Fi" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
    ],
  },
  {
    id: "4",
    titulo: "Tipos de Cabos de Rede",
    descricao: "Tipos de Cabos de Rede",
    numQuestoes: 5,
    duracao: "40 minutos",
    duracaoEmSegundos: 2400,
    nivel: "Difícil",
    topicos: ["Leis de Newton", "Cinemática", "Dinâmica", "Energia", "Trabalho"],
    tentativas: 543,
    mediaAcertos: 45,
    questoes: [
      {
        id: 1,
        enunciado: "Qual foi o primeiro tipo de cabo criado, ainda na década de 1930?",
        alternativas: [
          { id: "a", texto: "Fibra óptica." },
          {
            id: "b",
            texto:
              "Coaxial.",
          },
          { id: "c", texto: "Par trançado." },
          {
            id: "d",
            texto: "Wireless.",
          },
        ],
        resposta: "b",
        explicacao:
          "A Primeira Lei de Newton, também conhecida como Lei da Inércia, afirma que um corpo em repouso tende a permanecer em repouso e um corpo em movimento tende a permanecer em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.",
      },
      {
        id: 2,
        enunciado:
          "O cabo coaxial é mais comumente utilizado para:",
        alternativas: [
          { id: "a", texto: "Backbones de internet" },
          { id: "b", texto: "Redes de longa distância" },
          { id: "c", texto: "TV a cabo e áudio" },
          { id: "d", texto: "Servidores de data center" },
        ],
        resposta: "b",
        explicacao:
          "Para calcular a altura máxima, usamos a equação v² = v₀² - 2gh, onde v é a velocidade final (zero no ponto mais alto), v₀ é a velocidade inicial (20 m/s), g é a aceleração da gravidade (10 m/s²) e h é a altura. Substituindo: 0 = 400 - 20h, logo h = 20 metros.",
      },
      {
        id: 3,
        enunciado:
          "Um bloco de 2 kg está em repouso sobre uma superfície horizontal sem atrito. Qual força horizontal deve ser aplicada para que o bloco adquira uma aceleração de 3 m/s²?",
        alternativas: [
          { id: "a", texto: "1 N" },
          { id: "b", texto: "2 N" },
          { id: "c", texto: "6 N" },
          { id: "d", texto: "8 N" },
        ],
        resposta: "c",
        explicacao:
          "Pela Segunda Lei de Newton, F = m·a, onde F é a força, m é a massa e a é a aceleração. Substituindo os valores: F = 2 kg · 3 m/s² = 6 N.",
      },
      {
        id: 4,
        enunciado: "Uma desvantagem do cabo coaxial é:",
        alternativas: [
          { id: "a", texto: "Alta velocidade" },
          { id: "b", texto: "Suporte a múltiplos sinais simultâneos" },
          { id: "c", texto: "Limite de 10 Mbps e conexão com terminais especiais" },
          { id: "d", texto: "Compatibilidade com fibra óptica" },
        ],
        resposta: "a",
        explicacao:
          "Primeiro, calculamos a velocidade em km/h: v = 120 km / 2 h = 60 km/h. Para converter para m/s, multiplicamos por 1000 (para converter km para m) e dividimos por 3600 (para converter h para s): v = 60 · 1000 / 3600 = 16,7 m/s.",
      },
      {
        id: 5,
        enunciado:
          " O cabo de par trançado é identificado pelo uso de:",
        alternativas: [
          { id: "a", texto: "Fibra de vidro" },
          { id: "b", texto: "Conector RJ-45 e Ethernet" },
          { id: "c", texto: "Conector HDMI" },
          { id: "d", texto: "Fios coaxiais soldados" },
        ],
        resposta: "c",
        explicacao:
          "Quando um objeto de massa m está suspenso por uma corda em equilíbrio, a tensão na corda deve equilibrar o peso do objeto. O peso é dado por P = m·g, onde g é a aceleração da gravidade. Portanto, a tensão na corda é T = m·g.",
      },
      {
        id: 6,
        enunciado:
          " Qual tipo de cabo é o principal para redes locais (LAN) desde os anos 1990?",
        alternativas: [
          { id: "a", texto: "Fibra óptica" },
          { id: "b", texto: "Cabo coaxial" },
          { id: "c", texto: "Par trançado" },
          { id: "d", texto: "HDMI" },
        ],
        resposta: "c",
        explicacao:
          "Quando um objeto de massa m está suspenso por uma corda em equilíbrio, a tensão na corda deve equilibrar o peso do objeto. O peso é dado por P = m·g, onde g é a aceleração da gravidade. Portanto, a tensão na corda é T = m·g.",
      },
      {
        id: 6,
        enunciado: "A fibra óptica transmite dados por meio de:",
        alternativas: [
          { id: "a", texto: "Corrente elétrica" },
          { id: "b", texto: "Ondas de rádio" },
          { id: "c", texto: "Pulsos de luz" },
          { id: "d", texto: "Sinais analógicos" }
        ],
        resposta: "c",
        explicacao: "A fibra óptica transmite dados por meio de pulsos de luz, que são enviados através de um núcleo de vidro ou plástico, permitindo alta velocidade e eficiência na transmissão de dados.",
      },
      {
        id: 7,
        enunciado: "A Lei de Snell se refere a:",
        alternativas: [
          { id: "a", texto: "Compressão de dados" },
          { id: "b", texto: "Protocolo de rede" },
          { id: "c", texto: "Reflexão da luz dentro da fibra óptica" },
          { id: "d", texto: "Instalação de cabos submarinos" }
        ],
        resposta: "c",
        explicacao: "A Lei de Snell descreve a refração da luz e é fundamental para entender a reflexão total interna, que permite que a luz se propague dentro da fibra óptica sem perdas significativas."
      },
      {
        id: 8,
        enunciado: "Qual característica é típica da fibra óptica multimodo?",
        alternativas: [
          { id: "a", texto: "Núcleo de 9 µm" },
          { id: "b", texto: "Uso exclusivo de laser" },
          { id: "c", texto: "Ideal para longas distâncias" },
          { id: "d", texto: "Núcleo maior e maior dispersão modal" }
        ],
        resposta: "d",
        explicacao: "A fibra óptica multimodo possui um núcleo maior (geralmente 50 ou 62,5 µm), o que permite múltiplos modos de luz, mas resulta em maior dispersão modal, limitando sua eficiência em longas distâncias."
      },
      {
        id: 9,
        enunciado: "A fibra monomodo é ideal para:",
        alternativas: [
          { id: "a", texto: "Redes domésticas simples" },
          { id: "b", texto: "Curta distância entre computadores" },
          { id: "c", texto: "Conexões entre andares de um prédio" },
          { id: "d", texto: "Longas distâncias com cabos submarinos" }
        ],
        resposta: "d",
        explicacao: "A fibra monomodo, com um núcleo menor (cerca de 9 µm), permite a propagação de um único modo de luz, reduzindo a dispersão e sendo ideal para longas distâncias, como em cabos submarinos."
      },
      {
        id: 10,
        enunciado: "Uma desvantagem da fibra monomodo é:",
        alternativas: [
          { id: "A", texto: "Alta dispersão" },
          { id: "B", texto: "Baixa velocidade" },
          { id: "C", texto: "Alto custo de fabricação e instalação" },
          { id: "D", texto: "Uso limitado a pequenas redes" }
        ],
        resposta: "C",
        explicacao: "A fibra monomodo tem um custo de fabricação e instalação mais alto devido à precisão necessária no alinhamento e na fonte de luz (geralmente laser), embora seja mais eficiente para longas distâncias."
      }
    ],
  },
  {
    id: "5",
    titulo: "Topologias de Redes – Parte 2/2",
    descricao: "Questões sobre a prova",
    numQuestoes: 5,
    duracao: "45 minutos",
    duracaoEmSegundos: 2700,
    nivel: "Difícil",
    topicos: ["Hidrocarbonetos", "Funções Orgânicas", "Isomeria", "Reações Orgânicas", "Polímeros"],
    tentativas: 432,
    mediaAcertos: 42,
    questoes: [
      {
        id: 1,
        enunciado: "A topologia física se refere a:",
        alternativas: [
          { id: "A", texto: "Lógica da transmissão dos dados" },
          { id: "B", texto: "Frequência de onda" },
          { id: "C", texto: "Disposição física dos cabos e dispositivos" },
          { id: "D", texto: "Velocidade da internet" }
        ],
        resposta: "C",
        explicacao: "A topologia física se refere à disposição física dos cabos e dispositivos em uma rede, como a organização dos componentes de hardware."
      },
      {
        id: 2,
        enunciado: "A topologia lógica trata de:",
        alternativas: [
          { id: "A", texto: "O comprimento dos cabos" },
          { id: "B", texto: "A organização do tráfego de dados" },
          { id: "C", texto: "A distância entre dispositivos" },
          { id: "D", texto: "O número de portas do switch" }
        ],
        resposta: "B",
        explicacao: "A topologia lógica trata da organização do tráfego de dados, ou seja, a forma como os dados fluem na rede, independentemente da disposição física."
      },
      {
        id: 3,
        enunciado: "Um sinal é:",
        alternativas: [
          { id: "A", texto: "Um pacote de dados criptografado" },
          { id: "B", texto: "Uma conexão direta de rede" },
          { id: "C", texto: "Uma sequência de estados que codifica uma mensagem" },
          { id: "D", texto: "Uma luz de alerta do roteador" }
        ],
        resposta: "C",
        explicacao: "Um sinal é uma sequência de estados que codifica uma mensagem, como pulsos elétricos ou ondas, usados para transmitir informações em uma rede."
      },
      {
        id: 4,
        enunciado: "O ar é considerado um meio de transmissão porque:",
        alternativas: [
          { id: "A", texto: "Tem partículas visíveis" },
          { id: "B", texto: "Transmite sinais eletromagnéticos" },
          { id: "C", texto: "Pode ser pressurizado" },
          { id: "D", texto: "Pode ser substituído por cabos" }
        ],
        resposta: "B",
        explicacao: "O ar é considerado um meio de transmissão porque transmite sinais eletromagnéticos, como ondas de rádio ou Wi-Fi, permitindo a comunicação sem fio."
      },
      {
        id: 5,
        enunciado: "No modo Simplex, a transmissão de dados:",
        alternativas: [
          { id: "A", texto: "Vai e volta simultaneamente" },
          { id: "B", texto: "Acontece entre os dois lados" },
          { id: "C", texto: "Ocorre em uma única direção" },
          { id: "D", texto: "Requer um switch inteligente" }
        ],
        resposta: "C",
        explicacao: "No modo Simplex, a transmissão de dados ocorre em uma única direção, como em um sistema de rádio ou TV, onde apenas um lado envia e o outro recebe."
      },
      {
        id: 6,
        enunciado: "Um exemplo de comunicação Half Duplex é:",
        alternativas: [
          { id: "A", texto: "Televisão" },
          { id: "B", texto: "WhatsApp" },
          { id: "C", texto: "Celular" },
          { id: "D", texto: "Walkie Talkie" }
        ],
        resposta: "D",
        explicacao: "Um exemplo de comunicação Half Duplex é o Walkie Talkie, pois permite que apenas uma parte transmita por vez, enquanto a outra escuta, alternando entre envio e recebimento."
      },
      {
        id: 7,
        enunciado: "A transmissão Full Duplex permite:",
        alternativas: [
          { id: "A", texto: "Apenas o servidor enviar dados" },
          { id: "B", texto: "Envio e recebimento ao mesmo tempo" },
          { id: "C", texto: "Comunicação unidirecional" },
          { id: "D", texto: "Compartilhamento de arquivos físicos" }
        ],
        resposta: "B",
        explicacao: "A transmissão Full Duplex permite envio e recebimento ao mesmo tempo, como em chamadas telefônicas, onde ambas as partes podem falar e ouvir simultaneamente."
      },
      {
        id: 8,
        enunciado: "O vácuo não transmite som porque:",
        alternativas: [
          { id: "A", texto: "A luz bloqueia as ondas" },
          { id: "B", texto: "Não há um meio físico para propagar" },
          { id: "C", texto: "Os sinais são muito fracos" },
          { id: "D", texto: "O som é criptografado" }
        ],
        resposta: "B",
        explicacao: "O vácuo não transmite som porque não há um meio físico para propagar, já que o som precisa de um meio material, como ar, água ou sólidos, para se propagar."
      },
      {
        id: 9,
        enunciado: "Um exemplo claro de transmissão Simplex é:",
        alternativas: [
          { id: "A", texto: "Chamada de vídeo" },
          { id: "B", texto: "Rádio" },
          { id: "C", texto: "E-mail" },
          { id: "D", texto: "Rede Wi-Fi" }
        ],
        resposta: "B",
        explicacao: "Um exemplo claro de transmissão Simplex é o rádio, pois a comunicação ocorre em uma única direção, do transmissor para o receptor, sem interação de volta."
      },
      {
        id: 10,
        enunciado: "Em uma rede Full Duplex, a banda é:",
        alternativas: [
          { id: "A", texto: "Usada por apenas um dispositivo" },
          { id: "B", texto: "Dividida em partes iguais para cada sentido" },
          { id: "C", texto: "Transferida apenas de um lado" },
          { id: "D", texto: "Reduzida para metade da velocidade" }
        ],
        resposta: "B",
        explicacao: "Em uma rede Full Duplex, a banda é dividida em partes iguais para cada sentido, permitindo que a transmissão e recepção ocorram simultaneamente sem perda de desempenho."
      }
    ],
  },
  {
    id: "6",
    titulo: "Redes Sem Fio",
    descricao: "Questões sobre geografia física e política mundial",
    numQuestoes: 5,
    duracao: "35 minutos",
    duracaoEmSegundos: 2100,
    nivel: "Médio",
    topicos: ["Geopolítica", "Clima", "Relevo", "População", "Recursos Naturais"],
    tentativas: 678,
    mediaAcertos: 55,
    questoes: [
      {
        id: 1,
        enunciado: "Qual é a principal vantagem das redes sem fio?",
        alternativas: [
          { id: "A", texto: "Alta complexidade" },
          { id: "B", texto: "Redução da largura de banda" },
          { id: "C", texto: "Mobilidade e flexibilidade" },
          { id: "D", texto: "Uso exclusivo em áreas industriais" }
        ],
        resposta: "C",
        explicacao: "A principal vantagem das redes sem fio é a mobilidade e flexibilidade, permitindo que dispositivos se conectem sem a necessidade de cabos, facilitando o uso em diversos cenários."
      },
      {
        id: 2,
        enunciado: "O RFID é mais utilizado para:",
        alternativas: [
          { id: "A", texto: "Streaming de vídeo" },
          { id: "B", texto: "Comunicação por voz" },
          { id: "C", texto: "Identificação automática de objetos" },
          { id: "D", texto: "Transmissão de arquivos grandes" }
        ],
        resposta: "C",
        explicacao: "O RFID é mais utilizado para identificação automática de objetos, como em etiquetas de produtos, cartões de acesso ou rastreamento de mercadorias."
      },
      {
        id: 3,
        enunciado: "O NFC possui alcance de:",
        alternativas: [
          { id: "A", texto: "1 a 5 metros" },
          { id: "B", texto: "4 a 10 centímetros" },
          { id: "C", texto: "1 quilômetro" },
          { id: "D", texto: "10 a 20 metros" }
        ],
        resposta: "B",
        explicacao: "O NFC possui alcance de 4 a 10 centímetros, sendo ideal para comunicações de curta distância, como pagamentos por aproximação."
      },
      {
        id: 4,
        enunciado: "A frequência padrão utilizada pelo NFC é:",
        alternativas: [
          { id: "A", texto: "2,4 GHz" },
          { id: "B", texto: "5 GHz" },
          { id: "C", texto: "13,56 MHz" },
          { id: "D", texto: "640 kbps" }
        ],
        resposta: "C",
        explicacao: "A frequência padrão utilizada pelo NFC é 13,56 MHz, adequada para comunicações de curto alcance e baixa potência."
      },
      {
        id: 5,
        enunciado: "O Bluetooth é comumente utilizado para:",
        alternativas: [
          { id: "A", texto: "Comunicação entre servidores de rede" },
          { id: "B", texto: "Conexão de dispositivos pessoais próximos" },
          { id: "C", texto: "Controle de drones a distância" },
          { id: "D", texto: "Instalação de câmeras industriais" }
        ],
        resposta: "B",
        explicacao: "O Bluetooth é comumente utilizado para conexão de dispositivos pessoais próximos, como fones de ouvido, teclados e smartphones, devido à sua praticidade em curtas distâncias."
      },
      {
        id: 6,
        enunciado: "O ZigBee se destaca por:",
        alternativas: [
          { id: "A", texto: "Ser de longo alcance" },
          { id: "B", texto: "Ser usado em equipamentos de som" },
          { id: "C", texto: "Alta potência e curto tempo de vida" },
          { id: "D", texto: "Baixo consumo de energia e uso em IoT" }
        ],
        resposta: "D",
        explicacao: "O ZigBee se destaca por seu baixo consumo de energia e uso em IoT, sendo ideal para dispositivos como sensores e controles inteligentes que precisam operar por longos períodos com eficiência energética."
      },
      {
        id: 7,
        enunciado: "As duas faixas de frequência do Wi-Fi padrão são:",
        alternativas: [
          { id: "A", texto: "1,2 GHz e 4,5 GHz" },
          { id: "B", texto: "13,56 MHz e 900 MHz" },
          { id: "C", texto: "2,4 GHz e 5 GHz" },
          { id: "D", texto: "3 GHz e 7 GHz" }
        ],
        resposta: "C",
        explicacao: "As duas faixas de frequência do Wi-Fi padrão são 2,4 GHz e 5 GHz, amplamente utilizadas para oferecer diferentes alcances e velocidades em redes sem fio."
      },
      {
        id: 8,
        enunciado: "Qual padrão define os protocolos do Wi-Fi?",
        alternativas: [
          { id: "A", texto: "IEEE 1394" },
          { id: "B", texto: "IEEE 802.11" },
          { id: "C", texto: "IEEE 1000Base-T" },
          { id: "D", texto: "IEEE 802.3" }
        ],
        resposta: "B",
        explicacao: "O padrão que define os protocolos do Wi-Fi é o IEEE 802.11, que estabelece as normas para redes sem fio, incluindo diferentes versões como 802.11a, 802.11b, 802.11g, entre outras."
      }
    ],
  },
]

// Função para obter um simulado pelo ID
export const getSimuladoById = (id: string): Simulado | undefined => {
  return simuladosData.find((simulado) => simulado.id === id)
}
