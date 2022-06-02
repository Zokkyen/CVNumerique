/* Animation of my picture */

let rotateImg = () => {
    rotateAnimation.animate([
        { transform: 'rotate(45deg)' },
        { transform: 'rotate(135deg)' },
        { transform: 'rotate(225deg)' },
        { transform: 'rotate(315deg)' }, 
    ], {
        duration: 3000
    });

    pictureAnimation.animate([
        { transform: 'rotate(315deg)' },
        { transform: 'rotate(225deg)' },
        { transform: 'rotate(135deg)' },
        { transform: 'rotate(45deg)' }
    ], {
        duration: 3000
    });
}

document.addEventListener("DOMContentLoaded", rotateImg);