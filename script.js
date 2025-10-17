// ============================================
// GSAP ANIMATIONS
// ============================================

gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Hero animations with smoother transitions
    gsap.from('.hero-text', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all' // Clear props after animation to prevent conflicts
    });

    gsap.from('.hero-image', {
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate stats on scroll with smoother transitions
    gsap.from('.stat-card', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
            once: true // Animate only once for better performance
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate research cards
    gsap.from('.research-card', {
        scrollTrigger: {
            trigger: '.research-grid',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate publications
    gsap.from('.publication-item', {
        scrollTrigger: {
            trigger: '.publications-list',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate timeline items
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate skills
    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate contact cards
    gsap.from('.contact-card', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: 'power2.out',
        clearProps: 'all'
    });

    // Animate award cards
    gsap.from('.award-card', {
        scrollTrigger: {
            trigger: '.awards-grid',
            start: 'top 85%',
            once: true
        },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'all'
    });
});

// ============================================
// NAVIGATION
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ============================================
// ANIMATED COUNTER
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const isGPA = element.parentElement.textContent.includes('GPA');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            if (isGPA) {
                element.textContent = '4.0';
            } else {
                element.textContent = target + '+';
            }
            clearInterval(timer);
        } else {
            if (isGPA) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
        }
    }, 16);
}

// Trigger counter animation when stats section is in view
const statNumbers = document.querySelectorAll('.stat-number');
let counterAnimated = false;

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            counterAnimated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
        }
    });
}, observerOptions);

const aboutSection = document.querySelector('.about-stats');
if (aboutSection) {
    observer.observe(aboutSection);
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Prevent back-to-top from overlapping the footer
const footerEl = document.querySelector('.footer');
function avoidFooterOverlap() {
    if (!footerEl || !backToTopBtn) return;
    const footerRect = footerEl.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const buttonHeight = 50; // button height
    const buttonBottom = 32; // 2rem = 32px bottom position
    
    // Check if footer is visible in viewport
    if (footerRect.top < viewportH - buttonBottom - buttonHeight) {
        // Calculate how much to move button up
        const overlap = viewportH - footerRect.top - 20; // 20px additional spacing
        backToTopBtn.style.bottom = Math.max(buttonBottom, overlap) + 'px';
    } else {
        backToTopBtn.style.bottom = '2rem';
    }
}

window.addEventListener('scroll', avoidFooterOverlap);
window.addEventListener('resize', avoidFooterOverlap);
avoidFooterOverlap();

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Show success message with better UI
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = `
        <svg style="width: 18px; height: 18px; margin-right: 8px; vertical-align: middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Message Sent!</span>
    `;
    submitBtn.disabled = true;
    submitBtn.style.background = 'var(--gradient-accent)';
    
    setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
    }, 3000);
    
    // Reset form
    contactForm.reset();
});

// ============================================
// PARALLAX EFFECT
// ============================================

// Disabled parallax to prevent text disappearing and ensure smooth scrolling
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const parallaxElements = document.querySelectorAll('.hero-image');
//     
//     parallaxElements.forEach(element => {
//         const speed = 0.2; // gentler parallax for smoothness
//         element.style.transform = `translateY(${scrolled * speed}px)`;
//     });
// });

// ============================================
// IMAGE BORDER ROTATION
// ============================================

// CSS handles border rotation via @keyframes; JS rotation removed for smoothness

// ============================================
// TYPING EFFECT (Optional Enhancement)
// ============================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add subtle typing effect to greeting
const greetingElement = document.querySelector('.greeting');
if (greetingElement) {
    const originalText = greetingElement.textContent;
    greetingElement.textContent = '';
    setTimeout(() => {
        typeWriter(greetingElement, originalText, 50);
    }, 1000);
}

// ============================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ============================================

class CursorTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        // Create dots
        for (let i = 0; i < 12; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${10 - i}px;
                height: ${10 - i}px;
                border-radius: 50%;
                background: rgba(231, 76, 60, ${0.5 - i * 0.03});
                pointer-events: none;
                z-index: 9999;
                transition: all 0.1s ease;
            `;
            document.body.appendChild(dot);
            this.dots.push({
                element: dot,
                x: 0,
                y: 0
            });
        }

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Animate dots
        this.animate();
    }

    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;

        this.dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;

            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';

            x = dot.x;
            y = dot.y;
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Uncomment to enable cursor trail (best for desktop)
// if (window.innerWidth > 768) {
//     new CursorTrail();
// }

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
// Note: GSAP ScrollTrigger is already handling animations above
// This section is disabled to prevent conflicts

// const revealElements = document.querySelectorAll('.research-card, .publication-item, .stat-card, .skill-category');
// 
// const revealObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, {
//     threshold: 0.1
// });
// 
// revealElements.forEach(element => {
//     element.style.opacity = '0';
//     element.style.transform = 'translateY(30px)';
//     element.style.transition = 'all 0.6s ease';
//     revealObserver.observe(element);
// });

// ============================================
// LOADING SCREEN & PROGRESS BAR
// ============================================

window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// Progress bar on scroll
const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollPercentage / 100})`;
    }
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

// ============================================
// DARK MODE TOGGLE (Optional Enhancement)
// ============================================

class DarkModeToggle {
    constructor() {
        this.darkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        // Create toggle button
        const toggle = document.createElement('button');
        toggle.className = 'dark-mode-toggle';
        toggle.innerHTML = '🌙';
        toggle.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: var(--primary-color);
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: var(--shadow-md);
            z-index: 999;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toggle);

        // Apply saved preference
        if (this.darkMode) {
            this.enableDarkMode();
            toggle.innerHTML = '☀️';
        }

        // Toggle on click
        toggle.addEventListener('click', () => {
            this.darkMode = !this.darkMode;
            if (this.darkMode) {
                this.enableDarkMode();
                toggle.innerHTML = '☀️';
            } else {
                this.disableDarkMode();
                toggle.innerHTML = '🌙';
            }
            localStorage.setItem('darkMode', this.darkMode);
        });
    }

    enableDarkMode() {
        document.documentElement.style.setProperty('--primary-color', '#ecf0f1');
        document.documentElement.style.setProperty('--text-dark', '#ecf0f1');
        document.documentElement.style.setProperty('--text-light', '#bdc3c7');
        document.documentElement.style.setProperty('--background-light', '#1a1a1a');
        document.documentElement.style.setProperty('--background-alt', '#2c2c2c');
        document.body.style.backgroundColor = '#1a1a1a';
    }

    disableDarkMode() {
        document.documentElement.style.setProperty('--primary-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-dark', '#2c3e50');
        document.documentElement.style.setProperty('--text-light', '#7f8c8d');
        document.documentElement.style.setProperty('--background-light', '#ffffff');
        document.documentElement.style.setProperty('--background-alt', '#f8f9fa');
        document.body.style.backgroundColor = '#ffffff';
    }
}

// Enable dark mode toggle
new DarkModeToggle();

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; color: #5e72e4; font-weight: bold;');
console.log('%cInterested in working together? Get in touch!', 'font-size: 14px; color: #11cdef;');
console.log('%cEmail: ndarab2@uic.edu', 'font-size: 12px; color: #6c757d;');

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    });
}

