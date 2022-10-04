let objeto = {
    "localidade 1": {
    "Continente": "África",
    "País": "Angola",
    "Capital": "Luanda"
    },
    "localidade 2": {
    "Continente": "América do Norte",
    "País": "Estados Unidos",
    "Capital": "Washington DC"
    },
    "localidade 3": {
    "Continente": "América Central",
    "País": "México",
    "Capital": "Cidade do México"
    },
    "localidade 4": {
    "Continente": "América do Sul",
    "País": "Brasil",
    "Capital": "Brasília"
    },
    "localidade 5": {
    "Continente": "Europa",
    "País": "Espanha",
    "Capital": "Madri"
    },
    "localidade 6": {
    "Continente": "Europa",
    "País": "Alemanha",
    "Capital": "Berlim"
    },
    "localidade 7": {
    "Continente": "Oceania",
    "País": "Austrália",
    "Capital": "Camberra"
    },
    "localidade 8": {
    "Continente": "Ásia",
    "País": "Japão",
    "Capital": "Tóquio"
    }
}
//Código para obtener el país de la localidade 8
console.log(objeto["localidade 8"].País);

// Código que permite añadir una localidad a tu elección
// a las capitales de las localidades, dado que va a ser el dato que más vamos a consultar
console.log(objeto["localidade 9"] = { "Continente": "Asia Sur", "País": "Tailandia", "Capital": "Bangkok"});
console.log(objeto["localidade 9"]);
// Modifica la localidade 4, añadiendo el número de habitantes
console.log(objeto["localidade 4"]["habitantes"] = "10.000");
console.log(objeto["localidade 4"].Habitantes);