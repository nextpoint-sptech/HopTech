var alertas = [];

function obterdados(idSensor) {
    // Buscando a medida
    fetch(`/medidas/tempo-real/${idSensor}`)
        .then(resposta => {

            if (resposta.ok) {
                resposta.json().then(resposta => {

                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    alertar(resposta, idSensor);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });

}

function alertar(resposta, idSensor) {
    var lumens = resposta[0].luminosidade;

    console.log(idSensor === resposta[0].fkPlantacao)
    
    var grauDeAviso ='';
    var grauDeAvisoCor = '';

    var limites = {
        muita_luz: 801, // > que 800
        perigo_muita_luz: 700, // >= 700 && <= 800
        ideal: 551, // > 550 && < 700
        perigo_pouca_luz: 550, // >= 449 && <= 550  
        baixa_luz: 449 // < que 450
    };

    var classe_luminosidade = 'cor-alerta';

    if (lumens >= limites.muita_luz) {
        classe_luminosidade = 'cor-alerta perigo-muita-luz';
        grauDeAviso = 'extrema luminosidade'
        grauDeAvisoCor = 'cor-alerta perigo-muita-luz'
        exibirAlerta(lumens, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (lumens < limites.muita_luz && lumens >= limites.perigo_muita_luz) {
        classe_luminosidade = 'cor-alerta alerta-muita-luz';
        grauDeAviso = 'muita luminosidade'
        grauDeAvisoCor = 'cor-alerta alerta-muita-luz'
        exibirAlerta(lumens, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (lumens < limites.perigo_muita_luz && lumens > limites.perigo_pouca_luz) {
        classe_luminosidade = 'cor-alerta ideal';
        removerAlerta(idSensor);
    }
    else if (lumens <= limites.pouca_luz && lumens >= limites.perigo_pouca_luz) {
        classe_luminosidade = 'cor-alerta perigo-pouca-luz';
        grauDeAviso = 'luminosidade escassa'
        grauDeAvisoCor = 'cor-alerta perigo-pouca-luz'
        exibirAlerta(lumens, idSensor, grauDeAviso, grauDeAvisoCor)
    }
    else if (lumens < limites.pouca_luz) {
        classe_luminosidade = 'cor-alerta alerta-pouca-luz';
        grauDeAviso = 'pouca luminosidade'
        grauDeAvisoCor = 'cor-alerta alerta-pouca-luz'
        exibirAlerta(lumens, idSensor, grauDeAviso, grauDeAvisoCor)
    }

    var card;

    if (idSensor == 1) {
        lumens_plantacao_1.innerHTML = lumens;
        card = card_1
    } else if (idSensor == 2) {
        lumens_plantacao_2.innerHTML = lumens;
        card = card_2
    } else if (idSensor == 3) {
        lumens_plantacao_3.innerHTML = lumens;
        card = card_3
    } else if (idSensor == 4) {
        lumens_plantacao_4.innerHTML = lumens;
        card = card_4
    } else if (idSensor == 5) {
        lumens_plantacao_4.innerHTML = lumens;
        card = card_4
    }

    card.className = classe_luminosidade;
}

function exibirAlerta(lumens, idSensor, grauDeAviso, grauDeAvisoCor) {
    var indice = alertas.findIndex(item => item.idSensor == idSensor);

    if (indice >= 0) {
        alertas[indice] = { idSensor, lumens, grauDeAviso, grauDeAvisoCor }
    } else {
        alertas.push({ idSensor, lumens, grauDeAviso, grauDeAvisoCor });
    }

    exibirCards();
    
// Dentro da div com classe grauDeAvisoCor há um caractere "invisível", 
// que pode ser inserido clicando com o seu teclado em alt+255 ou pelo código adicionado acima.
}

function removerAlerta(idSensor) {
    alertas = alertas.filter(item => item.idSensor != idSensor);
    exibirCards();
}
 
function exibirCards() {
    alerta.innerHTML = '';

    for (var i = 0; i < alertas.length; i++) {
        var mensagem = alertas[i];
        alerta.innerHTML += transformarEmDiv(mensagem);
    }
}

function transformarEmDiv({ idSensor, lumens, grauDeAviso, grauDeAvisoCor }) {
    return `<div class="mensagem-alarme">
    <div class="informacao">
    <div class="${grauDeAvisoCor}">&#12644;</div> 
     <h3>Sua plantação ${idSensor} está em risco de ${grauDeAviso}!</h3>
    <small>Luminosidade: ${lumens}.</small>   
    </div>
    <div class="alarme-sino"></div>
    </div>`;
}
