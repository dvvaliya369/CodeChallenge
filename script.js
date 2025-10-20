// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');
const editBtn = document.getElementById('editBtn');
const editModal = document.getElementById('editModal');
const closeModal = document.querySelector('.close');
const cancelEdit = document.getElementById('cancelEdit');
const editForm = document.getElementById('editForm');

// Profile elements
const profileName = document.getElementById('profileName');
const profileTitle = document.getElementById('profileTitle');
const aboutText = document.getElementById('aboutText');
const editName = document.getElementById('editName');
const editTitle = document.getElementById('editTitle');
const editAbout = document.getElementById('editAbout');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeModal();
    initializeSkillBars();
    initializeAnimations();
});

// Tab functionality
function initializeTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            switchTab(targetTab);
        });
    });
}

function switchTab(targetTab) {
    // Remove active class from all tabs and panes
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding pane
    document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
    document.getElementById(targetTab).classList.add('active');
}

// Modal functionality
function initializeModal() {
    editBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    cancelEdit.addEventListener('click', closeModalHandler);
    editForm.addEventListener('submit', saveProfile);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === editModal) {
            closeModalHandler();
        }
    });
}

function openModal() {
    // Populate form with current values
    editName.value = profileName.textContent;
    editTitle.value = profileTitle.textContent;
    editAbout.value = aboutText.textContent;
    
    editModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModalHandler() {
    editModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function saveProfile(event) {
    event.preventDefault();
    
    // Update profile information
    profileName.textContent = editName.value || 'John Doe';
    profileTitle.textContent = editTitle.value || 'Full Stack Developer';
    aboutText.textContent = editAbout.value || aboutText.textContent;
    
    // Show success message
    showNotification('Profile updated successfully!', 'success');
    
    // Close modal
    closeModalHandler();
}

// Skill bars animation
function initializeSkillBars() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                animateSkillBars(skillBars);
            }
        });
    }, observerOptions);
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

function animateSkillBars(skillBars) {
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, index * 200);
    });
}

// Initialize animations
function initializeAnimations() {
    // Add hover effects to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click effect to stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-triangle';
        case 'warning': return 'exclamation-circle';
        default: return 'info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
}

// Profile image functionality
document.addEventListener('DOMContentLoaded', function() {
    const imageOverlay = document.querySelector('.image-overlay');
    const profileImage = document.getElementById('profileImage');
    
    if (imageOverlay) {
        imageOverlay.addEventListener('click', function() {
            // Create invisible file input
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            
            fileInput.addEventListener('change', function(event) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        profileImage.src = e.target.result;
                        showNotification('Profile picture updated!', 'success');
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            // Trigger file selection
            fileInput.click();
        });
    }
});

// Enhanced keyboard navigation
document.addEventListener('keydown', function(event) {
    // Close modal with Escape key
    if (event.key === 'Escape' && editModal.style.display === 'block') {
        closeModalHandler();
    }
    
    // Tab navigation with arrow keys
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab && document.activeElement.classList.contains('tab-btn')) {
            const tabs = Array.from(tabBtns);
            const currentIndex = tabs.indexOf(activeTab);
            let nextIndex;
            
            if (event.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
            } else {
                nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
            }
            
            tabs[nextIndex].click();
            tabs[nextIndex].focus();
            event.preventDefault();
        }
    }
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels and roles
    tabBtns.forEach((btn, index) => {
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', btn.classList.contains('active'));
        btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
    });
    
    tabPanes.forEach((pane, index) => {
        pane.setAttribute('role', 'tabpanel');
        pane.setAttribute('aria-hidden', !pane.classList.contains('active'));
    });
    
    // Update ARIA attributes when tabs change
    const originalSwitchTab = switchTab;
    switchTab = function(targetTab) {
        originalSwitchTab(targetTab);
        
        // Update ARIA attributes
        tabBtns.forEach(btn => {
            const isActive = btn.classList.contains('active');
            btn.setAttribute('aria-selected', isActive);
            btn.setAttribute('tabindex', isActive ? '0' : '-1');
        });
        
        tabPanes.forEach(pane => {
            pane.setAttribute('aria-hidden', !pane.classList.contains('active'));
        });
    };
});

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add loading states for better UX
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        ">
            <div style="
                width: 40px;
                height: 40px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid #4f46e5;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 10px;
            "></div>
            <p style="text-align: center; margin: 0; color: #666;">Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

function hideLoading() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.remove();
    }
}
