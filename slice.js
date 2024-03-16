// Método .slice()
// ele é usado para retornar uma cópia de uma parte de um array a partir de um subarray criado entre as posições início e fim de um array original, o Array original não é modificado.

// primeiro exemplo: estilo musicais ordem crescente;
let música = ["pop", "funk", "rock", "sertanejo", "gospel"];

// pop: 0/ funk: 1/ rock: 2/ sertanejo:3/ gospel:4.
console.log(música.slice(3));
console.log(música.slice(1));

// segundo exemplo: estilo musicais ordem decrescente;
let músicas = ["pop", "funk", "rock", "sertanejo", "gospel"];

// pop: 0/ funk: -4/ rock: -3/ sertanejo:-2/ gospel:-1.
console.log(músicas.slice(0));
console.log(músicas.slice(-4));
console.log(músicas.slice(-1));