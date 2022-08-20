// Included Packages Needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const fs = require('fs');
// Other js files
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateTeamProfile = require('./src/generateTeamProfile.js');


// prompt questions
const questions = [
    {
        type: 'input',
        message: `What is the manager's name?`,
        name: `name`,
    },
    {
        type: 'input',
        message: `What is the manager's employee ID?`,
        name: `id`
    },
    {
        type: 'input',
        message: `What is the manager's email adress?`,
        name: 'email',
    },
    {
        type: `input`,
        message: `What is the manager's office number?`,
        name: `officeNumber`,
    },
    {
        type: 'loop',
        name: 'employees',
        message: `Add a new team member?`,
        questions: [
            {
                type: 'list',
                message: 'Engineer or intern?',
                name: 'type',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                message: "What is the employee's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the employee's ID number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the employee's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the employee's github username?",
                name: 'github',
                when: (employee) => employee.type === 'Engineer'
            },
            {
                type: 'input',
                message: 'What is the name of the employees school?',
                name: 'school',
                when: (employee) => employee.type === 'Intern'
            },
        ]
    }
]

inquirer
    .prompt(questions)
    .then((data) => {
        
        const employees = data.employees;
        const manager = [];
        const engineer = [];
        const intern = [];

        const createManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        manager.push(createManager)
        

        for(let i = 0; i <employees.length; i++){
            const a = employees[i]
            if (a.type === "Engineer"){
                const createEngineer = new Engineer(data.name, data.id, data.email, data.github);
                engineer.push(createEngineer);
            } else if (a.type === "Intern"){
                const createIntern = new Intern(data.name, data.id, data.email, data.school);
                intern.push(createIntern); 
            }
        }

        fs.writeFileSync("Team-Member-Dashboard.html", generateTeamProfile(data))
    })

