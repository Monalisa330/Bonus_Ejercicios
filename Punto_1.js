//Escribir un algoritmo que valide si la suma de 2 números es positiva, negativa o cero.

// Se inicializan las variables num1 y num2 con el valor NaN (No es Un Número).
let num1 = NaN;
let num2 = NaN;

/*La condición isNaN(num1) se evalúa como true si num1 es un número válido,
 y como false si no lo es. Si es un número válido, se ejecuta el código dentro del primer bloque,
 y si no es un número válido, se ejecuta el código dentro del segundo bloque.*/

while (isNaN(num1)) {
    num1 = parseFloat(prompt("Ingresa el valor del número 1:"));
    if (isNaN(num1)) {
        console.log("Por favor, ingresa un número válido para el número 1.");
    } 
}

while (isNaN(num2)) {
    num2 = parseFloat(prompt("Ingresa el valor del número 2:"));
    if (isNaN(num2)) {
        console.log("Por favor, ingresa un número válido para el número 2.");
    }
}

let suma = num1 + num2;

if (suma < 0) {
    console.log("La suma es negativa");
} else if (suma > 0) {
    console.log("La suma es positiva");
} else {
    console.log("La suma es cero");
}
