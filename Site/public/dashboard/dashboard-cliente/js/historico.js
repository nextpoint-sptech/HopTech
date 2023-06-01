empresaNome.innerHTML = sessionStorage.getItem(`NOME_EMPRESA_USUARIO`);

var idEmpresa = sessionStorage.getItem(`FK_EMPRESA`);
var permPlantacao = sessionStorage.getItem('PERM_PLANTACAO')
console.log(idEmpresa);

fetch(`/medidas/listarHistoricoAlertas/${idEmpresa}/${permPlantacao}`).then(function (resposta) {
    console.log(resposta);
    if (resposta.ok) {
        if (resposta.status == 204) { 
            console.log("Nenhum resultado encontrado.");
            throw "Nenhum resultado encontrado!!";
        }

        resposta.json().then(function (resposta) {
            console.log("Dados recebidos: " );
            console.log(resposta)
            for (let i = 0; i < resposta.length; i++) {
                var alerta = resposta[i];
                if (alerta.luminosidade <= 600 && alerta.luminosidade >= 500) {
                    conteudo_historico.innerHTML += `
                        <p>${alerta.dtCaptura} - ${alerta.hrCaptura}</p>
                        <div class="alerta2" id="alerta">
                            <h4>Risco de Baixa Luminosidade!</h4>
                            <p>A região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está recebendo pouca luminosidade e está quase ficando abaixo da média!</p>
                            <h3>Luminosidade: ${alerta.luminosidade}</h3>
                        </div>
                    `;
                } else if (alerta.luminosidade < 500) {
                    conteudo_historico.innerHTML += `
                        <p>${alerta.dtCaptura} - ${alerta.hrCaptura}</p>
                        <div class="alerta" id="alerta">
                            <h4>Baixa Luminosidade!</h4>
                            <p>A região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está recebendo pouca luminosidade e está quase ficando abaixo da média!</p>
                            <h3>Luminosidade: ${alerta.luminosidade}</h3>
                        </div>
                    `;        
                } else if (alerta.luminosidade >= 700 && alerta.luminosidade <= 800) {
                    conteudo_historico.innerHTML += `
                        <p>${alerta.dtCaptura} - ${alerta.hrCaptura}</p>
                        <div class="alerta2" id="alerta">
                            <h4>Risco de Alta Luminosidade!</h4>
                            <p>A luminosidade da região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está se aproximando ao limite da média ideal!</p>
                            <h3>Luminosidade: ${alerta.luminosidade}</h3>
                        </div>
                    `;  
                } else {
                    conteudo_historico.innerHTML += `
                        <p>${alerta.dtCaptura} - ${alerta.hrCaptura}</p>
                        <div class="alerta" id="alerta">
                            <h4>Alta Luminosidade!</h4>
                            <p>A região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está recebendo luminosidade acima da média!</p>
                            <h3>Luminosidade: ${alerta.luminosidade}</h3>
                        </div>
                    `; 
                }
            }

            // finalizarAguardar();
        });
    } else {
        throw ('Houve um erro na API!');
    }
}).catch(function (resposta) {
    console.error(resposta);
    // finalizarAguardar();
});