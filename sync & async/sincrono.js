//para trabalhar com arquivos
const fs = require("fs");

console.log("inicio");

//estou querendo dizer que vou criar um arquivo.txt e escrever oi nele, feito de forma sincrona executando tudo junto de uma vez
fs.writeFileSync("arquivo.txt", ("oi"));

console.log("fim");