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
    {type: 'list',
    message: 'Hello, what would you like to do?',
    name: 'action',
    choices: [
        `View All Employees`,
        `Add An Employee`,
        `Update An Employee Role`,
        `View All Roles`,
        `Add A Role`,
        `View all Departments`,
        `Add A Department`,
        `Quit`],
    },
    {
        type: 'input',
        message: `What is the manager's name?`,
        name: `name`,
    },
    {
        type: 'input',
        message: `What is the manager's employee ID?`,
        name: `id`,
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
                choices: ['Engineer', 'Intern'],
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
                when: (employee) => employee.type === 'Engineer',
            },
            {
                type: 'input',
                message: 'What is the name of the employees school?',
                name: 'school',
                when: (employee) => employee.type === 'Intern',
            },
        ]
    }
]

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const employees = data.employees;
        const manager = [];
        const engineer = [];
        const intern = [];

        const createManager = new Manager(data.name, data.id, data.email, data.officeNumber);
        manager.push(createManager);
        

        for(let i = 0; i <employees.length; i++){
            const a = employees[i]
            if (a.type === "Engineer"){
                const createEngineer = new Engineer(a.name, a.id, a.email, a.github);
                engineer.push(createEngineer);
            } else if (a.type === "Intern"){
                const createIntern = new Intern(a.name, a.id, a.email, a.school);
                intern.push(createIntern); 
            }
        }
        
        fs.writeFileSync(`./dist/${data.name}'sTeam-Member-Dashboard.html`, generateTeamProfile(manager, engineer, intern));
        console.log(`New File ${data.name}'sTeam-Member-Dashboard.html has been created in the dist file`);
    })