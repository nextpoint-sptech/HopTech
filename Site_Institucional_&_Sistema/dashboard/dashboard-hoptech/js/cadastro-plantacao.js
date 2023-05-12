function cadastrarPlantacao() { 
    var empresa = select_empresa.value;
    var idPlantacao = ipt_id_plantacao.value;
    var tipo_iluminacao = select_iluminacao.value;
    var tipo_lupulo = select_lupulo.value;
    var cep = Number(ipt_cep.value);
    var estado = select_estado.value;
    var cidade = ipt_cidade.value;
    var bairro = ipt_bairro.value;
    var rua = ipt_rua.value;
    var complemento = ipt_complemento.value;

    var messageAlert = ''

    if (empresa == 0 || idPlantacao == '' || tipo_iluminacao == 0 || tipo_lupulo == 0 ||
        cep == 0 || estado == 0 || cidade == '' || bairro == '' || rua == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: true,
        });
    } else {
        // validação de CEP
        if (cep.length < 8) {
            messageAlert += '• CEP: Quantidade de digitos inválida. \n'
            if (cep != Number(cep)) {
                messageAlert += '• CEP: Não é um número. \n'
            }
        }

        if (messageAlert != '') {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: messageAlert,
                showConfirmButton: true
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cadastro feito com sucesso!',
                showConfirmButton: true
            })
            select_empresa.innerHTML += `<option>${empresaNome}</option>`
        }
    }
}

function cadastrarSensores() {
    var tipoSensor = select_tp_sensor.value;
    var statusSensor = select_status_sensor.value;
    var idPlantacao = ipt_id_plantacao.value;
    var regiaoPlantacao = select_regiao_plantacao.value;

    var messageAlert = ''

    if (tipoSensor == 0 || statusSensor == 0 || idPlantacao == '' || regiaoPlantacao == 0) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: true,
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cadastro feito com sucesso!',
            showConfirmButton: true
        })
    }

}