// Common JavaScript Functions

// Logout functionality
function initializeLogout() {
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        window.location.href = '../index.html';
    });
  }
}

// Initialize common functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeLogout();
});

// Common utility functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('mobile-open');
}

// Add mobile menu button for small screens
function addMobileMenuButton() {
  if (window.innerWidth <= 768) {
    const nav = document.querySelector('nav');
    const mobileBtn = document.createElement('button');
    mobileBtn.className = 'mobile-menu-btn';
    mobileBtn.innerHTML = '☰';
    mobileBtn.onclick = toggleMobileMenu;
    
    // Insert before the user section
    const userSection = nav.querySelector('.user-section');
    nav.insertBefore(mobileBtn, userSection);
  }
}

// Initialize mobile menu on resize
window.addEventListener('resize', addMobileMenuButton);
