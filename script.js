// ==========================
// DARK MODE
// ==========================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }

});

// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

    } else {

        alert("Thank You " + name + "! Your message has been sent.");

        contactForm.reset();

    }

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==========================
// WELCOME MESSAGE
// ==========================

window.onload = function () {

    console.log("Welcome to Sheetal Ghadiya Portfolio!");

};