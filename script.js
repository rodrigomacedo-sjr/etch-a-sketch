createGrid(16);

const newButton = document.querySelector(".button");
newButton.addEventListener("click", generateNewGrid);

const grid = document.querySelector(".grid");
grid.addEventListener("mouseover", paintSquare);

function createGrid(size) {
  size = Math.round(Number(size));
  const grid = document.querySelector(".grid");
  for (let i = 0; i < size; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("square-row");
    for (let j = 0; j < size; j++) {
      let newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newRow.appendChild(newSquare);
    }
    grid.appendChild(newRow);
  }
}

function generateNewGrid() {
  let newSize = prompt("New grid size");
  if (checkInvalidSize(newSize)) {
    alert("Please enter a valid number! [1, 100]");
    return;
  }
  deleteGrid();
  createGrid(newSize);
}

function checkInvalidSize(n) {
  return !(n <= 100 && n >= 1);
}

function deleteGrid() {
  const grid = document.querySelector(".grid");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

function paintSquare(e) {
  const square = e.target;

  if (checkSquare(square)) return;

  updateColor(square);
  updateOpacity(square);
}

function checkSquare(element) {
  return !element.className || element.className != "square";
}

function updateColor(element) {
  element.style.backgroundColor = getRandomColor();
}

function updateOpacity(element) {
  let oldOpacity = Number(element.style.opacity);
  element.style.opacity = String(oldOpacity + 0.1);
}

function getRandomColor() {
  let r = getRandomInt(255);
  let g = getRandomInt(255);
  let b = getRandomInt(255);
  return rgb(r, g, b);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function rgb(r, g, b) {
  return ["rgb(", r, ",", g, ",", b, ")"].join("");
}
