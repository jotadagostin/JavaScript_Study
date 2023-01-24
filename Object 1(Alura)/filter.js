const clients = require('./client.json');

function filterAppartmentsWithoutComplemet(clients) {
    return clients.filter((client) => {
        return(
            client.endereco.apartamento &&
            !client.endereco.hasOwnProperty['complemento']
            );
    });   
}

const filters = filterAppartmentsWithoutComplemet(clients);
console.log(filters);