function sair(){
    window.parent.location.href = "../index.html";
}

const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00' , '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00' , '19:00', '20:00', '21:00', '22:00', '23:00'],
    datasets: [{
      label: 'Luminosidade',
      data: [2, 5, 20, 58, 106, 170, 200, 750, 650, 520, 550, 870, 960, 950, 576, 574, 700, 701, 659, 505, 500, 467, 329, 3],
      borderWidth: 1,
      backgroundColor: '#9DC08B',
      borderColor: '#9DC08B',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Variação de luminosidade do Dia',
            font:{
                size: 15
            }
        }
    }
  }
});

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Média obtida',
        data: [874, 400, 567, 349, 672],
        borderWidth: 1,
        backgroundColor: '#9DC08B',
        borderColor: '#9DC08B',
      },
      {
        label: 'Média mínima esperada',
        data: [500, 500, 500, 500, 500],
        borderWidth: 1,
        backgroundColor: '#9EE678',
        borderColor: '#9EE678',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins:{
          legend: {
              display: false
          },
          title: {
              display: true,
              text: 'Média de luminosidade do dia por região',
              font:{
                  size: 15
              }
          }
      }
    }
  });

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
      datasets: [{
        label: 'Média obtida',
        data: [874, 400, 567, 349, 672],
        borderWidth: 1,
        backgroundColor: '#9DC08B',
        borderColor: '#9DC08B',
      },
      {
        label: 'Média mínima esperada',
        data: [500, 500, 500, 500, 500],
        borderWidth: 1,
        backgroundColor: '#D7FFC2',
        borderColor: '#D7FFC2',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins:{
          legend: {
              display: false
          },
          title: {
              display: true,
              text: 'Média de luminosidade do último mês por região',
              font:{
                  size: 15
              }
          }
      }
    }
  });