const employee = require("./Employee");

class Manager extends employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getOffice () {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    };
}

module.exports = Manager;
