const client = require('./client.json');

function findIt(list, key, value) {
    return list.find((item) => item[key].includes(value));
}

const foundOut = findIt(client, 'nome', 'Kirby');
const foundOut2 = findIt(client, 'telefone', '1918820860');
console.log(foundOut);
console.log(foundOut2);