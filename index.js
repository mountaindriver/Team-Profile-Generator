// Included Packages Needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const fs = require('fs');
// Other js files
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');
const generateTeamProfile = require('./utils/generateTeamProfile.js');

let employees = [];





// Array of questions for user input
// prompted to enter the team manager’s name, employee ID, email address, and office number
const questionsManager = [
    {
        type: 'input',
        message: `What is your name?`,
        name: `name`,

    },
    {
        type: 'input',
        message: `What is your employee ID?`,
        name: `id`
    },
    {
        type: 'input',
        message: `What is your email adress?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is your office number?`,
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Add a new engineer, intern, or finish and generate team:',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'anwser'
    },
];


const questionsEngineer = [
    {
        type: 'input',
        message: `What is your name?`,
        name: `name`,

    },
    {
        type: 'input',
        message: `What is your employee ID?`,
        name: `id`
    },
    {
        type: 'input',
        message: `What is your email adress?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is your Git hub?`,
        name: 'gihub',
    },
    {
        type: 'list',
        message: 'Add a new engineer, intern, or finish and generate team:',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'anwser'
    },
];

const questionsIntern = [
    {
        type: 'input',
        message: `What is your name?`,
        name: `name`,

    },
    {
        type: 'input',
        message: `What is your employee ID?`,
        name: `id`
    },
    {
        type: 'input',
        message: `What is your email adress?`,
        name: 'email',
    },
    {
        type: 'input',
        message: `What is your school?`,
        name: 'school',
    },
    {
        type: 'list',
        message: 'Add a new engineer, intern, or finish and generate team:',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'anwser'
    },
];


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

        const createManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees.push(createManager);
        console.log(employees);
        console.log(data.anwser);

        
        // switch (data.anwser) {
        //     case 'Engineer':
        //         inquirer
        //             .prompt(questionsEngineer)
        //             .then((data) => {
        //                 const createEngineer = new Engineer(data.name, data.id, data.email, data.github);
        //                 employees.push(createEngineer);
        //             })
        //         break;
        //     case 'Intern':
        //         inquirer
        //             .prompt(questionsIntern)
        //             .then((data) => {
        //                 const createIntern = new Intern(data.name, data.id, data.email, data.school);
        //                 employees.push(createIntern);
        //             })
        //         break;
        // }

    })

