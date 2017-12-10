var navbar = null;
var sticky = null;
var stickyOn = false;

var navbarUpdate = function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        stickyOn = true;
    } else {
        navbar.classList.remove("sticky");
        stickyOn = false;
    }
};

window.onload = function() {
    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;

    window.addEventListener('resize', function(event) {
        if (stickyOn) {
            navbar.classList.remove("sticky");
            sticky = navbar.offsetTop;
            navbar.classList.add("sticky");
        } else {
            sticky = navbar.offsetTop;
        }

        navbarUpdate();
    })
};

window.onscroll = function() {
    navbarUpdate()
};