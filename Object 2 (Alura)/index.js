import User from "./User.js";
import Docente from "./Docente.js"
import Admin from "./Admin.js"

// const newUser = new User('Mariana', 'm@m.com', '2021-01-01')
// console.log(newUser.exibirInfos())

// const newAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
// console.log(newAdmin.nome)
// novoAdmin.nome = ''
// console.log(newAdmin.nome)

const newDocente = new Docente('Guilherme', 'gui@alura.com', '2021-01-01')
console.log(newDocente.showInfos());