const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,ID,email,officeNum) {
        super(name,ID,email)
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;