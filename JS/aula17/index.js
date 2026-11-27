function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2));
console.log(soma(10, 20));
console.log(soma(1.2, 2.5));

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

const raiz2 = n => n ** 0.5; // Arrow function
console.log(raiz2(16));
