window.addEventListener('load', () => {
    // Mobile dropdown toggle (same as Home)
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
  
    // Custom scrollbar logic
    const container = document.getElementById('scrollContainer');
    const track = document.getElementById('scrollBarTrack');
    const thumb = document.getElementById('scrollBarThumb');
  
    function updateThumb() {
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const trackHeight = track.clientHeight - thumb.clientHeight;
      const ratio = container.scrollTop / scrollHeight;
      thumb.style.top = `${ratio * trackHeight}px`;
    }
  
    // Sync on scroll
    container.addEventListener('scroll', updateThumb);
  
    // Drag to scroll
    let isDragging = false;
    thumb.addEventListener('mousedown', e => {
      isDragging = true;
      thumb.style.cursor = 'grabbing';
      e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const rect = track.getBoundingClientRect();
      let offsetY = e.clientY - rect.top - thumb.clientHeight / 2;
      offsetY = Math.max(0, Math.min(offsetY, rect.height - thumb.clientHeight));
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const trackHeight = rect.height - thumb.clientHeight;
      container.scrollTop = (offsetY / trackHeight) * scrollHeight;
    });
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        thumb.style.cursor = 'grab';
      }
    });
  
    // Initialize
    updateThumb();
    window.addEventListener('resize', updateThumb);
  });
  