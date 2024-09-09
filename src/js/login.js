function loginOption() {
    var emailClass = document.getElementsByClassName("login-email");
    var passwordClass = document.getElementsByClassName("login-password");
    var usernameClass = document.getElementsByClassName("login-username");
    function hasRequiredClass(elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains('required')) {
                return true;
            }
        }
        return false;
    }
    var registerBtn = document.getElementsByClassName("register-btn");
    registerBtn.onclick() = function() { 
        var emailRequired = hasRequiredClass(emailClass);
        var passwordRequired = hasRequiredClass(passwordClass);
        var usernameRequired = hasRequiredClass(usernameClass);
        if (emailRequired) {
            const emailValue = emailClass.value;
            localStorage.setItem("email saved", emailValue);
            var emailCookie = document.cookie = `userEmail=${emailValue}`;
            return emailCookie; 
        }
        if (passwordRequired) {
            const passwordValue = hasRequiredClass(passwordClass);
            localStorage.setItem("password saved", passwordValue);
            var passwordCookie = document.cookie = `userPassword=${passwordValue}`;
            return passwordCookie;
        }
        if (usernameRequired) {
            const usernameValue = usernameClass.value;
            localStorage.setItem("username saved", usernameValue);
            var usernameCookie = document.cookie = `userUsername=${usernameValue}`;
            return usernameCookie;
        }
    }
    return false;
}