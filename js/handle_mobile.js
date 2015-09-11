window.onload = function(event) {
    window.onresize();
}

window.onresize = function(event) {
    // display link to home if navbar is in mobile mode
    var home_link = document.getElementById("nav-home-link");
    home_link.style.display = screen.width <= 600 ? "initial" : "none";
};
