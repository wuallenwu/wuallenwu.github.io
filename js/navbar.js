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

    // Check the current URL and set the active link accordingly
    const currentPath = `/${window.location.pathname.replace(/^\/|\/$/g, '')}`; // Normalize path
    console.log('Current Path:', currentPath); // Debugging line
    navLinks.forEach(link => {
        const linkPath = `/${link.getAttribute('href').replace(/^\/|\/$/g, '')}`; // Normalize href
        console.log('Link Href:', linkPath); // Debugging line
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
