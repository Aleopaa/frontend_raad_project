const ctx = document.querySelector('#myChart').getContext('2d');

const labels = [
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021'
];

const data = {
    labels,
    datasets: [{
        data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
        label: "Test data"
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true
    }
};

const myChart = new Chart(ctx, config);
