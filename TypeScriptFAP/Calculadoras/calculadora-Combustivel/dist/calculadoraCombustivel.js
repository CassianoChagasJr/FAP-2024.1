"use strict";
const botao = document.getElementById('btn');
botao.addEventListener("click", () => {
    const entradaAcool = document.getElementById("alcool");
    const entradaGasolina = document.getElementById("gasolina");
    const alcool = parseFloat(entradaAcool.value);
    const gasolina = parseFloat(entradaGasolina.value);
    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
        alert("Insira valores validos. Ex: Preço da Gasolina e preço do Álcool");
        return;
    }
    let resultado;
    const razao = alcool / gasolina;
    if (razao <= 0.7) {
        resultado = "Abasteça com alcool";
    }
    else {
        resultado = "Abasteça com gasolina";
    }
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = resultado;
});
