function startNameScroll() {
  const scrollingNames = document.getElementById('scrolling-names');
  const originalContent = scrollingNames.innerHTML;

  // Duplicate the content to seemlessly loop
  scrollingNames.innerHTML += originalContent;

  let currentX = 0;

  function scroll() {
    currentX -= 1; // pixels per frame

    // Reset transform if we've scrolled past the first full copy
    if (Math.abs(currentX) >= scrollingNames.scrollWidth / 2) {
      currentX = 0;
    }

    scrollingNames.style.transform = `translateX(${currentX}px)`;
    requestAnimationFrame(scroll);
  }

  scroll();
}

window.addEventListener('DOMContentLoaded', startNameScroll);
