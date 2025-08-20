// Login Page JavaScript

// Generate random captcha
function generateCaptcha() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
  let captcha = '';
  for (let i = 0; i < 4; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

// Refresh captcha
function refreshCaptcha() {
  const captchaImage = document.getElementById('captchaImage');
  captchaImage.textContent = generateCaptcha();
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const uan = document.getElementById('uan').value;
      const password = document.getElementById('password').value;
      const captcha = document.getElementById('captcha').value;
      const captchaImage = document.getElementById('captchaImage').textContent;

      if (captcha.toLowerCase() !== captchaImage.toLowerCase()) {
        alert('Invalid Captcha! Please try again.');
        refreshCaptcha();
        document.getElementById('captcha').value = '';
        return;
      }

      if (uan && password) {
        // Redirect to home page after successful login
        window.location.href = 'home.html';
      } else {
        alert('Please fill in all fields!');
      }
    });
  }

  // Generate initial captcha
  refreshCaptcha();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
  // Add focus effects to form inputs
  const inputs = document.querySelectorAll('.form-group input');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement.classList.remove('focused');
      }
    });
  });

  // Add click effect to social icons
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      // Add click animation
      this.style.transform = 'scale(0.9)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
      
      // You can add actual social media functionality here
      console.log('Social icon clicked:', this.textContent);
    });
  });

  // Add hover effect to quick links
  const quickLinks = document.querySelectorAll('.quick-links a');
  quickLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
    const form = document.getElementById('loginForm');
    if (form) {
      form.dispatchEvent(new Event('submit'));
    }
  }
});

// Add loading state to form submission
function showLoadingState() {
  const submitBtn = document.querySelector('.signin-btn');
  if (submitBtn) {
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Signing In...';
    submitBtn.disabled = true;
  }
}

function hideLoadingState() {
  const submitBtn = document.querySelector('.signin-btn');
  if (submitBtn) {
    submitBtn.innerHTML = 'Sign In <span class="arrow-icon">→</span>';
    submitBtn.disabled = false;
  }
}
