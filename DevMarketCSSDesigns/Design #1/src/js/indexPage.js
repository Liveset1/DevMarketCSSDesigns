let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = function(e) {
    e.stopPropagation()
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
}

document.onclick = function() {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
}