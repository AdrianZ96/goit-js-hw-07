"use strict";

const form = document.querySelector("input#name-input");
const name = document.querySelector("span#name-output");

form.addEventListener("input", (e) => {
  if (e.currentTarget.value === "" || e.currentTarget.value === " ") {
    name.textContent = "Anonymous";
  } else {
    name.textContent = e.currentTarget.value;
  }
});
