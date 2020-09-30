$(document).ready(() => {
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");


    //when the form is submitted, validate if there is email and password
loginForm.on("submit", event => {
    event.prevenetDefault();
    const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
        return;
    }

//when we have email and password run the loginuser function and clear the form
loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
function loginUser(email, password) {
    $.post("/api/login", {
        email: email,
        password: password
    })
    .then(() => {
window.location.replace("/members");
    })
    //if there is error
    .catch(err => {
        console.log(err);
    })
}

});