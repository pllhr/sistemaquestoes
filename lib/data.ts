import type { Simulado } from "./types"

// Dados de exemplo para os simulados
export const simuladosData: Simulado[] = [
  {
    id: "1",
    titulo: "Matemática Básica",
    descricao: "Questões sobre aritmética, álgebra e geometria básica",
    numQuestoes: 5,
    duracao: "45 minutos",
    duracaoEmSegundos: 2700,
    nivel: "Fácil",
    topicos: ["Aritmética", "Álgebra", "Geometria", "Frações", "Porcentagem"],
    tentativas: 1243,
    mediaAcertos: 68,
    questoes: [
      {
        id: 1,
        enunciado: "Qual é o resultado da expressão 3 + 4 × 2?",
        alternativas: [
          { id: "a", texto: "14" },
          { id: "b", texto: "11" },
          { id: "c", texto: "10" },
          { id: "d", texto: "7" },
        ],
        resposta: "b",
        explicacao:
          "Na matemática, a multiplicação tem precedência sobre a adição. Portanto, primeiro calculamos 4 × 2 = 8, e depois somamos 3, resultando em 11.",
      },
      {
        id: 2,
        enunciado: "Se um triângulo tem lados de comprimento 3, 4 e 5 unidades, qual é a sua área?",
        alternativas: [
          { id: "a", texto: "6 unidades quadradas" },
          { id: "b", texto: "7.5 unidades quadradas" },
          { id: "c", texto: "10 unidades quadradas" },
          { id: "d", texto: "12 unidades quadradas" },
        ],
        resposta: "a",
        explicacao:
          "Este é um triângulo retângulo (3-4-5). A área de um triângulo retângulo é metade do produto dos catetos: (3 × 4) ÷ 2 = 6 unidades quadradas.",
      },
      {
        id: 3,
        enunciado: "Qual é o valor de x na equação 2x + 5 = 15?",
        alternativas: [
          { id: "a", texto: "5" },
          { id: "b", texto: "7" },
          { id: "c", texto: "8" },
          { id: "d", texto: "10" },
        ],
        resposta: "a",
        explicacao:
          "Para resolver a equação 2x + 5 = 15, subtraímos 5 de ambos os lados: 2x = 10. Em seguida, dividimos ambos os lados por 2: x = 5.",
      },
      {
        id: 4,
        enunciado: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
        alternativas: [
          { id: "a", texto: "3.12" },
          { id: "b", texto: "3.14" },
          { id: "c", texto: "3.16" },
          { id: "d", texto: "3.18" },
        ],
        resposta: "b",
        explicacao: "O valor de π (pi) é aproximadamente 3.14159... Arredondado para duas casas decimais, temos 3.14.",
      },
      {
        id: 5,
        enunciado: "Se um retângulo tem comprimento 8 cm e largura 6 cm, qual é o seu perímetro?",
        alternativas: [
          { id: "a", texto: "14 cm" },
          { id: "b", texto: "24 cm" },
          { id: "c", texto: "28 cm" },
          { id: "d", texto: "48 cm" },
        ],
        resposta: "c",
        explicacao:
          "O perímetro de um retângulo é calculado pela fórmula P = 2(comprimento + largura). Portanto, P = 2(8 + 6) = 2(14) = 28 cm.",
      },
    ],
  },
  {
    id: "2",
    titulo: "Português - Gramática",
    descricao: "Questões sobre regras gramaticais, concordância e regência",
    numQuestoes: 5,
    duracao: "30 minutos",
    duracaoEmSegundos: 1800,
    nivel: "Médio",
    topicos: ["Gramática", "Concordância", "Regência", "Ortografia", "Pontuação"],
    tentativas: 987,
    mediaAcertos: 62,
    questoes: [
      {
        id: 1,
        enunciado: "Qual das alternativas apresenta um exemplo de concordância verbal correta?",
        alternativas: [
          { id: "a", texto: "Haviam muitas pessoas na festa." },
          { id: "b", texto: "Fazem cinco anos que não o vejo." },
          { id: "c", texto: "Existem muitos problemas a serem resolvidos." },
          { id: "d", texto: "Devem haver soluções para este caso." },
        ],
        resposta: "c",
        explicacao:
          "A alternativa correta é 'Existem muitos problemas a serem resolvidos', pois o verbo 'existir' concorda com o sujeito 'muitos problemas'.",
      },
      {
        id: 2,
        enunciado: "Assinale a alternativa em que todas as palavras estão grafadas corretamente:",
        alternativas: [
          { id: "a", texto: "exceção, excessão, interseção" },
          { id: "b", texto: "exceção, excesso, interseção" },
          { id: "c", texto: "excessão, excesso, intercessão" },
          { id: "d", texto: "exceção, excesso, intercessão" },
        ],
        resposta: "b",
        explicacao:
          "A grafia correta é: exceção (ato de excetuar), excesso (o que ultrapassa) e interseção (ponto comum).",
      },
      {
        id: 3,
        enunciado: "Qual das frases apresenta erro de regência verbal?",
        alternativas: [
          { id: "a", texto: "Prefiro estudar a trabalhar." },
          { id: "b", texto: "Assisti o filme ontem." },
          { id: "c", texto: "Ela obedeceu ao regulamento." },
          { id: "d", texto: "Respondeu à pergunta com precisão." },
        ],
        resposta: "b",
        explicacao:
          "A frase 'Assisti o filme ontem' apresenta erro de regência, pois o verbo 'assistir' no sentido de 'ver' exige a preposição 'a': 'Assisti ao filme ontem'.",
      },
      {
        id: 4,
        enunciado: "Identifique a frase que apresenta uso correto da crase:",
        alternativas: [
          { id: "a", texto: "Refiro-me à aluna que chegou atrasada." },
          { id: "b", texto: "Ele foi à Roma antiga." },
          { id: "c", texto: "Falei à todas as pessoas presentes." },
          { id: "d", texto: "Estou disposto à colaborar." },
        ],
        resposta: "a",
        explicacao:
          "Em 'Refiro-me à aluna que chegou atrasada', o uso da crase está correto, pois há a contração da preposição 'a' exigida pelo verbo 'referir-se' com o artigo 'a' que antecede o substantivo feminino 'aluna'.",
      },
      {
        id: 5,
        enunciado: "Qual alternativa apresenta pontuação correta?",
        alternativas: [
          { id: "a", texto: "O professor, que é muito exigente deu uma prova difícil." },
          { id: "b", texto: "O professor que é muito exigente, deu uma prova difícil." },
          { id: "c", texto: "O professor que é muito exigente deu uma prova difícil." },
          { id: "d", texto: "O professor, que é muito exigente, deu uma prova difícil." },
        ],
        resposta: "d",
        explicacao:
          "A alternativa correta é 'O professor, que é muito exigente, deu uma prova difícil', pois a oração adjetiva explicativa deve ser separada por vírgulas.",
      },
    ],
  },
  {
    id: "3",
    titulo: "História do Brasil",
    descricao: "Questões sobre os principais eventos históricos do Brasil",
    numQuestoes: 5,
    duracao: "50 minutos",
    duracaoEmSegundos: 3000,
    nivel: "Médio",
    topicos: ["Período Colonial", "Império", "República", "Era Vargas", "Ditadura Militar"],
    tentativas: 756,
    mediaAcertos: 58,
    questoes: [
      {
        id: 1,
        enunciado: "Em que ano ocorreu a Proclamação da República no Brasil?",
        alternativas: [
          { id: "a", texto: "1822" },
          { id: "b", texto: "1889" },
          { id: "c", texto: "1888" },
          { id: "d", texto: "1891" },
        ],
        resposta: "b",
        explicacao:
          "A Proclamação da República no Brasil ocorreu em 15 de novembro de 1889, quando um golpe militar liderado pelo Marechal Deodoro da Fonseca derrubou a monarquia e instaurou o regime republicano.",
      },
      {
        id: 2,
        enunciado: "Qual foi o período conhecido como 'Era Vargas' na história do Brasil?",
        alternativas: [
          { id: "a", texto: "1922-1945" },
          { id: "b", texto: "1930-1945" },
          { id: "c", texto: "1937-1954" },
          { id: "d", texto: "1945-1964" },
        ],
        resposta: "b",
        explicacao:
          "A Era Vargas compreende o período de 1930 a 1945, quando Getúlio Vargas governou o Brasil de forma contínua, primeiro como chefe do Governo Provisório, depois como presidente eleito pelo voto indireto e, por fim, como ditador durante o Estado Novo.",
      },
      {
        id: 3,
        enunciado: "Qual evento marcou o início do período colonial brasileiro?",
        alternativas: [
          { id: "a", texto: "A chegada de Pedro Álvares Cabral em 1500" },
          { id: "b", texto: "A instalação do primeiro Governo-Geral em 1549" },
          { id: "c", texto: "O início da exploração do pau-brasil" },
          { id: "d", texto: "A fundação da cidade de Salvador" },
        ],
        resposta: "a",
        explicacao:
          "O período colonial brasileiro teve início com a chegada da esquadra de Pedro Álvares Cabral ao território que viria a ser o Brasil, em 22 de abril de 1500, marcando o começo da colonização portuguesa.",
      },
      {
        id: 4,
        enunciado: "Qual foi o último imperador do Brasil?",
        alternativas: [
          { id: "a", texto: "D. João VI" },
          { id: "b", texto: "D. Pedro I" },
          { id: "c", texto: "D. Pedro II" },
          { id: "d", texto: "D. Maria I" },
        ],
        resposta: "c",
        explicacao:
          "D. Pedro II foi o segundo e último imperador do Brasil, governando de 1831 (efetivamente a partir de 1840, após o período regencial) até 1889, quando foi deposto pela Proclamação da República.",
      },
      {
        id: 5,
        enunciado: "Em que ano foi promulgada a Lei Áurea, que aboliu oficialmente a escravidão no Brasil?",
        alternativas: [
          { id: "a", texto: "1822" },
          { id: "b", texto: "1850" },
          { id: "c", texto: "1888" },
          { id: "d", texto: "1889" },
        ],
        resposta: "c",
        explicacao:
          "A Lei Áurea foi promulgada em 13 de maio de 1888 pela Princesa Isabel, que atuava como regente do Império na ausência de seu pai, D. Pedro II. Esta lei aboliu oficialmente a escravidão no Brasil.",
      },
    ],
  },
  {
    id: "4",
    titulo: "Física - Mecânica",
    descricao: "Questões sobre leis de Newton, cinemática e dinâmica",
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
        enunciado: "Qual das seguintes afirmações representa corretamente a Primeira Lei de Newton?",
        alternativas: [
          { id: "a", texto: "A força resultante sobre um corpo é igual ao produto de sua massa pela aceleração." },
          {
            id: "b",
            texto:
              "Um corpo em repouso tende a permanecer em repouso e um corpo em movimento tende a permanecer em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.",
          },
          { id: "c", texto: "Para toda ação há sempre uma reação igual e oposta." },
          {
            id: "d",
            texto: "A aceleração de um corpo é diretamente proporcional à força resultante que atua sobre ele.",
          },
        ],
        resposta: "b",
        explicacao:
          "A Primeira Lei de Newton, também conhecida como Lei da Inércia, afirma que um corpo em repouso tende a permanecer em repouso e um corpo em movimento tende a permanecer em movimento retilíneo uniforme, a menos que uma força resultante atue sobre ele.",
      },
      {
        id: 2,
        enunciado:
          "Um objeto é lançado verticalmente para cima com uma velocidade inicial de 20 m/s. Considerando a aceleração da gravidade como 10 m/s², qual será a altura máxima atingida pelo objeto?",
        alternativas: [
          { id: "a", texto: "10 metros" },
          { id: "b", texto: "20 metros" },
          { id: "c", texto: "30 metros" },
          { id: "d", texto: "40 metros" },
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
        enunciado: "Um carro percorre 120 km em 2 horas com velocidade constante. Qual é a velocidade do carro em m/s?",
        alternativas: [
          { id: "a", texto: "16,7 m/s" },
          { id: "b", texto: "33,3 m/s" },
          { id: "c", texto: "60 m/s" },
          { id: "d", texto: "120 m/s" },
        ],
        resposta: "a",
        explicacao:
          "Primeiro, calculamos a velocidade em km/h: v = 120 km / 2 h = 60 km/h. Para converter para m/s, multiplicamos por 1000 (para converter km para m) e dividimos por 3600 (para converter h para s): v = 60 · 1000 / 3600 = 16,7 m/s.",
      },
      {
        id: 5,
        enunciado:
          "Um objeto de massa m está suspenso por uma corda. Qual é a tensão na corda se o objeto está em equilíbrio?",
        alternativas: [
          { id: "a", texto: "Zero" },
          { id: "b", texto: "m/g" },
          { id: "c", texto: "m·g" },
          { id: "d", texto: "2·m·g" },
        ],
        resposta: "c",
        explicacao:
          "Quando um objeto de massa m está suspenso por uma corda em equilíbrio, a tensão na corda deve equilibrar o peso do objeto. O peso é dado por P = m·g, onde g é a aceleração da gravidade. Portanto, a tensão na corda é T = m·g.",
      },
    ],
  },
  {
    id: "5",
    titulo: "Química Orgânica",
    descricao: "Questões sobre compostos orgânicos e suas propriedades",
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
        enunciado: "Qual das seguintes moléculas é um alcano?",
        alternativas: [
          { id: "a", texto: "C₂H₄" },
          { id: "b", texto: "C₃H₈" },
          { id: "c", texto: "C₂H₂" },
          { id: "d", texto: "C₆H₆" },
        ],
        resposta: "b",
        explicacao:
          "Os alcanos são hidrocarbonetos saturados com fórmula geral CnH2n+2. A molécula C₃H₈ (propano) segue esta fórmula: 3 átomos de carbono requerem 2×3+2 = 8 átomos de hidrogênio, portanto é um alcano.",
      },
      {
        id: 2,
        enunciado: "Qual é o nome do composto CH₃-CH₂-OH segundo a nomenclatura IUPAC?",
        alternativas: [
          { id: "a", texto: "Metanol" },
          { id: "b", texto: "Etanol" },
          { id: "c", texto: "Propanol" },
          { id: "d", texto: "Ácido etanoico" },
        ],
        resposta: "b",
        explicacao:
          "O composto CH₃-CH₂-OH é o etanol, um álcool com dois átomos de carbono. Na nomenclatura IUPAC, os álcoois são nomeados substituindo o sufixo 'o' do alcano correspondente por 'ol'. Como o alcano de dois carbonos é o etano, o álcool correspondente é o etanol.",
      },
      {
        id: 3,
        enunciado: "Qual das seguintes afirmações sobre isomeria é correta?",
        alternativas: [
          { id: "a", texto: "Isômeros são compostos com a mesma fórmula molecular e estrutural." },
          { id: "b", texto: "Isômeros são compostos com diferentes fórmulas moleculares, mas mesma estrutura." },
          { id: "c", texto: "Isômeros são compostos com a mesma fórmula molecular, mas diferentes estruturas." },
          { id: "d", texto: "Isômeros são compostos com diferentes fórmulas moleculares e diferentes estruturas." },
        ],
        resposta: "c",
        explicacao:
          "Isômeros são compostos que possuem a mesma fórmula molecular (mesma quantidade de átomos de cada elemento), mas diferentes estruturas (arranjos diferentes desses átomos), o que lhes confere propriedades físicas e químicas distintas.",
      },
      {
        id: 4,
        enunciado: "Qual é o produto principal da reação de adição de HBr ao propeno (CH₃-CH=CH₂)?",
        alternativas: [
          { id: "a", texto: "1-bromopropano (CH₃-CH₂-CH₂-Br)" },
          { id: "b", texto: "2-bromopropano (CH₃-CHBr-CH₃)" },
          { id: "c", texto: "Brometo de propila (CH₃-CH₂-CH₂-Br)" },
          { id: "d", texto: "Brometo de isopropila (CH₃-CHBr-CH₃)" },
        ],
        resposta: "b",
        explicacao:
          "Na reação de adição de HBr ao propeno, o produto principal é determinado pela regra de Markovnikov, que estabelece que o hidrogênio se adiciona ao carbono da dupla ligação que já possui mais hidrogênios. No propeno, o carbono 1 tem dois hidrogênios e o carbono 2 tem um hidrogênio, então o H do HBr se adiciona ao carbono 1 e o Br ao carbono 2, formando 2-bromopropano (CH₃-CHBr-CH₃).",
      },
      {
        id: 5,
        enunciado: "Qual das seguintes substâncias é um polímero de adição?",
        alternativas: [
          { id: "a", texto: "Nylon" },
          { id: "b", texto: "Poliéster" },
          { id: "c", texto: "Polietileno" },
          { id: "d", texto: "Proteína" },
        ],
        resposta: "c",
        explicacao:
          "O polietileno é um polímero de adição formado pela polimerização do etileno (CH₂=CH₂). Nos polímeros de adição, os monômeros se unem diretamente, sem a eliminação de moléculas pequenas como água. Nylon e poliéster são polímeros de condensação, e proteínas são biopolímeros formados por aminoácidos.",
      },
    ],
  },
  {
    id: "6",
    titulo: "Geografia Mundial",
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
        enunciado: "Qual é o país mais populoso do mundo?",
        alternativas: [
          { id: "a", texto: "Índia" },
          { id: "b", texto: "China" },
          { id: "c", texto: "Estados Unidos" },
          { id: "d", texto: "Indonésia" },
        ],
        resposta: "a",
        explicacao:
          "A Índia ultrapassou a China como o país mais populoso do mundo em 2023, com uma população estimada em mais de 1,4 bilhão de habitantes.",
      },
      {
        id: 2,
        enunciado: "Qual é o maior deserto do mundo?",
        alternativas: [
          { id: "a", texto: "Deserto do Saara" },
          { id: "b", texto: "Deserto da Arábia" },
          { id: "c", texto: "Deserto de Gobi" },
          { id: "d", texto: "Deserto da Antártida" },
        ],
        resposta: "d",
        explicacao:
          "O maior deserto do mundo é o Deserto da Antártida, que cobre quase todo o continente antártico. Embora seja coberto de gelo, é classificado como deserto devido à baixíssima precipitação anual. O Saara é o maior deserto quente do mundo.",
      },
      {
        id: 3,
        enunciado: "Qual dos seguintes países NÃO faz parte da União Europeia?",
        alternativas: [
          { id: "a", texto: "Suécia" },
          { id: "b", texto: "Finlândia" },
          { id: "c", texto: "Noruega" },
          { id: "d", texto: "Dinamarca" },
        ],
        resposta: "c",
        explicacao:
          "A Noruega não é membro da União Europeia. Embora mantenha estreitas relações econômicas com a UE através do Espaço Econômico Europeu, o país optou por não aderir à União Europeia em referendos realizados em 1972 e 1994.",
      },
      {
        id: 4,
        enunciado: "Qual é o rio mais longo do mundo?",
        alternativas: [
          { id: "a", texto: "Rio Amazonas" },
          { id: "b", texto: "Rio Nilo" },
          { id: "c", texto: "Rio Yangtzé" },
          { id: "d", texto: "Rio Mississipi" },
        ],
        resposta: "a",
        explicacao:
          "O Rio Amazonas é considerado o rio mais longo do mundo, com aproximadamente 6.992 km de extensão, superando o Rio Nilo por uma pequena margem, segundo estudos recentes. Além disso, o Amazonas é o rio com maior volume de água do mundo.",
      },
      {
        id: 5,
        enunciado: "Qual dos seguintes países é o maior produtor de petróleo do mundo?",
        alternativas: [
          { id: "a", texto: "Arábia Saudita" },
          { id: "b", texto: "Rússia" },
          { id: "c", texto: "Estados Unidos" },
          { id: "d", texto: "Irã" },
        ],
        resposta: "c",
        explicacao:
          "Os Estados Unidos são atualmente o maior produtor de petróleo do mundo, tendo ultrapassado a Arábia Saudita e a Rússia nos últimos anos, principalmente devido ao aumento da produção de petróleo de xisto.",
      },
    ],
  },
]

// Função para obter um simulado pelo ID
export const getSimuladoById = (id: string): Simulado | undefined => {
  return simuladosData.find((simulado) => simulado.id === id)
}
