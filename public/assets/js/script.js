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