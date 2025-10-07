// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// // Add scroll effect to navbar
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//         navbar.style.backdropFilter = 'blur(10px)';
//     } else {
//         navbar.style.background = 'var(--white)';
//         navbar.style.backdropFilter = 'none';
//     }
// });
// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        // Change text color to dark for better visibility
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = 'var(--text-dark)';
        });
        document.querySelector('.nav-logo').style.color = 'var(--text-dark)';
    } else {
        // Reset to original colors based on page theme
        resetNavbarColors();
    }
});

// Function to reset navbar colors based on page
function resetNavbarColors() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogo = document.querySelector('.nav-logo');
    
    // Check if it's a product page with custom navbar color
    const hasCustomNavbar = navbar.style.background.includes('gradient');
    
    if (hasCustomNavbar) {
        // Product page - keep custom background, white text
        navbar.style.background = getComputedStyle(navbar).background;
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'var(--shadow)';
        navLinks.forEach(link => {
            link.style.color = 'var(--white)';
        });
        navLogo.style.color = 'var(--white)';
    } else {
        // Main page - green theme
        navbar.style.background = 'var(--primary-green)';
        navbar.style.backdropFilter = 'none';
        navbar.style.boxShadow = 'var(--shadow)';
        navLinks.forEach(link => {
            link.style.color = 'var(--white)';
        });
        navLogo.style.color = 'var(--white)';
    }
}

// Reset colors on page load
document.addEventListener('DOMContentLoaded', resetNavbarColors);

// Product card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form validation (if you add a contact form later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    return isValid;
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});