let button = document.getElementById("back-to-top");

button.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};