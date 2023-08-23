let images;
let dots;
let buttons;

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".image-wrapper"));
  dots = Array.from(document.querySelectorAll(".dot"));
  buttons = Array.from(document.querySelectorAll("button.nav"));
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      imageFunctions(i);
    });
  }
  for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener("click", () => {
      dotFunctions(j);
    });
  }
  for (let k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", () => {
      buttonFunctions(k);
    });
  }

  const toCheckIfHover = document.querySelector(".carousel-wrapper");
  setInterval(function () {
    if (!toCheckIfHover.matches(":hover")) {
      for (let i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("active-dot") == true && i != 9) {
          dotFunctions(i + 1);
          return;
        } else if (dots[i].classList.contains("active-dot") == true && i == 9) {
          dotFunctions(0);
          return;
        }
      }
    } else {
    }
  }, 3000);
});

function imageFunctions(index) {
  dotFunctions(index);
}

function dotFunctions(index) {
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  clickedElement = dots[index];
  clickedElement.classList.add("active-dot");
  images[index].scrollIntoView({
    behavior: "auto",
    block: "center",
    inline: "center",
  });
  if (index == 0 && index != 9) {
    buttons[0].classList.add("disabled-arrow");
  } else {
    buttons[0].classList.remove("disabled-arrow");
  }
  if (index == 9 && index != 0) {
    buttons[1].classList.add("disabled-arrow");
  } else {
    buttons[1].classList.remove("disabled-arrow");
  }
}

function buttonFunctions(index) {
  if (buttons[index].classList.contains("disabled-arrow") == true) {
    return;
  } else if (index == 1) {
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].classList.contains("active-dot") == true) {
        dotFunctions(dots.indexOf(dots[i + 1]));
        return;
      }
    }
  } else if (index == 0) {
    for (let i = 0; i < dots.length; i++) {
      if (dots[i].classList.contains("active-dot") == true) {
        dotFunctions(dots.indexOf(dots[i - 1]));
        return;
      }
    }
  }
}
