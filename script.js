        const projects = {
             project1: {
                title: "Dragon Repeller",
                icon: '<img src="assets/logos/dragon.png" alt="Dragon" class="project-logo">',
                description: "A text based RPG game where players embark on a quest to defeat dragons and save the kingdom. The game features an immersive storyline, character customization, and strategic combat mechanics.",
                fullDescription: "Dragon Repeller is a thrilling text-based RPG that combines storytelling with strategic gameplay. Players create their own characters, explore a richly detailed world, and engage in turn-based battles against formidable dragon foes. The game emphasizes player choice, allowing for multiple paths and outcomes based on decisions made throughout the adventure.",
                technologies: ["HTML", "CSS", "JavaScript"],
                features: [
                    "Turn-based combat system",
                    "Inventory management",
                    "Interactive world exploration",
                    "Achievements and leaderboards"
                ],
                challenges: [
                    "Balancing game mechanics",
                    "Storyline development",
                    "Performance optimization",
                    "User interface design",
                ],
                results: [
                    "Implemented feedback for continuous improvement",
            
                    "Expanded storyline with additional quests"
                ],
                liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Dragon_repeller"
            },
            project2: {
                title: "Sust Medical",
                icon: '<img src="assets/logos/sust.png" alt="Sust_Medical" class="project-logo">',
                description: "Sust Medical is a platform designed to connect medical students and professionals, facilitating knowledge sharing, collaboration on research projects, and access to resources. The platform aims to enhance the educational experience for medical students and foster innovation in healthcare.",
                fullDescription: "Sust Medical is a comprehensive platform that bridges the gap between medical students and professionals. It provides a space for sharing ideas, collaborating on research, and accessing valuable resources. The platform includes features like virtual coworking spaces, project funding tools, and mentorship programs to support innovation in healthcare.",
                technologies: ["Flutter", "Firebase", "Dart"],
                features: [
                    "Collaborative platform for students and medical stuffs",
                    "Virtual coworking spaces",
                    "Project funding tools"
                    
                ],
                challenges: [
                    "Using android development environment",
                    "Scalable video conferencing",
                    "Payment processing security"
                ],
                results: [
                    "A nice cool app"
                ],
                liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Sust_medical"
            },
            project3: {
                title: "Pacman",
                icon: '<img src="assets/logos/pacman.png" alt="Pacman" class="project-logo">',
                description: "Clone of one of the most populer arcade game in the world-Pacman",
                fullDescription: "Clone of one of the most populer arcade game in the world-Pacman using Java swing as a part of Object oriented programming lab ",
                technologies: ["Java", "Java Swing"],
                features: [
                    "Smooth gameplay",
                    "Adjustable player and enemy speed",
                    "Lightwaight"
                ],
                challenges: [
                    "Use of Object oriented Programming"
                    
                ],
                results: [
                    "Learning OOP",
                    "Great game"
                    
                ],
                 liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Pacman"
            },
            project4: {
                title: "E-commerce Backend",
                icon: '<img src="assets/logos/ecom.png" alt="Pacman" class="project-logo">',
                description: "A backend application made for any E commerce platform",
                fullDescription: "A HTTP server made with Go and REST Api from where you can feach and create Json data for an e commerce platform ",
                technologies: ["Go"],
                features: [
                    "REST Api",
                    "First and efficient",
                    "Concurrency"
                ],
                challenges: [
                    "Fundumentals of HTTP, RESTfull api and networking"
                    
                ],
                results: [
                    "Learning Go",
                    
                ],
                 liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/E-commerce_backend"
           }
            
        };
        function initProjectClicks() {
    document.querySelectorAll('.project-item').forEach(item => {
        const key = item.getAttribute('data-project');
        if (key) {
            item.addEventListener('click', () => openProjectModal(key));
        }
    });
}



        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
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
        }

        // Header scroll effect
        function initHeaderScrollEffect() {
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(10, 10, 15, 0.98)';
                } else {
                    header.style.background = 'rgba(10, 10, 15, 0.95)';
                }
            });
        }

        // Bento card intersection observer for animations
        function initBentoAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                        entry.target.style.opacity = '1';
                    }
                });
            }, observerOptions);

            // Initially hide cards and observe them
            document.querySelectorAll('.bento-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.animationDelay = `${index * 0.1}s`;
                observer.observe(card);
            });
        }

        // Project modal functions
        function openProjectModal(projectId) {
            const modal = document.getElementById('projectModal');
            const project = projects[projectId];
            
            if (!project) return;
            
            document.getElementById('modalTitle').textContent = project.title;
            
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <div class="project-detail-image">${project.icon}</div>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${project.fullDescription}</p>
                
                <div class="project-details">
                    <div class="detail-section">
                        <h4>Technologies Used</h4>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Key Features</h4>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Technical Challenges</h4>
                        <ul>
                            ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Results & Impact</h4>
                        <ul>
                            ${project.results.map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
               <div class="project-links">
    <a href="${project.sourceCode}" target="_blank" class="project-link">View Source Code</a>
</div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Animate modal entrance
            requestAnimationFrame(() => {
                modal.style.opacity = '1';
                modal.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
            });
        }

        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            modal.style.opacity = '0';
            modal.querySelector('.modal-content').style.transform = 'translateY(-50px) scale(0.9)';
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeProjectModal();
            }
        });

        // Projects navigation
        let currentProjectPage = 0;
        const totalProjectPages = 2;

        function nextProjects() {
            if (currentProjectPage < totalProjectPages -1) {
                currentProjectPage++;
                updateProjectsDisplay();
            }
        }

        function previousProjects() {
            if (currentProjectPage > 0) {
                currentProjectPage--;
                updateProjectsDisplay();
            }
        }

        function updateProjectsDisplay() {
    const pages = document.querySelectorAll('.projects-page');
    const counter = document.getElementById('projectCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    pages.forEach((page, index) => {
        page.classList.remove('active', 'prev');

        if (index === currentProjectPage) {
            page.classList.add('active');
            // make visible & interactive
            page.style.display = ''; // allow css default (grid)
            page.style.visibility = 'visible';
            page.style.pointerEvents = 'auto';
            page.setAttribute('aria-hidden', 'false');
        } else {
            if (index < currentProjectPage) page.classList.add('prev');
            // hide & prevent clicks
            page.style.display = 'none';
            page.style.visibility = 'hidden';
            page.style.pointerEvents = 'none';
            page.setAttribute('aria-hidden', 'true');
        }
    });

    counter.textContent = `${currentProjectPage + 1} / ${totalProjectPages}`;
    prevBtn.disabled = currentProjectPage === 0;
    nextBtn.disabled = currentProjectPage === totalProjectPages - 1;
}


        // CV functions
        function downloadCV() {
            
            
             const link = document.createElement('a');
             link.href = 'assets/Jawadun_Noor.pdf';
             link.download = 'Jawadun_Noor.pdf';
             link.click();
        }

        function viewCV() {
            window.open('assets/Jawadun_Noor.pdf', '_blank');
            
        }
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                if (index % 3 === 0) {
                    const rect = particle.getBoundingClientRect();
                    const particleX = rect.left + rect.width / 2;
                    const particleY = rect.top + rect.height / 2;
                    
                    const distance = Math.sqrt(
                        Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                    );
                    
                    if (distance < 100) {
                        particle.style.opacity = '0.8';
                        particle.style.transform = `scale(1.5)`;
                        particle.style.background = 'rgba(100, 255, 218, 0.8)';
                    } else {
                        particle.style.opacity = '0.3';
                        particle.style.transform = `scale(1)`;
                        particle.style.background = 'rgba(100, 255, 218, 0.3)';
                    }
                }
            });
        });

        // Add hover effects to bento cards
        function initBentoCardEffects() {
            document.querySelectorAll('.bento-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.5)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Add stagger animation to skills tags
        function initSkillsAnimation() {
            const skillTags = document.querySelectorAll('.skill-tag');
            skillTags.forEach((tag, index) => {
                tag.style.animation = `fadeInUp 0.5s ease-out forwards`;
                tag.style.animationDelay = `${index * 0.1}s`;
                tag.style.opacity = '0';
            });
        }

        // Add CSS animation for fade in up
        const fadeInUpStyle = document.createElement('style');
        fadeInUpStyle.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .modal {
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal-content {
                transform: translateY(-50px) scale(0.9);
                transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
        `;
        document.head.appendChild(fadeInUpStyle);

        // Initialize profile image
        function initProfileImage() {
            const profileImage = document.getElementById('profileImage');
            const placeholder = document.querySelector('.photo-placeholder');
            
            profileImage.addEventListener('error', function() {
                // Create a placeholder if image fails to load
                const placeholderDiv = document.createElement('div');
                placeholderDiv.style.cssText = `
                    width: 100%; height: 100%; 
                    background: linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(0, 217, 255, 0.1));
                    display: flex; align-items: center; justify-content: center;
                    font-size: 2rem; color: #64ffda;
                `;
                placeholderDiv.textContent = '👨‍💻';
                this.parentNode.appendChild(placeholderDiv);
                this.style.display = 'none';
            });
        }

        // Add click-to-copy functionality for contact info
        function initContactCopy() {
            document.querySelectorAll('.contact-item').forEach(item => {
                item.addEventListener('click', function() {
                    const text = this.querySelector('p').textContent;
                    navigator.clipboard.writeText(text).then(() => {
                        // Show a temporary success message
                        const originalText = this.querySelector('p').textContent;
                        this.querySelector('p').textContent = 'Copied!';
                        this.querySelector('p').style.color = '#64ffda';
                        
                        setTimeout(() => {
                            this.querySelector('p').textContent = originalText;
                            this.querySelector('p').style.color = '';
                        }, 1000);
                    });
                });
            });
        }
        function initProjectDelegation() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    // ensure each item has a data-project (fallback if you didn't update HTML)
    document.querySelectorAll('.project-item').forEach((item, i) => {
        if (!item.dataset.project) item.dataset.project = `project${i + 1}`;
    });

    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.project-item');
        if (!item) return;
        const id = item.dataset.project;
        console.log('delegated click ->', id, item);
        openProjectModal(id);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initSmoothScrolling();
    initHeaderScrollEffect();
    initBentoAnimations();
    initBentoCardEffects();
    initSkillsAnimation();
    initProfileImage();
    initContactCopy();
    initProjectClicks();
    updateProjectsDisplay(); // Initialize project navigation
    initProjectDelegation();
            
            // Add a welcome message
            console.log('🚀 Welcome to Jawadun Noor\'s Portfolio! Built with modern web technologies.');
        });

        // Add keyboard navigation for accessibility
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const modal = document.getElementById('projectModal');
                if (modal.style.display === 'block') {
                    closeProjectModal();
                }
            }
        });
