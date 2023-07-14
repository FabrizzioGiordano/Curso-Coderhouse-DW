// EL USUARIO TIENE EN SU CARTERA DE STEAM $6000. SOLO PUEDE COMPRAR JUEGOS MENORES O IGUALES A ESE PRECIO

const minimo = 100;
const maximo = 10000;
const numeroBase = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;



function calcularPrecioJuego(numeroBase) {
    const impuestoIVA = 0.21; 
    const impuestoPAIS = 0.08; 
    const impuestoTotal = impuestoIVA + impuestoPAIS;
    const precioConImpuestos = numeroBase * (1 + impuestoTotal);
    
    return precioConImpuestos.toFixed(0);
}


const precioFinal = calcularPrecioJuego(numeroBase);


if (precioFinal <= 6000){

    console.log("FELICIDADES! Puedes comprar el juego.")
    console.log("El precio del juego sin impuestos es de:$" + numeroBase)
    console.log("La cantidad de impuestos conlleva un total de:$" + (precioFinal - numeroBase))
    console.log("El precio final del juego es: $" + precioFinal);
    }

else{
    console.log("No podes comprarlo, el precio del juego de:$" + precioFinal)
    console.log("Te faltan:$" + (precioFinal - 6000))
    console.log("Consecuencias de vivir en Argentina")
    }


