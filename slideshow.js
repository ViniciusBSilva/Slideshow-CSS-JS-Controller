let slideIndex = 1;
// let timeout;              // add

showSlides(slideIndex);

// setTimeout(plusSlides, 2000); // Change image every 2 seconds

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    // clearTimeout(timeout)              // add

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // setTimeout(plusSlides, 2000); // Change image every 2 seconds
    // timeout = setTimeout(nextSlide(slideIndex), 2000); // Change image every 2 seconds

}

// // add
// function nextSlide(currentSlide) {
//     plusSlides(currentSlide + 1);
// }