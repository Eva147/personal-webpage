// Current year for Footer
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("curYear").innerHTML=currentYear;
console.log(currentYear);
        

// Animation for Burger and nav bar in mobile version
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

// Animation for Titles
const tl = gsap.timeline({defaults: {ease: "expo.out"}});
tl.to(".animated_title, .animated_par", {opacity: 1, duration: 2.5, stagger: .5});
tl.to(".animated_title, .animated_par", {y: "0%", duration: 2.5, stagger: .5}, "-=3");
tl.fromTo("nav", {opacity: "0"}, {opacity:"1", duration: 1}, "-=2");

// const tl2 = gsap.timeline({defaults: {ease: "expo.out"}});
// tl.to(".animated_title, .animated_par", {opacity: 1, duration: 2.5, stagger: .5});
// tl.to(".animated_title, .animated_par", {y: "0%", duration: 2.5, stagger: .5}, "-=3");
// tl.fromTo("nav", {opacity: "0"}, {opacity:"1", duration: 1}, "-=2");


