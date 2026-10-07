/* Minimal progressive enhancement: theme toggle + footer year.
   Nothing here is required for the site to work. */

(function () {
  "use strict";

  // ── footer year ──────────────────────────────────────────
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ── theme toggle ─────────────────────────────────────────
  // Default follows the OS setting via CSS prefers-color-scheme.
  // Clicking sets an explicit override, remembered in localStorage.
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
      toggle.setAttribute("aria-label",
        next === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }
})();
