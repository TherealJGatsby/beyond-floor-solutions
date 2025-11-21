// EmailJS Init
(function () {
    emailjs.init("RCTxN_07J7HrZj1ju");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = ""; // clear previous messages
    formMessage.style.opacity = 1; // reset opacity

    emailjs.sendForm("service_ywzj4ij", "template_2dowkb3", this)
        .then(() => {
            formMessage.textContent = "Your message has been sent successfully!";
            formMessage.style.color = "green";
            this.reset();

            // Fade out after 5 seconds
            setTimeout(() => {
                formMessage.style.transition = "opacity 1s";
                formMessage.style.opacity = 0;
            }, 5000);
        })
        .catch((error) => {
            formMessage.textContent = "Failed to send message. Please try again.";
            formMessage.style.color = "red";
            console.error("EmailJS Error:", error);

            // Fade out after 5 seconds
            setTimeout(() => {
                formMessage.style.transition = "opacity 1s";
                formMessage.style.opacity = 0;
            }, 5000);
        });
});



