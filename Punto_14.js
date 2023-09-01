/* Escribir un algoritmo para calcular el índice de masa corporal de una persona. */

console.log("Cálculo del Índice de Masa Corporal (IMC)");

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
while (isNaN(peso) || peso <= 0) {
    console.log("Por favor, ingresa un peso válido en kilogramos.");
    peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
}

let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
while (isNaN(altura) || altura <= 0) {
    console.log("Por favor, ingresa una altura válida en metros.");
    altura = parseFloat(prompt("Ingresa tu altura en metros:"));
}

let imc = peso / (altura * altura);

console.log("Tu Índice de Masa Corporal (IMC) es: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Tienes bajo peso.");
} else if (imc >= 18.5 && imc < 24.9) {
    console.log("Tu peso es normal.");
} else if (imc >= 25 && imc < 29.9) {
    console.log("Tienes sobrepeso.");
} else {
    console.log("Tienes obesidad.");
}
