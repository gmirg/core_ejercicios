function draw() {
    const dimension1 = 4
    const dimension2 = 10
    var spaces = "";
    var stars = "";
    var rows = "";
    for (let i = dimension1; i <= dimension2; i += 2) {
        let map = (dimension2 - i) / 2;
        for (let j = 0; j < map; j++) {
            spaces += "&nbsp;";
        }
        for (let k = 0; k < i; k++) {
            stars += "+";
        }
        rows += spaces + stars + "<br>";
        spaces = "";
        stars = "";
    }
    for (let i = dimension2 - 2; i >= dimension1; i -= 2) {
        let map = (dimension2 - i) / 2;
        for (let j = 0; j < map; j++) {
            spaces += "&nbsp;";
        }
        for (let k = 0; k < i; k++) {
            stars += "+";
        }
        rows += spaces + stars + "<br>" ;
        spaces = "";
        stars = "";
    }
    document.write(rows);
}
draw();