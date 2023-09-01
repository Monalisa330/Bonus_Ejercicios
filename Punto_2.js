// Calcule el cuadrado de 2 números ingresados.

let num1 = parseFloat(prompt("Ingresa el valor del primer número:"));

if (isNaN(num1)) {
    console.log("Ingresa números válidos");
} else {
    let num2 = parseFloat(prompt("Ingresa el valor del segundo número:"));

    if (isNaN(num2)) {
        console.log("Ingresa números válidos");
    } else {
        let cuadradoA = num1 * num1;
        let cuadradoB = num2 * num2;

        console.log("El cuadrado del primer número (" + num1 + ") es: " + cuadradoA);
        console.log("El cuadrado del segundo número (" + num2 + ") es: " + cuadradoB);
    }
}
