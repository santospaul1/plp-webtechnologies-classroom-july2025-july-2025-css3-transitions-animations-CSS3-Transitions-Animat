// Part 2: Function with Parameters and Return Value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrating local vs global scope
let globalResult = 0;

function runFunctionDemo() {
  const localWidth = 5;
  const localHeight = 10;
  globalResult = calculateArea(localWidth, localHeight);
  document.getElementById("function-result").textContent = globalResult;
}

// Part 3: Triggering CSS Animation
function animateBox() {
  const box = document.getElementById("animated-box");
  box.classList.add("animate");

  // Remove class after animation ends to allow re-trigger
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
}

// Part 3: Modal Toggle
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
}
