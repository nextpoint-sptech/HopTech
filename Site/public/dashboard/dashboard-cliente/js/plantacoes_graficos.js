var idEmpresa = sessionStorage.getItem(`FK_EMPRESA`);
var idPlantacao = sessionStorage.getItem('FK_PLANTACAO');

fetch(`/medidas/buscarRegiaoDestaque/${idEmpresa}/${idPlantacao}`).then(function (resposta) {
  console.log(resposta);
  if (resposta.ok) {
      if (resposta.status == 204) { 
          console.log("Nenhum resultado encontrado.");
          throw "Nenhum resultado encontrado!!";
      }
      resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));;

          var regiao = resposta[0];

          regiao_destaque.innerHTML = `${regiao.regiao}`;
          // finalizarAguardar();
      });
  } else {
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
  // finalizarAguardar();
});

fetch(`/medidas/buscarRegiaoAtencao/${idEmpresa}/${idPlantacao}`).then(function (resposta) {
  console.log(resposta);
  if (resposta.ok) {
      if (resposta.status == 204) { 
          console.log("Nenhum resultado encontrado.");
          throw "Nenhum resultado encontrado!!";
      }
      resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));;

          var regiao = resposta[0];

          regiao_atencao.innerHTML = `${regiao.regiao}`;
          // finalizarAguardar();
      });
  } else {
      throw ('Houve um erro na API!');
  }
}).catch(function (resposta) {
  console.error(resposta);
  // finalizarAguardar();
});