// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Manager extends Employee{
    constructor(officeNumber,name,id,email) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    };
    
    //returns the office number
    getOfficeNumber(){
        return this.officeNumber;
    };
     
    getRole(){
        return "Manager";
    };

};

module.exports = Manager;