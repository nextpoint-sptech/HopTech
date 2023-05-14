// .classList.remove("hide");

// Cálculo do simulador
function simular() {
    var precoKg;
    var tipoLupulo = escolhaDoLupulo.value;
    var producaoAnual = Number(input_kg_lupulo.value);
    var unidadePeso = selectUnidadePeso.value;  
    
    if(unidadePeso == 'kg'){
        producaoAnual *= 1
    }else if(unidadePeso == 'g'){
        producaoAnual = producaoAnual / 1000
    }else{
        producaoAnual *= 1000
    }
    console.log(producaoAnual + 'kg')
     if (producaoAnual == 0) {
         Swal.fire({
             position: 'center',
             icon: 'warning',
             title: 'Quantidade de produção indefinida.',
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
        if (tipoLupulo === "saaz") {
            precoKg = 230;
        } else if (tipoLupulo === "citra") {
            precoKg = 220;
        } else if (tipoLupulo === "mantiqueira") {
            precoKg = 210;
        }else{
            precoKg = 200;
        }

        let lucroAnual = producaoAnual * precoKg;
        let perdaNormalPCTG = 0.3;
        let perdaComSistemaPCTG = perdaNormalPCTG * .5;
        let lucroNormal = lucroAnual * (1 - perdaNormalPCTG)
        let lucroComSistema = lucroAnual * (1 - perdaComSistemaPCTG);
        document.getElementById('js_primeira_div').style.visibility = 'visible'
        console.log(`lucroAnual = ${lucroAnual} precoKg = ${precoKg}`)        
        document.getElementById("semSistema").innerHTML = `<h1>Sem Sistema</h1>
        <p>Atualmente, com <b>${producaoAnual}kg(s)</b> produzidos, cerca de <b>${perdaNormalPCTG * 100}%</b> dos lúpulos são perdidos devido à exposição a luz inadequada, o que indica uma perda de cerca de <b>R$${lucroAnual - lucroNormal}</b>, totalizando um lucro de <b>R$${lucroNormal}</b>.</p>`
        document.getElementById("comSistema").innerHTML = `<h1>Com sistema</h1>
        <p>Já com o nosso produto, o <b>HopTech</b>, estimamos diminuir as suas perdas em até <b>50%</b> em cima da perda já existente, o que representa um total de apenas <b>${perdaComSistemaPCTG * 100}%</b>, indicando um prejuizo de cerca de <b>R$${lucroAnual - lucroComSistema}</b>, e totalizando um lucro de <b>R$${lucroComSistema}</b> </p>`;
    }
}
