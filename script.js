// ==========================================
// MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// EMAIL FORM
// ==========================================

const emailForm = document.querySelector(".email-form");

emailForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailForm.querySelector("input").value;

    if (email) {

        alert(
            "Thanks! " + email +
            " has been added."
        );

        emailForm.reset();

    }

});


// ==========================================
// BUY BUTTONS
// ==========================================

const buyButtons = document.querySelectorAll(".buy-button");

buyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.closest(".price-card");

        const plan = card.querySelector("h3").textContent;

        alert(
            "You selected the " +
            plan +
            " plan."
        );

    });

});


// ==========================================
// GET STARTED BUTTONS
// ==========================================

const getStartedButtons =
    document.querySelectorAll(".cta-primary");

getStartedButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        document
            .querySelector(".email-form")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
