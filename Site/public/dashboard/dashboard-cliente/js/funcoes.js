function sair() {
    window.parent.location.href = "../dashboard-login/login-dashboard.html";
} // Função que ao clicar em "sair", redirecionará para a tela de login
function goDashboard() {
    window.parent.location.href = "dashboard-cliente.html";
}
function goUsuario() {
    window.parent.location.href = "usuarios-cliente.html";
}

function goPermissoes() {
    window.parent.location.href = 'permissoes-cliente.html'
}

function goSuporte() {
    window.parent.location.href = "suporte.html";
}

function goPlantacao(){
    window.parent.location.href = "plantacoes-graficos.html"
}

function goHistorico() {
    window.parent.location.href = "historico.html";
}

empresaNome.innerHTML = sessionStorage.getItem(`NOME_EMPRESA_USUARIO`)
usuarioNome.innerHTML = sessionStorage.getItem('NOME_USUARIO')
let data = document.querySelector('#data');
let horas = document.querySelector('#hr');
let dataHoje = new Date();
if(data != null || horas != null){
    const relogio = setInterval(function time() {

        let dateToday = new Date();

        let hr = dateToday.getHours();
        let min = dateToday.getMinutes();
        let seg = dateToday.getSeconds();

        let strHr = new String(hr);
        let strMin = new String(min);
        let strSeg = new String(seg);

        if (strHr < 10) hr = '0' + hr;

        if (strMin < 10) min = '0' + min;

        if (strSeg < 10) seg = '0' + seg;

        let dia = dataHoje.getDate();
        let mes = dataHoje.getMonth() + 1;
        let ano = dataHoje.getFullYear();

        let strDia = new String(dia);
        let strMes = new String(mes);

        if (strDia.length == 1) dia = '0' + dia;
        if (strMes.length == 1) mes = '0' + mes;

        let dataAtual = dia + '/' + mes + '/' + ano;
        let Horario = hr + ':' + min + ':' + seg;

        data.textContent = dataAtual + ' - ' + Horario;
    });

    function pegarData() {
        let dia = dataHoje.getDate();
        let mes = dataHoje.getMonth() + 1;
        let ano = dataHoje.getFullYear();

        let strDia = new String(dia);
        let strMes = new String(mes);

        if (strDia.length == 1) dia = '0' + dia;
        if (strMes.length == 1) mes = '0' + mes;

        let dataAtual = dia + '/' + mes + '/' + ano;

        data.textContent = dataAtual;
    }

    pegarData()
}

function validarPermissoes(){
    if(sessionStorage.getItem('TP_USUARIO') == 2){
        document.querySelector('#menu_perms').style.display = 'none'
        document.querySelector('#menu_cadastros').style.display = 'none'
    }
}

validarPermissoes() 