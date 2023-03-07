$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
let hamberger = document.querySelector(".hamburger");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobile-nav");
hamberger.addEventListener("click", () => {
  console.log("yes");
  mobileNav.classList.add("open");
});
times.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});
