/* INTERACTIVE ELEMENTS*/


/*1. HOMEPAGE - Horizontal scrolling carousel for the dress section of the Homepage.
- Implementation of horizontal scrolling carousel for the dress section of the Homepage 
when users click on the back and next buttons.
*/
let scrollContainer = document.getElementById("dressCarousel");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


//The click event listener for the back & next button allows the user to scroll back & forth by 900 pixels. 
if (backBtn && scrollContainer) {
    backBtn.addEventListener("click", function(event){
        event.preventDefault(); //added to prevent it from navigating back to a href link 
        scrollContainer.scrollBy({
            left: -900,
            behavior: "smooth" //smooth scrolling effect
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


/* 2. WEDDING GUEST DRESSES - Size Filtering Functionality
- Implementation of size filtering functionality for wedding guest dresses.
*/

// Created a function to filter the dresses by size (6,8,10,12 or All)
    function filterBySize(selectedSize) {
        // Get all dress cards
        const dressCards = document.querySelectorAll('.wedding-dress-card');
        
        // Get all filter buttons (both all-filter-button and filter-buttons)
        const allButtons = document.querySelectorAll('.all-filter-button, .filter-buttons');
        
        // Reset all button styles (inactive) - when you click away from that button
        // Must be looped through to ensure every button is reset regardless which one was clicked
        allButtons.forEach(button => {
            button.style.backgroundColor = 'rgb(237, 240, 232)';
            button.style.color = 'black';
        });
        
        // Button colour (active)
        // event.target is the specific button that was clicked
        // only the clicked button looks 'selected'
        event.target.style.backgroundColor = 'rgb(6, 75, 6)';
        event.target.style.color = 'white';
        
        // Either shows or hides the dress depending on sizes selected.
        dressCards.forEach(card => {
            if (selectedSize === 'all') {
                // Show all the dresses
                card.style.display = 'block'; //check if this should be 
            } else {
                // Check if this dress has the selected size by storing
                // all sizes of that particular dress card (e.g. 6, 8, 12)
                // querySelectorAll (nodelist) vs querySelector
                const sizeButtons = card.querySelectorAll('.size'); 
                let hasSize = false; //flag initalized (to track whether selected size is found)
                
                sizeButtons.forEach(sizeBtn => {
                    if (sizeBtn.textContent === selectedSize) {
                        hasSize = true;
                    }
                });
                
                // Show or hide the dress card
                if (hasSize) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
}

document.addEventListener('DOMContentLoaded', function() {
    
    // This sets the "All" button as active initially.
    const allButton = document.querySelector('.all-filter-button');
    if (allButton) {
        allButton.style.backgroundColor = 'rgb(6, 75, 6)'; //changes it to active style
        allButton.style.color = 'white'; //changes it to active style
        allButton.onclick = function() { 
            filterBySize('all'); 
        };
    }
    
    // AddS click events to size filter buttons
    const filterButtons = document.querySelectorAll('.filter-buttons');
    filterButtons.forEach(button => {
        if (button.textContent.includes('Size')) {
            const size = button.textContent.replace('Size ', ''); // Extracts the size number from the button text
            button.onclick = function() { 
                filterBySize(size); 
            };
        }
    });
    

});

/* 3. HOW IT WORKS PAGE - ACCORDION FUNCTIONALITY 
- Implementation of accordion in How It Works Page.
- Allows the contentBx section to expand or collapse when clicked.
*/

const accordion = document.getElementsByClassName('contentBx'); //any element with class = contentBx clicked
    //returns list of all collapsible FAQ items (HTML collection)
    for (let i = 0; i < accordion.length; i++) { //loops through each FAQ box in the accordion section
        accordion[i].addEventListener('click', function() { //+ a click event listener f/e element
            this.classList.toggle('active'); //'this' is the clicked element, toggles item to active (in CSS)
            //it also removes the active class if it is already there
        });
}

/* 4. CONTACT FORM PAGE - Contact Form Submission
- Shows an alert message upon submission of the contact form.
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





