// Navbar
let nvar = document.getElementById("navbar-ref");
if (nvar) {
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar-ref").innerHTML = data;
    })
    .catch(error => console.error("Loading failed! :(", error));
}
// Navbar 2
else{

    fetch("navbar_mainpage.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Loading failed! :(", error));
    toggleSidebar()

// Like gomb animacio
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

// Footer
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

// Sidebar cuccok
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('sidebar-collapsed');
    content.classList.toggle('content-full');
  }



// Idozito
function startTime() {
      const today = new Date();
      let Y = today.getFullYear();
      let M = today.getMonth()+1;
      let d = today.getDate();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('ora').innerHTML = Y + "." + M + "." + d + " " +  h + ":" + m + ":" + s;
      setTimeout(startTime, 1000);
    }
    
    function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
    }


// letoltes szamlalo
let downloadCount = 5376867;
const increaseChance = 0.1;

function updateCounter() {
    if (Math.random() < increaseChance) {
        downloadCount++;
        document.getElementById("dwnload").innerHTML = 
            downloadCount;
    }
}

setInterval(updateCounter, 1000);