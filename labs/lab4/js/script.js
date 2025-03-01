let users = new Map([
    ["user1", "Password@123"],
    ["user2", "Securepass!456"],
]);

const message = (element, message) => {
    element.textContent = message;
};

const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const { value: email } = document.getElementById("email");
        const { value: usern } = document.getElementById("username");
        const { value: password } = document.getElementById("password");
        const { value: passconfig } = document.getElementById("confirmPassword");
        const messegeEl = document.getElementById("message");
        const username = usern.trim();

        const emailcon = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/;
        if (!emailcon.test(email)) {
            message(messegeEl, "Invalid email format");
            return;
        }

        if (/^\d|[^a-zA-Z0-9]/.test(username)) {
            message(messegeEl, "User name must not begin with a number or contain spaces or special characters");
            return;
        }
        if (users.has(username)) {
            message(messegeEl, "Username exists");
            return;
        }

        const passcon = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{12,}$/;
        if (!passcon.test(password)) {
            message(messegeEl, "Password must be over 12 characters, including at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character");
            return;
        }

        if (password !== passconfig) {
            message(messegeEl, "Passwords do not match");
            return;
        }

        users.set(username, password);
        console.log("New user registered:", username);
        message(messegeEl, "Registration Successful");
    });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const loginUsername = document.getElementById("loginUsername").value.trim();
        const logpass = document.getElementById("loginPassword").value;
        const loginMess = document.getElementById("loginMessage");

        if (users.has(loginUsername) && users.get(loginUsername) === logpass) {
            message(loginMess, "Login successful");
        } else {
            message(loginMess, "Invalid username or password");
        }
    });
}
