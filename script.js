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
    event.preventDefault();
    scrollContainer.scrollBy({
        left: 900,
        behavior: "smooth"
    })
});
