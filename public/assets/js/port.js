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