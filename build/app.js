// Burger menu
const navSlide = () => {
    const burger = document.querySelector('.burger-nav');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } 
        }); 
        //Burger animation
        burger.classList.toggle('toggle');

    });

    
    //
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-notActive');
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
    });
    
    
}

navSlide();