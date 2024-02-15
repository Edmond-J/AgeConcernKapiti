
document.addEventListener("DOMContentLoaded", function () {
  const storedTheme = localStorage.getItem("neve_user_theme");
  if (storedTheme) {
    document.documentElement.setAttribute("data-neve-theme", storedTheme);
    setCurrentTheme(storedTheme);
  }
});
