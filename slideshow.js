var index = 0;
var images;

function initSite() {
   images = document.querySelectorAll(".container img");

   setInterval(changeImage, 3000);
   
}

function changeImage() {
    images[index].classList.remove("show");

    index += 1;
    if (index >= images.length) {
        index = 0;
    }
    images[index].classList.add("show");

}