import User from "./User.js";

export default class Docente extends User {
    constructor(name, email, birthday, role = 'docente', active = true) {
        super(name, email, birthday, role, active)
    }

    aproveStudent(student, course) {
        return `studante ${student} pass in the course ${course}`
    }
        
}


