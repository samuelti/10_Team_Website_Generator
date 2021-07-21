const fs = require('fs')
const inquirer = require('inquirer');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const Manager = require('./library/Manager')
const team = [];
const ids = [];
// const htmlBody = `<html>
// <head>
//     <title>Team Profile Generator</title>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="stylesheet" type="text/css" href="./style.css" />
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
// </head>
// <body>
//     <nav>
//         <h1>
//             My Team
//         </h1>
//     </nav>
//     <div class="card-columns">
//         ${cell1}
//         ${cell2}
//         ${cell3}
//         ${cell4}
//         ${cell5}
//         </div>
//     </div>    
// </body>
// </html>`
const managerNameQ = {
    name: 'managerName',
    message: 'Please input name.'
    }
const engineerNameQ = {
    name: 'engineerName',
    message: 'Please input name.'
}
const internNameQ = {
    name: 'internName',
    message: 'Please input name.'
}
const managerIdQ = {
    name: 'managerID',
    message: 'Please input ID.'
}
const engineerIdQ = {
    name: 'engineerID',
    message: 'Please input ID.'
}
const internIdQ = {
    name: 'internID',
    message: 'Please input ID.'
}
const managerEmailQ = {
    name: 'managerEmail',
    message: 'Please input email.'
}
const engineerEmailQ = {
    name: 'engineerEmail',
    message: 'Please input email.'
}
const internEmailQ = {
    name: 'internEmail',
    message: 'Please input email.'
}
const officeQ = {
    name : 'officeNum',
    message: 'Please input office number.'
}
const githubQ = {
    name: 'github',
    message: 'Please input github username.'
}
const schoolQ = {
    name: 'school',
    message: 'Please input school.'
}


const managerQs = [managerNameQ,managerIdQ,managerEmailQ,officeQ];
const employeeQs = [engineerNameQ,engineerIdQ,engineerEmailQ,githubQ];
const internQs = [internNameQ,internIdQ,internEmailQ,schoolQ];

function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
    if (err) {
        console.error(err)
        return
    }
})
}



function innit() {
    function generateCards() {
        const cardsHtml = [];
        for (var cardNum = 0; team.length > cardNum; cardNum++) {
            var cell1 = ` <div class="card" style="width: 18rem;">
            <h3 id = "Employee">${team[cardNum].getName()}</h3>
            <ul class="list-group list-group-flush">`
            var cell2 =`<li class="list-group-item">${team[cardNum].getRole()}</li>` 
            var cell3 = `<li class="list-group-item">${team[cardNum].getID()}</li>`
            var cell4 = `<li class="list-group-item"><a href="mailto:${team[cardNum].getEmail()}">${team[cardNum].getEmail()}</a></li>`
            if (team[cardNum].getRole() === 'Manager') {
                var cell5 = `<li class="list-group-item">${team[cardNum].getOfficeNum()}</li>
                <ul>
                </div>`
            }
            if (team[cardNum].getRole() === 'Engineer') {
                var cell5 = `<li class="list-group-item"><a href="https://github.com/${team[cardNum].getGitHub()}" target="_blank">${team[cardNum].getGitHub()}</a></li>
                <ul>
                </div>`
            }
            if (team[cardNum].getRole() === 'Intern') {
                var cell5 = `<li class="list-group-item">${team[cardNum].getSchool()}</li>
                <ul>
                </div>`
            }
            console.log(cell1,cell2,cell3,cell4,cell5);
            var cardContent = cell1 + cell2 + cell3 + cell4 + cell5;
            cardsHtml.push(cardContent);
        }
        const htmlBody = `<html>
<head>
    <title>Team Profile Generator</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <nav>
        <h1>
            My Team
        </h1>
    </nav>
    <div class="card-columns">
        ${cardsHtml}
        </div>
    </div>    
</body>
</html>`
        writeToFile('index.html',htmlBody);
    }
    function createManager() {
        inquirer
        .prompt(managerQs)
        .then(data =>{
            const manager = new Manager(data.managerName,data.managerID,data.managerEmail,data.officeNum)
            team.push(manager);
            ids.push(data.managerID);
            createTeam();
        })
    }
    function createTeam() {  
        inquirer
        .prompt(
            [{
                type: 'list',
                name: 'addTeammate',
                message: 'Add a teammate or procede to finalisation.',
                choices: ['add engineer','add intern','finalize']
            }]
        )
        .then(data =>{
            console.log(data.addTeammate);
            if (data.addTeammate === 'finalize'){
                generateCards();
                
                return
            }
            if (data.addTeammate === 'add engineer'){
                inquirer
                .prompt(
                    employeeQs
                )
                .then(data =>{
                    const engineer = new Engineer(data.engineerName,data.engineerID,data.engineerEmail,data.github)
                    team.push(engineer);
                    ids.push(data.engineerID);
                    createTeam();
                })
            }
            if (data.addTeammate === 'add intern'){
                inquirer
                .prompt(
                    internQs
                )
                .then(data =>{
                    const intern = new Intern(data.internName,data.internID,data.internEmail,data.school)
                    team.push(intern);
                    ids.push(data.internID);
                    createTeam();
                })
            }
        })
        
        
    }
    // inquirer
    // .prompt(managerQs)
    // const htmlContent = 'html goes here'
    createManager();
    //writeToFile('index.html',htmlContent);
}

innit();