




























fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer").innerHTML = data;
    })
    .catch(error => console.error("Loading failed!", error));
