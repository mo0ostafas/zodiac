/********* slider *********/
const slidesContainer = document.getElementById("testimonialSlides");
const navContainer = document.getElementById("testimonialNav");
const slider = document.getElementById("testimonialSlider");
const slides = document.querySelectorAll("#testimonialSlides .slide");

let currentIndex = 0;
const totalSlides = slides.length;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider();
  });
  navContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoPlay() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

let autoplayInterval = setInterval(autoPlay, 4000);

let startX = 0;
let isDragging = false;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(autoplayInterval);
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  const deltaX = touch.clientX - startX;

  slidesContainer.style.transform = `translateX(${
    -currentIndex * 100 + (deltaX / slider.offsetWidth) * 100
  }%)`;
});

slider.addEventListener("touchend", (e) => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentIndex < totalSlides - 1) currentIndex++;
    else if (diff > 0 && currentIndex > 0) currentIndex--;
  }

  updateSlider();
  autoplayInterval = setInterval(autoPlay, 4000); // Resume autoplay
});


/********* year *********/
const d = new Date();
const yearSpan = document.querySelector('#year');
yearSpan.innerText = d.getFullYear();


/********* top *********/
const topBtn = document.querySelector('button#top');
topBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
});
