let tipoHuevo = parseInt(prompt("¿Cuál es el tipo de huevos que quieres comprar? Elige 1 para llevar huevos tipo 'A' o elige 2 para llevar huevos tipo 'AA'"));
let huevosAdquiridos = parseInt(prompt("Ingrese la cantidad de huevos que desea llevar"));

if (isNaN(tipoHuevo) || isNaN(huevosAdquiridos)) {
    console.log("Por favor, ingrese valores numéricos válidos para el tipo de huevo y la cantidad de huevos.");
} else {
    let precioUnitario = (tipoHuevo === 1) ? 220 : 250;
    let descuento = 0;

    if (huevosAdquiridos < 101) {
        descuento = 0;
    } else if (huevosAdquiridos < 201) {
        descuento = 0.05;
    } else if (huevosAdquiridos < 301) {
        descuento = 0.08;
    } else {
        descuento = 0.1;
    }

    let precioTotal = precioUnitario * huevosAdquiridos * (1 - descuento);
    
    if (precioTotal > 0) {
        console.log(`Usted debe pagar una cantidad de ${precioTotal}`);
    } else {
        console.log("Para validar tu compra, debes elegir 1 o 2 para poder hacer tu compra, de lo contrario no será realizada");
    }
}
