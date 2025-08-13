// get the current path URL
const currentPage = window.location.pathname;
// get the hambuger (hambuga)
const hambuga = document.getElementById("nav-hambuga");

const btnNav = document.getElementById("nav-menu");

checkWidth();

// query all links with the class "nav-button-links"
document.querySelectorAll("a.nav-button-links").forEach(link => {
    const linkPath = new URL(link.href).pathname; // get the path of the link

    // if the link path matches the current page path
    if (linkPath === currentPage) {
        link.id = "nav-active"; // set the active link
    }
});

window.addEventListener("resize", checkWidth);

function checkWidth(){
    if (window.innerWidth <= 1200) {
        hambuga.style.display = "block";
        btnNav.style.display = "none";
    } else {
        hambuga.style.display = "none";
        btnNav.style.display = "block";
    }
};

hambuga.addEventListener("click", function(){
    this.classList.toggle("open");
    btnNav.classList.toggle("fade-in");

    if(this.classList.contains("open")) {
        btnNav.style.display = "flex";
    } else {
        btnNav.style.display = "none";
    }
});