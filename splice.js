// Método .slipe()
// ele é usado para alterar o conteúdo de uma array, adicionando novos elementos enquanto remove elementos antigos.

// primeiro exemplo: meses, acrescentar
let meses = ["janeiro", "março", "abril", "junho", "julho"];
meses.splice(1, 0, "fevereiro");

// neste exemplo acrescentamos o mês fevereiro, antes a ordem era janeiro: 0/ março: 1,
// quando acrescentamos o fevereiro a ordem virou janeiro: 0/ fevereiro: 1/ merço: 2.
console.log(meses);

// segundo exemplo: meses, substituir;
meses.splice(4, 1, "maio");

// neste exemplo substituimos o mês junho, a ordem 4 passa a ser do mês maio.
console.log(meses);

// terceiro exemplo: meses, remover;
meses.splice(5, 1);

// neste exemplo removemos o mês julho.
console.log(meses);