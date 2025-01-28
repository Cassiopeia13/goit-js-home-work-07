function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ""; 
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

// Функція створення елементів
function createBoxes(amount) {
  // Видаляємо попередні елементи, якщо вони є
  destroyBoxes();

  const elements = [];
  let size = 30; // Початковий розмір

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "5px";
    elements.push(div);

    size += 10; // Збільшуємо розмір
  }

  // Додаємо всі елементи в DOM за одну операцію
  boxes.append(...elements);
}

// Функція очищення елементів
function destroyBoxes() {
  boxes.innerHTML = ""; // Видаляємо всі дочірні елементи
}

