// Método .reduce()
// ele é usado para somar os elementos de um array.

// primeiro exemplo: 1 ao 5
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

// resultado = 15. 
console.log(soma);

// segundo exemplo
let numero = [11, 22, 33, 44, 55];
let somar = numero.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

// resultado = 165
console.log(somar);