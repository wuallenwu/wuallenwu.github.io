// js/navbar.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add active class on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setActiveLink(link);
        });
    });

    const setActiveLink = (activeLink) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    };
});
