//               01234567
let umaString = "Um texto";

console.log(umaString[4]); // Acessando a letra "e" da string
console.log(umaString.charAt(3)); // Acessando a letra "t" da string
console.log(umaString.concat(' em', ' um', ' lindo dia.')); // Concatenando strings
console.log(umaString.indexOf('Um', 3)); // Procurando a posição da substring "Um" a partir do índice 3
console.log(umaString.lastIndexOf('Um', 3)); // Procurando a posição da substring "Um" a partir do índice 3 (da direita para a esquerda)
console.log(umaString.match(/[a-z]/g)); // Procurando todas as letras minúsculas na string
console.log(umaString.search(/x/)); // Procurando a posição da letra "x" na string
console.log(umaString.replace('Um', 'Outro')); // Substituindo a substring "Um" por "Outro"
console.log(umaString.length); // Obtendo o tamanho da string, cuidado porque o indice começa em 0, então o tamanho é 1 a mais que o índice do último caractere
console.log(umaString.slice(2, 6)); // Extraindo uma parte da string (do índice 2 até o índice 6, sem incluir o índice 6)
console.log(umaString.slice(-3)); // Extraindo os últimos 3 caracteres da string, de trás para frente
console.log(umaString.split(' ')); // Dividindo a string em um array de substrings, usando o espaço como separador
console.log(umaString.toUpperCase());   // Convertendo a string para letras maiúsculas
console.log(umaString.toLowerCase()); // Convertendo a string para letras minúsculas