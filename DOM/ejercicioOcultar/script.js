function muestra() {
   var enlace1 = document.querySelector('#enlace1');
   enlace1.style.display = 'none';
   var span = document.querySelector('#adicional');
   span.style.display = 'inline';
   var enlace2 = document.querySelector('#enlace2');
   enlace2.style.display = 'inline';
}

function oculta() {
   var enlace1 = document.querySelector('#enlace1');
   enlace1.style.display = 'inline';
   var span = document.querySelector('#adicional');
   span.style.display = 'none'
   var enlace2 = document.querySelector('#enlace2');
   enlace2.style.display = 'none'
}