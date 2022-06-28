const signupDiv = document.querySelector('.signup-elements');
const loginDiv = document.querySelector('.login-elements');
const signupPageBtn = document.querySelector('#signup-page')
const loginPageBtn = document.querySelector('#login-page')

loginPageBtn.addEventListener('click', toggleSignup);
signupPageBtn.addEventListener('click', toggleLogin);

function toggleLogin() {
    signupDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
}

function toggleSignup() {
    loginDiv.style.display = 'none';
    signupDiv.style.display = 'flex';
}
