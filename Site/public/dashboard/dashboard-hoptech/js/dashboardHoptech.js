function plotarGrafico() {
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Empresas cadastradas',
        data: label1,
        borderWidth: 1,
        backgroundColor: '#9DC08B',
        borderColor: '#9DC08B',
      },
      {
        label: 'Plantações cadastradas',
        data: labelPlantacoes,
        borderWidth: 1,
        backgroundColor: '#DDFFBB',
        borderColor: '#DDFFBB',
      },
      {
        label: 'Sensores instalados',
        data: labelSensores,
        borderWidth: 1,
        backgroundColor: '#48724c',
        borderColor: '#48724c',
      }]
    },
    options: {
      aspectRadio: 2,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Fluxo do sistema',
          font: {
            size: 18
          }
        },
        tooltip: {
          displayColor: false,
          borderColor: '#4CB648',
          borderWidth: 3
        }
      }
    }
  });
}