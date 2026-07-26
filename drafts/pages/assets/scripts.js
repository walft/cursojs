function validarCPF(cpfInput) {
  // 1. Limpeza: Remove tudo que NÃO é dígito (pontos, traço, espaços)
const cpf = cpfInput.replace(/\D/g, '');

  // 2. Validação de tamanho: Deve ter exatamente 11 dígitos
if (cpf.length !== 11) return false;

  // 3. Rejeita sequências de números iguais (ex: "111.111.111-11", "00000000000")
  // A RegEx /^(\d)\1{10}$/ verifica se o primeiro dígito se repete mais 10 vezes
if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Função auxiliar para multiplicar os dígitos pelos seus pesos e obter o DV
const calcularDigito = (cpfParcial, pesoInicial) => {
    let soma = 0;
    for (let i = 0; i < cpfParcial.length; i++) {
      soma += Number(cpfParcial[i]) * (pesoInicial - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
};

  // 4. Primeiro dígito verificador (analisa os 9 primeiros dígitos com peso inicial 10)
const digito1 = calcularDigito(cpf.slice(0, 9), 10);

  // 5. Segundo dígito verificador (analisa os 10 primeiros dígitos com peso inicial 11)
const digito2 = calcularDigito(cpf.slice(0, 10), 11);

  // 6. Confirma se os dígitos calculados batem com os informados no CPF
return digito1 === Number(cpf[9]) && digito2 === Number(cpf[10]);
}

// --- Execução no Navegador ---
let CPFdigitado = prompt('Digite o seu CPF: ');

if (CPFdigitado) {
if (validarCPF(CPFdigitado)) {
    alert(`✅ O CPF "${CPFdigitado}" é VÁLIDO!`);
} else {
    alert(`❌ O CPF "${CPFdigitado}" é INVÁLIDO!`);
}
}