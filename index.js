const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateCards = require("./src/generateCards");
const generateHTML = require("./src/generateHTML");



const managers = [];
const engineers = [];
const interns = [];
const cards = [];

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
        name: 'engineername',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'engineerID',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'engineeremail',
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
        name: 'internname',
      },
      {
        type: 'input',
        message: 'What is their ID?',
        name: 'internID',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'internemail',
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
        const manager = new Manager(data.managername,data.managerID,data.manageremail,data.manageroffice);
        managers.push(manager);
        console.log(managers);
        createEmployees();
    })
    
}

function createEmployees () {
    inquirer.prompt(selection)
    .then(function(data) {
        if(data.choice == "Engineer") {
            inquirer.prompt(engineerquestions)
            .then(function(data) {
              const engineer = new Engineer(data.engineername,data.engineerID,data.engineeremail,data.github)
              engineers.push(engineer);
              console.log(engineers); 
              createEmployees();
            });
        } else if(data.choice == "Intern") {
            inquirer.prompt(internquestions)
            .then(function(data) {
              const intern = new Intern(data.internname,data.internID,data.internemail,data.school)
              interns.push(intern);
              console.log(interns); 
              createEmployees();
            });
        } else if (data.choice == "I don't want to add anymore team members") {
            console.log("you're done")
        }
    })
}

init();
