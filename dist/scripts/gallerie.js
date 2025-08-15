// get the images in the gallery
const imgs = document.getElementsByClassName("image-gallery");

// get the modal
const modal = document.getElementById("modal");

// get the span element that closes the modal
const span = document.getElementById("close");

// get the image block inside the modal
const imgBlock = document.getElementById("imgblock");

// get the caption element inside the modal
const caption = document.getElementById("caption");

// when load, set the modal to not display
window.onload = (event) => {
    modal.style.display = "none";
}

// for with function to set the modal images
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
    
    // set the modal image and caption
    imgBlock.src = this.src;
    caption.textContent = this.alt;

    // set the modal to display
    modal.style.display = "flex";
    }
}

// when the user clicks on the span element
span.onclick = function() {
    modal.style.display = "none";
}

// when the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}