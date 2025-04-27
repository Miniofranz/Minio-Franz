// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
        
        // Highlight active section in navbar
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile nav toggle
    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
        
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            
            window.scrollTo({
                top: offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile nav if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
    
    // Animate skill bars when in viewport
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        skillLevels.forEach(skill => {
            const level = skill.getAttribute('data-level');
            skill.style.width = level + '%';
        });
    }
    
    // Check if skills section is in viewport
    const skillsSection = document.querySelector('.skills');
    let skillsAnimated = false;
    
    window.addEventListener('scroll', function() {
        if (!skillsAnimated) {
            const position = skillsSection.getBoundingClientRect();
            
            // If skills section is in viewport
            if (position.top <= window.innerHeight && position.bottom >= 0) {
                animateSkills();
                skillsAnimated = true;
            }
        }
    });
    
    // Form submission (simulated)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                console.log('Form submitted:', { name, email, subject, message });
                
                // Show success message (simulated)
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Typing effect for tagline
    const tagline = document.querySelector('.tagline');
    const taglineText = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const typeWriter = function() {
        if (i < taglineText.length) {
            tagline.textContent += taglineText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
    
    // Add a hover effect to profile image
    const profileImg = document.querySelector('.profile-image');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add scroll reveal animation
    document.querySelectorAll('.about-content, .skills-container, .contact-container').forEach(section => {
        window.addEventListener('scroll', function() {
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight * 0.8;
            
            if (isInViewport) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
        
        // Initial styles
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Check for sections in viewport on initial load
    const checkInitialScroll = function() {
        document.querySelectorAll('.about-content, .skills-container, .contact-container').forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight * 0.8;
            
            if (isInViewport) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
        
        // Check if skills section is in viewport initially
        const skillsRect = skillsSection.getBoundingClientRect();
        if (skillsRect.top <= window.innerHeight && skillsRect.bottom >= 0) {
            animateSkills();
            skillsAnimated = true;
        }
    };
    
    // Run initial scroll check after a small delay
    setTimeout(checkInitialScroll, 100);
    
    // Theme switch functionality (light/dark mode toggle)
    const toggleTheme = function() {
        document.body.classList.toggle('dark-theme');
        
        // Update theme icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    };
    
    // Create theme toggle button
    const themeToggle = document.createElement('div');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.width = '40px';
    themeToggle.style.height = '40px';
    themeToggle.style.borderRadius = '50%';
    themeToggle.style.backgroundColor = '#4a6bff';
    themeToggle.style.color = '#fff';
    themeToggle.style.display = 'flex';
    themeToggle.style.justifyContent = 'center';
    themeToggle.style.alignItems = 'center';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.zIndex = '1000';
    themeToggle.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    themeToggle.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    themeToggle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Add back-to-top button
    const backToTop = document.createElement('div');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '70px';
    backToTop.style.right = '20px';
    backToTop.style.width = '40px';
    backToTop.style.height = '40px';
    backToTop.style.borderRadius = '50%';
    backToTop.style.backgroundColor = '#4a6bff';
    backToTop.style.color = '#fff';
    backToTop.style.display = 'flex';
    backToTop.style.justifyContent = 'center';
    backToTop.style.alignItems = 'center';
    backToTop.style.cursor = 'pointer';
    backToTop.style.zIndex = '1000';
    backToTop.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    backToTop.style.transition = 'all 0.3s ease';
    backToTop.style.opacity = '0';
    backToTop.style.visibility = 'hidden';
    
    document.body.appendChild(backToTop);
    
    // Show/hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when button is clicked
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect for back-to-top button
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add dynamic copyright year
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Minio Franz M. Vosotros. All Rights Reserved.`;
    }
});
