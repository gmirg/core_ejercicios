function chauChat(cargador) {
let disparar = (Math.floor(Math.random() * 100) / 10);
//      if (cargador == 0) {
//         alert("Tu cargador no tiene balas");
//     } else if (cargador > 7) {
//         alert("Tu cargador no es reglamentario");
//         } else if {
        
//         for (let i = 0; i < cargador; i++) {
//             console.log("pium!");
//         }
//     }
// return cargador;
// }
debugger;
switch (true) {
    case (cargador == 0):
        alert("Tu cargador no tiene balas");
        break;
    case (cargador > 7):
        alert("Tu cargador no es reglamentario");
        break;
    case (cargador < 7 && disparar <= 0.8):
        alert("Illo, me he quedao pillá!")
        break;
    case (cargador < 7 && disparar <= 0.8):
        for (let i = 0; i < cargador; i++) {
            console.log("pium!");
        }
        break;
}
}