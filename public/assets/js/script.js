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

let menuAnimation = document.querySelector('.navbar-toggler-icon')

if (window.matchMedia("(max-width: 776px)").matches) {
    menuAnimation.addEventListener('click', () => {
        let navLinks = document.querySelectorAll('.nav-link');
        let delayVar = 0.1;
        navLinks.forEach(element => {
            element.style.display = "none";
            gsap.from(element, {
                x: 800,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar
            })
            element.style.display = "block";
            gsap.to(element, {
                x: 10,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar
            });
            delayVar += 0.1;
        });
        delayVar = 0.1;
    })
} 
else {
    document.addEventListener('DOMContentLoaded', () => {
        let navLinks = document.querySelectorAll('.nav-link');
        let delayVar = 0.2;
        navLinks.forEach(element => {
            element.style.display = "none";
            gsap.from(element, {
                x: 800,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar
            })
            element.style.display = "block";
            gsap.to(element, {
                x: 10,
                stagger: 0.1,
                duration: 0.5,
                delay: delayVar
            });
            delayVar += 0.2;
        });
        delayVar = 0.2;
    })       
}

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

gsap.registerPlugin(ScrollTrigger);

let ctnSkills =  gsap.utils.toArray('.ctnSkills');
ctnSkills.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        }, 
        duration: 0.5,
        x: -400,
        ease: "back"
    });
});

let cntStudies =  gsap.utils.toArray('.cntStudies');
cntStudies.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        }, 
        duration: 0.5,
        x: 400,
        ease: "back"
    });
});

let cntJobs =  gsap.utils.toArray('.cntJobs');
cntJobs.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: '-10px 100%',
            toggleActions: "restart none restart none"
        }, 
        duration: 0.5,
        x: -400,
        ease: "back"
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
    ease: "elastic" 
});

/* Animation of portfolio */
/* Using of GSAP Library */

let ctnPortfolio =  gsap.utils.toArray('.ctnPortfolio');
ctnPortfolio.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: "restart none restart none"
        }, 
        duration: 1,
        scale: 0.8, 
        opacity: 0, 
        delay: 0.2, 
        stagger: 0.2,
        ease: "expo"
    });
});