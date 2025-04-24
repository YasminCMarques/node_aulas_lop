const readline = require('readline-sync');

const produto = Number(readline.question('Qual o preco do produto? '));
const porcentagem = Number(readline.question('Qual a porcentagem de desconto? '));

const desconto= produto -(produto/100)*porcentagem
console.log( 'o valor é: ', desconto);