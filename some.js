// Método .some()
// ele é usado para testar se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

// primeiro exemplo: TRUE;
let numero = ["2", "4", "6"];
let checar = numero.some(element => element % 2 === 0);

// TRUE para os números pares.
console.log(checar);

// segundo exemplo: FALSE;
let numeros = ["1", "3", "5"];
let check = numeros.some(element => element % 2 === 0);

// FALSE para os números impares.
console.log(check);