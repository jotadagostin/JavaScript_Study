const objCharacter = {
    name: 'Gandalf',
    class: 'mage',
    level: '20'
}

const objCharacter2 = Object.create(objCharacter);
objCharacter2.name = 'Gandalf, the gray wizard';

console.log(objCharacter.name);
console.log(objCharacter2.name);