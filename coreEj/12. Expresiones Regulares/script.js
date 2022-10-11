// 1. Realiza un programa en JS que permita al usuario insertar una cadena y valide su formato, usando expresiones regulares. Las condiciones de la cadena son:
// Empieza por un número impar
// Luego tiene un "(" y un "$"
// A continuación tiene hasta tres mayúsculas
// Por último una minúscula
// La cadena puede estar dentro de otra.
function validarFormato() {
    let frase = document.getElementById("frase").value;
    let regExp = new RegExp(/[13579]\(\$[A-Z]{1,3}[a-z]/i);
    const resultado = regExp.test(frase);
    return alert(resultado);
}
// 2. Modifica el ejercicio anterior para que la cadena empiece y termine exactamente como se indica.
regExp = (/^[13579]\(\$[A-Z]{1,3}[a-z]$/);

// 3. Modifica el ejercicio anterior para que las 4 letras puedan ser mayúsculas o minúsculas.
regExp = (/^[13579]\(\$[A-Z]{1,3}[a-z]$?/);



// 4. Realiza un formulario en el que el usuario inserte DNI, teléfono y email y valida el formato de los mismos.

// Formato DNI: 8cifras-1letra
// Formato teléfono: +34-xxxxxxxxx
// Formato email: letras@letras.3letras
// Además añade la validación de la letra del DNI, que se debe corresponder con el número según el algoritmo de la policía nacional.