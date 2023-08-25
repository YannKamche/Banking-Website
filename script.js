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

/***---- CLOSE MENU ON CLICK ON ANY NAV LINK ***/
hLink.forEach(link => {   
    link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    faSolid.classList.toggle('fa-xmark');
    })
})

/****---TESTIMONIAL---***/
const userTexts = document.getElementsByClassName("user-text"); //An array containing all the users Texts (Description)
const userPics = document.getElementsByClassName("user-pic"); //An array containing all the the user Pics (Images)

//showReview(): This function is activated on clicking on any image in the testimonial section
function showReview() {
    for (userPic of userPics) {
        userPic.classList.remove("active-pic"); //For any image clicked, remove the active-pic class (active Image)
    }
    for (userText of userTexts) {
        userText.classList.remove("active-text"); //Remove the active-text on clic on any image (active Description)
    }
    let i = Array.from(userPics).indexOf(event.target) //Gets the index of the clicked event i.e the image selected 

    userPics[i].classList.add('active-pic');   //Assign the active-pic class to the image with index i with all styles included in input.css
    userTexts[i].classList.add('active-text'); //Assign the active-text class to the image with index i with all styles included in input.css
}

/*---- FLIP PRICE CARD---***/
const toggleBtn = document.getElementById('toggleBtn'); //Gets the toggle Button id

const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');

const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');

const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');


toggleBtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})

/******--------STICKY NAVBAR------************/

const navbar = document.querySelector('header');

window.onscroll = () => {

    if(window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-b-color-gray');
    }
    else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-b-color-gray');
    }
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 350 
    ? scrollUp.classList.add("show-scroll") 
    : scrollUp.classList.remove("show-scroll");

    
}
window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const activeLink = () => {
    const section = document.querySelectorAll('section');
    const navLink = document.querySelectorAll(".link");

    let current = "home";

    section.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop -70) {
            current = section.getAttribute('id');
        }
    })

    navLink.forEach(item => {
        item.classList.remove('active-link');
        if(item.href.includes(current)) {
            item.classList.add("active-link")
        }
    })

}

window.addEventListener("scroll", activeLink);