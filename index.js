// Included Packages Needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Other js files
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');
const generateMarkdown = require('./utils/generateTeamProfile.js');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    greetEmployee(name, id, email) {
        console.log(`Hello, ${this.name} is the following infomation correct? Id: ${this.id}, Email: ${this.email}`)
    }

    getName(name) {
        console.log(name);
    }

    getId(id) {
        console.log(id);
    }

    getEmail(email) {
        console.log(email)
    }

    getrole() {
        return 'employee'
    }
}

const lucas = new Employee("Lucas", '1', "lsfreigenberg@outlook.com");

lucas.greetEmployee();


// Array of questions for user input
// prompted to enter the team manager’s name, employee ID, email address, and office number
const questions = [
    {
        type: 'input',
        message: `What is your team manager's name?`,
        name: `managerName`,

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

inquirer
    .prompt(questions)
    .then((anwser, data) => {
        if (anwser === 'Engineer') {
            console.log('E')
        } else if (anwser === 'Intern') {
            console.log("I")
        } else {
            console.log('F')
            const fileName = "Team Profile";

            fs.writeFileSync(fileName, generateTeamProfile(data))
        }
    })