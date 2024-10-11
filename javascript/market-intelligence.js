// market-intelligence.js

// Handle form submission
document
  .getElementById("feedback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (name && email && message) {
      alert(
        `Thank you for your feedback, ${name}! We will get back to you shortly.`
      );

      // Optionally, reset the form
      document.getElementById("feedback-form").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });

// Future feature: Fetch and update current prices dynamically (example)
function fetchCurrentPrices() {
  // This is where you would normally fetch data from an API
  // For now, it's just a placeholder function
  console.log("Fetching current onion prices...");
}

// Call the function to fetch prices on page load
document.addEventListener("DOMContentLoaded", function () {
  fetchCurrentPrices();
});
