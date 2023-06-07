var slideIndex = 0;
var testimonials = document.getElementsByClassName("slider-content");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");


function showSlide(index) {
  if (index >= testimonials.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = testimonials.length - 1;
  }
  
  for (var i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  
  testimonials[slideIndex].style.display = "block";
}
showSlide(slideIndex);

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}
