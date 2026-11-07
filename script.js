const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const year = document.querySelector("#current-year");

function updateThemeButton(isDark) {
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

const isDarkMode = document.documentElement.classList.contains("dark-mode");
updateThemeButton(isDarkMode);

themeToggle.addEventListener("click", () => {
  const nextIsDark = !document.documentElement.classList.contains("dark-mode");
  document.documentElement.classList.toggle("dark-mode", nextIsDark);
  localStorage.setItem("theme", nextIsDark ? "dark" : "light");
  updateThemeButton(nextIsDark);
});

year.textContent = new Date().getFullYear();
