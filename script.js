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

// function handleScroll() {
//     const projects = document.querySelectorAll(".project");
//     const triggerBottom = window.innerHeight * 0.6;

//     projects.forEach(project => {
//         const rect = project.getBoundingClientRect();
//         if (rect.top < triggerBottom) {
//             project.classList.add("visible");
//         } else {
//             project.classList.remove("visible");
//         }
//     });
// }

// window.addEventListener("scroll", handleScroll);
// window.addEventListener("DOMContentLoaded", handleScroll);