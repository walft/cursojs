/* Recebe a entrada do usuário, seleciona os elementos do DOM e injeta o número digitado direto na página selecionando por ID, a localização fica salva em uma variável */

const numero = prompt('Digite um número: ');
const numeroBase = document.getElementById('numeroEscolhido');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const Notnumber = document.getElementById('Notanumber');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const duas = document.getElementById('duas')

numeroBase.innerHTML = numero;
raiz.innerHTML = numero ** (1/2);
inteiro.innerHTML = Number.isInteger(Number(numero));
Notnumber.innerHTML = Number.isNaN(Number(numero));
baixo.innerHTML = Math.floor(Number(numero));
cima.innerHTML = Math.ceil(Number(numero));
duas.innerHTML = Number(numero).toFixed(2);