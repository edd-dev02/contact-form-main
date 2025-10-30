const form = document.getElementById("form");
const inputs = document.querySelectorAll(".form__input--validation");

const regularExpressions = {
    fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const formInputs = {
    name: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false
}

const modal = document.querySelector(".modal");
const btnClose = document.getElementById("btn-close");

inputs.forEach(input => {
    input.addEventListener("keyup", validateInputs);
    input.addEventListener("blur", validateInputs);
});

btnClose.addEventListener("click", closeModal);

function validateInputs(e) {

    e.preventDefault();

    switch (e.target.name) {

        case "firstName":
            validateInput(regularExpressions.name, e.target, e.target.name);
            break;

        default:
            console.log("Input Error");
            break;
    }
}

function openModal() {
    modal.showModal();
}

function closeModal() {
    modal.classList.add("closing");

    modal.addEventListener("animationend", () => {
        modal.classList.remove("closing");
        modal.close();
    }, { once: true });
}

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    openModal();

    /*
    const consent = document.getElementById("consent");

    const { name, lastName, email, queryType, message } = formInputs;

    if(name && lastName && email && queryType && message && consent.checked) {

        form.reset();

        document.getElementById("");

    }
    */
}
