const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNavAltMarkup');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
    l.addEventListener('click', () => { 
        bsCollapse.toggle() 
    })
})