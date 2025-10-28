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

inputs.forEach( input => {
    input.addEventListener("keyup", validateInputs);
    input.addEventListener("blur", validateInputs);
});

function validateInputs (e) {
    
    e.preventDefault();

    switch(e.target.name) {

        case "firstName": 
            validateInputs(regularExpressions.name, e.target, e.target.name);
            break;

        default:
            console.log("Input Error");
            break;
    }
}

form.addEventListener("submit", validateForm);

function validateForm (e) {
    e.preventDefault();

    const consent = document.getElementById("consent");

    const { name, lastName, email, queryType, message } = formInputs;

    if(name && lastName && email && queryType && message && consent.checked) {

        form.reset();

        document.getElementById("");

    }
}
