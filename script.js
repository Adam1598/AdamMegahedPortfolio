document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".expand-button").forEach(button => {

        button.innerHTML = `<img src="assets/icons/chevron.svg" alt="Expand" class="chevron-icon">`;

        button.addEventListener("click", () => {
            const card = button.closest(".card");
            card.classList.toggle("expanded");
        });

    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://splitforms.com/api/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        } catch (error) {
            alert("Unable to send message. Please try again later.");
        }
    });
}