// Included Packages Needed for this application
const inquirer = require('inquirer');
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
        message: 'Add a new team member or finish:',
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
        message: 'Add a new team member or finish:',
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
        message: 'Add a new team member or finish:',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'anwser'
    },
];


inquirer
    .prompt(questionsManager)
    .then((data) => {
        const createManager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employees.push(createManager)
        if (data.anwser === 'Engineer') {
            
            inquirer
                .promt(questionEngineer)
        } else if (data.anwser === 'Intern') {
            
            inquirer
                .prompt(questionsIntern)
        } else {
            console.log('F')
            const fileName = "Team Profile";

            fs.writeFileSync(fileName, generateTeamProfile(data))
        }
    })
