// ===============================
// ANIMASI TEXT
// ===============================

const texts = [
    "Rekayasa Perangkat Lunak",
    "Web Developer",
    "UI/UX Enthusiast",
    "Creative Coder"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typingAnimation() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typingAnimation,
        deleting ? 50 : 100
    );
}

typingAnimation();


// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ===============================
// PROJECT BUTTON
// ===============================

function showProject(projectName) {

    alert(
        "✨ Projek: " +
        projectName +
        "\n\nDetail projek akan ditambahkan."
    );

}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Terima kasih, " +
        name +
        "! 💗\nPesan kamu berhasil dikirim."
    );

    contactForm.reset();

});