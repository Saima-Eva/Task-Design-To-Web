// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to change header background color on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  });
  