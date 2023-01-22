// ACESSING DATAS:

const client = {
    name: 'joao',
    age: 32,
    cpf: '12345679854',
    email: 'joao@dominio.com'
}

console.log(`The name of the client is ${client} and his age is ${client.age}`);
console.log(`The first 3 digites of the cpf are: ${client.cpf.substring(0,3)}`)