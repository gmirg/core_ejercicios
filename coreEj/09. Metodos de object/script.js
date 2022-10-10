// 1. Formulario de contacto - Local Storage
// · Crear un formulario de contacto con los siguientes campos:
//      · Nombre
//      · Email
//      · Mensaje
// Guardar en Local Storage los datos de contacto enviados de cada usuario
function enviar() {
    let user =  [
        {nombre: document.getElementById("name").value,
        mail: document.getElementById("email").value,
        message: document.getElementById("message").value
    }];
    let storage = JSON.parse(localStorage.getItem('users'));
    console.log('El valor que esta en el almacen local es ' + typeof storage);
    if (storage == null) {
        localStorage.setItem('users', JSON.stringify(DOMStringList));
    } else {
        let subir = storage.assign({user}); 
        localStorage.setItem('users', JSON.stringify(subir));
    }
}



// function show() {
//     contenido = "";
//     var etiqueta = document.createElement("p"); 
//     for (let i=0; i<localStorage.length; i++) {
//         let key = localStorage.key(i);
//         contenido = `${key}: ${localStorage.getItem(key)}`;
//         }
//     etiqueta.appendChild(contenido);
//     document.body.appendChild(etiqueta);
// }
// show();
// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave  