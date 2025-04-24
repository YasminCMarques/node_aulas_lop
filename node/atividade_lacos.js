const readline = require('readline-sync');

let numero
let contador=0
let ref=2
let ehprimo=0
let i

numero= Number(readline.question('Quantos numeros voce quer?: '));
while (contador<numero){
    for(i=1;i<ref/2+1;i++){
    if(ref % i==0)
     ehprimo=1
    ref++
    break
    }

if(ehprimo==0){
    console.log(ref, "\t")
    ref++
    contador++
}
ehprimo==0
}