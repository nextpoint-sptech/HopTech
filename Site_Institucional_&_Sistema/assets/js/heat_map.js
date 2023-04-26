var data = [
    {
      z: [
          [850, 591, 550, 157, 175],
          [744, 375, 700, 250, 200],
          [650, 595, 800, 275, 225],
          [500, 475, 678, 325, 275],
          [775, 450, 375, 300, 250]
      ],
      x: ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5'],
      y: ['Seção 1', 'Seção 2'/*, 'Seção 3', 'Seção 4', 'Seção 5'*/],
      colorscale: 'red',
      type: 'heatmap'
    }
  ];
  
  var layout = {
    title: 'Mapa de Calor - Plantação de Lúpulo',
    margin: { t: 70, r: 70, b: 70, l: 70 },
    annotations: [],
    showlegend: false
  };
  
  Plotly.newPlot('heatmap', data, layout);
  