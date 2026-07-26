/*
Muitas funções estão disponíveis no JavaScript podem ser utilizadas somente no navegador, como por exemplo: alert(), prompt() e confirm().
Todas estão dentro da Window, que é objeto global, que não precisamos digitar.
alert() exibe uma caixa de alerta para o usuário e não retorna nenhum valor, mas o usuário precisa clicar em OK para continuar.
o confirm() exibe um texto com dois botões, ok e cancelar, e retorna true ou false dependendo do botão clicado.
o prompt() exibe um texto com um campo de entrada e dois botões, ok e cancelar, e retorna o valor digitado ou null caso o usuário clique em cancelar, sempre retorna uma string, cuidado, pode ser necessário conversão caso número.
*/

alert ('Bem vindo ao site');
let confirmacao = confirm('Você é maior de idade?');
alert (`A sua afirmação foi ${confirmacao}! mas será mesmo?`);
let anoNascimento = Number(prompt('Para ter certeza que você é maior de idade, me informe o ano do seu nascimento:'));
alert (`Se estamos em 2026 - ${anoNascimento} acredito que...`);
let idade = 2026 - anoNascimento;
let maior = idade >= 18
alert (`Você tem ${idade} anos de idade, sendo assim a afirmação que você é maior de idade é ${maior}`);
