$(document).ready(function() {

    let usernameError = $('#usernameError');
    let emailError = $('#emailError');
    let passwordError = $('#passwordError');
    let confirmPasswordError = $('#confirmPasswordError');

    usernameError.hide();
    emailError.hide();
    passwordError.hide();
    confirmPasswordError.hide();

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirmPassword');

    var username_error = true;
    var email_error;
    var passWord_error = true;
    var confirm_password_error = true;

    username.keyup(function() {
        username_validation();
    });

    function username_validation() {
        let username_val = username.val();
        if(username_val.length == 0) {
            usernameError.show();
            usernameError.html("Username cannot be empty!");
            username_error = false;
            return false;
        } else if (username_val.length < 4) {
            usernameError.show();
            usernameError.html("Username should contain atleast 4 letters");
            username_error = false;
            return false;
        } else {
            usernameError.hide();
            username_error = true;
            return true;
        }
    }

    email.keyup(function() {
        email_validation();
    });

    function email_validation() {
        let emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

        if(!emailPattern.test(email.val())) {
            emailError.show();
            emailError.html("Email should be in the correct format");
            email_error = false;
            return false;
        } else {
            emailError.hide();
            email_error = true;
            return false;
        }
    }

    password.keyup(function() {
        password_validation();
    });

    function password_validation() {
        let passwordPattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");

        if(!passwordPattern.test(password.val())) {
            passwordError.show();
            passwordError.text("Password should be valid");
            passWord_error = false;
            return false;
        } else {
            passwordError.hide();
            passWord_error = true;
            return true;
        }
    }

    confirmPassword.keyup(function() {
        confirmPassword_validation();
    });

    function confirmPassword_validation() {
        if (confirmPassword.val() === '' || (password.val() != confirmPassword.val())) {
            confirmPasswordError.show();
            confirmPasswordError.text("Passwords don't match");
            confirm_password_error = false;
            return false;
        } else {
            confirmPasswordError.hide();
            confirm_password_error = true;
            return true;
        }
    }

    $('#submitBtn').on('click', function() {
        username_validation();
        email_validation();
        password_validation();
        confirmPassword_validation();

        if (username_error && email_error && passWord_error && confirm_password_error) {
            console.log("yay! all fields are valid");
            return true;
        } else {
            return false;
        }
    });
});