var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  var oldSlide = currentSlide;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'slide show';
}