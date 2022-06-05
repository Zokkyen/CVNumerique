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

let menuAnimation = document.querySelector('.navbar-toggler-icon')
menuAnimation.addEventListener('click', () => {
    let navLinks = document.querySelectorAll('.nav-link');
    let delayVar = 0.3;
    navLinks.forEach(element => {
        element.style.display = "none";
        gsap.from(element, {
            x: 800,
            stagger: 0.1,
            duration: 0.8,
            delay: delayVar
        })
        element.style.display = "block";
        gsap.to(element, {
            x: 10,
            stagger: 0.1,
            duration: 0.8,
            delay: delayVar
        });
        delayVar += 0.2;
    });
    delayVar = 0.3;
})