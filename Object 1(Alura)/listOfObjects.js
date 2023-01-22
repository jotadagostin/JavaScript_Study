// LIST WITH THE METHOD PUSH:


const client = {
    name: 'joao',
    age: 32,
    cpf: '12345679854',
    email: 'joao@dominio.com',
    phone: ['96566984', '96969696']

}

client.adresses = [
    {
    street:'Rua Joseph Climber',
    number: '1245',
    appartment: true,
    complement: 'ap 131'
    }
]

client.adresses.push({
    street: 'Rua do Pão velho',
    number: 414,
    appartment: false,
    complement: 'ap 212'
})

const listOnlyAppartments = client.adresses.filter(
    (adress) => adress.appartment === true
);

console.log(listOnlyAppartments);

