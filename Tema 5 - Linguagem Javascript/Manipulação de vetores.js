const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matriz);
const vetor = matriz.flat(); // transforma e array simples
console.log(vetor);

const valores = [3, 1, 7, 8, 4];
console.log(valores);
valores.push(5); //adicona no final

valores.unshift(6); //adiciona no começo
console.log(valores);

valores.shift(); // excluir no inicio = 3
console.log(valores);

valores.pop(); // excluir no final = 5
console.log(valores);

let nomes = ["João", "ana", "lone"];
let nomes2 = ["kevilly", "Davi", "marcelo"];

const junta_arry = nomes.concat(nomes2);
console.log("====================================");
console.log(junta_arry);
console.log("====================================");

let dias = ["Dom", "seg", "ter", "qua", "qui", "sex", "sab"];
const dias_uteis = dias.slice(1, 6); //slice(início, fim) → inclui o início, exclui o fim.
console.log("====================================");
console.log(dias);
console.log(dias_uteis);
console.log("====================================");

let vetor = [1,2,3,4,5,6,7]
console.log(vetor);
vetor.splice(2,3)
console.log(vetor);
vetor.splice(2,0,"x","x")
console.log(vetor);


