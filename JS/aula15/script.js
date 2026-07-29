let num1 = 9.54789;
let num2 = Math.round(num1); // arredonda normal, 0,4 pra baixo 0,6 ele arredonda pra cima

console.log(Math.floor(num1)); // arredonda pra baixo
console.log(Math.ceil(num1)); // arredonda pra cima
console.log(Math.max(1, 2, 3, 10, 1550, -10)); // retorna o máximo
console.log(Math.min(1, 2, 3, 10, 1550, -10)); // retorna o menor
console.log(Math.pow(2, 10)); // Eleva o número a potência 2 elevado a 10, mesma coisa que 2 ** 10
console.log(9 ** (1/2)); // para ver a raiz quadrada (1/2) ou 0,5
console.log(100/0); // em outras linguagens isso retornaria erro, porém em JS volta como infinity e ainda é verdadeiro.
/**
 * Gera um número aleatório entre 1 e 60.
 * O uso do Math.floor evita o viés das pontas, garantindo a mesma probabilidade para todos, * o máximo + o mínimo (para não começar do zero)
 */
const aleatorio = Math.floor(Math.random() * 60) + 1;
console.log(aleatorio);
