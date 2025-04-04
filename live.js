// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ['design websites.', 'design user experiences.', 'build digital solutions.', 'bring ideas to life.'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        backDelay: 1500
    };
    
    var typed = new Typed('.typing', options);
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-toggle')) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Project Modal Functionality
    const projectModal = document.querySelector('.project-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const viewProjectButtons = document.querySelectorAll('.work-item .btn');
    
    // Project data
    const projectsData = [
        {
            title: "Food Partner App",
            description: "A clean, intuitive mobile UI design for a food delivery application with modern components and accessible interface. The design focuses on a seamless user journey from browsing restaurants to checkout, with special attention to micro-interactions and visual feedback.",
            image: "images/Food Partner app.jpg",
            tags: ["UI Design", "Mobile App", "Food Delivery"],
            features: [
                "Intuitive restaurant browsing experience",
                "Seamless cart and checkout process",
                "Real-time order tracking",
                "User-friendly rating system"
            ],
            tools: [
                { name: "Figma", icon: "fa-figma" },
                { name: "Adobe XD", icon: "fa-adobe" },
                { name: "Photoshop", icon: "fa-photoshop" }
            ]
        },
        {
            title: "Healthcare Dashboard",
            description: "Modern interface for a healthcare application with focus on user experience and accessibility for medical professionals. This comprehensive dashboard helps doctors and healthcare providers manage patient information, appointments, and medical records efficiently.",
            image: "images/doctor.jpg",
            tags: ["UI/UX Design", "Healthcare", "Dashboard"],
            features: [
                "Patient information management",
                "Appointment scheduling system",
                "Medical records integration",
                "Interactive health analytics"
            ],
            tools: [
                { name: "Adobe XD", icon: "fa-adobe" },
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Photoshop", icon: "fa-photoshop" }
            ]
        },
        {
            title: "Marketing Banner Design",
            description: "Eye-catching banner design with bold typography and vibrant visuals for promotional campaigns. This design effectively communicates the brand message while maintaining visual hierarchy and drawing attention to key selling points.",
            image: "images/ow banner.jpg",
            tags: ["Graphic Design", "Banner", "Marketing"],
            features: [
                "Bold visual hierarchy",
                "Strategic use of typography",
                "Compelling color schemes",
                "Effective call-to-action placement"
            ],
            tools: [
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "InDesign", icon: "fa-adobe" }
            ]
        },
        {
            title: "Beauty Product Campaign",
            description: "Elegant and stylish graphic design for a beauty product line with emphasis on aesthetics and brand identity. The design creates a luxurious feel while effectively showcasing the product benefits and unique selling propositions.",
            image: "images/lipstick banner.jpg",
            tags: ["Graphic Design", "Product Marketing", "Beauty"],
            features: [
                "Premium visual aesthetics",
                "Cohesive brand identity",
                "Emphasis on product features",
                "Lifestyle-focused imagery"
            ],
            tools: [
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Lightroom", icon: "fa-adjust" }
            ]
        },
        {
            title: "Food Branding Design",
            description: "Complete brand identity and packaging design for a restaurant with focus on unique visual elements and consumer appeal. This comprehensive branding package includes logo design, packaging, menus, and promotional materials that create a cohesive brand experience.",
            image: "images/burger mockup.jpg",
            tags: ["Brand Identity", "Packaging", "Food"],
            features: [
                "Distinctive logo design",
                "Appealing packaging solutions",
                "Comprehensive brand guidelines",
                "Consistent visual language"
            ],
            tools: [
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "InDesign", icon: "fa-adobe" }
            ]
        },
        {
            title: "Coffee Shop Branding",
            description: "Warm and inviting brand identity for a coffee shop, including logo, packaging, and promotional materials. The design evokes a cozy and premium feel while establishing a recognizable and memorable brand presence.",
            image: "images/coffee jpg.jpg",
            tags: ["Brand Design", "Packaging", "Coffee"],
            features: [
                "Distinctive visual identity",
                "Sustainable packaging design",
                "Menu and in-store graphics",
                "Social media-ready branding elements"
            ],
            tools: [
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "Dimension", icon: "fa-cube" }
            ]
        },
        {
            title: "Pizza Restaurant Branding",
            description: "Bold and appetizing branding design for a pizza restaurant with focus on visual appeal and customer engagement. The vibrant colors and playful typography create an inviting atmosphere that reflects the restaurant's personality and menu offerings.",
            image: "images/pizza.jpg",
            tags: ["Brand Identity", "Restaurant", "Food"],
            features: [
                "Eye-catching menu design",
                "Consistent brand application",
                "Adaptable logo system",
                "Engaging visual identity"
            ],
            tools: [
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "InDesign", icon: "fa-adobe" }
            ]
        },
        {
            title: "Financial App Interface",
            description: "Clean and functional UI design for a financial services application with focus on data visualization and user experience. The interface prioritizes clarity and ease of use, helping users manage their finances with minimal cognitive load.",
            image: "images/Group 240.jpg",
            tags: ["UI Design", "Mobile App", "Finance"],
            features: [
                "Intuitive financial dashboard",
                "Simplified transaction history",
                "Clear data visualization",
                "Streamlined payment process"
            ],
            tools: [
                { name: "Figma", icon: "fa-figma" },
                { name: "Sketch", icon: "fa-sketch" },
                { name: "Illustrator", icon: "fa-pen-nib" }
            ]
        },
        {
            title: "Media Streaming Interface",
            description: "Modern and engaging user interface for a media streaming platform with intuitive navigation and content discovery. The design emphasizes content recommendations while maintaining a clean, uncluttered viewing experience.",
            image: "images/Group 143.jpg",
            tags: ["UI/UX Design", "Entertainment", "Streaming"],
            features: [
                "Personalized content recommendations",
                "Seamless cross-device experience",
                "Intuitive category navigation",
                "Immersive viewing mode"
            ],
            tools: [
                { name: "Figma", icon: "fa-figma" },
                { name: "Adobe XD", icon: "fa-adobe" },
                { name: "After Effects", icon: "fa-film" }
            ]
        },
        {
            title: "Marketing Campaign",
            description: "Strategic design integrated with brand identity for seamless digital and physical marketing campaigns. This project bridges offline and online experiences, allowing customers to access digital content through stylized QR codes that maintain brand consistency.",
            image: "images/blackman.jpg",
            tags: ["Graphic Design", "Digital Marketing", "Interactive"],
            features: [
                "Brand-integrated aesthetics",
                "Multi-channel marketing strategy",
                "Trackable customer engagement",
                "Seamless online-offline integration"
            ],
            tools: [
                { name: "Illustrator", icon: "fa-pen-nib" },
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "Analytics Tools", icon: "fa-chart-line" }
            ]
        },
        {
            title: "Product Launch Campaign",
            description: "Elegant black and white design for a product launch campaign on Instagram with minimalist aesthetic and strong typography. The monochromatic approach creates a sophisticated feel that emphasizes the premium nature of the product while building anticipation for the launch.",
            image: "images/Black and White Modern Launching Soon Instagram Post 2.jpg",
            tags: ["Social Media", "Launch Campaign", "Minimalist"],
            features: [
                "Consistent post series design",
                "Engagement-optimized layouts",
                "Typography-focused visuals",
                "Countdown integration strategy"
            ],
            tools: [
                { name: "Photoshop", icon: "fa-photoshop" },
                { name: "InDesign", icon: "fa-adobe" },
                { name: "Canva", icon: "fa-palette" }
            ]
        }
    ];
    
    // Open modal function
    function openModal(projectIndex) {
        const project = projectsData[projectIndex];
        
        // Set modal content
        document.querySelector('.modal-title').textContent = project.title;
        document.querySelector('.modal-image img').src = project.image;
        document.querySelector('.modal-image img').alt = project.title;
        
        // Clear and populate tags
        const tagsContainer = document.querySelector('.modal-tags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            
            // Add tag-specific classes based on content
            const tagLower = tag.toLowerCase();
            if (tagLower.includes('ui') || tagLower.includes('ux')) {
                tagElement.classList.add('tag-ui');
            }
            if (tagLower.includes('mobile') || tagLower.includes('app')) {
                tagElement.classList.add('tag-mobile', 'tag-app');
            }
            if (tagLower.includes('graphic')) {
                tagElement.classList.add('tag-graphic');
            }
            if (tagLower.includes('brand') || tagLower.includes('identity')) {
                tagElement.classList.add('tag-brand');
            }
            if (tagLower.includes('identity')) {
                tagElement.classList.add('tag-identity');
            }
            if (tagLower.includes('packaging')) {
                tagElement.classList.add('tag-packaging');
            }
            if (tagLower.includes('social') || tagLower.includes('marketing')) {
                tagLower.includes('social') ? tagElement.classList.add('tag-social') : tagElement.classList.add('tag-marketing');
            }
            if (tagLower.includes('healthcare')) {
                tagElement.classList.add('tag-healthcare');
            }
            if (tagLower.includes('food') || tagLower.includes('restaurant')) {
                tagLower.includes('food') ? tagElement.classList.add('tag-food') : tagElement.classList.add('tag-restaurant');
            }
            if (tagLower.includes('launch') || tagLower.includes('entertainment')) {
                tagLower.includes('launch') ? tagElement.classList.add('tag-launch') : tagElement.classList.add('tag-entertainment');
            }
            if (tagLower.includes('digital')) {
                tagElement.classList.add('tag-digital');
            }
            if (tagLower.includes('finance')) {
                tagElement.classList.add('tag-finance');
            }
            if (tagLower.includes('coffee') || tagLower.includes('beauty')) {
                tagLower.includes('coffee') ? tagElement.classList.add('tag-coffee') : tagElement.classList.add('tag-beauty');
            }
            if (tagLower.includes('banner')) {
                tagElement.classList.add('tag-banner');
            }
            if (tagLower.includes('minimalist')) {
                tagElement.classList.add('tag-minimalist');
            }
            if (tagLower.includes('interactive')) {
                tagElement.classList.add('tag-interactive');
            }
            if (tagLower.includes('streaming')) {
                tagElement.classList.add('tag-streaming');
            }
            
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // Set description
        document.querySelector('.modal-description').textContent = project.description;
        
        // Clear and populate features
        const featuresList = document.querySelector('.features-list');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Clear and populate tools
        const toolsList = document.querySelector('.tools-list');
        toolsList.innerHTML = '';
        project.tools.forEach(tool => {
            const toolItem = document.createElement('div');
            toolItem.className = 'tool-item';
            
            const icon = document.createElement('i');
            icon.className = `fab ${tool.icon}`;
            
            const name = document.createElement('span');
            name.textContent = tool.name;
            
            toolItem.appendChild(icon);
            toolItem.appendChild(name);
            toolsList.appendChild(toolItem);
        });
        
        // Show modal with animation
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Add entrance animation to modal elements
        const modalElements = document.querySelectorAll('.modal-content > *');
        modalElements.forEach((el, index) => {
            el.style.animationDelay = `${0.1 + (index * 0.1)}s`;
        });
    }
    
    // Close modal function
    function closeModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Attach click events to View Project buttons
    viewProjectButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal(index);
        });
    });
    
    // Close modal when close button is clicked
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when overlay is clicked
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Scroll animations with improved timing
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Add staggered animation to child elements if it's the about section
                if (entry.target.classList.contains('about-text')) {
                    const children = entry.target.querySelectorAll('.about-bio, .skills-section, .skill');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, 200 * index);
                    });
                }
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });
    
    const hiddenElements = document.querySelectorAll('.work-item, .about-img, .about-text, .contact-form, .contact-info');
    hiddenElements.forEach((el) => observer.observe(el));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Enhanced parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `50% ${scrollPosition * 0.5}px`;
            
            // Add tilt effect based on mouse position
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
        }
    });
    
    // Mouse movement parallax effect for about section
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.addEventListener('mousemove', function(e) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            const aboutImg = document.querySelector('.about-img');
            if (aboutImg) {
                aboutImg.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
            }
            
            // Move particles in opposite direction
            const particles = document.querySelectorAll('.skills-particles .particle');
            particles.forEach(particle => {
                const speed = parseFloat(particle.getAttribute('data-speed') || 0.02);
                particle.style.transform = `translateX(${-moveX * speed * 10}px) translateY(${-moveY * speed * 10}px)`;
            });
        });
    }
    
    // Navigation highlighting on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Skill percentage counter animation
    const animateCounter = (el, target) => {
        const counter = { val: 0 };
        const duration = 2000; // ms
        const stepTime = 20; // ms
        const totalSteps = duration / stepTime;
        const stepValue = target / totalSteps;
        
        const updateCounter = () => {
            if (counter.val < target) {
                counter.val += stepValue;
                if (counter.val > target) counter.val = target;
                el.textContent = Math.round(counter.val) + '%';
                requestAnimationFrame(updateCounter);
            }
        };
        
        updateCounter();
    };
    
    // Initialize skill animation when visible
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate the skill levels from 0 to target percentage
                const skillLevels = document.querySelectorAll('.skill-level');
                skillLevels.forEach((level) => {
                    level.style.width = level.parentElement.previousElementSibling.querySelector('span').getAttribute('data-percent') + '%';
                    // Force reflow to ensure the animation starts from 0
                    void level.offsetWidth;
                });
                
                // Animate the counters
                const skillItems = document.querySelectorAll('.skill span');
                skillItems.forEach((item) => {
                    const percent = parseInt(item.getAttribute('data-percent'));
                    item.setAttribute('data-counting', 'true');
                    if (item.querySelector('.percent-counter')) {
                        animateCounter(item.querySelector('.percent-counter'), percent);
                    }
                });
                
                skillObserver.disconnect();
            }
        });
    });
    
    const skillSection = document.querySelector('.skills-section');
    if (skillSection) {
        skillObserver.observe(skillSection);
    }
    
    // Create and add skill percent counter elements
    const skillSpans = document.querySelectorAll('.skill span');
    skillSpans.forEach(span => {
        if (!span.querySelector('.percent-counter')) {
            const percentCounter = document.createElement('span');
            percentCounter.className = 'percent-counter';
            percentCounter.textContent = '0%';
            span.appendChild(percentCounter);
        }
    });
    
    // Add animated particles to skills section
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'skills-particles';
    if (document.querySelector('.skills-section') && !document.querySelector('.skills-particles')) {
        document.querySelector('.skills-section').appendChild(particlesContainer);
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 6 + 2;
            const speed = Math.random() * 0.1 + 0.02;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.setAttribute('data-speed', speed.toString());
            particlesContainer.appendChild(particle);
        }
    }
    
    // Add animated particles to about section
    const aboutParticlesContainer = document.createElement('div');
    aboutParticlesContainer.className = 'about-particles';
    if (document.querySelector('.about') && !document.querySelector('.about-particles')) {
        document.querySelector('.about').prepend(aboutParticlesContainer);
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'about-particle';
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = `-${size}px`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            
            // Vary particle colors
            const colors = [
                'rgba(67, 97, 238, 0.15)',
                'rgba(111, 255, 233, 0.15)',
                'rgba(247, 37, 133, 0.15)',
                'rgba(76, 201, 240, 0.15)'
            ];
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            aboutParticlesContainer.appendChild(particle);
        }
    }
    
    // Add smooth hover effect to all buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const x = e.clientX - button.getBoundingClientRect().left;
            const y = e.clientY - button.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Back to Top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when button is clicked
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Add a pulse effect when clicked
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 800);
        });
    }
});