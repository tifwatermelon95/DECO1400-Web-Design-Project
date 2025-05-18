/* Dress Horizontal Carousel

let scrollContainer = document.getElementById("dressCarousel");
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
});
*/
document.addEventListener('wheel', function() {
  const carousel = document.getElementById('dressCarousel');
  const prevBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  // Set the scroll amount (width of one card + gap)
  const scrollAmount = 600;
  
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
  
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});