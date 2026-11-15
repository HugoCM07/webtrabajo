function escribir(valor) {
    const pantalla = document.getElementById("pantalla");
    const valorActual = pantalla.value;

    if (valor === "x") {
        valor = "*";
    }

    if (valorActual === "0" && valor !== "." && !/[+\-*/]/.test(valor)) {
        pantalla.value = valor;
        return;
    }

    if (valor === ".") {
        const ultimoNumero = valorActual.split(/[-+*/]/).pop();
        if (ultimoNumero.includes(".")) {
            return;
        }
    }

    if (/[+\-*/]/.test(valor) && /[+\-*/]$/.test(valorActual)) {
        pantalla.value = valorActual.slice(0, -1) + valor;
        return;
    }

    pantalla.value += valor;
}

function calcular() {
    const pantalla = document.getElementById("pantalla");
    const expresion = pantalla.value.replace(/x/g, "*");

    try {
        const resultado = Function(`"use strict"; return (${expresion});`)();
        pantalla.value = Number.isFinite(resultado) ? resultado : "Error";
    } catch (error) {
        pantalla.value = "Error";
    }
}

function borrar() {
    const pantalla = document.getElementById("pantalla");

    if (pantalla.value.length <= 1) {
        pantalla.value = "0";
        return;
    }

    pantalla.value = pantalla.value.slice(0, -1);
}