document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var page = this.getAttribute("href").substring(1);
            loadPage(page);
        });
    });

    // Initial load
    loadPage('home');

    // Animation
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 100
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

    // Scroll-up Button
    window.addEventListener('scroll', function() {
        var scrollToTopButton = document.getElementById('scrollToTop');
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    document.getElementById('scrollToTop').addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});

function loadPage(page) {
    // This function will be replaced by Hugo's routing
    console.log('Loading page:', page);
}

function viewTerms() {
    window.open('/DOCS/Hustler Points Terms and Conditions for users.pdf', '_blank');
}

function handleAnimations() {
    if (window.innerWidth < 768) {
        AOS.init({
            disable: true
        });
    } else {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 100
        });
    }
}

window.addEventListener('load', handleAnimations);
window.addEventListener('resize', handleAnimations);

// Contact form submission
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'contactForm') {
        e.preventDefault();
        alert("Thank you for your message. We'll get back to you soon!");
    }
});