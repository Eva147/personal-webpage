// Animation for Navbar change colour
gsap.registerPlugin(ScrollTrigger);

const tl_nav = gsap.timeline ({
  scrollTrigger: {
    trigger: '.middle-container',
    start: "-7% top",
    toggleActions: "restart none none reverse",
    },
});
tl_nav.to('header', {backgroundColor: '#FFE7D1', duration: 0.5});
tl_nav.to('#logo_name h3, .nav_link', {color: '#396362', fontWeight: 400, opacity: 1, duration: 0.5}, '-=1');


// Hide Navbar on scroll
const showAnim = gsap.from('header', {
  yPercent: -100,
  paused: true,
  duration: 0.5
  }).progress(1);
  ScrollTrigger.create({
    start: "top top",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    }
  });


// Animation for Burger and nav bar in mobile version
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_items');
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

    // Hide a menu on scroll
    document.addEventListener('scroll', () => {
      burger.classList.remove('toggle');
      nav.classList.remove('nav_active');
      navLinks.forEach((link, index) => {link.style.animation= ''});
    });
};
navSlide();



// Change colour of the menu on scroll


// Animation for Main title and nav bar
const tl_main = gsap.timeline({defaults: {ease: "expo.out"}});
const animatedTitle = document.querySelector(".animated_title");
const animatedParagraph = document.querySelector(".animated_par");
if (animatedTitle || animatedParagraph) {
  tl_main.to(".animated_title, .animated_par", {opacity: 1, duration: 2.5, stagger: .5});
  tl_main.to(".animated_title, .animated_par", {y: "0%", duration: 3, stagger: .5}, "-=3");
  tl_main.fromTo("nav", {opacity: "0"}, {opacity:"1", duration: 2}, "-=2");  
}

// Animation for About title
const tl_about = gsap.timeline({defaults: {ease: "expo.out"}});
const animatedAboutTitle = document.querySelector(".animated_about-title");
if (animatedAboutTitle) {
  tl_about.to(".animated_about-title", {opacity: 1, duration: 3, stagger: .5});
  tl_about.to(".animated_about-title", {y: "0%", duration: 2.5, stagger: .5}, "-=3");  
}

// Animation for all texts
function animateText(elem) {

    gsap.fromTo(elem, {y: "30px", opacity: 0, autoAlpha: 0}, {
      duration: 3, 
      y: 0,
      opacity: 1,
      autoAlpha: 1, 
      ease: "expo.out", 
      overwrite: "auto"
    });
}

document.addEventListener("DOMContentLoaded", function() {

    // all text elements 
    gsap.utils.toArray("._activeText").forEach(function(elem) {
        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateText(elem) }
        });
    });
});


// Animation for Monograms

function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

const animItems = document.querySelectorAll(".monogram_svg");

if (animItems.length > 0) {
  window.addEventListener('scroll', animMonogramOnScroll);

  function animMonogramOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.getAttribute("height");

      const animItemOffset = offset(animItem);
      let animItemPoint = window.innerHeight - animItemHeight * 1.5;

      if (scrollY > (animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('monogram_active_path'); 
      }
    }
  }
}


// Current year for Footer
let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("curYear").innerHTML=currentYear;