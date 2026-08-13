

function maiordeidade(){
let idade = 18;
    if(idade >= 18){
 console.log("Maior de idade");
 
} else{
    console.log("Menor de idade");
    
}
}

function VerificarNumeroPar(){
   let numero_par = prompt("Número")

if(numero_par%2 == 0){
    alert("Número é par")
    console.log(`valor${numero_par}`);
    
} else{
    alert("Número é impar")
}
}




function VerificacaoHorario(){
let tag = document.getElementById("demo")
console.log(tag);

let hora = new Date().getHours()

if( hora < 12){
    tag.innerHTML = "Bom diaa"
    console.log("Bom dia");
    
}else if(hora < 18){
    tag.innerHTML = "Boa tarde"
    console.log("Boa tarde");
    
} else{
    tag.innerHTML = "Boa noite"
    console.log("Boa noite");
    
}
}
VerificacaoHorario()


function testededias(){
    let dia = 2

switch (dia) {
    case 1:
        console.log("Domingo")
        break

    case 2:
        console.log("Segunda")
        break

    case 3:
        console.log("Terça")
        break

    default:
        console.log("Dia inválido")
}
}