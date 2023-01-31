import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birthday, role = 'admin', activo = true) {
        super(name, email, birthday, role, active)
    }

    showInfos() {
        return `${this.name}, ${this.role}, ${this.active}`
    }

    createCourse(nameOfTheCourse, vacancies) {
        return `Course of ${nameOfTheCourse} create with ${vacancies} vacancies`
    }
}