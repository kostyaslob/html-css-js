const registerForm = document.querySelector(".login-form");
const button = document.querySelector("button");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    button.blur();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const formObj = {
        email: email,
        password: password,
    };

    button.blur();

    console.log(formObj);
    form.reset();
}
