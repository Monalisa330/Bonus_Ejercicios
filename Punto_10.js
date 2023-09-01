/*Escribir un algoritmo que simule las operaciones básicas de una calculadora
suma, resta, multiplicación y división; esto con 2 números que se ingresen.*/

let a, b, c;

// Solicitar al usuario ingresar dos números válidos
do {
    a = parseFloat(prompt("Escribe el primer número: "));
} while (isNaN(a));

do {
    b = parseFloat(prompt("Escribe el segundo número: "));
} while (isNaN(b));

console.log("Números ingresados:", a, b);

while (c !== 5) {
    console.log("Elige una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir");
    c = parseInt(prompt("Ingresa el número de la opción deseada:"));

    switch (c) {
        case 1:
            console.log("La suma de", a, "+", b, "=", a + b);
            break;
        case 2:
            console.log("La resta de", a, "-", b, "=", a - b);
            break;
        case 3:
            console.log("La multiplicación de", a, "*", b, "=", a * b);
            break;
        case 4:
            if (b !== 0) {
                console.log("La división de", a, "/", b, "=", a / b);
            } else {
                console.log("No se puede dividir por cero.");
            }
            break;
        case 5:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
            break;
    }
}
