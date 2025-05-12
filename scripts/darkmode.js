document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Überprüfe den gespeicherten Zustand im localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Setze den initialen Zustand basierend auf localStorage
    if (isDarkMode) {
        body.classList.add("darkmode");
        themeToggle.checked = true;
    } else {
        body.classList.remove("darkmode");
        themeToggle.checked = false;
    }

    // Event-Listener für den Theme-Switch
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            body.classList.add("darkmode");
            localStorage.setItem("darkMode", "true"); // Speichere Dark Mode im localStorage
        } else {
            body.classList.remove("darkmode");
            localStorage.setItem("darkMode", "false"); // Speichere Light Mode im localStorage
        }
    });
});
