// ===============================
// MENU MOBILE
// ===============================

function toggleMenu() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
}


// ===============================
// TAHUN OTOMATIS
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// CLOSE MENU SAAT LINK DIKLIK
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-menu")
            .classList.remove("active");
    });
});


// ===============================
// EFEK KLIK KUCING
// ===============================

const cat = document.querySelector(".walking-cat");

cat.addEventListener("click", () => {
    cat.style.animation = "none";

    setTimeout(() => {
        cat.style.animation = "walk 14s linear infinite";
    }, 100);

    alert("Meow~ 🐱♡");
});


// ===============================
// EFEK SCROLL
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);
});