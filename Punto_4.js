/*Escribir un programa que calcule el porcentaje de un valor de un producto
que ingresamos.*/

let cantidad = NaN;
let porcentaje = NaN;

while (isNaN(cantidad)){
    cantidad = parseFloat(prompt("Ingresa una cantidad:"));
    if(isNaN(cantidad)){
        console.log("Por favor, ingresa un número válido para la cantidad.");
    }
}

while (isNaN(porcentaje)){
    porcentaje = parseFloat(prompt("Ingresa el porcentaje a calcular:"));
    if(isNaN(porcentaje)){
        console.log("Por favor, ingresa un número válido para el porcentaje.");
    }
}

let resultado = cantidad * (porcentaje / 100);
console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);
