let num1 = 15.501239123;
let num2 = 2.5;

console.log(num1.toString() + num2); // O toString converte para string
console.log(num1.toFixed(2)); //toFixed faz o arredondamento do número, inserir a quantidade de casas decimais
console.log(Number.isInteger(num1)); // verifica se o numero é inteiro
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // verifica se o resultado for NaN

let num3 = 0.7;
let num4 = 0.1;

console.log(num3 + num4); //O resultado é estranho, ele retorna 0.7999999999999999 ao invés de retornar 0.8
num3 += num4;
num3 = parseFloat(num3.toFixed(1)); // é necessário colocar o parce ou numberporque se não ele não é um numero de verdade
console.log(num3, Number.isInteger(num3));