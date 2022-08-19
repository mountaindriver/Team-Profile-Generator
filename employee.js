class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    greetEmployee(name, id, email) {
        console.log(`Hello, ${this.name} is the following infomation correct? Id: ${this.id}, Email: ${this.email}`)
    }

    getName(name) {
        console.log(name);
    }

    getId(id) {
        console.log(id);
    }

    getEmail(email) {
        console.log(email)
    }

    getrole() {
        return 'employee'
    }
}