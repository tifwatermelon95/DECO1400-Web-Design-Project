/*
Implementation of horizontal scrolling carousel for the dress section of the Homepage.
*/
let scrollContainer = document.getElementById("dressCarousel");
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("nextBtn");


//The click event listener for the back & next button allows the user to scroll back 
//& forth by 900 pixels. The behavior is set to smooth to create a smooth scrolling effect.

backBtn.addEventListener("click", (event) => {
    event.preventDefault(); //added to prevent it from navigating back to a href link #
    scrollContainer.scrollBy({
        left: -900,
        behavior: "smooth"
    })

});

nextBtn.addEventListener("click", (event) => {
    event.preventDefault(); //added to prevent it from navigating back to a href link #
    scrollContainer.scrollBy({
        left: 900,
        behavior: "smooth"
    })
});


/*
Announcement Bar Message Rotation
*/

/*
//Rotating messages - array of 2 messages
const messages = [
    "50% Off Valentine's Day Sale – Limited Time Only!",
    "New Arrivals Weekly – Discover Fresh Styles Today!"
];

let index = 0; //Tracks which message is being shown

function showNextMessage(){
    const bar = document.querySelector('.notification-bar');
    
    bar.style.opacity = '0';

    // Wait a moment, then show the next message
    setTimeout(function() {
        index += 1;
        // Switch to the other message
        if (index >= messages.length) {
            index = 0;
        }
        
        // Update the text and make it visible again
        bar.textContent = messages[index];
        bar.style.opacity = '1';
    }, 500); //Wait 500ms b/w fading out and showing the new messages
}

document.addEventListener('DOMContentLoaded', function(){
    setInterval(showNextMessage, 5000); //5000ms every rotation
});
*/




    
