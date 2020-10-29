//classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const teamHTML = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptMember() {
    console.log("It is time to build A-team!")
    inquirer.prompt([
    {
        type:"input",
        name:"managerName",
        message: "What is your manager's name .? "
    },
    {
        type:"input",
        name:"managerId",
        message: "What is your manager's ID? "
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email? "
    },

    {
        type: "input",
        name: "OfficeNumber",
        message: "What is your manager's Office Number? "
    },
])
.then((data) => {
  const manager = new Manager(
    data.managerName,
    data.managerId,
    data.managerEmail,
    data.OfficeNumber
  );
  console.log(`${data.managerName} has been added!`);
  teamHTML.push(manager);
  addAnother();
    });
}; 

function addAnother() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Chose the role of your next team member",
          name: "choice",
          choices: ["Add Engineer", "Add Intern", "Done Adding"],
        },
      ]).then(function (data) {
        if (data.choice === "Add Engineer") {
          addEngineer();
        } else if (data.choice === "Add Intern") {
          addIntern();
        } else (outputTeam());
        
      });
    };

function addEngineer() {
    console.log("Lets add your Engineer");
  
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is the engineer's Id?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is the engineer's email?",
          name: "engineerEmail",
         
        },
        {
          type: "input",
          message: "What is the engineer's GitHub user name?",
          name: "engineerGitHub",
        },
      ])
      .then((data) => {
        const engineer = new Engineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGitHub
        );
        teamHTML.push(engineer);
        console.log(`${data.engineerName} has been added!`);
        addAnother();
      });
    }
  
function addIntern() {
    console.log("Lets add your Intern");
  
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName"
        },
        {
          type: "input",
          message: "What is the intern's Id?",
          name: "internId"
        },
        {
          type: "input",
          message: "What is the intern's email?",
          name: "internEmail"
        },
        {
          type: "input",
          message: "What school does the intern attend?",
          name: "internSchool"
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        );
        teamHTML.push(intern);
        console.log(`${data.internName} has been added!`);
        addAnother();
      });
  }
function outputTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamHTML), "utf-8");
    }

  promptMember();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
