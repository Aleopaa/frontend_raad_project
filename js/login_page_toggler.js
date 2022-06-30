const signupDiv = document.querySelector('.signup-elements');
const loginDiv = document.querySelector('.login-elements');
const signupPageBtn = document.querySelector('#signup-page')
const loginPageBtn = document.querySelector('#login-page')
const signUpSubmitBtn = document.querySelector('#form-submit-signup')
const loginSubmitBtn = document.querySelector('#form-submit-signin')

loginPageBtn.addEventListener('click', toggleSignup);
signupPageBtn.addEventListener('click', toggleLogin);
signUpSubmitBtn.addEventListener('submit', signupFormSubmit);
loginSubmitBtn.addEventListener('submit', signinFormSubmit);

function signupFormSubmit(e) {
    e.preventDefault();
    requestRegistration(e);
    console.log("submitted")
}

function signinFormSubmit(e) {
    e.preventDefault();
    console.log("submitted")
}

function toggleLogin() {
    signupDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
}

function toggleSignup() {
    loginDiv.style.display = 'none';
    signupDiv.style.display = 'flex';
}



async function requestLogin(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/login`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        login(data);
    } catch (err) {
        console.warn(`Error: ${err}`);
    }
}

async function requestRegistration(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        requestLogin(e);
    } catch (err) {
        console.warn(err);
    }
}

function login(data){
    localStorage.setItem('username', data.user);
    location.hash = '#feed';
}

function logout(){
    localStorage.clear();
    location.hash = '#login';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}
