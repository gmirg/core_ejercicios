function userData() {
    let user = document.getElementById("nombre").value;
    fetch(`https://api.github.com/users/${user}`).then(res => res.json()).then(json => {
        var etiqueta = document.createElement("p");
        var contenido = document.createTextNode(`user: ${json.login} Número de repos: ${json.public_repos} imagen : ${json.avatar_url}`);
        etiqueta.appendChild(contenido);
        document.body.appendChild(etiqueta);
    });
}
