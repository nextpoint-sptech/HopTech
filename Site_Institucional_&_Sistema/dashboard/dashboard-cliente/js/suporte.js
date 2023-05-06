function sair(){
    window.parent.location.href = "../dashboard-login/login-dashboard.html";
}

function goDashboard(){
    window.parent.location.href = "./dashboard-cliente.html";
}

function goUsuarios(){
    window.parent.location.href = "../../erro-pages/erro404-hoptech.html";
}

function goHistorico(){
    window.parent.location.href = "../../erro-pages/erro404-hoptech.html";
}

function irParaSuporte(){
    window.parent.location.href = "./suporte.html";
}

function realizarPedidoSuporte(){
    var tituloPedido = ipt_titulo_assunto_suporte.value;
    var descricaoSuporte = ipt_descricao_suporte.value;

    if(tituloPedido != "" && descricaoSuporte != ""){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pedido de suporte realizado com sucesso!',
            text: 'Aguarde que logo entraremos em contato.',
            showConfirmButton: true
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            text: 'É necessário preencher todos os campos para relizar o pedido de suporte.',
            showConfirmButton: true,
        });
    }
}