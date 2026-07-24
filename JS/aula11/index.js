/* Aritméticos

+ Adição e concatenação
- Subtração
/ Divisão
* Multiplicação
** Potenciação
% Resto da divisão
NaN NOT a NUMBER
*/

const num1 = 10;
const num2 = 3;

console.log(num1 + num2);   // Adição
console.log(num1 - num2);   // Subtração
console.log(num1 * num2);   // Multiplicação
console.log(num1 / num2);   // Divisão
console.log(num1 ** num2);  // Potenciação
console.log(num1 % num2);   // Resto da divisão

console.log(num1 + num1 / num2); 
console.log((num1 + num1) / num2); // A precedência dos operadores é alterada com o uso de parênteses, que são resolvidos primeiro.

//INCREMENTO E DECREMENTO

let contador = 1; //Variáveos para incremento não pode ser constante, já que o valor irremediavelmente será alterado.

++contador; // Incremento antes da variável, ou seja, o valor é alterado antes de ser usado.
console.log(contador++); // Incremento depois da variável, ou seja, o valor é usado antes de ser alterado, por isso o resultado é 2.
console.log(contador); // Agora o valor é 3.

contador--; // Decremento depois da variável, ou seja, o valor é usado antes de ser alterado, por isso o resultado é 3.
console.log(--contador); // Decremento antes da variável, ou seja, o valor é alterado antes de ser usado, por isso o resultado é 1.
console.log(contador); // Agora o valor é 1.

// INCREMENTO PERSONALIZADO

const step = 2;
contador = contador + step; // Incremento de 2 em 2.
contador = contador + step; // Incremento de 2 em 2.
console.log(contador);

// JEITO MAIS SIMPLES

contador += step; // Incremento de 2 em 2, pois o STEP é 2. (7)
console.log(contador);

// PODE SER USADO PARA QUALQUER OPERAÇÃO ARITMÉTICA

contador -= step;
contador *= step;
contador /= step;
contador **= step;
console.log(contador);

// NaN - Not a Number

const num3 = 10;
const num4 = 'Ola';
console.log(num3 * num4); // Claramente o num4 não é um número, então o resultado é NaN.
const num5 = '5';
console.log(num3 * num5); // O JS converteu a string num5 para número, então o resultado é 50, não confiar, melhor é corrigir ou converter.

// CONVERSÃO DE STRING PARA NÚMERO

// parseInt() - Converte uma string para número inteiro.
const num6 = '5';
let NumeroConvertido = parseInt(num6); // Converte a string num6 para número inteiro.
console.log(NumeroConvertido, typeof(NumeroConvertido)); // Agora o resultado é 50, pois a string foi convertida para número.

// parseFloat() - Converte uma string para número decimal.
const num7 = '5.5';
let NumeroConvertido2 = parseFloat(num7);
console.log(NumeroConvertido2, typeof(NumeroConvertido2)); // Agora o resultado é 5.5, pois a string foi convertida para número decimal.

// Number() - Converte uma string para número, seja inteiro ou decimal.
const num8 = '10.5';
let NumeroConvertido3 = Number(num8);
console.log(NumeroConvertido3, typeof(NumeroConvertido3)); // Agora o resultado é 10.5, pois a string foi convertida para número decimal.