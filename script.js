// toggle icon navbar 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// active link on scroll 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec =>{
        
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar 

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar 

    navLinks.forEach(link => {
        link.onclick = () => {
            menu.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    });
}

// scroll animation 

ScrollReveal({ 
    distance : '80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-leftSection', { origin: 'top' });
 ScrollReveal().reveal('.home-rightSection img, .imageOfTechStack img, .project-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.about-leftSection img, h1', { origin: 'left' });
 ScrollReveal().reveal('.social-icons a, p', { origin: 'right' });