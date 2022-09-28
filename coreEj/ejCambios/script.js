function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
    //var total = 0;
    //efectivo.push(0); //le añadimos el 0 a la ultima casilla del array de efectivo en vez de declarar otra variable
    efectivo[efectivo.length - 1] = 0
    for (let i = 0; i < efectivo.length - 1; i++) {
        //total = total + efectivo[i] * billetesMonedas[i];         // varias formas de hacer lo mismo
        //total += efectivo[i] * billetesMonedas[i];
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }

    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100; //para redondear a dos decimales
    //efectivo.push(total);

    return efectivo;
}
function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        if (pago[i] > 0) {
            caja[i] += pago[i]
        }
    }
    return caja
}
var caja = inicializarEfectivo(1, 5, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);
const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
caja = calcularTotal(caja, billetesMonedas);

// alert(caja);

var precio = 500;
var pago = inicializarEfectivo(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
pago = calcularTotal(pago, billetesMonedas);


//alert(pago);
if (pago[pago.length - 1] - precio == 0) {
    alert('Importe exacto');
    caja = actualizarCaja(caja, pago)
    alert(caja)
} else {
    alert(pago[pago.length - 1] - precio);
    var devolver = pago[pago.length - 1] - precio
    if (devolver > caja[caja.length - 1]) {
        alert("No tenemos cambio")
    } else {
        var cambio = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        if (caja[0] * billetesMonedas[0] >= devolver) {
            cambio[0] = Math.floor(devolver / billetesMonedas[0]);
            caja[0] -= cambio[0]
        } else {
            cambio[0]= caja[0];
            caja[0]= 0;
        }
        caja = calcularTotal(caja, billetesMonedas);
        cambio = calcularTotal(cambio, billetesMonedas);
    }
}