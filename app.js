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
  this.scrollY < 200
    ? (navElement.style.background = "none")
    : (navElement.style.background =
        "linear-gradient(90deg, rgba(148,147,158,1) 0%, rgba(101,100,100,1) 38%)");
  // this.scrollY < 500
  //   ? (scrollElement.style.display = "flex")
  //   : (scrollElement.style.display = "none");
}

window.addEventListener("scroll", changecss, false);
