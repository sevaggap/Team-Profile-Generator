const inquirer = require("inquirer");
const fs = require('fs');
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const managerquestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'managername',
      },
      {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'manageremail',
      },
      {
        type: 'input',
        message: 'What is your office number?',
        name: 'manageroffice',
      },
];

const engineerquestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'managername',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'manageremail',
      },
      {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'github',
      },
]

const internquestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'managername',
      },
      {
        type: 'input',
        message: 'What is their ID?',
        name: 'managerID',
      },
      {
        type: 'input',
        message: 'What is their address?',
        name: 'manageremail',
      },
      {
        type: 'input',
        message: 'What school do they go to?',
        name: 'school',
      },
]

const selection = [
    {
        type: 'list',
        message: 'What would you like to add?',
        name: 'choice',
        choices: ["Engineer","Intern","I don't want to add anymore team members"]
    },
]

function init() {
    inquirer.prompt(managerquestions)
    .then (function (data) {
        const manager1 = new manager(data.managername,data.managerID,data.manageremail,data.manageroffice);
        tryingthis();
    })
    
}

function tryingthis () {
    inquirer.prompt(selection)
    .then(function(data) {
        if(data.choice == "Engineer") {
            inquirer.prompt(engineerquestions)
        } else if(data.choice == "Intern") {
            inquirer.prompt(internquestions)
        } else if (data.choice == "I don't want to add anymore team members") {
            console.log("you're done")
        }
    })
}

init();
