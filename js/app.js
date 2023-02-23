// index page first
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Add click event listeners to the buttons
button1.addEventListener("click", function () {
 
  button1.style.backgroundColor = "#A8BFC9";
  button1.style.color = "black"
  // Remove the background color from button2 (if it is currently active)
  button2.style.backgroundColor = "";
  button2.style.color = "white"
});

button2.addEventListener("click", function () {
  // Set the background color of button2 to white
  button2.style.backgroundColor = "#A8BFC9";
  button2.style.color = "black"
  // Remove the background color from button1 (if it is currently active)
  button1.style.backgroundColor = "";
  button1.style.color = "white"
});
