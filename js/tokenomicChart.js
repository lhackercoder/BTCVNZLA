const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '',
            data: [12600000, 4200000, 2100000, 2100000], // Nuevos valores
            backgroundColor: [
                'rgba(17, 43, 80, 1)',  // Venta al público
                'rgba(20, 93, 136, 1)', // Reserva
                'rgba(246, 206, 57, 1)', // Equipo
                'rgba(249, 149, 35, 1)'  // Socios estratégicos
            ],
            borderColor: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});