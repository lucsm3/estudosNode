//para trabalhar com arquivos
const fs = require("fs");

console.log("inicio");

//estou querendo dizer que vou criar um arquivo.txt e escrever oi nele, feito de forma assincrono executando tudo junto de uma vez
fs.writeFile("arquivo.txt", (function(err) {
setTimeout(function() {
    console.log("Arquivo Criado");
})
}),1000)

console.log("fim");