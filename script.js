const darkmodebutton = document.getElementById("darkmodebutton");
let darkmode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode"); // Darkmode-Klasse zum Body hinzufügen
    darkmodebutton.classList.remove("dark-mode-toggle");
    darkmodebutton.innerText = "Lightmode";
    localStorage.setItem("darkmode", "enabled");
};

// Funktion zur Deaktivierung des Darkmodes
const disableDarkMode = () => {
    document.body.classList.remove("darkmode"); // Darkmode-Klasse vom Body entfernen
    darkmodebutton.classList.add("dark-mode-toggle");
    darkmodebutton.innerText = "Darkmode";
    localStorage.setItem("darkmode", "disabled");
};

// Darkmode beim Laden der Seite setzen
if (darkmode === "enabled") {
    enableDarkMode();
} else {
    disableDarkMode();
}

window.addEventListener('load', function() {
    if (localStorage.getItem('darkmode') === 'enabled') {
        darkmodecheckbox.checked = true;
    }
});

darkmodebutton.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

darkmodecheckbox.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});