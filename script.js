// Experience Carousel Functionality
let currentExperienceIndex = 0;
const experienceCards = document.querySelectorAll('.experience-card');

function showExperienceCard(index) {
    // Hide all cards
    experienceCards.forEach(card => {
        card.classList.remove('active');
    });
    
    // Show the current card
    if (experienceCards[index]) {
        experienceCards[index].classList.add('active');
    }
    
    // Update button states
    updateCarouselButtons();
}

function moveCarousel(direction) {
    const totalCards = experienceCards.length;
    
    if (direction === 1) {
        currentExperienceIndex = (currentExperienceIndex + 1) % totalCards;
    } else {
        currentExperienceIndex = (currentExperienceIndex - 1 + totalCards) % totalCards;
    }
    
    showExperienceCard(currentExperienceIndex);
}

function updateCarouselButtons() {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentExperienceIndex === 0;
        nextBtn.disabled = currentExperienceIndex === experienceCards.length - 1;
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    // Show first experience card
    if (experienceCards.length > 0) {
        showExperienceCard(0);
    }
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Por favor completa todos los campos.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor ingresa un email válido.');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
            this.reset();
        });
    }
    
    // Add scroll effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Auto-advance carousel every 8 seconds
setInterval(() => {
    if (experienceCards.length > 1) {
        moveCarousel(1);
    }
}, 8000);

// Keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveCarousel(-1);
    } else if (e.key === 'ArrowRight') {
        moveCarousel(1);
    }
});
