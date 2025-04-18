window.addEventListener('load', () => {
    // — your existing floating logo code —
    const logo = document.getElementById('logo');
    let angle = 0;
    (function float() {
      angle += 0.02;
      logo.style.transform = `translateY(${Math.sin(angle) * 5}px)`;
      requestAnimationFrame(float);
    })();
  
    // — mobile dropdown toggle logic —
    const toggleBtn = document.getElementById('mobileToggle');
    const container = document.querySelector('.mobile-menu');
    const icon = document.getElementById('mobileIcon');
    if (toggleBtn && container && icon) {
      toggleBtn.addEventListener('click', () => {
        container.classList.toggle('open');
        icon.classList.toggle('bi-chevron-down');
        icon.classList.toggle('bi-chevron-up');
      });
    }
  });
  