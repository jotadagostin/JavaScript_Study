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

for (let key in client) {
    let tYpe = typeof client[key];
    if (tYpe !== 'object' && tYpe !== 'function') {
        console.log(`They key ${key} has value ${client[key]}`);
    }
}