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
console.log(inventarioAlpha);

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
console.log(inventarioBeta);

// Um item duplicado foi detectado no final do inventário Alpha. Remova a cópia.

let ultimoItemAlpha = inventarioAlpha.pop();
console.log(inventarioAlpha);

// Um artefato obsoleto foi removido do final da lista Beta após avaliação técnica.

let ultimoItemDaListaBeta = inventarioBeta.pop();

console.log(inventarioBeta);

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

console.log(inventarioBeta);

//Um item da Alpha precisa aparecer no topo da lista para ser destacado na vitrine.

let idx = inventarioAlpha.findIndex((item) => item[0] === "Cristal Ômega");
if (idx > -1) {
  let destacado = inventarioAlpha.splice(idx, 1)[0];
  inventarioAlpha.unshift(destacado);
}

console.log(inventarioAlpha);

// Um item da Beta deve ser promovido para o início da lista para estudo prioritário.

let idxx = inventarioBeta.findIndex((item) => item[0] === "Capa de Invisibilidade");

if (idxx > -1) {
  let [destacar] = inventarioBeta.splice(idxx, 1);

  inventarioBeta.unshift(destacar);
}

console.log(inventarioBeta);


