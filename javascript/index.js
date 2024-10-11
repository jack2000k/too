// Get references to HTML elements
const signinButton = document.getElementById("signinButton");
const registerButton = document.getElementById("registerButton");
const formContainer = document.getElementById("formContainer");
const formCloseButton = document.getElementById("formCloseButton");
const formTitle = document.getElementById("formTitle");

// Check if user is logged in
let isLoggedIn = false;
const users = JSON.parse(localStorage.getItem("users")) || [];

// Show sign-in form on clicking "Sign In" button
signinButton.addEventListener("click", () => {
  formTitle.textContent = "Sign In";
  formContainer.style.display = "flex"; // Show the form
});

// Show register form on clicking "Register" button
registerButton.addEventListener("click", () => {
  formTitle.textContent = "Register";
  formContainer.style.display = "flex"; // Show the form
});

// Hide the form when the close button is clicked
formCloseButton.addEventListener("click", () => {
  formContainer.style.display = "none"; // Hide the form
});

// Handle form submission (optional)
formContainer.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validation
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // Check if registering or signing in
  if (formTitle.textContent === "Register") {
    registerUser(email, password);
  } else {
    signInUser(email, password);
  }
});

// Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Register user
function registerUser(email, password) {
  if (users.some((user) => user.email === email)) {
    alert("Email already registered. Please sign in.");
    return;
  }

  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! You can now sign in.");
  formContainer.style.display = "none";
}

// Sign in user
function signInUser(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    alert("Sign in successful! Welcome back!");
    isLoggedIn = true;
    formContainer.style.display = "none";
    // Redirect to another page or update the UI as needed
  } else {
    alert("Invalid email or password. Please try again.");
  }
}
