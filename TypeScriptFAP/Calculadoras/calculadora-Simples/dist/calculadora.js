"use strict";
let valorVisor = "";
function adicionarNumero(numero) {
    valorVisor += numero;
    const visor = document.getElementById('visor');
    visor.value = valorVisor;
}
function adicionarOperador(operador) {
    valorVisor += operador;
    const visor = document.getElementById('visor');
    visor.value = valorVisor;
}
function calcular() {
    try {
        valorVisor = eval(valorVisor).toString();
        const visor = document.getElementById('visor');
        visor.value = valorVisor;
    }
    catch (e) {
        const visor = document.getElementById('visor');
        visor.value = 'ERRO!';
        valorVisor = '';
    }
}
function limparVisor() {
    valorVisor = '';
    const visor = document.getElementById('visor');
    visor.value = '';
}
