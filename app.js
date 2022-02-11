// Current year for Footer
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("curYear").innerHTML=currentYear;
console.log(currentYear);
        

// Burger animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_list');
    const navLinks = document.querySelectorAll('.nav_link');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav_active');
        // Animate links
        navLinks.forEach((link, index) => {
            link.style.animation
            ? link.style.animation = ''
            : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

