//Escribir un programa que calcule el área de un círculo.

let radio = NaN;

/* El radio de un círculo es la distancia desde el centro del círculo hasta cualquier punto en la 
circunferencia. La distancia es siempre un valor no negativo y, por lo tanto, 
el radio también debe ser no negativo.*/

// Bucle para validar la entrada del radio
while (isNaN(radio) || radio <= 0) {
    radio = parseFloat(prompt("Ingresa el radio del círculo (debe ser un número positivo):"));
    
    if (isNaN(radio) || radio <= 0) {
        console.log("Por favor, ingresa un número válido y positivo para el radio.");
    }
}

/*La propiedad Math.PI representa la relacion entre la longitud de 
la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159*/

// Calcular el área del círculo utilizando la fórmula A = π * r²
let area = Math.PI * radio * radio;

// Mostrar el resultado del cálculo del área
console.log("El área del círculo con radio " + radio + " es: " + area);


