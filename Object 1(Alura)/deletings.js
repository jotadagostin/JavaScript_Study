// DELETING PROPERTIES:

const objCharacters = {
    name: 'Gandalf',
    class: 'Mage',
    level: '20',
    ally: {
        name: 'Saruman',
        class: 'mage',
    },
    status: 'missing'
}

delete objCharacters.ally;
delete objCharacters['status'];
console.log(objCharacters.ally);
console.log(objCharacters.status);
