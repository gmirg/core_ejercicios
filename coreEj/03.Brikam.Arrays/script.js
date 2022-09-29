// Iteraciones ⚔️ Pair Programming ⚔️

// Arrays

//  1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

let arrayVacio = [];

//  2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

let arrayNumerosPares = [0, 2, 4, 6, 8];

//  4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// Funciones

//  5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function sum(num1,num2) {
    return num1 + num2;
}

//  6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function potenciacion(num1,num2) {
    return num1^num2;
}

//  7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

// function separarPalabra(string) {
//     arr = string.split[" "];
//     return arr;
// }
//  8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(string,num) {
    for (i =0; i <= num; i++){
        resultado=string.repeat(i);   
    }
    return resultado;
}

//  9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function es_primo(num){
    var i=2;
    while(num%i != 0){ // mientras que el resto de divir el parametro introducido entre la iteración sea distinto de cero, incrementamos uno
        i++;
    }
    return i==num; // Comparamos el num de iteración en el que se ha parado y si este es igual al parametro, es primo )solo divisible por si mismo y por 1).
}


// Mezclando arrays y funciones

//  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
function ordenarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}


//  11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares
function obtenerPares(arr) {
    var result = arr.filter((n) => n % 2 != 1)
    return result;
}

//  12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray(arr) {
    return console.log('[' + arr.toString() + ']');
}

//  13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
 function arrayMapi(arr,a) {
    return a();
 }

 function a(arr) {
    alert
 }

//  14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
function eliminarDuplicados(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[i + 1]) {
                let aux = arr[j];
                arr[j] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] == arr[j+1]) {
                arr.splice(j,1);
            }
        }
    return arr;
    }
}

// Iteraciones 🏰 proyecto 🏰

// Arrays

//  15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//  16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

let holaMundo = ["Hola", "Mundo"];

//  17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//  18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

// Funciones

//  19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

function multiplicacion(num1, num2) {
    return num1 * num2;
}
//  20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

function division(num1, num2) {
    return num1 / num2;
}

//  21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
    return num % 2 == 0;
}

//  22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)

function suma(num1, num2) {
    return num1 + num2;
}
function resta(num1, num2) {
    return num1 - num2;
}
let num1 = 4;
let num2 = 2;
let arrayFunciones = [suma(num1, num2), resta(num1, num2), multiplicacion(num1, num2)]

// Mezclando arrays y funciones

//  23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
          
function ordenarArray2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
//  24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(arr) {
    var result = arr.filter((n) => n % 2 == 1)
    return result;
}
//  25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de lo–s números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(arr) {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
//  26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(arr) {
    result = 0;
    for (let i = 1; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}