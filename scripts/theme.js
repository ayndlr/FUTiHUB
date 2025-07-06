export default function ThemeHandler(themeCont) {
    const themeBg = themeCont.children[0];
    const themeTg = themeBg.children[0];

  

    // Theme toggle
    const toggleButton = document.getElementById("theme-toggle");
    const savedTheme =
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateButtonText(savedTheme);

    themeBg.addEventListener("click", () => {
        const currentTheme =
            document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        themeBg.style.justifyContent = `${
            newTheme === "light" ? "start" : "end"
        }`;
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        themeTg.textContent = ` ${theme === "light" ? "L" : "D"}`;
    }
}
