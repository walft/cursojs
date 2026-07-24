//STRINGS
const nome = 'Luis';
const nome1 = "Luis";
const nome2 = `Luis`; // pode utilzar tamplates strings

//NUMBERS
const num1 = 10; // Number inteiro
const num2 = 10.52; // Number real / flutuante

//UNDEFINED
let nomeAluno; // NÃO APONTA PARA NENHUM PONTO NA MEMÓRIA, RETORNA UNDEFINED.

//NULL
let sobrenomeAluno = null; // NÃO APONTA PARA NENHUM PONTO NA MEMÓRIA, RETORNA NULL.

//BOOLEAN
const booleanF = false; //SÓ TEM DUAS POSSIBILIDADES, TRUE OU FALSE.
const booleanT = true;  //SÓ TEM DUAS POSSIBILIDADES, TRUE OU FALSE.

console.log(typeof nome);
console.log(typeof nome1);
console.log(typeof nome2);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof nomeAluno);
console.log(typeof sobrenomeAluno);
console.log(typeof booleanF);
console.log(typeof booleanT);

const a = [1,2];
const b = a;
console.log(a, b);
b.push(3);
console.log(a, b); // a e b apontam para o mesmo endereço de memória, então quando alteramos b, a também é alterado.