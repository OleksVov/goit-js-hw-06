

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleCheckForm);

const user = {
    email: "",
    password: "",
};


function handleCheckForm(event) {
    event.preventDefault();
    const { elements: {
        email,
        password
    }} = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all fields");
    }
    user.email = email.value;
    user.password = password.value

    console.log(user);
    
    event.currentTarget.reset();
};
