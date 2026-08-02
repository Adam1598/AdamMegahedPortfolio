document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".expand-button").forEach(button => {

        button.innerHTML = `<img src="assets/icons/chevron.svg" alt="Expand" class="chevron-icon">`;

        button.addEventListener("click", () => {
            const card = button.closest(".card");
            card.classList.toggle("expanded");
        });

    });
});