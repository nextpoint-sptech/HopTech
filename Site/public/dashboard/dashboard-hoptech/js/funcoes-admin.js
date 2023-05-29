function sair() {
    window.parent.location.href = "../../dashboard/dashboard-login/login-dashboard.html";
}

function irParaDashboard() {
    window.parent.location.href = "dashboard-hoptech.html";
}

function irParaCadastro() {
    window.parent.location.href = "cadastro-hoptech.html";
}

function irParaCadastroPlantacao(){
    window.parent.location.href = 'cadastro-plantacao.html'
}

function irParaNotificacoes() {
    window.parent.location.href = "../../erro-pages/erro404-hoptech.html";
}

function pegarMes(){
    let dtAtual = new Date();
    let mes = dtAtual.getMonth() + 1
    return mes
}


function pegarTpTelefone (){
    if(input_telefone.value.length == 11){
        return 2 // Celular
    }else{
        return 1 // Fixo
    }
}