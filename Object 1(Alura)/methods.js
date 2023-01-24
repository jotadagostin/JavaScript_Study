const client = {
    name: 'joao',
    age: 24,
    email: 'joao@firma.com',
    phone: ['968574120', '96523698']
}

client.adress = [
    {
        street: 'Rua Joseph C',
        number: 1223,
        appartment: true,
        complement: 'ap 21'
    }
];

const keysOfTheObject = Object.keys(client);
console.log(keysOfTheObject);
if (!keysOfTheObject.includes('adress')) {
    console.log('ERROR: its necesary an email');
}