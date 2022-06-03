/* Animation of my picture */

let rotateImg = () => {
    rotateAnimation.animate([
        { transform: 'rotate(45deg)' },
        { transform: 'rotate(135deg)' },
        { transform: 'rotate(225deg)' },
        { transform: 'rotate(315deg)' },
        { transform: 'rotate(405deg)' },
    ], {
        duration: 2000
    });

    pictureAnimation.animate([
        { transform: 'rotate(315deg)' },
        { transform: 'rotate(225deg)' },
        { transform: 'rotate(135deg)' },
        { transform: 'rotate(45deg)' },
        { transform: 'rotate(-45deg)' }
    ], {
        duration: 2000
    });
}
document.addEventListener("DOMContentLoaded", rotateImg);

/* Animation of the menu */

let menuAnimation = document.querySelector('.navbar-toggler-icon')
menuAnimation.addEventListener('click', () => {
    let counter = 300;
    let navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(element => {
        element.style.display = "none";
        setTimeout(() => {
            gsap.from(element, {duration: 0.5, x: 800})
            element.style.display = "block";
            gsap.to(element, {duration: 0.5, x: 10});
        }, counter);
        counter += 200;
    });
    counter = 0;
})
