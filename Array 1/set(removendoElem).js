// REMOVENDO ELEMENTOS REPETIDOS:

const nomes = ["Ana", "Clara", "Maria", "Maria", "Joao", "Joao", "Joao"];

const meuSet = new Set(nomes);
const nomeAtt = [...meuSet];

console.log(nomeAtt);