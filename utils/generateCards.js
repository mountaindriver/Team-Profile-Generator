const tp = request('./generateTeamProfile')

const generateManager = function (manager) {
    let managerCard = `
    <div class="card rounded w-25 text-center">
        <div class="card-header bg-primary text-white">
           <h1> ${manager.name} </h1>
            <h3>Manager</h3>
        </div>
        <div class="card-body">
            <p class="card-text list-group-item">Office Number: ${manager.officeNumber}</p>
            <p class="card-text list-group-item">ID: ${manager.id}</p>
            <p class="card-text list-group-item">Email: <a href="${manager.email}">${manager.email}</a</p>
        </div>
    </div>`
    return managerCard
}
const generateEngineer = function (engineer) {
    let engineerCard = ``
    for (let i = 0; i < engineer.length; i++) {
        let card = `
            <div class="card rounded w-25 text-center">
                <div class="card-header bg-primary text-white">
                    <h1> ${engineer[i].name} </h1>
                    <h3>Engineer</h3>
                </div>
                <div class="card-body">
                    <p class="card-text list-group-item">Github: ${engineer[i].github}</p>
                    <p class="card-text list-group-item">ID: ${engineer[i].id}</p>
                    <p class="card-text list-group-item">Email: ${engineer[i].email}</p>
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
            <div class="card rounded w-25 text-center">
                <div class="card-header bg-primary text-white">
                    <h1> ${intern[i].name} </h1>
                    <h3>Intern</h3>
                </div>
                <div class="card-body">
                    <p class="card-text list-group-item">school: ${intern[i].school}</p>
                    <p class="card-text list-group-item">ID: ${intern[i].id}</p>
                    <p class="card-text list-group-item">Email: ${intern[i].email}</p>
                </div>
            </div>`
            internCard += card
    }
    return internCard
}

module.exports = {managerCard, engineerCard, internCard}