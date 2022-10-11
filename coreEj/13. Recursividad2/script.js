// function suma(array) {
//     if (array.length === 1) {
//         return array[0];
//     } else {
//         return array.pop(0) + suma(array);
//     }
// }
const suma = (array) => array.length === 1 ? array[0]:array.pop(0) + suma(array);