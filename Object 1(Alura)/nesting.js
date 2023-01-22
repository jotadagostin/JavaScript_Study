const client = {
    name: 'joao',
    age: 32,
    cpf: '12345679854',
    email: 'joao@dominio.com',
    phone: ['96566984', '96969696']

}

client.adress = {
    street:'Rua Joseph Climber',
    number: '1245',
    appartment: true,
    complement: 'ap 131'
};

console.log(client);
console.log(client.adress);
console.log(client['adress']); //you can also get in with brakets[]