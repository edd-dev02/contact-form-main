const form = document.getElementById("form");
const inputs = document.querySelectorAll(".form__input--validation");

const regularExpressions = {
    fullName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    message: /^[a-zA-ZÀ-ÿ0-9.,;:!?¿¡()"'%°\-\s\n]{10,500}$/
}

const formInputs = {
    firstName: false,
    lastName: false,
    emailAddress: false,
    message: false
};


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
            validateInput(regularExpressions.fullName, e.target, e.target.name);
            break;
        case "lastName":
            validateInput(regularExpressions.fullName, e.target, e.target.name);
            break;
        case "emailAddress":
            validateInput(regularExpressions.email, e.target, e.target.name);
            break;
        case "message":
            validateInput(regularExpressions.message, e.target, e.target.name);
            break;
        default:
            console.log("Error, please try again");
            break;
    }
}

function validateInput(expression, formInput, inputName) {


    if (expression.test(formInput.value)) {
        document.getElementById(`group-${inputName}`).classList.remove(`form__group--incorrect`);
        formInputs[inputName] = true;
        return;
    }

    document.getElementById(`group-${inputName}`).classList.add(`form__group--incorrect`);
    formInputs[inputName] = false;

}

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    const groupQuery = document.getElementById("group-queryType");
    const querySelected = document.querySelector('input[name="query"]:checked');

    const groupConsent = document.getElementById("group-consent");
    const consent = document.getElementById("consent");

    const { firstName, lastName, emailAddress, message } = formInputs;

    const allValid =
        firstName &&
        lastName &&
        emailAddress &&
        message &&
        querySelected &&
        consent.checked;

    if (querySelected) {
        groupQuery.classList.remove("form__group--incorrect");
    } else {
        groupQuery.classList.add("form__group--incorrect");
        return;
    }

    if (consent.checked) {
        groupConsent.classList.remove("form__group--incorrect");
    } else {
        groupConsent.classList.add("form__group--incorrect");
        return;
    }

    if (allValid) {
        openModal();
        form.reset();

        // Reiniciar estado
        Object.keys(formInputs).forEach(key => formInputs[key] = false);
    } else {
        console.log("Validation error");
    }

}

// Modal
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
