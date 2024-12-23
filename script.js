let form = document.getElementById("form");
let fullname = document.getElementById("fullname");
let emailid = document.getElementById("emailid");
let phone = document.getElementById("phonenumber");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    clearErrors(); 
    if (validation()) {
        alert("Form submitted successfully!");
        form.reset(); 
    }
});

const validation = () => {
    let isValid = true;

    let fullnameValue = fullname.value.trim();
    let emailidValue = emailid.value.trim();
    let phoneValue = phone.value.trim();
    let pass1Value = pass1.value.trim();
    let pass2Value = pass2.value.trim();

    if (fullnameValue === "") {
        setErrormsg(fullname, "Full name is empty");
        isValid = false;
    } else {
        setSuccessmsg(fullname);
    }

    if (emailidValue === "") {
        setErrormsg(emailid, "Email is empty");
        isValid = false;
    } else {
        setSuccessmsg(emailid);
    }

    if (phoneValue === "" || phoneValue === "123456789") {
        setErrormsg(phone, "Phone number is empty or invalid");
        isValid = false;
    } else {
        setSuccessmsg(phone);
    }

    if (pass1Value === "") {
        setErrormsg(pass1, "Password is empty");
        isValid = false;
    } else {
        setSuccessmsg(pass1);
    }

    if (pass2Value !== pass1Value) {
        setErrormsg(pass2, "Passwords do not match");
        isValid = false;
    } else {
        setSuccessmsg(pass2);
    }

    return isValid;
};

const setErrormsg = (element, message) => {
    const errorElement = element.parentElement.querySelector(".error-message");
    if (!errorElement) {
        const newError = document.createElement("div");
        newError.classList.add("error-message", "text-danger");
        newError.innerText = message;
        element.classList.add("is-invalid");
        element.parentElement.appendChild(newError);
    }
};

const setSuccessmsg = (element) => {
    element.classList.remove("is-invalid");
    const errorElement = element.parentElement.querySelector(".error-message");
    if (errorElement) {
        errorElement.remove();
    }
};

const clearErrors = () => {
    document.querySelectorAll(".error-message").forEach((error) => error.remove());
    document.querySelectorAll(".is-invalid").forEach((input) => input.classList.remove("is-invalid"));
};
