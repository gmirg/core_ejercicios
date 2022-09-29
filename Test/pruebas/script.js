let dimension1 = 4
let dimension2 = 10
for (let i =  dimension1; i <= dimension2; i += 2) {
    for (let j = 0; j < dimension1; j++) {
        document.write("&nbsp");// espacio
    }
    dimension1--;
    for (let j = 0; j< dimension1 ; j++) {
        document.write("+");
    }
    document.write("</br>");    
}
// for (f = 10; f >= 1; f--) {
//     for (c = 2; c <= 9 - f; c++)
//         document.write("&nbsp");
//     for (c = f -.1; c >= 1; c--) {
//         document.write("*");
//     }
//     document.write("</br>");
// }