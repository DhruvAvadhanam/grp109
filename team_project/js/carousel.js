let slideIndex = 1;
let autoScrollInterval;
let countdownInterval;
let countdownValue = 0;

// Audio setup
const leftSound = new Audio("sounds/bee.wav");
const rightSound = new Audio("sounds/clee.wav");

// Show the first slide and start timers
showSlides(slideIndex);
startAutoScroll();
startCountdown();

// Auto scroll function (no sound)
function autoPlusSlides() {
  showSlides(slideIndex += 1);
  resetCountdown();
}

// Manual scroll with sound
function manualPlusSlides(n) {
  if (n < 0) {
    leftSound.play();
  } else {
    rightSound.play();
  }
  showSlides(slideIndex += n);
  resetAutoScroll();
}

// Thumbnail controls (if you have dots clickable)
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoScroll();
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Start the auto-scroll interval
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    autoPlusSlides();
  }, 3000);
}

// Reset countdown only (called by auto scroll)
function resetCountdown() {
  countdownValue = 0;
  updateCountdownDisplay();
}

// Reset auto-scroll and countdown (called on manual scroll)
function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  clearInterval(countdownInterval);
  countdownValue = 0;
  updateCountdownDisplay();
  startAutoScroll();
  startCountdown();
}

// Countdown timer display (counts up from 0 to 3)
function startCountdown() {
  const timerDisplay = getOrCreateCountdownDisplay();
  countdownInterval = setInterval(() => {
    countdownValue++;
    if (countdownValue > 3) {
      countdownValue = 0;
    }
    updateCountdownDisplay();
  }, 1000);
}

function updateCountdownDisplay() {
  const timerDisplay = document.getElementById("carousel-timer");
  if (timerDisplay) {
    timerDisplay.textContent = `Elapsed: ${countdownValue}s`;
  }
}

// Create countdown display below carousel if not present
function getOrCreateCountdownDisplay() {
  let timerDisplay = document.getElementById("carousel-timer");
  if (!timerDisplay) {
    timerDisplay = document.createElement("div");
    timerDisplay.id = "carousel-timer";
    timerDisplay.style.textAlign = "center";
    timerDisplay.style.fontSize = "16px";
    timerDisplay.style.color = "#013C4D";
    timerDisplay.style.marginTop = "10px";
    const container = document.querySelector(".slideshow-container");
    container.parentNode.insertBefore(timerDisplay, container.nextSibling);
  }
  return timerDisplay;
}
