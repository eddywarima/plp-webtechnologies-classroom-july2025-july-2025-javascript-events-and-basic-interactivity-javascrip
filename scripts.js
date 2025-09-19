// =============================
// 🎉 Part 1: Event Handling
// =============================

// Click Event
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "🎉 Button was clicked!";
});

// Mouseover Event
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "red";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "black";
});

// Keyboard Event
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keyup", (event) => {
  keyOutput.textContent = "You typed: " + event.target.value;
});


// =============================
// 🎮 Part 2: Interactive Elements
// =============================

// 1. Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// 3. FAQ Collapse
const faqQuestion = document.getElementById("faqQuestion");
const faqAnswer = document.getElementById("faqAnswer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
});


// =============================
// 📋✅ Part 3: Form Validation
// =============================

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let valid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.className = "success";
  }
});
