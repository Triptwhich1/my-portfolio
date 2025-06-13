document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        project.addEventListener("click", () => {
            console.log("poop");
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