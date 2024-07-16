"use strict";
const ulList = document.querySelectorAll("li.item");
const allList = ulList.length;

console.log(`Number of Categories: `, allList);

ulList.forEach((list) => {
  const ulText = list.querySelector("h2");
  const liItems = list.querySelectorAll("li");
  const allItems = liItems.length;
  console.log(`Category: `, ulText.textContent);
  console.log(`Elements : `, allItems);
});
