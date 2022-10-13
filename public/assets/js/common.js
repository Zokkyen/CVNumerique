/* Call of GSAP ScrollTriger */
gsap.registerPlugin(ScrollTrigger);

/* Animation of the menu */
/* Using of GSAP Library */
/* Zoom part for each element nav-link */

let boldZoomAnimation = document.querySelectorAll('.nav-link');
boldZoomAnimation.forEach(element => {

        element.addEventListener('mouseenter', () => {
            element.style.fontWeight = "bold";
            gsap.to(element, {
                scaleX: 1.1,
                scaleY: 1.1,
                duration: 0.5
            })
        });

        element.addEventListener('mouseleave', () => {
            element.style.fontWeight = "normal";
            gsap.to(element, {
                scaleX: 1.0,
                scaleY: 1.0,
                duration: 0.5
            })
        });   
});

/* Animation of the menu */
/* Using of GSAP Library */
/* Animation of starting of the menu */
let menuAnimation = document.querySelector('.btn');
if (window.matchMedia("(max-width: 1000px)").matches) {
    menuAnimation.addEventListener('click', () => {
        let navLinks = document.querySelectorAll('.nav-link');
        let delayVar = 0.1;
        navLinks.forEach(element => {
            element.style.display = "none";
            gsap.from(element, {
                x: 800,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar, 
                force3D: true
            })
            element.style.display = "block";
            gsap.to(element, {
                x: 10,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar, 
                force3D: true
            });
            delayVar += 0.1;
        });
        delayVar = 0.1;
    })
} else {
    document.addEventListener('DOMContentLoaded', () => {
        let navLinks = document.querySelectorAll('.nav-link');
        let delayVar = 0.2;
        navLinks.forEach(element => {
            element.style.display = "none";
            gsap.from(element, {
                x: 800,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar,
                force3D: true
            })
            element.style.display = "block";
            gsap.to(element, {
                x: 10,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar,
                force3D: true
            });
            delayVar += 0.2;
        });
        delayVar = 0.2;
    })
}