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

/* Animations of Skills, Studies and Jobs */

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (element, dividend = 1) => {
    const elementTop = element.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (element) => {
    const elementTop = element.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((element) => {
        if (elementInView(element, 1.0)) {
            displayScrollElement(element);
        } else if (elementOutofView(element)) {
            hideScrollElement(element)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

/* Animation of skills, jobs, studies, hobbies */
/* Using of GSAP Library */

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
        force3D: true
    });
});

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

/* Animation of the down arrow */

let toDown = document.querySelector('.toDown');
toDown.animate([
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-10px)' },
    { transform: 'translateY(0px)' },
    { transform: 'translateY(10px)' },
    { transform: 'translateY(0px)' }
], {
    duration: 1000,
    iterations: Infinity
});