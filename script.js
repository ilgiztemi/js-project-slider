let slideIndex = 1;
showSlides(slideIndex)

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('my-slides');
  const dots = document.getElementsByClassName('dot');

  // check ranges, if out of range go back
  if (n > slides.length) {
    slideIndex = 1;
  // if below go to the end
  } else if (n <= 0) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex-1].className += " active";
  slides[slideIndex-1].style.display = "block";
}

