function esLetra(caracter) {
    let ascii = caracter.charCodeAt(0);
    return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123) || ascii == 225 || ascii == 233 || ascii == 237 || ascii == 243 || ascii == 250;
}
​
function esNumero(numero) {
    let ascii = numero.charCodeAt(0);
    return (ascii > 47 && ascii < 58);
}
​
function esMayuscula(car) {
    let ascii = car.charCodeAt(0);
    return (ascii > 64 && ascii < 91);
}
​
function esMinuscula(car) {
    let ascii = car.charCodeAt(0);
    return (ascii > 96 && ascii < 123);
}
​
function esSimbolo(car) {
    let ascii = car.charCodeAt(0);
    return (ascii > 32 && ascii < 48) || (ascii > 57 && ascii < 65);
}
​
function eliminaEspaciosInicio(texto) {
    let texto2 = '';
    let i = 0;
    while (texto[i] == ' ') {
        i++;
    }
    for (let j = i; j < texto.length; j++) {
        texto2 += texto[j];
    }
    return texto2;
}
​
/* añade cada palabra de una frase a un array*/
function separarPalabras(frase1) {
    let palabra = "";
    let array = [];
    for (i = 0; i < frase1.length; i++) {
        if (frase1[i] != " ") {
            palabra = palabra + frase1[i];
        } else if (frase1[i] == " " || i - 1 == (frase1.length - 1)) {
            array.push(palabra);
            palabra = "";
        }
        if (i == frase1.length - 1) {
            array.push(palabra);
        }
    }
    return array
}
​
/*Todos los nombres deben empezar por mayúsculas y el campo 
no admite números o símbolos, sólo letras. Se trata de un campo obligatorio.*/
function comprobarNombreOapellido(campo) {
    var nombre = campo.value;
    var seguir = true;
​
    nombre = eliminaEspaciosInicio(nombre);
​
    if (nombre == '') {
        alert('El campo ' + campo.id + ' es obligatorio.');
        seguir = false;
    } else {
        var nombres = separarPalabras(nombre);
        for (let i = 0; i < nombres.length; i++) {
            if (!esMayuscula(nombres[i][0])) {
                alert("El " + campo.id + " tiene que empezar por mayuscula.");
                seguir = false;
            }
        }
        if (seguir) {
            let i = 0;
            
            while (i < nombre.length && (esLetra(nombre[i]) || nombre[i] == ' ')) {
                i++;
            }
            if (i < nombre.length) {
                alert("No se pueden poner numeros o simbolos en el " + campo.id + ".");
                seguir = false;
            }
        }
    }
    return seguir;
}
​
/* Separa cada campo de un texto que esta separado por comas, 
en casillas de un array*/
function separarPorComas(frase1) {
    let palabra = "";
    let array = [];
    for (i = 0; i < frase1.length; i++) {
​
        if (frase1[i] != ",") {
            palabra = palabra + frase1[i];
        } else if (frase1[i] == "," || i - 1 == (frase1.length - 1)) {
            array.push(palabra);
            palabra = "";
        }
        if (i == frase1.length - 1) {
            array.push(palabra);
        }
​
    }
    return array
}
​
/* Formato: Tipo vía/ Nombre vía, Número, Resto de Datos
 (piso, portal...etc), CP, Población y País (separados por ,).
 Se trata de un campo obligatorio*/
function comprobarDireccion() {
    var direccion = document.getElementById("direccion").value;
    var seguir = true;
    if (direccion == '') {
        alert('El campo direccion es obligatorio.');
        seguir = false;
    } else {
        var direc = separarPorComas(direccion);
        if (direc.length != 6) {
            alert('Falta algun dato del campo direccion.')
            seguir = false;
        }
​
​
        var via = separarPalabras(direc[0]);
        if (seguir && via[0][via[0].length - 1] != '/') {
            alert("Introduce bien el tipo de via y su nombre. Ej: Calle/ Bravo Murillo");
            seguir = false;
        }
​
        var numero = eliminaEspaciosInicio(direc[1]);
        if (seguir) {
            for (let i = 0; i < numero.length; i++) {
                if (!esNumero(numero[i])) {
                    alert("No has introducido bien el numero de la direccion.")
                    seguir = false;
                }
            }
        }
        if (seguir) {
            var cp = eliminaEspaciosInicio(direc[3]);
            if (cp.length != 5) {
                alert("Introduce bien el codigo postal");
                seguir = false;
            } else {
                for (let i = 0; i < 5; i++) {
                    if (!esNumero(cp[1])) {
                        alert("Introduce bien el codigo postal");
                        seguir = false;
                    }
                }
            }
        }
        if (seguir) {
            for (let i = 0; i < direc[4].length; i++) {
                if (!esLetra(direc[4][i])) {
                    alert('Introduce bien el nombre de la poblacion');
                    seguir = false;
                }
            }
        }
        if (seguir) {
            for (let i = 0; i < direc[5].length; i++) {
                if (!esLetra(direc[5][i])) {
                    alert('Introduce bien el nombre del pais');
                    seguir = false;
                }
            }
        }
    }
    return seguir;
}
​
function separarEmail(mail) {
    let direccion = "";
    let nombreDom = '';
    let restoDominio = '';
    let array = [];
    let i = 0;
    while (i < mail.length && mail[i] != '@') {
        direccion += mail[i];
        i++;
    }
    array.push(direccion);
​
    let j = i + 1;
    while (j < mail.length && mail[j] != '.') {
        nombreDom += mail[j];
        j++;
    }
    array.push(nombreDom);
​
    let k = j + 1;
    for (let k = j + 1; k < mail.length; k++) {
        restoDominio += mail[k];
    }
    array.push(restoDominio);
    return array;
}
​
/*Comprueba que el caracter pasado como parametro es un caracter válido
en la direccion de un email*/
function esCaracterDireccion(caracter) {
    let ascii = caracter.charCodeAt(0);
    return (ascii > 47 && ascii < 58) || (ascii > 96 && ascii < 123) || (ascii == 46) || (ascii == 95);
}
​
/*Formato correcto: dirección(puede admitir puntos y guiones bajos)@nombreDominio.RestoDominio.
 Se trata de un campo obligatorio.*/
function comprobarEmail(mail) {
    var seguir = true;
​
    if (mail == '') {
        alert('El campo Email es obligatorio.');
        seguir = false;
    } else {
        var mail_separado = separarEmail(mail);
        let i = 0;
        while (i < mail_separado[0].length && esCaracterDireccion(mail_separado[0][i])) {
            i++;
        }
        if (i < mail_separado[0].length) {
            alert("No es una dirección de correo correcta");
            seguir = false;
        }
​
        let j = 0;
        while (j < mail_separado[1].length && esMinuscula(mail_separado[1][j])) {
            j++;
        }
        if (j < mail_separado[1].length) {
            alert("No es un dominio de correo correcto 1");
            seguir = false;
        }
​
        let k = 0;
        while (k < mail_separado[2].length && (esMinuscula(mail_separado[2][k]) || esMayuscula(mail_separado[2][k]) || mail_separado[2][k] == '.')) {
            k++;
        }
        if (k < mail_separado[2].length) {
            alert("No es un dominio de correo correcto 2");
            seguir = false;
        }
    }
    return seguir;
}
​
/*Mismo formato y además debe coincidir con el rellenado anteriormente, 
va a servir de usuario en el login. Se trata de un campo obligatorio.*/
function verificarEmail(mail) {
    var seguir = true;
    if (mail == '') {
        alert('El campo Confirmar Email es obligatorio.');
        seguir = false;
    } else {
        if (document.getElementById("email").value != mail) {
            alert("No coinciden los campos de email");
            seguir = false;
        }
    }
    return seguir;
}
​
function separaLetraDNI(dni) {
    let numero = '';
    let letra = '';
    for (let i = 0; i < dni.length; i++) {
        if (i == dni.length - 1) {
            letra += dni[i];
        } else {
            numero += dni[i];
        }
    }
    return [numero, letra];
}
​
/*Debe ser un DNI válido. Se trata de un campo obligatorio*/
function comprobarDNI() {
    var dni = document.getElementById('dni').value;
    dni = eliminaEspaciosInicio(dni);
    var dni_separado = separaLetraDNI(dni);
    var seguir = true;
​
    if (dni == '') {
        alert('El campo DNI es obligatorio.');
        seguir = false;
    } else if (dni.length != 9) {
        alert('El DNI no es correcto.1');
        seguir = false;
    } else {
        for (let i = 0; i < dni_separado[0].length; i++) {
            if (!esNumero(dni_separado[0][i])) {
                alert('El DNI no es correcto.2');
                seguir = false;
            }
        }
        var codigoLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var calculoLetra = codigoLetra[dni_separado[0] % 23];
        if (seguir && !esMayuscula(dni_separado[1])) {
            alert('El ultimo caracter del DNI no es una letra en mayúscula.');
            seguir = false;
        } else if (seguir && esMayuscula(dni_separado[1]) && dni_separado[1] != calculoLetra) {
            alert('La letra no coincide.');
            seguir = false;
        }
    }
    return seguir;
}
​
​
function comprobarIntereses() {
    var interes = document.getElementById("intereses").value;
    var seguir = true;
    var intereses;
    var correctos = [];
    if (interes == '') {
        alert('El campo intereses es obligatorio');
        seguir = false;
    } else {
        intereses = separarPorComas(interes);
        if (intereses.length > 3) {
            alert('Has introducido más de 3 opciones en el campo intereses.')
            seguir = false;
        }
​
        for (let i = 0; i < intereses.length; i++) {
            intereses[i] = eliminaEspaciosInicio(intereses[i]);
            alert(intereses[i]);
            if (intereses[i] == "mercado inmobiliario" || intereses[i] == "bolsa" || intereses[i] == "bienes estatales") {
                correctos.push(intereses[i]);
            }
        }
        if (correctos.length == 0) {
            alert("Los intereses no son validos.");
            seguir = false;
        }
    }
    return seguir;
}
​
​
/*Mínimo 8 caracteres y máximo 20, debe contener al menos una mayúscula,
 al menos una minúscula, al menos dos números y al menos un símbolo. 
 Se trata de un campo obligatorio.*/
function comprobarPassword() {
    var password = document.getElementById('password').value;
    var seguir = true;
    var hayMinus = false;
    var hayMayus = false;
    var contNum = 0;
    var haySimbol = false;
    if (password == '') {
        alert("El campo contraseña es obligatorio.");
        seguir = false;
    } else if (password.length < 8 || password.length > 20) {
        alert("La contraseña debe tener mínimo 8 caracteres y máximo 20.");
        seguir = false;
    } else {
        let i = 0;
        while (i < password.length && (!hayMayus || !hayMinus || !haySimbol || contNum < 2)) {
            if (esNumero(password[i])) {
                contNum++;
            } else if (esMayuscula(password[i])) {
                hayMayus = true;
            } else if (esMinuscula(password[i])) {
                hayMinus = true;
            } else if (esSimbolo(password[i])) {
                haySimbol = true;
            }
            i++;
        }
        if (!hayMayus || !hayMinus || !haySimbol || contNum < 2) {
            alert('La contraseña no cumple los requisitos.')
            seguir = false;
        }
    }
    return seguir;
}
​
​
​
function comprobar() {
    if (comprobarNombreOapellido(document.getElementById("nombre")) &&
        comprobarNombreOapellido(document.getElementById("apellidos")) &&
        comprobarEmail(document.getElementById("email").value) &&
        verificarEmail(document.getElementById("email_confirmar").value) &&
        comprobarDNI() &&
        comprobarPassword() &&
        comprobarIntereses()) {
        alert("Registro completado con éxito!")
    } else {
        alert('vuelve a intentarlo.')
    }
}
​
​
​
​
//calle/ hola, 8, Resto de Datos , 39612, Poblacin , pais