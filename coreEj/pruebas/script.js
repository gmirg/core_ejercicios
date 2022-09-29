let dimension1 = 4
let dimension2 = 10
let total = "";
let space = dimension1 - 1;

for (let i = dimension1; i <= dimension2; i += 2) {   //linea 
    for (let j = 0; j < space; j++) {                     //espacios
        total += " ";
    }
    space--;

    for (let k = 0; k < i; k++) {                  //dibujamos *
        total += '*';
    }

    total += '\n'
}


space = 1

for (let i = dimension2 - 2; i >= dimension1; i -= 2) {   //linea 
    for (let j = 0; j < space; j++) {                     //espacios
        total += " ";
    }
    space++;

    for (let k = 0; k < i; k++) {                  //dibujamos *
        total += '*';
    }

    total += '\n'
}

console.log(total)