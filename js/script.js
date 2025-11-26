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
    toggleSidebar()


    document.querySelectorAll('.buttonxdxd').forEach(button => {

    button.addEventListener('click', e => {
        button.classList.toggle('liked');
        if(button.classList.contains('liked')) {
            gsap.fromTo(button, {
                '--hand-rotate': 8
            }, {
                ease: 'none',
                keyframes: [{
                    '--hand-rotate': -45,
                    duration: .16,
                    ease: 'none'
                }, {
                    '--hand-rotate': 15,
                    duration: .12,
                    ease: 'none'
                }, {
                    '--hand-rotate': 0,
                    duration: .2,
                    ease: 'none',
                    clearProps: true
                }]
            });
        }
    })

});
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




