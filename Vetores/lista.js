const readline = require('readline-sync');

const notas = []
const soma =0


for (let i=0 ; i<5 ; i++) {
    notas.push(Number(readline.question(i+" numero: ")))
}


console.log(notas)


