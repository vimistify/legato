document.addEventListener("DOMContentLoaded", () => {
    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");
    document.body.appendChild(cursorDot);

    document.addEventListener("mousemove", (e) => {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;

        // Create trail effect
        const trail = document.createElement("div");
        trail.classList.add("cursor-trail");
        document.body.appendChild(trail);
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        setTimeout(() => {
            trail.remove(); // Remove trail after animation
        }, 600);
    });
});
