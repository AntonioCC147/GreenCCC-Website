document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");

    const isDarkMode = body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkMode);
  });

  const isDarkModePreferred = localStorage.getItem("darkMode") === "true";

  if (isDarkModePreferred) {
    body.classList.add("dark-theme");
  }
});
