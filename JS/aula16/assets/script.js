/* Recebe a entrada do usuário, seleciona os elementos do DOM e injeta o número digitado direto na página selecionando por ID, a localização fica salva em uma variável */

const numero = prompt('Digite um número: ');
const numeroBase = document.getElementById('numeroEscolhido');
const texto = document.getElementById('texto');

numeroBase.innerHTML = numero;
