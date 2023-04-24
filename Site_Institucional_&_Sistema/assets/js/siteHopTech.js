function goLogin() {
    window.location.href = 'login.html'
}

function goSimulacao() {
    window.location.href = 'informeSimulador.html'
}

function enviarMensagem(){
    var nomeResp = nomeResponsavel.value;
    var nomeEmp = nomeEmpresa.value;
    var tel = empresaTelefone.value;
    var email = empresaEmail.value;
    var mensagem = msgContato.value;

    if(nomeResp != "" && nomeEmp != "" && tel != "" && email != "" && mensagem != ""){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mensagem enviada com sucesso! Logo entraremos em contato :)',
            showConfirmButton: false,
            timer: 2500
    });
    }
}
