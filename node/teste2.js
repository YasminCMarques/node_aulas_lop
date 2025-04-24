const readline = require('readline-sync');

const peso = Number(readline.question('Seu peso? '));
const altura = Number(readline.question('Sua altura? '));

const imc= peso / altura ** 2
console.log( 'seu imc é: ', imc.toFixed(1));