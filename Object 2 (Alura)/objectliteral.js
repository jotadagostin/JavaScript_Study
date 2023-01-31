const user = {
    name: 'Juliana',
    email: 'j@alura.com',
    birthday: '2021/21/01',
    role: 'student',
    active: true,
    showInfos: function () {
        console.log(this.nome, this.email);
    }
}

const admin = {
    name: 'Mariana',
    email: 'm@alura.com',
    role: 'admin',
    createCourse() {
        console.log('Course created!');
    }
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.showInfos();