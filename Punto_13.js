/*13-Escribir un programa que al ingresar un valor del 1 al 7 imprima el día de la
semana al que corresponde.*/

let dia;
let x = parseInt(prompt("Ingresa un número del 1 al 7: "));

if (isNaN(x)) {
    console.log("Debes ingresar un número válido del 1 al 7.");
} else if (x === 1) {
    dia = "Lunes";
} else if (x === 2) {
    dia = "Martes";
} else if (x === 3) {
    dia = "Miércoles";
} else if (x === 4) {
    dia = "Jueves";
} else if (x === 5) {
    dia = "Viernes";
} else if (x === 6) {
    dia = "Sábado";
} else if (x === 7) {
    dia = "Domingo";
} else {
    console.log("El número ingresado está fuera del rango del 1 al 7.");
}

if (dia) {
    console.log("El número " + x + " corresponde a " + dia);
}
