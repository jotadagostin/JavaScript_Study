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

function callTheClient(phoneComercial, phoneResidence) {
    console.log(`calling ${phoneComercial}`);
    console.log(`calling ${phoneResidence}`);
}

// callTheClient(client.phone[0], client.phone[1]);
//or better:

callTheClient(...client.phone);
// that's the Spread Operator

// const parcel = {
//     destination: client.name,
//     street: client.adress[0].street,
//     number: client.adress[0].number
// } or you can do better:

const parcel = {
    ...client.adress[0]
};

console.log(parcel);