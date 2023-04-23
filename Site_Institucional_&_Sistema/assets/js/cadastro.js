function sair() {
    window.parent.location.href = "../../login.html";
}

function irParaDashboard() {
    window.parent.location.href = "./dashboardHoptech.html";
}

function irParaCadastro() {
    window.parent.location.href = "./cadastro.html";
}

function verificarCredenciais() {
    var empresaNome = nomeEmpresa.value;
    var telefone = Number(telefoneEmpresa.value);
    var cnpj = Number(documentoCNPJ.value);
    var empresaEmail = emailEmpresa.value;
    var confirmacaoEmail = emailConfirmacao.value;
    var cep = Number(cepEmpresa.value);
    var estado = estadoEmpresa.value;
    var cidade = cidadeEmpresa.value;
    var bairro = bairroEmpresa.value;
    var rua = ruaEmpresa.value;
    var complemento = complementoEmpresa.value;

    select_empresas.innerHTML += `<option>${empresaNome}</option>`

    if (empresaNome == '' || telefone == 0 || cnpj == 0 || empresaEmail == '' || confirmacaoEmail == ''
        || cep == 0 || estado == '' || cidade == '' || bairro == '' || rua == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: false,
            timer: 1500
        });
    }

    if (empresaEmail.indexOf('@') != -1 || confirmacaoEmail.indexOf('@') != -1) {
        if (confirmacaoEmail == empresaEmail) {
            if (empresaNome != '' || telefone != 0 || cnpj != 0 || empresaEmail != '' || confirmacaoEmail != ''
                || cep != 0 || estado != '' || cidade != '' || bairro != '' || rua != '') {
                Swal.fire({
                    position: 'center',
                    icon: 'sucess',
                    title: 'Cadastro concluído!',
                    showConfirmButton: true,
                    timer: 1500
                });
            }
        }
    } else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Email inválido. Tente novamente.',
            showConfirmButton: false,
            timer: 1500
        });
    }
}

function cadastroLogin() {

    var empresas = select_empresa.value;
    var usuarioEmpresa = usuarioEmpresa.value;
    var senhaEmpresa = ipt_senha_empresa.value;
    var senhaConfirmacao = ipt_senha_confirmacao.value;

    if (usuarioEmpresa == '' || senhaEmpresa == '' || senhaConfirmacao == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: false,
            timer: 1500
        });
    } if (senhaConfirmacao != senhaEmpresa) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Senha incorreta.',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: 'center',
            icon: 'sucess',
            title: 'Cadastro concluído!',
            showConfirmButton: true,
            timer: 1500
        });
    }
}

