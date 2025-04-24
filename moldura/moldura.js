const readline = require('readline-sync')

const frase = readline.question("Digite uma frase: ")

const c = "█";

for(let i =0; i<frase.length; i++){
process.stdout.write(c)
}

console.log(c,frase)