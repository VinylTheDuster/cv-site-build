// get the current path URL
const currentPage = window.location.pathname;

// query all links with the class "nav-button-links"
document.querySelectorAll("a.nav-button-links").forEach(link => {
    const linkPath = new URL(link.href).pathname; // get the path of the link

    // if the link path matches the current page path
    if (linkPath === currentPage) {
        link.id = "nav-active"; // set the active link
    }
});