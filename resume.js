window.addEventListener('load', () => {
    // Mobile dropdown toggle (same as other pages)
    const toggleBtn = document.getElementById('mobileToggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = document.getElementById('mobileIcon');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        icon.classList.toggle('bi-chevron-down');
        icon.classList.toggle('bi-chevron-up');
      });
    }
  
    // Simple form submission handler
    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Thanks for your message! I'll reply within two business days.");
        form.reset();
      });
    }
  });
  