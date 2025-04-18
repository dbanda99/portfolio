window.addEventListener("load", () => {
    // Mobile navigation toggle
    const toggleBtn = document.getElementById("mobileToggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const icon       = document.getElementById("mobileIcon");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
        icon.classList.toggle("bi-chevron-down");
        icon.classList.toggle("bi-chevron-up");
      });
    }
  
    // Carousel logic
    const cards = Array.from(document.querySelectorAll(".carousel-card"));
    let currentIndex = 0;
    const total = cards.length;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const container = document.getElementById("carouselContainer");
  
    function updateCarousel() {
      cards.forEach((card, i) => {
        card.classList.remove("prev","active","next","hidden");
        if (i === currentIndex) {
          card.classList.add("active");
        } else if (i === (currentIndex + total - 1) % total) {
          card.classList.add("prev");
        } else if (i === (currentIndex + 1) % total) {
          card.classList.add("next");
        } else {
          card.classList.add("hidden");
        }
      });
    }
  
    function showNext() {
      currentIndex = (currentIndex + 1) % total;
      updateCarousel();
    }
    function showPrev() {
      currentIndex = (currentIndex - 1 + total) % total;
      updateCarousel();
    }
  
    prevBtn && prevBtn.addEventListener("click", showPrev);
    nextBtn && nextBtn.addEventListener("click", showNext);
  
    // Auto‑rotate every 10 seconds
    let autoRotate = setInterval(showNext, 10000);
  
    // Pause on hover (desktop)
    container.addEventListener("mouseenter", () => clearInterval(autoRotate));
    container.addEventListener("mouseleave", () => {
      autoRotate = setInterval(showNext, 10000);
    });
  
    // Swipe support (mobile)
    let startX = 0;
    container.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    container.addEventListener("touchend",   e => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50) showPrev();
      else if (startX - endX > 50) showNext();
    });
  
    // Initialize
    updateCarousel();
  });
  