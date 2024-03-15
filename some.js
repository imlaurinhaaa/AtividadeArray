// Método .some()
// ele é usado para testar se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

// primeiro exemplo: TRUE;
let numero = [ "2", "4", "6"];
let checar = numero.some(element => element % 2 === 0);
console.log(checar);
// TRUE para os números pares.

// segundo exemplo: FALSE;
let numeros = [ "1", "3", "5"];
let check = numeros.some(element => element % 2 === 0);
console.log(check);
// FALSE para os números impares.