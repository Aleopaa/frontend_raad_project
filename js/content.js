function renderHomepage(){
    location.replace("homepage");
}

function renderLoginForm() {
    location.replace("login.html")
}

function renderRegisterForm() {
    location.replace("signUp Page")
}

function renderProfile() {
    location.replace("ProfilePage")
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
