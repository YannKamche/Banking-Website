/***--- MOBILE MENU -----***/
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const faSolid = document.querySelector(".fa-solid");
const hLink = document.querySelectorAll('#hLink');

/***----TOGGLE MENU ON CLICK------***/
hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
})

/***---- CLOSE MENU ON CLICK ON LINK ***/
hLink.forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
    })
})

/****---TESTIMONIAL---***/
const userTexts = document.getElementsByClassName("user-text"); //An array that contains all the user-texts classes
const userPics = document.getElementsByClassName("user-pic"); //An array containing all the the user-pic classes

//showReview(): This function is activated on clicking on any image in the testimonial section
function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic"); //For any pic clicked, remove the active-pic class
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text"); //Remove the active-text on clic on any image
    }
    let i = Array.from(userPics).indexOf(event.target) //Gets the index of the click event i.e the image selected

    userPics[i].classList.add('active-pic');   //Assign the active-pic class to the image with index i with all styles included in input.css
    userTexts[i].classList.add('active-text'); //Assign the active-text class to the image with index i with all styles included in input.css
}