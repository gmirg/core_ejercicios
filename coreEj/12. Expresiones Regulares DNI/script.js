// 1. Realiza un programa en JS que permita al usuario insertar una cadena y valide su formato, usando expresiones regulares. Las condiciones de la cadena son:
// Empieza por un número impar
// Luego tiene un "(" y un "$"
// A continuación tiene hasta tres mayúsculas
// Por último una minúscula
// La cadena puede estar dentro de otra.

function validarDni(cadena) {
    let regExp = new RegExp(/^[0-9]{8}-[a-z]$/i);
    const resultado1 = regExp.test(cadena);
    if (resultado1) {
        let parteNumerica = cadena.substr(0, cadena.length - 2);
        let parteletra = cadena.substr(cadena.length - 1, 1);
        parteNumerica = parteNumerica % 23;
        let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(parteNumerica, parteNumerica + 1);
        if (letra != parteletra) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
        } else {
            alert('Dni correcto');
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }
    return resultado1;
};
function validarTlf(cadena) {
    let regExp = new RegExp(/^\+34-[0-9]{9}$/);
    const resultado2 = regExp.test(cadena);
    return resultado2;
};
function validarEmail(cadena) {
    let regExp = new RegExp(/^[a-z]{6}\@[a-z]{6}\.[a-z]{3}$/);
    const resultado3 = regExp.test(cadena);
    return resultado3;
};
function validarTodo() {
    let cadenaDni = document.getElementById("dni").value;
    let cadenaTlf = document.getElementById("telefono").value;
    let cadenaEmail = document.getElementById("email").value;
    if (validarDni(cadenaDni) && validarTlf(cadenaTlf) && validarEmail(cadenaEmail)) {
        alert("Datos correctos")
    } else {
        alert("Revisa los datos, no son correctos");
    }
};