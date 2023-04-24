// .classList.remove("hide");

// Cálculo do simulador
function simular() {
    var tipoLupulo = escolhaDoLupulo.value;
    var area = Number(input_tamanho_area.value);
    var producaoAnual = Number(input_kg_lupulo.value);

    if (area == 0 || producaoAnual == 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Área ou quantidade de lúpulo indefinido.',
            showConfirmButton: false,
            timer: 2100
        });
    } else if (tipoLupulo == '') {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Tipo de lúpulo indefinido.',
            showConfirmButton: false,
            timer: 2100
        });
    } else {
        let precoKg;
        if (tipoLupulo === "saaz") {
            precoKg = 192.30;
        } else if (tipoLupulo === "citra") {
            precoKg = 210.00;
        } else if (tipoLupulo === "mantiqueira") {
            precoKg = 200.00;
        }

        const lucroMes = producaoAnual * precoKg / 12;
        const perdaSemAdotar = 0.1;
        const perdaAdotando = perdaSemAdotar * 0.7;
        const reducaoPerda = (perdaSemAdotar - perdaAdotando) / perdaSemAdotar * 100;
        const lucroMesAdotando = lucroMes * (1 - perdaAdotando);
        const aumentoLucro = (lucroMesAdotando - lucroMes) * -1;

        const percentualAumentoLucro = aumentoLucro / lucroMes * 100;
        const percentualLucroAnual = aumentoLucro / lucroMes * 12 * 100;

        const js_primeira_div = `
        <div>
            <span class="js-color-aviso">
                Sua plantação está ótima, mas ainda pode melhorar!
            </span>
            <span class="js-color-reduction">
                <i class="fa-solid fa-caret-down"></i>
                <p>
                    <b>Redução de perdas por mês ao adotar a solução:</b>
                </p>
                <p>
                    ${reducaoPerda.toFixed(2)}%
                </p>
            </span>
            <span class="js-color-lucro">
                <i class="fa-solid fa-caret-up"></i>
                <p>
                    <b>Lucro a mais por mês em números brutos:</b>
                </p>
                <p>
                    R$${aumentoLucro.toFixed(2)}
                </p>
            </span>
            <span class="js-color-lucro">
                <i class="fa-solid fa-caret-up"></i>
                <p>
                    <b>Lucro a mais por mês em percentual:</b>
                </p>
                <p>
                    ${percentualAumentoLucro.toFixed(2)}%
                </p>
            </span>
            <span class="js-color-lucro">
                <i class="fa-solid fa-percent"></i>
                <p>
                    <b>Percentual de lucro em um ano:</b>
                </p>
                <p>
                    ${percentualLucroAnual.toFixed(2)}%
                </p>
            </span>
        </div>`;
        document.getElementById("js_primeira_div").innerHTML = js_primeira_div;
    }
}


// var disp = document.getElementById('grafic-result').style.display;
//         if(disp == "none") {
//             document.getElementById('grafic-result').style.display = 'block';}
//         else {
//             document.getElementById('grafic-result').style.display = 'none';}

// // Gráfico de comparação
// Chart.register(ChartDataLabels);

// Chart.defaults.set('plugins.datalabels', {
//     color: '#40513B',
//     formatter: (value, ctx) => {
//         let sum = 0;
//         let dataArr = ctx.chart.data.datasets[0].data;
//         dataArr.map(data => {
//             sum += data;
//         });
//         let percentage = value.toFixed(2) + "%";
//         return percentage;
//     }
// });

// const data = {
//     labels: [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho'
//     ],
//     datasets: [{
//         label: 'C/ nossa solução',
//         backgroundColor: '#A5C9CA',
//         borderColor: '#395B64',
//         data: [9.6, 28.1, 32.8, 57.2, 62.1, 79.9]
//     },
//     {
//         label: 'S/ nossa solução',
//         backgroundColor: '#FA9884',
//         borderColor: '#D21312',
//         data: [31.2, 28.1, 11.8, 9.3, 4.2, 4.1]
//     }]
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {
//         layout: {
//             padding: 5
//         },
//         elements: {
//             point: {
//                 hoverRadius: 10
//             }
//         },
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Média de lucro em 6 meses',
//                 color: '#40513B'
//             }
//         }
//     }
// };

// const chartSimulador = new Chart(
//     document.getElementById('chartSimulador'),
//     config
// );