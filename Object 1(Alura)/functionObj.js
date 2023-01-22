// calculanting with Function:

const client = {
    name: 'joao',
    age: 32,
    cpf: '12345679854',
    email: 'joao@dominio.com',
    phone: ['96566984', '96969696'],
    balance: 200,
    makePayment: function (value) {
        if (value > this.balance) {
             console.log('Insufficient balance');
        } else {
            this.balance -= value;
            console.log(`payment realized: new balance ${this.balance}`);
        }
    }
}

client.makePayment(10);
