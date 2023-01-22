// ACCESSING WITH SQUARE BRAKETS:

const client = {
    name: 'joao',
    age: 32,
    cpf: '12345679854',
    email: 'joao@dominio.com'
}

console.log(`The name of the client is ${client['name']} and his age is ${client['age']} years old`);

const keys = ['name', 'age', 'cpf', 'email'];

keys.forEach ( (key) => {
    console.log(`The key ${key} has value ${client[key]}`)
})