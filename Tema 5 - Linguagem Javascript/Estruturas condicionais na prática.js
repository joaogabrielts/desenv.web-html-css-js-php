function calculadoradeImc() {
  let peso = eval(prompt("Qual é seu Peso"));
  let altura = eval(prompt("Qual é seu Altura"));

  let paragrafoPeso = document.getElementById("Peso");
  paragrafoPeso.innerHTML = `Seu Peso: ${peso}(kg)`;
  let paragrafoAltura = document.getElementById("altura");
  paragrafoAltura.innerHTML = `Seu Peso: ${altura}(m)`;

  let classificacaoImc = document.getElementById("classificacao");
  let paragrafoTotal = document.getElementById("total");

  let calculadoraImc = peso / (altura * altura);
  console.log(calculadoraImc);

  if (calculadoraImc < 18.5) {
    classificacaoImc.innerHTML = "Abaixo do peso";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  } else if (calculadoraImc >= 18.6 && calculadoraImc <= 24.9) {
    classificacaoImc.innerHTML = "Peso ideal";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  } else if (calculadoraImc >= 25.0 && calculadoraImc <= 29.9) {
    classificacaoImc.innerHTML = "Levemente acima do peso";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  } else if (calculadoraImc >= 30.0 && calculadoraImc <= 34.9) {
    classificacaoImc.innerHTML = "Obesidade Grau 1";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  } else if (calculadoraImc >= 35.0 && calculadoraImc <= 39.9) {
    classificacaoImc.innerHTML = "severa";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  } else {
    classificacaoImc.innerHTML = "Obesidade 3 (morébida)";
    paragrafoTotal.innerHTML = `Seu IMc ${calculadoraImc.toFixed(2)} `;
  }
}
calculadoradeImc();
