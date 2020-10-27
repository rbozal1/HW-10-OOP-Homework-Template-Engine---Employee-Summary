
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{

    constructor(gitUsername,name,id,email) {
        super(name,id,email);
        this.gitUsername = gitUsername;
    };
    
    //returns the github username
    getGithub(){
        return this.gitUsername;
    };
     
    getRole(){
        return "Engineer";
    };

};

module.exports = Engineer;