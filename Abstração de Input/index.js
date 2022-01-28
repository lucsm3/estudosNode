// serve pra receber entradas baseadas em promisses

const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'p1', 
        message: 'qual a primeira nota ?'
    },
    {
        name: 'p2', 
        message: 'qual a segunda nota ?'
    },
]).then((answers) => {console.log(answers)}).catch((err) => console.log(err));