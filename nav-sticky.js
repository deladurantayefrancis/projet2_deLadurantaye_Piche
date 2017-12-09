var navbar = null;
var sticky = null;

window.onload = function() {
    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;
};

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};