function repedicao(){
for(i = 0; i <= 10; i++){
  
  console.log(i);

}


let b = 0;

while (b <= 10) {
    console.log(b);
    b++;
}

let contador = 0;
do{
     console.log(contador);
     contador += 1;
} while (contador < 10);

var frutas = ['Laranja', 'Uva', 'Pera'];
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(var i = 0; i < frutas.length; i++){
     console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}
/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in'*/
for(var fruta in frutas){
     console.log('Nome da Fruta contida no Array: ' + frutas[fruta]);
}
}

const person= {fname:"john", lname:"doe", age:25};
let text = " "
for(let x in person){
    text += person[x] + " "
}
document.getElementById("d1").innerHTML = text

const cars = ["bmw", "volvo", "saab"]
let carsText = ""
for (let x of cars) {
    carsText += x + " ";
}
document.getElementById("d2").innerHTML = carsText