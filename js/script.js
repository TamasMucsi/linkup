fetch("navbar.html")
.then(response => response.text())
.then(data => {
document.getElementById("navbar-ref").innerHTML = data;
})
.catch(error => console.error("Loading failed! :(", error));



fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer").innerHTML = data;
    })
    .catch(error => console.error("Loading failed", error));