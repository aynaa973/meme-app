document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelectorAll("#firstName, #lastName, #email");
    const form = document.getElementById("registrationForm");
    const message = document.createElement("p");
    form.after(message);

    input.forEach(input => {
        input.addEventListener("focus", () => input.style.backgroundColor = "#D1ECF0");
        input.addEventListener("blur", () => input.style.backgroundColor = "");
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const hobbies = [...document.querySelectorAll("input[name='hobbies']:checked")]
            .map(hobby => hobby.value)
            .join(", ");
        message.textContent = `Welcome, ${firstName} ${lastName}! email: ${email}. You like: ${hobbies || "no hobbies"}.`;
    });
});
