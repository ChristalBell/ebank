const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

// close hamburger menu
btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    // document.getElementById("hero__image").style.transition =
    //   "all 300ms ease-in-out";

    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // open
    body.classList.add("noscroll");
    header.classList.add("open");
    // document.getElementById("hero__image").style.visibility = "hidden";

    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
