document.querySelectorAll(".carousel").forEach(carousel => {

    const images = carousel.querySelectorAll(".carousel-img");
    let index = 0;
    let interval = null;

    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    function startCarousel() {
        interval = setInterval(() => {
            index = (index + 1) % images.length;
            showImage(index);
        }, 1500);
    }

    function stopCarousel() {
        clearInterval(interval);
        index = 0;
        showImage(index);
    }

    carousel.parentElement.addEventListener("mouseenter", startCarousel);
    carousel.parentElement.addEventListener("mouseleave", stopCarousel);

});