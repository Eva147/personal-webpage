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

// Animation for Main title and nav bar
const tl_main = gsap.timeline({defaults: {ease: "expo.out"}});
tl_main.to(".animated_title, .animated_par", {opacity: 1, duration: 2.5, stagger: .5});
tl_main.to(".animated_title, .animated_par", {y: "0%", duration: 2.5, stagger: .5}, "-=3");
tl_main.fromTo("nav", {opacity: "0"}, {opacity:"1", duration: 1}, "-=2");

// Animation for About title
const tl_about = gsap.timeline({defaults: {ease: "expo.out"}});
tl_about.to(".animated_about-title", {opacity: 1, duration: 3, stagger: .5});
tl_about.to(".animated_about-title", {y: "0%", duration: 2.5, stagger: .5}, "-=3");

// Animation for all texts

function animateFromTo(elem) {

    gsap.fromTo(elem, {y: "30px", opacity: 0, autoAlpha: 0}, {
      duration: 2, 
      y: 0,
      opacity: 1,
      autoAlpha: 1, 
      ease: "expo.out", 
      overwrite: "auto"
    });
  }

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("._activeText").forEach(function(elem) {
        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateFromTo(elem) }
        });
    });
})
