/*Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el mes
al que corresponde el valor ingresado y los signos del zodiaco. Ejemplo: si el
valor ingresado es 5, entonces imprimir “Mayo”, “Tauro - Géminis”. */

let signo;
let mes = parseInt(prompt("Ingrese el mes de nacimiento: "));
console.log (mes);
let dia = parseInt(prompt("Ingrese el día de nacimiento: "));
let c = 0

if (mes == 12 && dia >= 22 && dia <= 31 || mes == 1 && dia <= 20 ){
    signo = "Capricornio";
    c = 1
}
if (mes == 2 && dia >= 20 && dia <= 29 || mes == 3 && dia <= 20 ){
    signo = "Picis";
    c = 1
}
if (mes == 3 && dia >= 21 && dia <= 31 || mes == 4 && dia <= 20 ){
    signo = "Aries";
    c = 1
}
if (mes == 4 && dia >= 21 && dia <= 30 || mes == 5 && dia <= 20 ){
    signo = "Tauro";
    c = 1
}
if (mes == 5 && dia >= 1 && dia <= 31 || mes == 6 && dia <= 21 ){
    signo = "Geminis";
    c = 1
}
if (mes == 6 && dia >= 22 && dia <= 30 || mes == 7 && dia <= 22 ){
    signo = "Cancer";
    c = 1
}
if (mes == 7 && dia >= 23 && dia <= 31 || mes == 8 && dia <= 22 ){
    signo = "Leo";
    c = 1
}
if (mes == 8 && dia >= 23 && dia <= 31 || mes == 9 && dia <= 22 ){
    signo = "Virgo";
    c = 1
}
if (mes == 9 && dia >= 23 && dia <= 30 || mes == 10 && dia <= 22 ){
    signo = "Libra";
    c = 1
}
if (mes == 10 && dia >= 23 && dia <= 31 || mes == 11 && dia <= 22 ){
    signo = "Escorpio";
    c = 1
}
if (mes == 11 && dia >= 23 && dia <= 30 || mes == 12 && dia <= 21 ){
    signo = "Sagitario";
    c = 1
}
if (c == 1){
    console.log("Tu signo del zodiaco: " + signo)
} else {
    console.log ("El signo del zodiaco no existe");
}
