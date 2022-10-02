function draw() {
    const dimension1 = 4
    const dimension2 = 10
    let spaces = "";
    let stars = "";
    let rows = "";
    debugger;
    for (let i = dimension1; i <= dimension2; i += 2) {
        let map = (dimension2 - i) / 2;
        for (let j = 0; j < map; j++) {
            spaces += "*";
        }
        for (let k = 0; k < i; k++) {
            stars += "+";
        }
        rows += spaces + stars + "\n";
        spaces = "";
        stars = "";
    }
    alert(rows);
}
draw()
// for (f = 10; f >= 1; f--) {
//     for (c = 2; c <= 9 - f; c++)
//         document.write("&nbsp");
//     for (c = f -.1; c >= 1; c--) {
//         document.write("*");
//     }
//     document.write("</br>");
// }fun