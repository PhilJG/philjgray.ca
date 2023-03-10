"use strict";

//Variables
//Nav
const navList = document.querySelector(".nav__list");
const navIcon = document.querySelector(".nav__icon");
const closeIcon = document.querySelector(".close__icon");

//Form
const form = document.querySelector(".form");
const input = document.querySelector(".contact__input");
const formButton = document.querySelector(".contact__input--btn");
const emailInput = document.querySelector(".contact__input--email");
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//Images
const heroImage = document.querySelector('.home__hero');

// Function

const fadeInImage = function(el, img) {
  el.src = img;
  el.addEventListener('load', function(){
    el.classList.add('fadeIn')
  });
}

//Nav Toggle

const toggleOn = function () {
  if ((navList.style.diplay = "none")) {
    navList.style.display = "flex";
    navIcon.style.display = "none";
    closeIcon.style.display = "block";
  }
};

const toggleOff = function () {
  if ((navList.style.diplay = "flex")) {
    navList.style.display = "none";
    navIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
};

// Input Error
// const inputError = function (input, pattern) {
//   // if (emailInput != emailPattern) {
//   //   emailInput.border.border = "hsl(0 90% 57%)";
//   // }
//   console.log("submit");
// };

// Event Listeners

navIcon.addEventListener("click", toggleOn);
closeIcon.addEventListener("click", toggleOff);

// formButton.addEventListener("click", inputError);
