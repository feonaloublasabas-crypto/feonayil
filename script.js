const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

// Toggle theme + icon
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  }
});
