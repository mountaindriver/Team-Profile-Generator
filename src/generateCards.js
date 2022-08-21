const generateManager = function (manager) {
    let managerCard = `
        <div class="card rounded text-center">
            <div class="card-header bg-primary text-white" >
                <h1> ${manager[0].name} </h1>
                <h3>&#129504Manager</h3>
            </div>
            <div class="card-body">
                <p class="card-text list-group-item">Office Number: ${manager[0].officeNumber}</p>
                <p class="card-text list-group-item">ID: ${manager[0].id}</p>
                <p class="card-text list-group-item">Email: <a href="mailto:${manager[0].email}">${manager[0].email}</a></p>
            </div>
        </div>`
    return managerCard
}
const generateEngineer = function (engineer) {
    let engineerCard = ``
    for (let i = 0; i < engineer.length; i++) {
        let card = `
        <div class="card rounded text-center" style="width: 25rem;">
            <div class="card-header bg-primary text-white" >
                <h1> ${engineer[i].name} </h1>
                <h3>&#129299Engineer</h3>
            </div>
            <div class="card-body">
                <p class="card-text list-group-item">Github: <a target="_blank" href="https://github.com/${engineer[i].github}">${engineer[i].github}</a></p>
                <p class="card-text list-group-item">ID: ${engineer[i].id}</p>
                <p class="card-text list-group-item">Email: <a href="mailto:${engineer[i].email}">${engineer[i].email}</a></p>
            </div>
        </div>`
            engineerCard += card
    }
    return engineerCard
}
const generateIntern = function (intern) {
    let internCard = ``
    for (let i = 0; i < intern.length; i++) {
        let card = `
        <div class="card rounded text-center" style="width: 25rem;">
            <div class="card-header bg-primary text-white" >
                <h1> ${intern[i].name} </h1>
                <h3>&#127891Intern</h3>
            </div>
            <div class="card-body">
                <p class="card-text list-group-item">school: ${intern[i].school}</p>
                <p class="card-text list-group-item">ID: ${intern[i].id}</p>
                <p class="card-text list-group-item">Email: <a href="mailto:${intern[i].email}">${intern[i].email}</a></p>
            </div>
        </div>`
            internCard += card
    }
    return internCard
}

module.exports = {generateManager, generateEngineer, generateIntern}