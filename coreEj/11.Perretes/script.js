function showDog() {
    fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json()).then(json => {
        element = document.querySelector("#main");
        console.l
        element.setAttribute("src", json.message);
    });
}
let dog = document.getElementById("main").getAttribute("src");

let link = "https://img.freepik.com/premium-vector/confused-dog-face-with-question-mark-blue-background_48369-13615.jpg";
function cartoonDog() {
    let check = true;
    if (dog == link) {
        alert("No podemos guardar este perro");
        check = false;
    };
    return check;
}
function alreadyDogs() {
    if (images.length == 0) {
        alert("Ya tienes este perro!");
        check = false;
    };
    return check;
}
function catchDog() {
    let images = document.querySelectorAll("div.full > img");
    
    
        let box = document.querySelector(".stamp");
        let setImage = document.createElement("img")
        setImage.setAttribute("src", dog)
        box.appendChild(setImage);
        box.setAttribute("class", "full");
    } else {
        images.forEach(element => {
            console.log(images[element].currentSrc);
        });
    }
}