/*
Implementation of horizontal scrolling carousel for the dress section of the Homepage.
*/
let scrollContainer = document.getElementById("dressCarousel");
let backBtn = document.getElementById("backBtn");
let forwardBtn = document.getElementById("nextBtn");


//The click event listener for the back button allows the user to scroll back 
//& forth by 900 pixels. The behavior is set to smooth to create a smooth scrolling effect.
backBtn.addEventListener("click", (event) => {
    event.preventDefault();
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

/*
Implementation of accordion in How It Works Page
Allows the contentBx section to expand or collapse when clicked.
*/
const accordion = document.getElementsByClassName('contentBx'); //when contentBx clicked
    for (let i = 0; i < accordion.length; i++) { //loops through each element in the accordion section
        accordion[i].addEventListener('click', function() { //adds a click event listener for each element
            this.classList.toggle('active'); //'this' is the clicked element, toggles the item to active
            //it also removes the actie class if it is already there
        });
}