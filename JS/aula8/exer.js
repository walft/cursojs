const nome = 'Luis Henrique';
const sobreNome = 'Gonçalves'
const idade = 34;
const peso = 84;
const altura = 1.7;

let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

console.log('Olá', nome, sobreNome, ', você tem', idade, 'de idade, pesa', peso, 'kg e tem', altura, 'de altura. Seu IMC é', imc, 'E seu ano de nascimento é', anoNascimento,'.')

console.log (`Olá ${nome} ${sobreNome}, você tem ${idade} anos de idade, pesa ${peso}kg e tem ${altura} metros de altura. Seu IMC é de ${imc}, e seu ano de nascimento é ${anoNascimento}.`)


