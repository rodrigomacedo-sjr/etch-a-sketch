function createGrid(size) {
  size = Number(size);
  let grid = document.querySelector(".grid");
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

createGrid(16);
