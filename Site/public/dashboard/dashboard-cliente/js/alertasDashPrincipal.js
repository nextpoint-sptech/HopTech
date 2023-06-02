empresaNome.innerHTML = sessionStorage.getItem(`NOME_EMPRESA_USUARIO`);

var idEmpresa = sessionStorage.getItem(`FK_EMPRESA`);
var permPlantacao = sessionStorage.getItem('PERM_PLANTACAO')
console.log(idEmpresa);

setInterval(()=>{
    fetch(`/medidas/listarAlertasDashPrincipal/${idEmpresa}/${permPlantacao}`).then(function (resposta) {
        console.log(resposta);
        if (resposta.ok) {
            if (resposta.status == 204) { 
                console.log("Nenhum resultado encontrado.");
                throw "Nenhum resultado encontrado!!";
            }
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));;

                div_alertas.innerHTML = "<h3>Últimos Alertas</h3>";
                
                for (let i = 0; i < resposta.length; i++) {
                    var alerta = resposta[i];
    
                    if (alerta.luminosidade <= 600 && alerta.luminosidade >= 500) {
                        div_alertas.innerHTML += `
                            <p>${alerta.dtCaptura} - ${alerta.hrCaptura}</p>
                            <div class="alerta2" id="alerta" onclick="irPlantacao()">
                                <h4>Risco de Baixa Luminosidade! ()</h4>
                                <p>A região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está recebendo pouca luminosidade e está quase ficando abaixo da média!</p>
                                <h3>Luminosidade: ${alerta.luminosidade}</h3>
                            </div>
                        `;
                    } else if (alerta.luminosidade < 500) {
                        div_alertas.innerHTML += `
                            <div class="alerta" id="alerta" onclick="irPlantacao()">
                                <h4>Baixa Luminosidade! (${alerta.dtCaptura} - ${alerta.hrCaptura})</h4>
                                <p>A região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está recebendo pouca luminosidade e está quase ficando abaixo da média!</p>
                                <h3>Luminosidade: ${alerta.luminosidade}</h3>
                            </div>
                        `;        
                    } else if (alerta.luminosidade >= 700 && alerta.luminosidade <= 800) {
                        div_alertas.innerHTML += `
                            <div class="alerta2" id="alerta" onclick="irPlantacao()">
                                <h4>Risco de Alta Luminosidade! (${alerta.dtCaptura} - ${alerta.hrCaptura})</h4>
                                <p>A luminosidade da região ${alerta.regiao} da sua plantação ${alerta.idPlantacao} está se aproximando ao limite da média ideal!</p>
                                <h3>Luminosidade: ${alerta.luminosidade}</h3>
                            </div>
                        `;  
                    } else {
                        div_alertas.innerHTML += `
                            <div class="alerta" id="alerta" onclick="irPlantacao()">
                                <h4>Alta Luminosidade! (${alerta.dtCaptura} - ${alerta.hrCaptura})</h4>
                                <p>A região centro-oeste da sua plantação ${alerta.idPlantacao} está recebendo luminosidade acima da média!</p>
                                <h3>Luminosidade: ${alerta.luminosidade}</h3>
                            </div>
                        `; 
                    }
                }
    
                div_alertas.innerHTML += `
                    <button class="btnIrParaHistorico" onclick="btnIrParaHistorico()">Ver Todos</button>            
                `;
    
                // finalizarAguardar();
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
        // finalizarAguardar();
    });
}, 3000);

function btnIrParaHistorico() {
    window.location = "historico.html";
}

function irPlantacao() {
    window.location = "../plantacoes-graficos.html"
}