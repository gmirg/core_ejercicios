/*
   1. Completar la función muestra de JavaScript para que realice lo siguiente:
      1.1 Ocultar el enlace Seguir leyendo.
      1.2 Mostrar el texto incluido dentro del span
   
   2. Una vez acabada esta parte, realizar lo siguiente:
      2.1 Crear un nuevo evento en el enlace2 que llamará a la función oculta().
      2.2 Dicha función ocultará el enlace2, el texto el span y volverá a mostrar el enlace Seguir leyendo.
   
      3 Cambia todos los ejercicios de funciones para eliminar todos los alert y los prompts.
*/

//1.1
function muestra() {
    var enlace1 = document.getElementById ('enlace1');
    enlace1.style.display='none';
 //1.2
    var span = document.getElementById('adicional');
    span.style.display='inline';
 //damos visibilidad al enlace 2 para poder hace el siguiente ejercicio
    var enlace2 = document.getElementById('enlace2');
    enlace2.style.display='inline';
 }
 
 //2
 function oculta (  ) {
    var enlace1 = document.getElementById ('enlace1');
    enlace1.style.display='inline';
 
    var span = document.getElementById('adicional');
    span.style.display='none'
 
    var enlace2 = document.getElementById('enlace2');
    enlace2.style.display='none'
 }