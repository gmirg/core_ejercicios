// Queremos crear un programa que trabaje con fracciones a/b. Para representar una fracción vamos a utilizar dos enteros: numerador y denominador.
// Devuelve True si es primo y False si no. 
// Devuelve True si es primo y False si no. 
function es_primo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}

// alert(es_primo(4));
// alert(es_primo(7));
// if(es_primo(7)){
//     alert("El siete es primo!!!!");
// }

function primos_rango(max){
    var resultado = [];
    for(let i=2; i<=max; i++){
        if (es_primo(i)){
            resultado.push(i);
        }
    }
    return resultado;
}

// alert(primos_rango(14));

function es_simplicable(num,den){ 
    return !(num!=den && es_primo(num) && es_primo(den)) || (num==1 || den==1); // ESTO HAY QUE CORREGIRLO
}

alert(es_simplicable(13,29)); //false
alert(es_simplicable(17,20)); //false
alert(es_simplicable(15,37)); //false
alert(es_simplicable(1000,10)); //true
alert(es_simplicable(5,5)); //true