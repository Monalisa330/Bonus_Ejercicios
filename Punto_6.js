/* Un maestro desea saber el porcentaje de hombres y de mujeres que hay en
un grupo de estudiantes*/

let mujeres = NaN;
let hombres = NaN;

while (isNaN(mujeres)) {
    mujeres = parseFloat(prompt("Ingrese el número de mujeres:"));
    if (isNaN(mujeres)) {
        console.log("Por favor, ingresa un número válido para el número de mujeres.");
    }
}

while (isNaN(hombres)) {
    hombres = parseFloat(prompt("Ingrese el número de hombres:"));
    if (isNaN(hombres)) {
        console.log("Por favor, ingresa un número válido para el número de hombres.");
    }
}

let total = mujeres + hombres;

console.log("El porcentaje de mujeres es: " + (mujeres / total) * 100 + "%");
console.log("El porcentaje de hombres es: " + (hombres / total) * 100 + "%");
