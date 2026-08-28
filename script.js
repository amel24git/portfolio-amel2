/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   PROJECT BUTTON
========================================= */

function showProject(projectName) {

    alert(
        "✨ " +
        projectName +
        " ✨\n\n" +
        "Project ini akan segera dikembangkan lebih lanjut! 💗"
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "💌 Terima kasih, " +
        name +
        "!\n\nPesan kamu berhasil dikirim. ✨"
    );

    contactForm.reset();

});


/* =========================================
   SCROLL ANIMATION
========================================= */

const cards =
    document.querySelectorAll(
        ".about-card, .skill-card, .project-card"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


/* =========================================
   RANDOM FLOATING HEART
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.color = "#f49ac2";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "0";

    heart.style.animation =
        "heartFloat 5s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}


/* =========================================
   HEART ANIMATION
========================================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes heartFloat {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    20% {

        opacity: 0.8;

    }

    100% {

        transform:
            translateY(-100vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);


/* Membuat hati setiap beberapa detik */

setInterval(createHeart, 1800);