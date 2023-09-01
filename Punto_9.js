/*Realizar un algoritmo que calcule el porcentaje de descuento que va a tener
un cliente dependiendo de los siguientes datos:
- Si el cliente compró un carro o una moto, el descuento será del 15%
- Si el cliente compró una bicicleta o una patineta, el descuento será del
10%
- Si el cliente compró un scooter eléctrico, el descuento será del 5%*/


console.log("Bienvenido al concesionarío");
console.log("Qué producto desea comprar:", "Carro", "Moto", "Bicicleta", "Patineta", "Scooter");

const productoComprado = prompt("Ingrese el tipo de vehículo");
const valorProductoComprado = parseFloat(prompt("Ingrese el valor del vehículo"));

function realizarDescuento(producto, valorProductoComprado) {
    let descuento = 0;

    switch (producto) {
        case "Carro":
        case "carro":
        case "Moto":
        case "moto":
            descuento = 0.15;
            break;
        
        case "Bicicleta":
        case "bicicleta":
        case "Bisicleta":
        case "bisicleta": 
        case "Vicicleta":
        case "vicicleta":
        case "Patineta":
        case "patineta":
            descuento = 0.1;
            break;

        case "Scooter":
        case "scooter":
        case "Escoter":
        case "escoter":
        case "Scoter": 
        case "scoter":
            descuento = 0.05;
            break;

        default: 
            console.log("Ingrese un producto valido");
            break;
    }

    const montoDescuento = valorProductoComprado * descuento;
    const precioConDescuento = valorProductoComprado - montoDescuento;

    console.log("El valor final del producto que usted a adquirido es de:", precioConDescuento);
    console.log("Más detalles de la compra");
    return {
        descuento: descuento * 100,
        montoDescuento: montoDescuento,
        precioConDescuento: precioConDescuento
    };
}

realizarDescuento(productoComprado, valorProductoComprado);
