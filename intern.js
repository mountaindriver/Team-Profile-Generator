const Employee = require('./employee');

class Intern {
    constructor(school) {
        this.school = school;
    }
    getSchool(school){

    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;