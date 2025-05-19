// Prüft den Theme Mode beim Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
    // Theme-Toggle-Elemente
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleNav = document.getElementById("theme-toggle-nav");
    const body = document.body;

    // Prüfe gespeicherten Theme-Modus
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    // Setze initialen Theme-Modus
    if (isDarkMode) {
        body.classList.add("darkmode");
        if (themeToggle) themeToggle.checked = true;
        if (themeToggleNav) themeToggleNav.checked = true;
    } else {
        body.classList.remove("darkmode");
        if (themeToggle) themeToggle.checked = false;
        if (themeToggleNav) themeToggleNav.checked = false;
    }

    // Event-Listener für Theme-Toggles
    if (themeToggle) {
        themeToggle.addEventListener("change", () => {
            toggleTheme(themeToggle.checked);
            if (themeToggleNav) themeToggleNav.checked = themeToggle.checked;
        });
    }
    
    if (themeToggleNav) {
        themeToggleNav.addEventListener("change", () => {
            toggleTheme(themeToggleNav.checked);
            if (themeToggle) themeToggle.checked = themeToggleNav.checked;
        });
    }

    // Prüfe, ob Benutzer bereits angemeldet ist
    checkLoggedInStatus();
});

// Theme umschalten
function toggleTheme(isDark) {
    const body = document.body;
    
    if (isDark) {
        body.classList.add("darkmode");
        localStorage.setItem("darkMode", "true");
    } else {
        body.classList.remove("darkmode");
        localStorage.setItem("darkMode", "false");
    }
}

// Login-Überprüfung
function checkLoggedInStatus() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    const loginContainer = document.getElementById("login-container");
    const mainContent = document.getElementById("main-content");
    
    if (isLoggedIn) {
        showMainContent();
    } else {
        showLogin();
    }
}

// Login-Funktion
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;
    const errorBox = document.getElementById("error-message");

    // Gültige Anmeldedaten
    const validCredentials = [
        { username: "admin", password: "12345" },
        { username: "gast", password: "gast" }
    ];

    // Überprüfung der Anmeldedaten
    const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
    );

    if (isValid) {
        errorBox.textContent = "";
        localStorage.setItem("loggedIn", "true");
        
        if (rememberMe) {
            localStorage.setItem("rememberedUser", username);
        } else {
            localStorage.removeItem("rememberedUser");
        }
        
        showMainContent();
    } else {
        errorBox.textContent = "Benutzername oder Passwort ist falsch.";
    }
}

// Hauptinhalt anzeigen
function showMainContent() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

// Login-Formular anzeigen
function showLogin() {
    document.getElementById("login-container").style.display = "flex";
    document.getElementById("main-content").style.display = "none";
    
    // Gespeicherten Benutzernamen einfügen, falls vorhanden
    const rememberedUser = localStorage.getItem("rememberedUser");
    const usernameInput = document.getElementById("username");
    
    if (rememberedUser && usernameInput) {
        usernameInput.value = rememberedUser;
        document.getElementById("rememberMe").checked = true;
    }
}

// Logout-Funktion
// function logout() {
//     localStorage.removeItem("loggedIn");
//     showLogin();
// }
