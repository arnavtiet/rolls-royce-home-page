const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenelem = document.querySelectorAll(".hidden");
hiddenelem.forEach((el) => observer.observe(el));

const cursorSmall = document.querySelector(".small");

function changecss() {
  var navElement = document.querySelector("nav");
  var scrollElement = document.querySelector(".top-scroll");
  var initElement = document.querySelector(".top");
  this.scrollY < 350
    ? (navElement.style.backdropFilter = "blur(50px)")
    : (navElement.style.backdropFilter = "none");
  this.scrollY < 350
    ? (scrollElement.style.display = "none")
    : (scrollElement.style.display = "flex");

  this.scrollY < 350
    ? (initElement.style.display = "flex")
    : (initElement.style.display = "none");
}

window.addEventListener("scroll", changecss, false);
