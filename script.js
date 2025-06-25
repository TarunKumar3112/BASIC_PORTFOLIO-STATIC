document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            const nameError = name.nextElementSibling;
            
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                isValid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailError = email.nextElementSibling;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Validate Message
            const message = document.getElementById('message');
            const messageError = message.nextElementSibling;
            
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
                isValid = false;
            } else {
                messageError.textContent = '';
            }
            
            // Submit form if valid
            if (isValid) {
                // In a real application, you would send the form data to a server here
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});
