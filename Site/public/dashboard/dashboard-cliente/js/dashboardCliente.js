// // Gráficos:
// const ctx = document.getElementById('chart_line_dia');
// const ctx2 = document.getElementById('chart_line_regiao');
// const ctx3 = document.getElementById('chart_bar_mes');

// Chart.register(ChartDataLabels); // Registrando o plugin DataLabels

// new Chart(ctx, { // Gráfico principal (linha)
//   type: 'line',
//   data: {
//     labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
//     datasets: [{
//       label: 'Luminosidade (Hoje)',
//       data: [], // Dados mockados e chumbados
//       borderWidth: 1,
//       backgroundColor: '#9DC08B',
//       borderColor: '#9DC08B',
//       tension: 0.3 // Curvatura do gráfico
//     }
//     // ,{
//     //   label: 'Luminosidade (Ontem)', // Linha de comparação ao dia anterior
//     //   data: [87, 66, 55, 41, 78, 110, 200, 341, 591, 640, 716, 601, 460, 671, 433, 409, 511, 474, 324, 325, 321, 289, 219, 102],
//     //   borderWidth: 1,
//     //   backgroundColor: '#E9EDC9',
//     //   borderColor: '#E9EDC9',
//     //   tension: 0.3
//     // }
//   ]
//   },
//   options: {
//     interaction: {
//       mode: 'nearest', // Adiciona o modo "nearest" no tooltip
//       axis: 'x', // Aparece o tooltip a partir dos eixos X
//       intersect: false
//     },
//     layout: {
//       padding: 5
//     },
//     elements: {
//       point: {
//         hoverRadius: 7
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },

//     plugins: {
//       datalabels: {
//         display: false,
//       },
//       datasets: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: 'Variação de luminosidade do Dia',
//         font: {
//           size: 15
//         }
//       },
//       legend: {
//         display: false
//       },
//       tooltip: { // Adiciona borda no tooltip
//         displayColor: false,
//         borderColor: '#4CB648',
//         borderWidth: 3
//       }
//     }
//   }
// });

// new Chart(ctx2, { // Gráfico de barra mostrando luminosidade por região
//   type: 'line',
//   data: {
//     labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
//     datasets: [{
//       label: 'Média obtida',
//       data: [731, 502, 318, 671, 331], // Importado de uma plantação específica
//       borderWidth: 0.5,
//       backgroundColor: '#48724c',
//       borderColor: '#48724c',
//       tension: 0.2,
//     },
//     {
//       label: 'Média mínima esperada',
//       data: [500, 500, 500, 500, 500],
//       borderWidth: 0.5,
//       backgroundColor: '#9DC08B',
//       borderColor: '#9DC08B',
//     }]
//   },
//   options: {
//     interaction: {
//       mode: 'index',
//       intersect: false
//     },
//     layout: {
//       padding: 5
//     },
//     elements: {
//       point: {
//         hoverRadius: 7
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     plugins: {
//       datalabels: { // Plugin Datalabels
//         display: false,
//         anchor: 'center',
//         color: '#48724c'
//       },
//       legend: {
//         display: true
//       },
//       title: {
//         display: true,
//         text: 'Média de luminosidade do último mês por região',
//         font: {
//           size: 15
//         }
//       },
//       tooltip: {
//         displayColor: false,
//         borderColor: '#4CB648',
//         borderWidth: 3
//       }
//     }
//   }
// });

// new Chart(ctx3, { // Gráfico de barra mostrando luminosidade por região
//   type: 'bar',
//   data: {
//     labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
//     datasets: [{
//       label: 'Média obtida',
//       data: [567, 400, 874, 349, 672],
//       borderWidth: 0.5,
//       backgroundColor: '#9DC08B',
//       borderColor: '#9DC08B',
//     },
//     {
//       label: 'Média mínima esperada',
//       data: [500, 500, 500, 500, 500],
//       borderWidth: 0.5,
//       backgroundColor: '#D7FFC2',
//       borderColor: '#D7FFC2',
//     }]
//   },
//   options: {
//     interaction: {
//       mode: 'index',
//       intersect: false
//     },
//     layout: {
//       padding: 5
//     },
//     elements: {
//       point: {
//         hoverRadius: 10
//       }
//     },
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     plugins: {
//       datalabels: { // Plugin Datalabels
//         display: false,
//         anchor: 'center',
//         color: '#48724c'
//       },
//       legend: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: 'Média de luminosidade do último mês por região',
//         font: {
//           size: 15
//         }
//       },
//       tooltip: {
//         displayColor: false,
//         borderColor: '#4CB648',
//         borderWidth: 3
//       }
//     }
//   }
// });

var idEmpresa = sessionStorage.getItem(`FK_EMPRESA`);

fetch(`/medidas/buscarPlantacaoDestaque/${idEmpresa}`).then(function (resposta) {
  console.log(resposta);
  if (resposta.ok) {
      if (resposta.status == 204) { 
          console.log("Nenhum resultado encontrado.");
          throw "Nenhum resultado encontrado!!";
      }
      resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));;

          var plantacao = resposta[0];

          plantacao_destaque.innerHTML = `Plantação ${plantacao.idPlantacao}`;
          // finalizarAguardar();
      });
  } else {
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
  // finalizarAguardar();
});

fetch(`/medidas/buscarPlantacaoAtencao/${idEmpresa}`).then(function (resposta) {
  console.log(resposta);
  if (resposta.ok) {
      if (resposta.status == 204) { 
          console.log("Nenhum resultado encontrado.");
          throw "Nenhum resultado encontrado!!";
      }
      resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));;

          var plantacao = resposta[0];

          plantacao_atencao.innerHTML = `Plantação ${plantacao.idPlantacao}`;
          // finalizarAguardar();
      });
  } else {
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
  // finalizarAguardar();
});