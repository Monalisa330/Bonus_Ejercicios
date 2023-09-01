/*Realizar un programa en el que el usuario introduzca el número del mes (1 al
12) y se muestra al final si ese mes es de 30 o 31 días.*/

let mesNumero = parseInt(prompt("Ingrese el número del mes (1 al 12) para saber cuántos días tiene:"));

if (!isNaN(mesNumero) && mesNumero >= 1 && mesNumero <= 12) {
    switch (mesNumero) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("El mes tiene 31 días");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("El mes tiene 30 días");
            break;
        case 2:
            console.log("Febrero tiene 28 días (o 29 en años bisiestos)");
            break;
        default:
            console.log("Ingrese un número válido de mes (1 al 12).");
            break;
    }
} else {
    console.log("Ingrese un número válido de mes (1 al 12).");
}
