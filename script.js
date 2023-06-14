"use strict";

//first section

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// second section

const hamburgerMenu = document.querySelector(".hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Date
let currentDate = new Date();
let dateContainer = document.getElementById("current-date");
dateContainer.innerHTML = currentDate.toDateString();

// Islamic Date
let today = new Date();
let options = {
  timeZone: "Asia/Kuala_Lumpur",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
  calendar: "islamic-civil",
};
let islamicDate = today.toLocaleString("ms-MY", options);
document.getElementById("islamicDate").innerHTML = islamicDate;

//logo
document.getElementById("header-image").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Click the navbar: after

const navItems = document.querySelectorAll(".nav-menu li");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Get the target URL from the link's href attribute
    const targetURL = item.querySelector("a").href;

    // Navigate to the target URL
    window.location.href = targetURL;
  });
});

//Slide
const sliderImages = document.querySelectorAll(".slider img");
const sliderLinks = document.querySelectorAll(".slider a");
const sliderPrev = document.querySelector(".slider-buttons .prev");
const sliderNext = document.querySelector(".slider-buttons .next");
const intervalTime = 2500;

let current = 0;
let interval;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.opacity = 0;
  }
}

function startSlide() {
  reset();
  sliderImages[current].style.opacity = 1;
  updateCaption();
  current++;
  if (current >= sliderImages.length) {
    current = 0;
  }
}

function slideRight() {
  reset();
  current++;
  if (current >= sliderImages.length) {
    current = 0;
  }
  sliderImages[current].style.opacity = 1;
  updateCaption();
  clearInterval(interval);
  interval = setInterval(startSlide, intervalTime);
}

function slideLeft() {
  reset();
  current--;
  if (current < 0) {
    current = sliderImages.length - 1;
  }
  sliderImages[current].style.opacity = 1;
  updateCaption();
  clearInterval(interval);
  interval = setInterval(startSlide, intervalTime);
}

function updateCaption() {
  let captions = document.getElementsByClassName("caption");
  for (let i = 0; i < captions.length; i++) {
    captions[i].style.opacity = "0";
  }
  captions[current].style.opacity = "1";
}

// Add click event listeners to buttons
sliderPrev.addEventListener("click", slideLeft);
sliderNext.addEventListener("click", slideRight);

// Add link functionality to images
for (let i = 0; i < sliderLinks.length; i++) {
  sliderLinks[i].addEventListener("click", function () {
    window.location.href = sliderLinks[i].href;
  });
}

// Start slideshow
interval = setInterval(startSlide, intervalTime);
