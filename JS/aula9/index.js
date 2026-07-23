// ECMAScript / var pode ser redeclarada, mas não é recomendado, pois pode gerar confusão no código, ECM mudou essa regra e criou o let e const, que não podem ser redeclaradas, mas podem ser reatribuídas.
var nome = 'Luis';
var nome = 'Henrique'

console.log(nome);
// É possível criar uma variável sem determinar se é var / let ou const mas não é para ser utilizada:
sobreNome = 'Gonçalves';
console.log(sobreNome);
// LET não pode ser redeclado
let idade = 34;
console.log(idade);


