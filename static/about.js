/**
 * about.js - Interactivity for FlowTodo About Page (Flask Version)
 */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------
       1. Smooth Scroll for Anchor Links
    ----------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* -----------------------------------
       2. Card Hover Animation
       (Used for mission section cards)
    ----------------------------------- */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });

    });


    /* -----------------------------------
       3. Simple Scroll Reveal Animation
    ----------------------------------- */

    const elements = document.querySelectorAll(".container, .row, .list-group");

    const revealOnScroll = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, { threshold: 0.1 });

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease";

        revealOnScroll.observe(el);

    });


    /* -----------------------------------
       4. Dynamic Footer Year
    ----------------------------------- */

    const footer = document.querySelector("footer");

    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML += `<p class="text-center mt-2">© ${year} FlowTodo Project</p>`;
    }


    /* -----------------------------------
       5. Console Developer Message
    ----------------------------------- */

    console.log(
        "%c FlowTodo About Page Loaded ",
        "color: green; font-size:16px; font-weight:bold;"
    );

    console.log(
        "Built using Flask, SQLite, HTML, CSS, JavaScript, and Bootstrap."
    );

});