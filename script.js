createGrid(16);

const newButton = document.querySelector(".button");
newButton.addEventListener("click", generateNewGrid);

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
    alert("Please enter a valid number! [1, 100]")
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
