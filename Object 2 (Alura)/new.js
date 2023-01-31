function User(name, email) {
    this.name = name
    this.email = email

    this.showInfos = function() {
        return `${this.name}, ${this.email}`
    }
}


const newUser = new User('Juliana', 'ju@alura.com')
console.log(newUser.showInfos());