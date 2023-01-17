// ALTERANDO STRINGS COM MAP:

const nomes = ["Ana", "Julia", "Caio", "Bia"];

const nomePadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

console.log(nomePadronizados);