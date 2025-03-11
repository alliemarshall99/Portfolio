document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!firstName || !lastName || !email || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    emailjs.send("service_a5isuji", "template_1hiaz8f", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: message
    }, "IuJRLJvBw7O73Yvy8")
    .then(response => {
        console.log("✅ Email sent successfully:", response);
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error("❌ EmailJS Error:", error);
        alert("Error sending message. Please check the console for details.");
    });
});
