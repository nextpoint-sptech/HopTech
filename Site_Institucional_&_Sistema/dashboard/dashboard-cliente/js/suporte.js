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