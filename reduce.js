// Método .reduce()
// ele é usado para somar os elementos de um array.

// primeiro exemplo: 1 ao 5
let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce((acumulador, valorAtual) => {
 return acumulador + valorAtual;
}, 0);

console.log(soma);
// resultado = 15. 

// segundo exemplo
let numero = [11, 22, 33, 44, 55];

let somar = numero.reduce((acumulador, valorAtual) => {
 return acumulador + valorAtual;
}, 0);

console.log(somar);
// resultado = 165