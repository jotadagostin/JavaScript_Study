// function User(name, email) {
//     this.name = name
//     this.email = email

//     this.showInfos = function() {
//         return `${this.name}, ${this.email}`
//     }
// }

// const newUser = new User('Juliana', 'ju@alura.com')
// console.log(newUser.showInfos());

// function Admin(role) {
//     User.call(this, 'juliana', 'ju@alura.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const newUser = new Admin('admin')
// console.log(newUser.showInfos());
// console.log(newUser.role);

// INIT TO REPLACE THE CONSTRUCTOR FUNCTION

const user = {
  init: function (name, email) {
    this.name = name;
    this.email = email;
  },

  showInfos: function () {
    return this.name;
  },
};

const newUser = Object.create(user);
newUser.init("Juliana", "ju@alura.com");

// console.log(user.isPrototypeOf(newUser));
