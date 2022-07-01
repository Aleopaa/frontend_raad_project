const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const counterVal = document.querySelector('#counterVal');


function getAllCounter() {

    const options = {
        headers: {"Authorization": localStorage.getItem('token')}
    };

    fetch('http://localhost:3000/tasks', options)
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

    fetch('http://localhost:3000/tasks/62bdc2568633d3002b8e741e', options)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })
}

plus.addEventListener('click', patchPlus1)
