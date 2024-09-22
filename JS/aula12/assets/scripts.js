alert ('Bem vindo ao site');
let confirmacao = confirm('Você é maior de idade?');
alert (`A sua afirmação foi ${confirmacao}! mas será mesmo?`);
let anoNascimento = Number(prompt('Para ter certeza que você é maior de idade, me informe o ano do seu nascimento:'));
alert (`Se estamos em 2024 - ${anoNascimento} acredito que...`);
let idade = 2024 - anoNascimento;
let maior = idade >= 18
alert (`Você tem ${idade} anos de idade, sendo assim a afirmação que você é maior de idade é ${maior}`);