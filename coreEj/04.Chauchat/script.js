function chauChat(cargador) {
    let probabilidad = Math.random();
    var disparar = Math.round((probabilidad + Number.EPSILON) * 100) / 100;
    debugger;
    switch (true) {
        case (cargador == 0):
            alert("Tu cargador no tiene balas");
            break;
        case (cargador > 7):
            alert("Tu cargador no es reglamentario");
            break;
        case (cargador < 7 && disparar <= 0.8):
            alert("Illo, me he quedao pillá!");
            break;
        case (cargador < 7 && disparar > 0.8):
            for (let i = 0; i < cargador; i++) {
                console.log("pium!");
            }
            break;
    }
}
chauChat(5);
chauChat(0);
chauChat(10);