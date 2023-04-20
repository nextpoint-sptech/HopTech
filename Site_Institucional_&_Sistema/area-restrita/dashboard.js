function sair() {
    window.parent.location.href = "../login.html";
} // Função que ao clicar em "sair", redirecionará para a tela de login

const ctx = document.getElementById('chart_line_dia');
const ctx2 = document.getElementById('chart_line_regiao');
const ctx3 = document.getElementById('chart_bar_mes');

Chart.register(ChartDataLabels); // Registrando o plugin DataLabels

new Chart(ctx, { // Gráfico principal (linha)
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        datasets: [{
            label: 'Luminosidade (Outono)',
            data: [2, 5, 20, 58, 106, 170, 200, 450, 650, 432, 550, 870, 960, 1000, 776, 574, 700, 701, 659, 505, 300, 267, 129, 3],
            borderWidth: 1,
            backgroundColor: '#9DC08B',
            borderColor: '#9DC08B',
            tension: 0.3
        },
        {
            label: 'Luminosidade (Verão)',
            data: [87, 66, 55, 41, 78, 110, 200, 341, 591, 640, 716, 601, 460, 671, 433, 409, 511, 474, 324, 325, 321, 289, 219, 102],
            borderWidth: 1,
            backgroundColor: '#E9EDC9',
            borderColor: '#E9EDC9',
            tension: 0.3
        }
        ]
    },
    options: {
        layout: {
            padding: 5
        },
        elements: {
            point: {
                hoverRadius: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },

        plugins: {
            datalabels: {
                display: false,
            },
            datasets: {
                display: false
            },
            title: {
                display: true,
                text: 'Variação de luminosidade do Dia',
                font: {
                    size: 15
                }
            },
            legend: {
                display: false
            }
        }
    }
});

new Chart(ctx2, { // Gráfico de barra mostrando luminosidade por estações
    type: 'bar',
    data: {
        labels: ['Verão', 'Outono', 'Primavera', 'Inverno'],
        datasets: [{
            label: 'Média obtida',
            data: [731, 502, 418, 349],
            borderWidth: 0.5,
            backgroundColor: '#9DC08B',
            borderColor: '#9DC08B',
        },
        {
            label: 'Média mínima esperada',
            data: [500, 500, 500, 500, 500],
            borderWidth: 0.5,
            backgroundColor: '#D7FFC2',
            borderColor: '#D7FFC2',
        }]
    },
    options: {
        layout: {
            padding: 5
        },
        elements: {
            point: {
                hoverRadius: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Média de luminosidade do dia por estação',
                font: {
                    size: 15
                }
            },
            legend: {
                display: true
            },
            datalabels: {
                display: false
            }
        }
    }
});

new Chart(ctx3, { // Gráfico de barra mostrando luminosidade por região
    type: 'bar',
    data: {
        labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
        datasets: [{
            label: 'Média obtida',
            data: [874, 400, 567, 349, 672],
            borderWidth: 0.5,
            backgroundColor: '#9DC08B',
            borderColor: '#9DC08B',
        },
        {
            label: 'Média mínima esperada',
            data: [500, 500, 500, 500, 500],
            borderWidth: 0.5,
            backgroundColor: '#D7FFC2',
            borderColor: '#D7FFC2',
        }]
    },
    options: {
        layout: {
            padding: 5
        },
        elements: {
            point: {
                hoverRadius: 10
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            datalabels: {
                display: false,
                anchor: 'center',
                color: '#48724c'
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Média de luminosidade do último mês por região',
                font: {
                    size: 15
                }
            }
        }
    }
});
