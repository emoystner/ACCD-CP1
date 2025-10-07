// Grab the existing elements by their IDs
const cStage  = document.getElementById("colorStage");
const cButton = document.getElementById("colorButton");
const qImage  = document.getElementById("popeImage");
const qButton = document.getElementById("imageToggle");

// Random background color
function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  cStage.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Swap between pope1.webp and pope2.webp
function toggleImage() {
  const src1 = "images/pope1.png";
  const src2 = "images/pope2.webp";
  const current = qImage.getAttribute("src") || src1;
  qImage.setAttribute("src", current.includes("pope1") ? src2 : src1);
}

// Wire up events
qButton.addEventListener("click", toggleImage);
cButton.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);
