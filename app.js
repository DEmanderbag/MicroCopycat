const menuBlock = document.querySelector(".menu__line");
const listLine1 = document.querySelector(".line--one");
const listLine2 = document.querySelector(".line--two");
const mobileMenu = document.querySelector(".mobile--menu");

menuBlock.addEventListener("click", () => {
  listLine1.classList.toggle("line--left");
  listLine2.classList.toggle("line--right");
  mobileMenu.classList.toggle("open");
});

// Carousel portion
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const carouselNav = document.querySelector(".carousel__nav")
const dots = Array.from(carouselNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slide next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
}

slides.forEach((setSlidePosition));

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}


carouselNav.addEventListener("click", e => {
  //what indicator was clicked on
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = carouselNav.querySelector(".active-dot");
  const targetIndex = dots.findIndex(carouselNav => carouselNav === targetDot)
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  
  currentDot.classList.remove("active-dot");
  targetDot.classList.add("active-dot");

})