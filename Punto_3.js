/*Escribir un algoritmo que indique cuál es el mayor de tres números
ingresados.*/

let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));
let num3 = parseFloat(prompt("Ingrese el tercer número: "));

//la función `Math.max` toma los tres números como argumentos y devuelve el número máximo entre ellos
let numMayor = Math.max(num1, num2, num3);

console.log("El número máximo de los tres es: " + numMayor);
