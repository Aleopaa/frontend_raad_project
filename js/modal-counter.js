const minus1 = document.querySelector('#minus1');
const plus1 = document.querySelector('#plus1');
const counterVal = document.querySelector('#counterVal');


function getAllCounter() {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
        if(data.tasks = )
        counterVal.innerHTML = data.tasks 
    })

}

getAllCounter();

let counter = 0;
function patchPlus1(data) {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let week = data.tasks[0].week
            counterVal[i].innerHTML = week
        }
    })
    let week = data.
    counterVal1.innerHTML = counter;

    counter = counter + 1;
    console.log(counter)
    counterVal1.innerHTML = counter;

    const postData = {
        week: {
            monday: counter,
            tuesday: 0,
            wednesday: 0,
            thursday: 0,
            friday: 0,
            saturday: 0,
            sunday: 0
        }
    };

    let options = {
        method: 'PATCH',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(postData),
        completed: true
    }

    fetch(`http://localhost:3000/tasks/62bc82f6b0935d002bce77cc`, options)
    .then(res => res.json())
    .then(data => {       
        console.log(data)
    });

    getAllCounter();

}

plus1.addEventListener('click', patchPlus1)
