/*
Horizontal scrolling carousel for the dress section of the Homepage.
*/
let scrollContainer = document.getElementById("dressCarousel");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


//The click event listener for the back & next button allows the user to scroll back 
//& forth by 900 pixels. The behavior is set to smooth to create a smooth scrolling effect.

if (backBtn && scrollContainer) {
    backBtn.addEventListener("click", function(event){
        event.preventDefault(); //added to prevent it from navigating back to a href link 
        scrollContainer.scrollBy({
            left: -900,
            behavior: "smooth"
        });
    });
}

if (nextBtn && scrollContainer) {
    nextBtn.addEventListener("click", function(event){
        event.preventDefault(); 
        scrollContainer.scrollBy({
            left: 900,
            behavior: "smooth"
        });
    });
}

/*
Announcement Bar Message Rotation
*/

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission such as 
        // refreshing the page or navigating away
        alert('Thank you for your message! We will get back to you soon.');
        this.reset(); // Clears the form fields after submission
    });
}

console.log('script.js loaded'); // To check if script is loaded for error debugging.





