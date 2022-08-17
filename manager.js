class Manager{
    constructor(officeNumber){
        this.officeNumber = officeNumber;
    }

    getRole(officeNumber){
        return 'Manager'
    }
}

module.exports = Manager;