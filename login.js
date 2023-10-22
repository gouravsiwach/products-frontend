document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic client-side validation (You should also validate on the server)
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Send login request to the server
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server, e.g., store the token or redirect
        if (data.token) {
          // Store the token securely (e.g., in localStorage or cookies)
          // Redirect to another page or perform authenticated actions
          alert(
            "Logged in successfully. Handle the token or redirect as needed."
          );
        } else {
          alert("Login failed. Check your credentials.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Login failed. Check your credentials or try again later.");
      });
  });
});
