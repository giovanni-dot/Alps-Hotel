// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                document.querySelector('nav').classList.remove('active');
            }
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'var(--dark)';
        header.style';
        header.style.boxShadow.boxShadow = '0  = '0 2px2px 10px rgba 10px rgba(0(0,0,0,0,0,0.1)';
    },0.1)';
    } else {
        header else {
        header.style.backgroundColor.style.backgroundColor = 'rgba = 'rgba(26, 60,(26, 60, 64, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', 64, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Form Submission
document.getElementById('contactForm').add function(e) {
EventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank    e.preventDefault();
    alert you for your message! Our('Thank you for your message! Our concierge team will contact you shortly.');
    this.reset();
});

// Newsletter Form Submission
document.getElementById('news concierge team will contact you shortly.');
    this.reset();
});

// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', function(eletterForm').addEventListener('submit', function(e) {
) {
    e.preventDefault();
    e.preventDefault();
    alert    alert('Thank you for('Thank you for subscribing to our newsletter!');
    this.reset();
});

// subscribing to our newsletter!');
    this.reset();
});

// Image preloading and lazy loading
document.addEventListener('DOMContentLoaded', function() {
 Image preloading and lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document    const images = document.querySelectorAll('.querySelectorAll('img');
img');
    
    images.forEach(img    
    images.forEach(img => {
 => {
        img.addEventListener('        img.addEventListener('load',load', function() {
            function() {
            this.classList this.classList.add('loaded');
.add('loaded');
        });
        });
    });
    });
});
