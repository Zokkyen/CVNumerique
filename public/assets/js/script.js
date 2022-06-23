/* Call of GSAP ScrollTriger */
gsap.registerPlugin(ScrollTrigger);

/* Animation of my picture */

let rotateImg = () => {
    rotateAnimation.animate([{
            transform: 'rotate(45deg)'
        },
        {
            transform: 'rotate(135deg)'
        },
        {
            transform: 'rotate(225deg)'
        },
        {
            transform: 'rotate(315deg)'
        },
        {
            transform: 'rotate(405deg)'
        },
    ], {
        duration: 2000
    });

    pictureAnimation.animate([{
            transform: 'rotate(315deg)'
        },
        {
            transform: 'rotate(225deg)'
        },
        {
            transform: 'rotate(135deg)'
        },
        {
            transform: 'rotate(45deg)'
        },
        {
            transform: 'rotate(-45deg)'
        }
    ], {
        duration: 2000
    });
}
document.addEventListener("DOMContentLoaded", rotateImg);

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

/* Animation of skills */
/* Using of GSAP Library */

let indexSkills = 0;
let typeFunction = document.querySelectorAll('.typeFunction');
let ctnSkills = gsap.utils.toArray('.ctnSkills');
ctnSkills.forEach(element => {
    
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        },
        duration: 0.5,
        x: -400,
        ease: "back",
        force3D: true,
    });
});

let skillContainer = gsap.utils.toArray('.skillContainer');
skillContainer.forEach(element => {
    
    let delaySkill = 1.0;
    for (let index = 0; index < element.children.length; index++) {
        delaySkill += 1.0;
        gsap.from(element.children[index], {
            scrollTrigger: {
                trigger: element,
                start: '-10px 100%',
                toggleActions: "restart none restart none"
            },
            duration: delaySkill,
            keyframes: {
                scale: [0, 1],
                ease: "back", 
                force3D: true
            }
        }); 
    }
});

/* Animation of jobs */
/* Using of GSAP Library */

let cntStudies = gsap.utils.toArray('.cntStudies');
cntStudies.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        },
        duration: 0.5,
        x: 400,
        ease: "back",
        force3D: true
    });
});

/* Animation of studies */
/* Using of GSAP Library */

let cntJobs = gsap.utils.toArray('.cntJobs');
cntJobs.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        },
        duration: 0.5,
        x: -400,
        ease: "back",
        force3D: true
    });
});

/* Animation of hobbies */
/* Using of GSAP Library */

gsap.from(".cntHobbies", {
    scrollTrigger: {
        trigger: "#hobbies",
        start: '-10px 100%',
        toggleActions: "restart none restart none"
    },
    duration: 1,
    scale: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
});

/* Animation of portfolio */
/* Using of GSAP Library */

let ctnPortfolio = gsap.utils.toArray('.ctnPortfolio');
ctnPortfolio.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            marker: true,
            toggleActions: "restart none restart none"
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 0.2,
        stagger: 0.2,
        ease: "expo",
        force3D: true
    });
});