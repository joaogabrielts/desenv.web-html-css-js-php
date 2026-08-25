let numeros = [];

while (numeros.length < 2) {

    let numero = Number(prompt("Digite um número inteiro positivo:"));

    if (Number.isInteger(numero) && numero > 0) {
        numeros.push(numero);
    } else {
        alert("Digite um número inteiro positivo!");
    }
}

let resultado = numeros[0] / numeros[1];

console.log(numeros);
console.log("Resultado:", resultado);