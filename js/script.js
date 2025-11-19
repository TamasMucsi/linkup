let nvar = document.getElementById("navbar-ref");
if (nvar) {
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar-ref").innerHTML = data;
    })
    .catch(error => console.error("Loading failed! :(", error));
}
// let nvbar = document.getElementById("navbar");
// if (nvbar)
else{

    fetch("navbar_mainpage.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Loading failed! :(", error));
}
let fter = document.querySelector(".footer")
if (fter) {
    fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer").innerHTML = data;
    })
    .catch(error => console.error("Loading failed", error));

}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('sidebar-collapsed');
    content.classList.toggle('content-full');
  }

toggleSidebar()
