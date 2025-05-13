const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const trimmedNameInput = nameInput.value.trim();
    if (trimmedNameInput === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmedNameInput;
    }    
});