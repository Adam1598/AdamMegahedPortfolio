document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".expand-button").forEach(button => {

        button.innerHTML = `<img src="assets/icons/chevron.svg" alt="Expand" class="chevron-icon">`;

        button.addEventListener("click", () => {
            const card = button.closest(".card");
            card.classList.toggle("expanded");
        });

    });
});

document.querySelector(".contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: e.target.querySelector("input[type='text']").value,
        email: e.target.querySelector("input[type='email']").value,
        message: e.target.querySelector("textarea").value
    };

    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);
});