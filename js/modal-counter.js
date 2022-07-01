const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const counterVal = document.querySelector('#counterVal');


function getAllCounter() {
    fetch('https://habit-buddy-backend-server.herokuapp.com/tasks')
    .then(res => res.json())
    .then(data => {
        console.log(data.tasks[0].id)
    })

}

getAllCounter();

let counter = 0;

function patchPlus1() {

    counter ++;
    counterVal.innerHTML = counter;
    const postData = {
        week: 2
    }

    const options = {
        method: 'PATCH',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    }

    fetch('https://habit-buddy-backend-server.herokuapp.com/tasks/62bdc1ccd6ba400041eea853', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
}
function patchMinus1() {

    counter --;
    counterVal.innerHTML = counter;
    const postData = {
        week: 2
    }

    const options = {
        method: 'PATCH',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')
        }
    }

    fetch('https://habit-buddy-backend-server.herokuapp.com/tasks/62bdc1ccd6ba400041eea853', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
}

plus.addEventListener('click', patchPlus1)
minus.addEventListener('click', patchMinus1)
