
/// HomePage
const signInButton = document.querySelector('#login');
const signUpButton = document.querySelector('#signUp');

// Bind event listeners
signInButton.addEventListener('click', loginIn)
signUpButton.addEventListener('click', signUp)

function loginIn(){
    renderLoginForm();
}

function signUp(){
    renderRegisterForm();
}

