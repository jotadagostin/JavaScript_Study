const clients = require('./client.json');

function toOrder(list, property) {
    const result = list.sort((a, b) => {
        if(a[property] < b[property]) {
            return -1;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return 0;
    });

    return result;
}

const orderByName = toOrder(clients, 'nome');
console.log(orderByName);