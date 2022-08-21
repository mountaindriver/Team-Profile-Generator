const {generateManager, generateEngineer, generateIntern} = require('./generateCards');


const generateTeamProfile = function (manager, engineer, intern) {
    let managerCard = generateManager(manager);
    let engineerCard = generateEngineer(engineer);
    let internCard = generateIntern(intern);

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">    
        <title>Team Profile</title>
    </head>

    <body>
        <header class="py-5 text-white bg-danger text-center">
            <h1>My Team</h1>
        </header>
        <div class="container mt-5">
            <div class="row justify-content-center">
                ${managerCard}
            </div>
            <div class="row justify-content-center">
                ${engineerCard}
            </div>
            <div class="row justify-content-center">
                ${internCard}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = generateTeamProfile;