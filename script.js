document.addEventListener("DOMContentLoaded", () => {
    // Theme switching functionality
    const themeButton = document.getElementById("theme-toggle");
    const themeIcon = themeButton.querySelector("i");
    const body = document.body;
    
    // Theme cycle order
    const themes = ["dark", "light", "catppuccin"];
    const themeIcons = {
        dark: "fas fa-moon",
        light: "fas fa-sun", 
        catppuccin: "fas fa-cat"
    };
    
    // Load saved theme or default to dark
    let currentTheme = localStorage.getItem("portfolio-theme") || "dark";
    body.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);
    
    // Add theme-loaded class to prevent flash of unstyled content
    requestAnimationFrame(() => {
        body.classList.add("theme-loaded");
    });
    
    themeButton.addEventListener("click", () => {
        // Get next theme in cycle
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        currentTheme = themes[nextIndex];
        
        // Apply new theme
        body.setAttribute("data-theme", currentTheme);
        localStorage.setItem("portfolio-theme", currentTheme);
        updateThemeIcon(currentTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.className = themeIcons[theme];
    }
    
    // Project accordion functionality
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", () => {
            const description = project.querySelector(".project-description");

            description.classList.toggle("show");

            projects.forEach(p => {
                const desc = p.querySelector(".project-description");
                if (p !== project) {
                    desc.classList.remove("show");
                }
            });
        });
    });
});