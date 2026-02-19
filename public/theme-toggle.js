(function () {
  var storageKey = "site-theme";
  var root = document.documentElement;
  var toggleButton;

  function setFavicon(theme) {
    var favicon = document.getElementById("site-favicon");
    if (!favicon) {
      return;
    }

    var base = root.getAttribute("data-base") || "/";
    favicon.setAttribute("href", base + (theme === "dark" ? "favicon-dark.svg" : "favicon-light.svg"));
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    setFavicon(theme);
    if (toggleButton) {
      var nextLabel = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
      toggleButton.setAttribute("aria-label", nextLabel);
      toggleButton.setAttribute("title", nextLabel);
    }
  }

  function getPreferredTheme() {
    var saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return "dark";
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme") || getPreferredTheme();
    var next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(storageKey, next);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    toggleButton = document.getElementById("theme-toggle");
    applyTheme(root.getAttribute("data-theme") || getPreferredTheme());

    if (toggleButton) {
      toggleButton.addEventListener("click", toggleTheme);
    }
  });
})();
