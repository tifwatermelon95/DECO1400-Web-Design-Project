//Dress Carousel - Horizontal scroll functionality

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('dressContainer');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    const scrollAmount = 300; // Amount to scroll on each button click

    prevButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    nextButton.addEventListener('click', function() {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});