// 1. Solicita una cadena al usuario e indica la cantidad de veces que aparece la a en las palabras impares
function aEnImpares(frase) {
    frase = prompt("Introduce una frase").split(" ");
    let impares = frase.filter( palabra => { return frase.indexOf(palabra) % 2 == 0 });  
    console.log(impares);
    let cuantasAs = 0;
    cuantasAs = impares.forEach(palabra => {
        for(l of palabra) {
            debugger;
            l == "a" ? cuantasAs++ :false;
        }
    })
    debugger;
    alert(cuantasAs + " veces" );
}
aEnImpares();

// 2. Solicita una cadena al usuario y devuélvela invertida Ej: "Hola, ¿qué tal estás?" -> estás? tal ¿qué Hola,
