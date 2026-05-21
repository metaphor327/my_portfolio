const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.section === current) {

            link.classList.add("active");
        }
    });
});

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const targetId = link.dataset.section;

        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});