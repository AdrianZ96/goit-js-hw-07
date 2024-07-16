function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBnt = document.querySelector("button[data-create]");
const destroyBnt = document.querySelector("button[data-destroy]");
const inputValue = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

createBnt.addEventListener("click", () => {
  const amount = parseInt(inputValue.value);
  createBoxes(amount);
});

destroyBnt.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(newDiv);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}
