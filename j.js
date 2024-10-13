
const grid = document.querySelector("#grid");
let currCanvas = document.querySelector(".canvas");
let size = 30;
const maxGridSize = 100;
let rainbow = false;

// creates grid squares and columns based on width and height

function createCanvas(canvas, size) {
    for (let i = 0; i < size; i += 1) {
        const newCol = document.createElement("div");
        newCol.classList.add("column");
        canvas.appendChild(newCol);
        for (let j = 0; j < size; j += 1) {
            const newCell = document.createElement("div");
            newCell.addEventListener("mouseover", () => {
                if (!rainbow) {
                    newCell.style.backgroundColor = "black";
                } else {
                    newCell.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
                }
            });
            newCell.classList.add("cell");
            newCol.appendChild(newCell);
        }
    }
}

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", () => {
    let size = NaN;
    let valid = false;
    do {
        size = prompt("enter a grid size");
        if (size == null) {
            return;
        }
        size = parseInt(size);
        if (isNaN(size) || size <= 0 || size > maxGridSize) {
            alert(`please enter a number from 1-${maxGridSize}`);
        } else {
            valid = true;
        }
    } while (!valid);

    // creates new canvas with given size and replaces the current one
    replaceCanvas(size);
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    replaceCanvas(size);
});

function replaceCanvas(size) {
    grid.removeChild(currCanvas);
    currCanvas = document.createElement("div");
    currCanvas.classList.add("canvas");
    createCanvas(currCanvas, size);
    grid.appendChild(currCanvas);
}

const rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", () => {
    rainbow = !rainbow;
    rainbowButton.classList.toggle("toggled");
});

function randomColor() {
    return Math.floor(Math.random() * 255);
}

createCanvas(currCanvas, size);