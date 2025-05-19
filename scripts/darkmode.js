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

window.onload = function () {
  const rememberedUser = localStorage.getItem("rememberedUser");
  if (rememberedUser) {
    showMainContent();
  }
};

// Wird beim Laden der Seite ausgeführt
window.onload = function () {
  const rememberedUser = localStorage.getItem("rememberedUser");
  if (rememberedUser) {
    showMainContent();
  } else {
    showLogin();
  }
};

// Login-Logik
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const remember = document.getElementById("rememberMe").checked;
  const errorBox = document.getElementById("error-message");

  // Dummy-Daten (ersetzen durch echte Prüfung mit Backend in realen Projekten)
  const validUsername = "admin";
  const validPassword = "12345";

  if (username === validUsername && password === validPassword) {
    errorBox.textContent = "";

    if (remember) {
      localStorage.setItem("rememberedUser", username);
    }

    showMainContent();
  } else {
    errorBox.textContent = "Benutzername oder Passwort ist falsch.";
  }
}

// Zeigt den Hauptinhalt und versteckt das Login
function showMainContent() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// Zeigt das Login-Formular (wenn nicht eingeloggt)
function showLogin() {
  document.getElementById("login-container").style.display = "flex";
  document.getElementById("main-content").style.display = "none";
}

// Logout-Funktion: entfernt Speicherung und zeigt wieder Login
function logout() {
  localStorage.removeItem("rememberedUser");
  showLogin();
}
