let currentTheme = "light";

// Toggles themes between dark and light mode
function ToggleTheme() {
    let elements = document.getElementsByTagName("*");

    for (let element of elements) {
        element.classList.toggle("dark");
    }
};
module.export = {ToggleTheme}