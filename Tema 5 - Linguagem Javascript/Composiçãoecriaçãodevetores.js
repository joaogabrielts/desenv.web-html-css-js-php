let cores1 = ["red", "blue", "green"];
console.log(cores1);

let cores2 = new Array("red", "blue", "green");
console.log(cores2);

let vazio1 = [];
console.log(vazio1);

let vazio2 = new Array();
console.log(vazio2);

let cars = ["BMW", "VOLVO", "SAAB", "FORD"];
let text = ""
for (let x in cars) {
  text += cars[x] + " "; // Aquilo utilizamos o cars[x] pós ele pega o index do array
}
console.log(text);

let text2 = ""

for (let x of cars) {
  text2 += x + " "; // Aquilo utilizamos o x pos o x é o elemento 
}