const readline = require('readline-sync');


const numero = Number(readline.question('Qual o numero? '));

const conta= numero%2
if(conta==0){
    console.log( 'o valor é par ');
}
else{
    console.log( 'o valor é impar ');
}