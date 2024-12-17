let chart;

document.getElementById("loadData").addEventListener("click", loadChartData);
document.getElementById("refreshData").addEventListener("click", refreshChartData);

function loadChartData() {
    const ctx = document.getElementById('myChart').getContext('2d');
    if (chart) chart.destroy(); // Hapus chart lama jika ada

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#ff7aa2',
                    '#9ad0f5',
                    '#fdfd96',
                    '#77dd77',
                    '#c8a2c8',
                    '#ffb347'
                ],
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function refreshChartData() {
    if (chart) {
        chart.data.datasets[0].data = chart.data.datasets[0].data.map(() => Math.floor(Math.random() * 20));
        chart.update();
    }
}
