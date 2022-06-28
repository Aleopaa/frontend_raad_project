const myHabits = document.querySelector('#habits-ul');
const submit = document.querySelector('#create-habit-form');
submit.addEventListener('submit', addNewHabit)

getAllHabits();

function addNewHabit(e) {
    e.preventDefault();

    const postData = {
        habit : e.target['habit-input'].value,
        frequency : e.target['frequency-input'].value
        
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
    
}

function appendHabits(data){
    console.log(data);
    data.tasks.forEach(appendHabit);
};

function appendHabit(habitData){
    const newLi = document.createElement('li');

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.value = 1;
    checkBox.name = habitData.habit;
    newLi.append(checkBox);

    let label = document.createElement('label');
    label.textContent = ` ${habitData.habit} Frequency: ${habitData.frequency}`;
    newLi.append(label);

    myHabits.append(newLi);
};


function getAllHabits(){
    fetch('http://localhost:3000/tasks')
        .then(r => r.json())
        .then(appendHabits)
        .catch(console.warn)
};