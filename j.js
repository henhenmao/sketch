const canvas = document.querySelector("#grid");

// creates grid squares and columns based on width and height
const width = 50;
const height = width;
for (let i = 0; i < width; i += 1) {
    const newCol = document.createElement("div");
    newCol.classList.add("column");
    canvas.appendChild(newCol);
    for (let j = 0; j < height; j += 1) {
        const newCell = document.createElement("div");
        newCell.textContent = "a"
        newCell.classList.add("cell");
        newCol.appendChild(newCell);
    }
}