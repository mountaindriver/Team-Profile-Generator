const generateManager = require('./generateCards');
const generateEngineer = require('./generateCards');
const generateIntern = require('./generateCards');

const generateTeamProfile = function (data) {
    generateManager(data);
    generateEngineer(data);
    generateIntern(data);

    let managerCard = [];
    let engineerCard = [];
    let internCard = [];

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
    <header class="">
        <h1 class="text-white bg-danger text-center">My Team</h1>
    </header>
    ${managerCard}
    ${engineerCard}
    ${internCard}
    <div class="card rounded w-25 text-center">
        <div class="card-header bg-primary text-white">
            Name: 
        </div>
        <div class="card-body">
            <h4 class="card-title list-group-item">Role: </h4>
            <p class="card-text list-group-item">ID: </p>
            <p class="card-text list-group-item">Email: </p>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
    
    `
}

module.exports = generateTeamProfile;