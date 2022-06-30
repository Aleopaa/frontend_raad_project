const minus1 = document.querySelector('#minus1');
const minus2 = document.querySelector('#minus2');
const minus3 = document.querySelector('#minus3');
const minus4 = document.querySelector('#minus4');
const minus5 = document.querySelector('#minus5');
const minus6 = document.querySelector('#minus6');
const minus7 = document.querySelector('#minus7');

const plus1 = document.querySelector('#plus1');
const plus2 = document.querySelector('#plus2');
const plus3 = document.querySelector('#plus3');
const plus4 = document.querySelector('#plus4');
const plus5 = document.querySelector('#plus5');
const plus6 = document.querySelector('#plus6');
const plus7 = document.querySelector('#plus7');

const counterVal1 = document.querySelector('#counterVal1');
const counterVal2 = document.querySelector('#counterVal2');
const counterVal3 = document.querySelector('#counterVal3');
const counterVal4 = document.querySelector('#counterVal4');
const counterVal5 = document.querySelector('#counterVal5');
const counterVal6 = document.querySelector('#counterVal6');
const counterVal7 = document.querySelector('#counterVal7');
const counterVal = document.querySelectorAll('.counterVal')

function getAllCounter() {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            counterVal[i].innerHTML = data.tasks[0].week[i];
        }
    })

}

getAllCounter();

let counter = 0;
function patchPlus1() {
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
