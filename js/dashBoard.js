
const myHabits = document.querySelector('#habits-ul');
const submit = document.querySelector('#create-habit-form');
const modalClose = document.querySelector('.modal-close');
submit.addEventListener('submit', addNewHabit)

getAllHabits();

function getAllHabits(){
    fetch('http://localhost:3000/tasks')
        .then(r => r.json())
        .then(appendHabits)
        .catch(console.warn)
};

function addNewHabit(e) {
    e.preventDefault();

    const postData = {
        habit : e.target['habit-input'].value,
        frequency : e.target['frequency-input'].value,
        week: [0,0,0,0,0,0,0]
    };


    console.log(postData.habit + " " + postData.frequency);

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
        "Content-Type": "application/json"
        }

    };

    fetch('http://localhost:3000/tasks/', options)
        .then(r => r.json())
        .then(appendHabit)
        .catch(console.warn);
        
    e.target['habit-input'].value = '';
    e.target['frequency-input'].value = '';

    getAllHabits()
    
}

function appendHabits(data){
    console.log(data);
    data.tasks.forEach(appendHabit);
};

async function appendHabit(habitData){
    const newLi = document.createElement('li');
    const p = document.createElement('p');
    const modalBg = document.querySelector('.modal-bg')
    p.classList.add('modal-btn');
    p.style.display = 'inline';

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.value = 1;
    checkBox.name = "habits";
    newLi.append(checkBox);

    p.textContent = ` ${habitData.habit}`;
    
    newLi.append(p);
    
    newLi.addEventListener('click', () => {
        modalBg.classList.add('bg-active');
        getById(habitData)
    }) 

    modalClose.addEventListener('click', function() {
        modalBg.classList.remove('bg-active');
    });

    myHabits.append(newLi);
};

function getById(habitData) {
    const modalFrequency = document.querySelector('#modal-frequency')
    const modalTitle = document.querySelector('#modal-title')
    habitTitle = document.querySelector('.modal-btn')

    modalTitle.textContent = `${habitData.habit}`;
    modalFrequency.textContent = `${habitData.frequency}`; 
};
