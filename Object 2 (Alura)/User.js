export default class User {
    #name
    #email
    #birthday
    #role
    #active
    constructor(name, email, birthday, role, active = true) {
        this.#name = name
        this.#email = email
        this.#birthday = birthday
        this.#role = role
        this.#active = active
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get birthday() {
        return this.#birthday
    }

    get role() {
        return this.#role
    }

    get active() {
        return this.#active
    }

    set name(newName) {
        if (newName === '') {
            throw new Error('format invalid')
        }
        this.#name = newName
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
      }
}
