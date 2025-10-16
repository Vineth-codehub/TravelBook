const loginForm = document.getElementById("loginForm");
    const errorBox = document.getElementById("error");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const demoUser = { email: "vineth@gmail.com", password: "123456" };

      if (email === demoUser.email && password === demoUser.password) {
        localStorage.setItem("auth", "true");
        window.location.href = "index.html";
      } else {
        errorBox.style.display = "block";
      }
    });

    // Password toggle
    function togglePassword() {
      const passField = document.getElementById("password");
      passField.type = passField.type === "password" ? "text" : "password";
    }