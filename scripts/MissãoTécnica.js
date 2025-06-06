let inventarioAlpha = [
  ["Cristal Rubion", "Plutão", 4500],
  ["Cápsula de Éter", "Júpiter", 7800],
  ["Nanofibra Luminosa", "Saturno", 12000],
  ["Minério Dourado", "Marte", 8500],
  ["Flor de Andrômeda", "Andrômeda", 13000],
  ["Ampulheta Galáctica", "Vênus", 2200],
  ["Fóssil Estelar", "Lua", 9000],
  ["Orbe do Caos", "Netuno", 9100],
  ["Lente do Vazio", "Buraco Negro X-1", 14300],
  ["Chave de Fóton", "Sol", 2300],
  ["Esfera Sombria", "Nêmesis", 13400],
  ["Granada de Íons", "Marte", 4100],
  ["Tecido Estelar", "Urano", 5300],
  ["Engrenagem Sombria", "Plutão", 6600],
  ["Fragmento Prismático", "Kepler-22b", 6400],
  ["Núcleo de Plasma", "Kepler-452b", 9100],
  ["Anel de Chronos", "Terra", 4900],
  ["Bateria Quântica", "Terra", 4000],
  ["Areia do Tempo", "Terra", 3100],
  ["Escudo de Luz", "Vênus", 4700],
  ["Catalisador Estelar", "Sirius", 12500],
  ["Pó de Cometa", "Netuno", 3000],
  ["Relógio Quântico", "Terra", 5000],
  ["Vórtice Gravitacional", "Saturno", 8800],
  ["Cristal Ômega", "Andrômeda", 13900],
  ["Cristal Ômega", "Andrômeda", 13900],
];
console.table(inventarioAlpha);

let inventarioBeta = [
  ["Lâmina Solar", "Mercúrio", 6700],
  ["Cometa Engarrafado", "Netuno", 7600],
  ["Relíquia de Zordon", "Elysium", 25000],
  ["Pó Lunar", "Lua", 2900],
  ["Nevoeiro Encapsulado", "Júpiter", 3800],
  ["Chip de Matéria", "Ceres", 4100],
  ["Chave de Portais", "Júpiter", 5900],
  ["Globo de Plasma", "Terra", 7200],
  ["Mapa Estelar", "Vênus", 2100],
  ["Pedra Temporal", "Lua", 7800],
  ["Lanterna Estelar", "Sol", 3200],
  ["Fragmento de Eclipse", "Eclipse E-9", 8300],
  ["Ponte de Gelo", "Hoth", 3900],
  ["Fluido de Saturno", "Saturno", 4400],
  ["Fenda de Tempo", "Marte", 8700],
  ["Condutor Fotônico", "Sol", 3600],
  ["Memória Galáctica", "Terra", 5500],
  ["Livro de Nebulosa", "Andrômeda", 9200],
  ["Túnel Quântico", "Netuno", 4100],
  ["Canhão de Luz", "Vênus", 6800],
  ["Orbe Incandescente", "Sol", 9300],
  ["Matriz de Propulsão", "Vênus", 4500],
  ["Partícula Livre", "Urano", 5400],
  ["Capa de Invisibilidade", "Terra", 3900],
  ["Terminal de Dobra", "Alpha Centauri", 10500],
];
console.table(inventarioBeta);

// Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.

let ultimoItemAlpha = inventarioAlpha.pop();
console.table(inventarioAlpha);

// Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let ultimoItemDaListaBeta = inventarioBeta.pop();

console.table(inventarioBeta);

// Três novos artefatos da Terra foram entregues à nave Alpha. Adicione-os ao final.

inventarioAlpha.push(
  ["Pulseira do Infinito", "Terra", 7600],
  ["Códice Celestial", "Terra", 11900],
  ["Cálice da Aurora", "Terra", 5600]
);

console.table(inventarioAlpha);

// Dois artefatos especiais de Kepler foram coletados e adicionados à nave Beta.
inventarioBeta.push(
  ["Telescopio Ultra Visão Noturna", "Kepler-920b", 12900],
  ["Oculos de Uranio", "Kepler-672-b", 3200]
);

console.table(inventarioBeta);

//Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let idx = inventarioAlpha.findIndex((item) => item[0] === "Cristal Ômega");
if (idx > -1) {
  let destacado = inventarioAlpha.splice(idx, 1)[0];
  inventarioAlpha.unshift(destacado);
}

console.table(inventarioAlpha);

// Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

let idxx = inventarioBeta.findIndex(
  (item) => item[0] === "Capa de Invisibilidade"
);

if (idxx > -1) {
  let [destacar] = inventarioBeta.splice(idxx, 1);

  inventarioBeta.unshift(destacar);
}

console.table(inventarioBeta);

let primeiroRemovidoAlpha = inventarioAlpha.shift();
console.table(inventarioAlpha);

// O primeiro item da Beta pertence a um museu e deve ser removido.
let primeiroItemRemoveBeta = inventarioBeta.shift();
console.table(inventarioBeta);

// Verifique se a “Relíquia de Zordon” está presente no inventário Beta.
const nomesItens = inventarioBeta.map((item) => item[0]);
const reliquiaExiste = nomesItens.includes("Relíquia de Zordon");
console.log(reliquiaExiste);

// Verifique se o item “Nanofibra Luminosa” ainda está disponível na Alpha.
const nomeItens = inventarioAlpha.map((item) => item[0]);
const reliquiaExistente = nomeItens.includes("Nanofibra Luminosa");
console.log(reliquiaExistente);
// Gere uma string com todos os planetas do inventário Alpha, separados por um delimitador.
let string = ", ";

let planetas = inventarioAlpha.map((item) => item[1]).join(string);

console.log(planetas);

//Crie um texto com os nomes dos 10 primeiros itens da Beta, separados por vírgulas.
let nomes = inventarioBeta
  .slice(0, 10)
  .map((item) => item[0])
  .join(", ");

console.log(nomes);

//Gere uma nova lista com os 5 primeiros itens da nave Beta para inspeção.
let novoBeta = inventarioBeta.splice(0, 5);
console.log(novoBeta);

//Separe os 10 últimos itens do inventário Alpha para estudo temporal.
let separando = inventarioAlpha.splice(-10);
console.log(separando);

//O quinto item da Alpha foi substituído por uma versão mais moderna. Atualize.
let itemAtualizado = inventarioAlpha.splice(4, 1, [
  "Torreta Laser",
  "Mercurio",
  23540,
]);
console.table(inventarioAlpha);

//Dois itens no meio do inventário Beta foram contaminados e precisam ser removidos.
let itensContaminados = inventarioBeta.splice(13, 2);
console.table(inventarioBeta);

//Unifique os inventários Alpha e Beta em uma única estrutura.
console.log(
  `Os Inventarios combinados: ${inventarioAlpha.concat(inventarioBeta)}`
);
console.log(
  `Os Iventarios Combinados: ${inventarioAlpha
    .concat(inventarioBeta)
    .join(", ")}`
);

// Junte os cinco primeiros itens de cada nave em uma nova vitrine de destaques.
let vitrineEmDestaques = [
  ...inventarioAlpha.slice(0, 5),
  ...inventarioBeta.slice(0, 5),
];

console.log(vitrineEmDestaques);

//Crie uma versão com os nomes de todos os itens da Beta em letras maiúsculas.
const betaMaiusculo = inventarioBeta.map((item) => [
  item[0].toUpperCase(),
  item[1],
  item[2],
]);
console.log(betaMaiusculo);
//Converta os valores de todos os itens da Alpha para uma moeda interestelar (multiplicação).

let fatorConversao = 6;

let inventarioAlphaInterestelar = inventarioAlpha.map((item) => [
  item[0],
  item[1],
  item[2] * fatorConversao,
]);

console.log(inventarioAlphaInterestelar);

//Filtre da Beta apenas os itens que custam mais de 7000 créditos.

let maioresDe7000 = inventarioBeta.filter((item) => item[2] > 7000);

console.log(maioresDe7000);

//Filtre da Alpha todos os itens originários da Terra para despacho diplomático.
let itensTerra = inventarioAlpha.filter((item) => item[2] = "terra")
console.log(itensTerra);

//Reorganize os itens da Beta do menor para o maior valor.
inventarioBeta.sort((a, b) => a[2] - b[2]);

console.log(inventarioBeta);

//Reorganize a lista da Alpha em ordem alfabética dos nomes dos artefatos.
inventarioAlpha.sort()
console.log(inventarioAlpha);

//Inverta a ordem de todos os itens da Beta para visualização reversa.
