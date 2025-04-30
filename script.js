// Get elements from the HTML by their IDs
const title = document.getElementById("description");
const heading = document.querySelector("h1");
const dynamicContent = document.getElementById("dynamicContent");

const textButton = document.getElementById("textBtn");
const styleButton = document.getElementById("styleBtn");
const toggleButton = document.getElementById("toggleBtn");

// When the "Inspire Me" button is clicked, change the text
textButton.addEventListener("click", function () {
  title.textContent = "You're doing amazing! Keep coding 💻✨";
});

// When the "Glow Up" button is clicked, change the style of the heading
styleButton.addEventListener("click", function () {
  heading.style.color = "purple";
  heading.style.fontSize = "2.5rem";
  heading.style.textShadow = "2px 2px 4px #d3adf7";
});

// When the "Magic Box" button is clicked, add or remove a message box
toggleButton.addEventListener("click", function () {
  // Check if the box already exists
  const existingBox = document.getElementById("funBox");

  if (existingBox) {
    // If it exists, remove it
    dynamicContent.removeChild(existingBox);
  } else {
    // If it doesn't exist, create and add it
    const newBox = document.createElement("div");
    newBox.id = "funBox";
    newBox.textContent = "🎉 You just created this box using JavaScript!";
    newBox.style.backgroundColor = "#eee0ff";
    newBox.style.padding = "10px";
    newBox.style.marginTop = "10px";
    newBox.style.borderLeft = "4px solid purple";

    dynamicContent.appendChild(newBox);
  }
});
