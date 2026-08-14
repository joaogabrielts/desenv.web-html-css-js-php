function arrayCores() {
  let cores = ["red", "blue", "green"];

  let cores2 = new Array("red", "blue", "green");

  let vazio1 = [];

  let vazio2 = new Array();

  document.getElementById("demo").style.color = cores[1];
}
arrayCores();

function exemplosLoop() {
  let cores = ["Black", "red", "green"];

  let text = " ";

  for (i = 0; i < cores.length; i++) {
    text += cores[i];
  }
  document.getElementById("demo1").innerHTML = text;

  let cars = ["Volvo", "bmw", "ferrari"];
  let text1 = " ";

  for (let x in cars) {
    text1 += cars[x] + " ";
  }
  document.getElementById("demo2").innerHTML = text1;

  let frutas = ["Maça", "banana", "manga"];
  let text2 = "";
  for (let x of frutas) {
    text2 += x + " "; // X é o elemento no vetor
  }
  document.getElementById("demo3").innerHTML = text2;
}
exemplosLoop();

function utilizandoJoin() {
  let valores = [1, 2, 3, 4];
  console.log(valores.join(" : : "));

  let valores1 = [4, 6, 8, 9, 2, 3];
  valores1.sort();
  console.log("====================================");
  console.log(valores1);
  console.log("====================================");

  valores1.forEach((element, index) =>
    console.log(`Valor [${index}:]: ${element}`),
  );
  let somaDobro = valores1.map((e) => e * 2).reduce((a,b) => a + b);
  console.log(`Soma 2x = ${somaDobro}`);
  
}
utilizandoJoin();
