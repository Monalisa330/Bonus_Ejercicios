console.log("Bienvenido al programa de becas");

const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
const promedio = parseFloat(prompt("Ingrese el promedio del estudiante:"));

if (isNaN(edad) || isNaN(promedio)) {
    console.log("Ingrese valores numéricos válidos para la edad y el promedio.");
} else {
    let montoBeca = 0;
    let mensaje = "";

    if (edad > 18) {
        if (promedio >= 9) {
            montoBeca = 200000;
        } else if (promedio >= 7.5) {
            montoBeca = 100000;
        } else if (promedio >= 6) {
            montoBeca = 50000;
        } else {
            mensaje = "Se enviará una carta de invitación para estudiar más en el próximo ciclo escolar.";
        }
    } else {
        if (promedio >= 8) {
            montoBeca = 200000;
        } else if (promedio >= 6) {
            montoBeca = 100000;
        } else {
            mensaje = "Se enviará una carta de invitación para estudiar más.";
        }
    }

    if (montoBeca > 0) {
        console.log(`El estudiante recibirá una beca de $${montoBeca}`);
    } else {
        console.log(mensaje);
    }
}
