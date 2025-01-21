document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("ageForm");
    const outputDiv = document.getElementById("output");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const age = parseInt(document.getElementById("age").value, 10);
        const yearsToAdd = parseInt(document.getElementById("yearsToAdd").value, 10);

        if (!name || isNaN(age) || isNaN(yearsToAdd)) {
            outputDiv.textContent = "Please enter valid inputs.";
            return;
        }

        const futureAge = age + yearsToAdd;

        outputDiv.textContent = `${name} is ${age} years old. In ${yearsToAdd} years, ${name} will be ${futureAge}.`;
    });
});
