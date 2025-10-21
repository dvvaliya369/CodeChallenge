// Profile Page Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Profile image click to change
    const profileImg = document.getElementById('profile-img');
    const profileImages = [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b932?w=150&h=150&fit=crop&crop=face'
    ];
    let currentImageIndex = 0;

    if (profileImg) {
        profileImg.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % profileImages.length;
            this.src = profileImages[currentImageIndex];
            
            // Add a slight animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Follow button toggle
    const followBtn = document.querySelector('.btn-primary');
    let isFollowing = false;

    if (followBtn) {
        followBtn.addEventListener('click', function() {
            isFollowing = !isFollowing;
            
            if (isFollowing) {
                this.innerHTML = '<i class="fas fa-check"></i> Following';
                this.style.background = '#10b981';
            } else {
                this.innerHTML = '<i class="fas fa-plus"></i> Follow';
                this.style.background = '#667eea';
            }

            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Stats counter animation
    function animateCounters() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/,/g, ''));
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.ceil(current).toLocaleString();
                }
            }, 50);
        });
    }

    // Trigger counter animation when stats section comes into view
    const statsSection = document.querySelector('.profile-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(statsSection);
    }

    // Portfolio item click handler
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Opening ${title} project details...`);
        });
    });

    // Contact item click handlers
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('fa-envelope')) {
                window.location.href = `mailto:${text}`;
            } else if (icon.classList.contains('fa-phone')) {
                window.location.href = `tel:${text}`;
            } else if (icon.classList.contains('fa-linkedin')) {
                window.open(`https://${text}`, '_blank');
            } else if (icon.classList.contains('fa-github')) {
                window.open(`https://${text}`, '_blank');
            } else if (icon.classList.contains('fa-globe')) {
                window.open(`https://${text}`, '_blank');
            }
        });
    });

    // Add hover effect for activity items
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#f9fafb';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
        });
    });

    // Skills/tags interaction
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const skill = this.textContent;
            console.log(`Searching for projects with ${skill}...`);
            
            // Add temporary highlight effect
            const originalBg = this.style.background;
            this.style.background = '#667eea';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.style.background = originalBg;
                this.style.color = '#7c3aed';
            }, 300);
        });
    });

    // Theme toggle function (for demonstration)
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Remove focus from any active element
            document.activeElement.blur();
        }
    });

    // Smooth scroll for any internal links (if added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Profile card entrance animation
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        setTimeout(() => {
            profileCard.style.opacity = '1';
            profileCard.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add loading state simulation
    function simulateLoading() {
        const elements = document.querySelectorAll('.profile-section');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Trigger loading animation
    simulateLoading();

    // Status indicator animation
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        setInterval(() => {
            statusIndicator.style.transform = 'scale(1.2)';
            setTimeout(() => {
                statusIndicator.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }

    console.log('Profile page loaded successfully!');
});
