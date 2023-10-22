// register.js
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Basic client-side validation (You should also validate on the server)
    if (
      !username ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      alert("Please enter a valid username and matching passwords.");
      return;
    }

    // Send registration request to the server
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error("Registration failed");
        }
      })
      .then((data) => {
        // Handle the response from the server, e.g., redirect to login or show a success message
        alert(
          "Registered successfully. Redirect to login or show a success message."
        );
        window.location.href = "login.html"; // Redirect to login page
      })
      .catch((error) => {
        console.error("Registration error:", error);
        alert("Registration failed. Check your input or try again later.");
      });
  });
});
