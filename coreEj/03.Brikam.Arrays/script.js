// Iteraciones ⚔️ Pair Programming ⚔️

// Arrays

//  1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

//  2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

//  3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

//  4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

// Funciones

//  5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

//  6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

//  7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

//  8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

//  9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

// Mezclando arrays y funciones

//  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

//  11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

//  12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

//  13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array

//  14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

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
function ordenarArray2(array) {
    for (let i = 0; i = array.length; i++) {
        // Los últimos i elementos ya estan en posición 
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // Comprobando que el item en la iteración actual Checking if the item at present iteration
            // es mayor que la siguiente iteración
            if (arr[j] > arr[j + 1]) {
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
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
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}