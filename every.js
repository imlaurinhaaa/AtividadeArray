// Método .every()
// ele é usado para ver se todos os elementos do array passam pelo teste com função dada, este método retorna um valor true/false.

// primeiro exemplo: menor;
let menor = (valorAtual) => valorAtual <= 40;
let sequencia = ["1", "15", "29", "33", "35"];

// indicando que é verdadeiro: não há números maiores que 40.
console.log(sequencia.every(menor));

// primeiro exemplo: maior;
let maior = (valorAtual) => valorAtual >= 20;
let ordem = ["1", "15", "6", "17", "10"];

// indicando que é falso: há números menores que 20.
console.log(ordem.every(maior));