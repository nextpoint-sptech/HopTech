function sair(){
    window.parent.location.href = "/dashboard/dashboard-login/login-dashboard.html";
}

function goDashboard(){
    window.parent.location.href = "/dashboard/dashboard-cliente/dashboard-cliente.html";
}

function goUsuarios(){
    window.parent.location.href = "/dashboard/dashboard-cliente/usuarios-cliente.html";
}

function goPermissoes(){
    window.parent.location.href = '/dashboard/dashboard-cliente/permissoes-cliente.html'
}

function goHistorico(){
    window.parent.location.href = "../../erro-pages/erro404-hoptech.html";
}

function irParaSuporte(){
    window.parent.location.href = "dashboard/dashboard-cliente/suporte.html";
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