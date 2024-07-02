// Get references to DOM elements
const canvasArea = document.getElementById("canvas");
const sliderValue = document.getElementById("slider-size");
const gridSizeText = document.getElementById("size-label");
const clearBtn = document.getElementById("clear-canvas");
// Set canvas height equal to its width
function canvasHeight() {
    const width = canvasArea.getBoundingClientRect().width;
    canvasArea.style.height = width + "px";
}

// Append square divs to the canvas
function appendSquares(size) {
    // Clear existing squares
    canvasArea.innerText = "";

    // Calculate width and height of each square
    const sqSize = 100 / size + "%";

    // Create and append squares
    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.height = sqSize;
        square.style.width = sqSize;
        square.style.background = "white";

        // Add event listener to change background color on mouseover
        square.addEventListener("mouseover", () => {
            square.style.background = "black";
        });

        
        canvasArea.appendChild(square);
    }
}

// Set initial canvas height and append squares based on initial slider value
let gridSize = sliderValue.value;
canvasHeight();
appendSquares(gridSize);

// Update grid size and redraw squares when slider value changes
sliderValue.oninput = (event) => {
    gridSize = event.target.value;
    gridSizeText.textContent = `${gridSize} x ${gridSize}`;
    appendSquares(gridSize);
}

// Track whether the mouse is being held down
let drawing = false;
window.addEventListener("mousedown", () => {
    drawing = true;
});
window.addEventListener("mouseup", () => {
    drawing = false;
});

//clear canvas button
clearBtn.addEventListener("click", () => {
    appendSquares(gridSize);
 });
