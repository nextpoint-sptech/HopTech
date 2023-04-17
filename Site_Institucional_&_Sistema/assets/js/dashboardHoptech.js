function sair(){
    window.parent.location.href = "../../login.html";
}

function irParaDashboard(){
  window.parent.location.href = "./dashboardHoptech.html";
}

function irParaCadastro(){
  window.parent.location.href = "./cadastro.html";
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Empresas cadastradas',
        data: [1, 5, 2, 10, 25, 10, 6, 17, 4, 1, 5, 14],
        borderWidth: 1,
        backgroundColor: '#9DC08B',
        borderColor: '#9DC08B',
      },
      {
        label: 'Plantações cadastradas',
        data: [1, 6, 2, 12, 26, 10, 7, 18, 4, 2, 5, 15],
        borderWidth: 1,
        backgroundColor: '#D7FFC2',
        borderColor: '#D7FFC2',
      },
      {
        label: 'Sensores instalados',
        data: [5, 30, 10, 60, 130, 50, 35, 90, 20, 10, 25, 75],
        borderWidth: 1,
        backgroundColor: '#94D0AA',
        borderColor: '#94D0AA',
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
              text: 'Fluxo do sistema',
              font:{
                  size: 18
              }
          }
      }
    }
  });