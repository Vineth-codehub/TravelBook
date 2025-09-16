document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorBox = document.getElementById("error");

  // Simple demo credentials
  const demoUser = { email: "user@example.com", password: "123456" };

  if (email === demoUser.email && password === demoUser.password) {
    localStorage.setItem("auth", "true");
    window.location.href = "index.html";
  } else {
    errorBox.style.display = "block";
  }
});
