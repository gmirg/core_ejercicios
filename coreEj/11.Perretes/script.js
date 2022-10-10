function showDog() {
    fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json()).then(json => {
        element = document.querySelector("#main");
        console.l
        element.setAttribute("src", json.message);
    });
}
function catchDog() {
    let dog = document.getElementById("main").getAttribute("src");
    let link = "https://img.freepik.com/premium-vector/confused-dog-face-with-question-mark-blue-background_48369-13615.jpg";
    if (dog == link) {
        alert("No podemos guardar este perro");
    } else {
        let box = document.querySelector(".stamp");
        let setImage = document.createElement("img")
        setImage.setAttribute("src", dog)
        console.log(dog);
        console.log(setImage.src);
        box.appendChild(setImage);
        box.setAttribute("class", "full");
    }
}