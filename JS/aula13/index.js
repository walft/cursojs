let varA = 'A';
let varB = 'B';
let varC = 'C';

/*
 * Troca via Desestruturação de Array:
 * 1. O JS cria o array ['B', 'C', 'A'] com os valores atuais do lado direito.
 * 2. Em seguida, desempacota e atribui cada valor às variáveis da esquerda ao mesmo tempo.
 */

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
