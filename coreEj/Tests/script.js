fetch(`https://dog.ceo/api/breeds/list/all`).then(res => res.json()).then(json => {
    document.write(JSON.stringify(Object.values(json)));
});