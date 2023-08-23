let currentSlide = 0;

function scrollSlidedots(index) {
  let pictures = Array.from(document.querySelectorAll(".gallery-cell"));
  pictures[index].scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
  let dots = Array.from(document.querySelectorAll(".dot"));
  dots[currentSlide].classList.remove("active-dot");
  currentSlide = index;
  dots[currentSlide].classList.add("active-dot");
}

function initializeSliderdots() {
  let dots = Array.from(document.querySelectorAll(".dot"));
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      scrollSlidedots(i);
    });
  }
}

function initializeArrows() {
  let arrows = Array.from(document.querySelectorAll("button.nav"));
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", () => {
      scrollArrows(i);
    });
  }
}

function scrollArrows(index) {
  let arrows = Array.from(document.querySelectorAll("button.nav"));
  if (arrows[index].classList.contains("disabled-arrow") == true) {
    return;
  } else if (index == 1) {
    let pictures = Array.from(document.querySelectorAll(".gallery-cell"));
    let dots = Array.from(document.querySelectorAll(".dot"));
    dots[currentSlide].classList.remove("active-dot");
    currentSlide++;
    pictures[currentSlide].scrollIntoView({
      behavior: "smooth",
    });
    dots[currentSlide].classList.add("active-dot");
    if (currentSlide != 0) {
      arrows[0].classList.remove("disabled-arrow");
    }
    if (currentSlide == 9) {
      arrows[1].classList.add("disabled-arrow");
    }
  } else if (index == 0) {
    let pictures = Array.from(document.querySelectorAll(".gallery-cell"));
    let dots = Array.from(document.querySelectorAll(".dot"));
    dots[currentSlide].classList.remove("active-dot");
    currentSlide--;
    pictures[currentSlide].scrollIntoView({
      behavior: "smooth",
    });
    dots[currentSlide].classList.add("active-dot");
    if (currentSlide != 9) {
      arrows[0].classList.remove("disabled-arrow");
    }
    if (currentSlide == 0) {
      arrows[0].classList.add("disabled-arrow");
    }
  }
}

document.addEventListener("DOMContentLoaded", initializeSliderdots);
document.addEventListener("DOMContentLoaded", initializeArrows);
