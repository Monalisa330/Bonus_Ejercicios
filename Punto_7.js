/*Escriba un algoritmo para saber si un número es par o impar*/

let num = NaN;

while (isNaN(num)) {
    num = parseInt(prompt("Ingrese un número para saber si es par o impar:"));
    if (isNaN(num)) {
        console.log("Ingrese un número válido");
    }
}

if (num % 2 === 0) {
    console.log(num + " es un número par");
} else {
    console.log(num + " es un número impar");
}
