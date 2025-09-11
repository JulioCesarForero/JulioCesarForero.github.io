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

// Language switching functionality
let currentLanguage = 'es';

// Language data object
const translations = {
    es: {
        // Navigation
        'nav-about': 'Sobre Mí',
        'nav-experience': 'Experiencia',
        'nav-skills': 'Habilidades',
        'nav-projects': 'Proyectos',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-title': 'Arquitecto Ágil & Líder Técnico',
        'hero-description': 'Ingeniero Electrónico con más de 10 años de experiencia en arquitectura de software y liderazgo técnico. Especializado en el diseño de arquitecturas evolutivas, metodologías ágiles y transformación digital.',
        'hero-contact-btn': 'Contactar',
        'hero-projects-btn': 'Ver Proyectos',
        'hero-location': 'Ubicación',
        'hero-location-value': 'Bogotá, Colombia',
        'hero-availability': 'Disponibilidad',
        'hero-availability-value': 'Abierto a Oportunidades',
        'hero-stats-years': 'Años de Experiencia',
        'hero-stats-projects': 'Proyectos Liderados',
        'hero-stats-team': 'Personas en Equipo',
        'hero-stats-masters': 'Años de Maestría',
        
        // About Section
        'about-title': 'Sobre Mí',
        'about-profile-title': '🎯 Perfil Profesional',
        'about-profile-text': 'Experiencia comprobada en liderazgo de equipos de desarrollo, implementación de soluciones cloud, y aplicación de buenas prácticas de desarrollo. Capacidad demostrada para alinear la visión tecnológica con los objetivos de negocio, garantizando la calidad técnica y la aplicación de estándares arquitectónicos.',
        'about-goals-title': '🌟 Objetivos Profesionales',
        'about-goals-short': 'Corto Plazo:',
        'about-goals-short-text': 'Completar Maestría MISO y obtener certificaciones AWS',
        'about-goals-medium': 'Mediano Plazo:',
        'about-goals-medium-text': 'Consolidar rol de Arquitecto de Software',
        'about-goals-long': 'Largo Plazo:',
        'about-goals-long-text': 'Especialista en Cloud & DevOps e IA Aplicada',
        'about-why-title': '💼 Por Qué Trabajar Conmigo',
        'about-why-leadership': 'Liderazgo Técnico:',
        'about-why-leadership-text': 'Experiencia comprobada liderando equipos de 7-10 personas',
        'about-why-architecture': 'Arquitectura de Software:',
        'about-why-architecture-text': 'Diseño de arquitecturas evolutivas y patrones arquitectónicos',
        'about-why-agile': 'Metodologías Ágiles:',
        'about-why-agile-text': 'Implementación de DevOps, Agile, SCRUM, TDD, BDD',
        'about-why-digital': 'Transformación Digital:',
        'about-why-digital-text': 'Migración exitosa de sistemas legacy a modernos',
        'about-why-innovation': 'Innovación:',
        'about-why-innovation-text': 'Experiencia en IA aplicada y automatización de procesos',
        'about-education-title': '📚 Educación',
        'about-education-masters': 'Maestría en Ingeniería de Software (MISO)',
        'about-education-masters-uni': 'Universidad de los Andes',
        'about-education-masters-period': '2023 - 2025 (Último Semestre)',
        'about-education-engineering': 'Ingeniería Electrónica',
        'about-education-engineering-uni': 'Universidad Santo Tomás de Aquino',
        'about-education-engineering-period': '2005 - 2010',
        
        // Skills Section
        'skills-title': 'Habilidades Técnicas',
        'skills-architecture': 'Arquitectura de Software',
        'skills-cloud': 'Cloud & DevOps',
        'skills-languages': 'Lenguajes & Frameworks',
        'skills-databases': 'Bases de Datos',
        'skills-methodologies': 'Metodologías & Testing',
        'skills-ai': 'Inteligencia Artificial',
        'skills-lowcode': 'Low-Code & GeneXus',
        'skills-tools': 'Herramientas & Integración',
        
        // Experience Section
        'experience-title': 'Experiencia Profesional',
        'experience-achievements': 'Logros Destacados:',
        'experience-technologies': 'Tecnologías:',
        
        // Projects Section
        'projects-title': 'Proyectos Destacados',
        'projects-result': 'Resultado:',
        
        // Certifications Section
        'certifications-title': 'Certificaciones',
        'cert-in-progress': 'En Progreso',
        'cert-completed': 'Completado',
        
        // Contact Section
        'contact-title': 'Contacto',
        'contact-subtitle': '¡Hablemos!',
        'contact-description': 'Estoy abierto a nuevas oportunidades y colaboraciones. Si te interesa mi perfil o quieres discutir algún proyecto, no dudes en contactarme.',
        'contact-schedule': 'Agendar Reunión',
        'contact-schedule-link': 'Reserva 30 minutos',
        'contact-form-tab': 'Formulario',
        'contact-calendar-tab': 'Agendar Reunión',
        'contact-name': 'Nombre',
        'contact-subject': 'Asunto',
        'contact-message': 'Mensaje',
        'contact-send': 'Enviar Mensaje',
        
        // Footer
        'footer-copyright': 'Todos los derechos reservados.'
    },
    
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Agile Architect & Technical Leader',
        'hero-description': 'Electronic Engineer with over 10 years of experience in software architecture and technical leadership. Specialized in evolutionary architecture design, agile methodologies and digital transformation.',
        'hero-contact-btn': 'Contact',
        'hero-projects-btn': 'View Projects',
        'hero-location': 'Location',
        'hero-location-value': 'Bogotá, Colombia',
        'hero-availability': 'Availability',
        'hero-availability-value': 'Open to Opportunities',
        'hero-stats-years': 'Years of Experience',
        'hero-stats-projects': 'Led Projects',
        'hero-stats-team': 'Team Members',
        'hero-stats-masters': 'Masters Years',
        
        // About Section
        'about-title': 'About Me',
        'about-profile-title': '🎯 Professional Profile',
        'about-profile-text': 'Proven experience in development team leadership, cloud solution implementation, and development best practices application. Demonstrated ability to align technological vision with business objectives, ensuring technical quality and architectural standards application.',
        'about-goals-title': '🌟 Professional Goals',
        'about-goals-short': 'Short Term:',
        'about-goals-short-text': 'Complete MISO Masters and obtain AWS certifications',
        'about-goals-medium': 'Medium Term:',
        'about-goals-medium-text': 'Consolidate Software Architect role',
        'about-goals-long': 'Long Term:',
        'about-goals-long-text': 'Cloud & DevOps Specialist and Applied AI',
        'about-why-title': '💼 Why Work With Me',
        'about-why-leadership': 'Technical Leadership:',
        'about-why-leadership-text': 'Proven experience leading teams of 7-10 people',
        'about-why-architecture': 'Software Architecture:',
        'about-why-architecture-text': 'Design of evolutionary architectures and architectural patterns',
        'about-why-agile': 'Agile Methodologies:',
        'about-why-agile-text': 'Implementation of DevOps, Agile, SCRUM, TDD, BDD',
        'about-why-digital': 'Digital Transformation:',
        'about-why-digital-text': 'Successful migration from legacy to modern systems',
        'about-why-innovation': 'Innovation:',
        'about-why-innovation-text': 'Experience in applied AI and process automation',
        'about-education-title': '📚 Education',
        'about-education-masters': 'Masters in Software Engineering (MISO)',
        'about-education-masters-uni': 'Universidad de los Andes',
        'about-education-masters-period': '2023 - 2025 (Last Semester)',
        'about-education-engineering': 'Electronic Engineering',
        'about-education-engineering-uni': 'Universidad Santo Tomás de Aquino',
        'about-education-engineering-period': '2005 - 2010',
        
        // Skills Section
        'skills-title': 'Technical Skills',
        'skills-architecture': 'Software Architecture',
        'skills-cloud': 'Cloud & DevOps',
        'skills-languages': 'Languages & Frameworks',
        'skills-databases': 'Databases',
        'skills-methodologies': 'Methodologies & Testing',
        'skills-ai': 'Artificial Intelligence',
        'skills-lowcode': 'Low-Code & GeneXus',
        'skills-tools': 'Tools & Integration',
        
        // Experience Section
        'experience-title': 'Professional Experience',
        'experience-achievements': 'Key Achievements:',
        'experience-technologies': 'Technologies:',
        
        // Projects Section
        'projects-title': 'Featured Projects',
        'projects-result': 'Result:',
        
        // Certifications Section
        'certifications-title': 'Certifications',
        'cert-in-progress': 'In Progress',
        'cert-completed': 'Completed',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-subtitle': "Let's Talk!",
        'contact-description': 'I am open to new opportunities and collaborations. If you are interested in my profile or want to discuss a project, do not hesitate to contact me.',
        'contact-schedule': 'Schedule Meeting',
        'contact-schedule-link': 'Book 30 minutes',
        'contact-form-tab': 'Form',
        'contact-calendar-tab': 'Schedule Meeting',
        'contact-name': 'Name',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send Message',
        
        // Footer
        'footer-copyright': 'All rights reserved.'
    }
};

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update navigation
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        if (element.textContent.trim() !== '') {
            element.textContent = translations[lang][element.dataset[lang] || element.dataset.es] || element.textContent;
        }
    });
    
    // Update language toggle button
    const langText = document.querySelector('.lang-text');
    langText.textContent = lang === 'es' ? 'EN' : 'ES';
    
    // Update page title
    document.title = lang === 'es' 
        ? 'Julio Cesar Forero - Arquitecto Ágil & Líder Técnico'
        : 'Julio Cesar Forero - Agile Architect & Technical Leader';
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable elements
    updateAllTranslations(lang);
}

// Function to update all translations
function updateAllTranslations(lang) {
    // Update section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const key = getTranslationKey(title.textContent);
        if (key && translations[lang][key]) {
            title.textContent = translations[lang][key];
        }
    });
    
    // Update other translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Helper function to get translation key
function getTranslationKey(text) {
    const textLower = text.toLowerCase();
    for (const [key, value] of Object.entries(translations.es)) {
        if (value.toLowerCase() === textLower) {
            return key;
        }
    }
    return null;
}

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang && (storedLang === 'es' || storedLang === 'en')) {
        changeLanguage(storedLang);
    }
    
    // Add event listener to language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
    
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

// Contact section tab functionality
function showContactForm() {
    document.getElementById('contact-form-section').style.display = 'block';
    document.getElementById('calendly-section').style.display = 'none';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[0].classList.add('active');
}

function showCalendly() {
    document.getElementById('contact-form-section').style.display = 'none';
    document.getElementById('calendly-section').style.display = 'block';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[1].classList.add('active');
}
