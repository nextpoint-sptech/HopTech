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
    var telefone = telefoneEmpresa.value;
    var cnpj = documentoCNPJ.value;
    var empresaEmail = emailEmpresa.value;
    var confirmacaoEmail = emailConfirmacao.value;
    var cep = cepEmpresa.value;
    var estado = estadoEmpresa.value;
    var cidade = cidadeEmpresa.value;
    var bairro = bairroEmpresa.value;
    var rua = ruaEmpresa.value;
    var complemento = complementoEmpresa.value;
    var messageAlert = ''

    if (empresaNome == '' || telefone == 0 || cnpj == 0 || empresaEmail == '' || confirmacaoEmail == ''
        || cep == 0 || estado == '' || cidade == '' || bairro == '' || rua == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: true,
        });
    } else {
        // validação de TELEFONE, CNPJ, CEP, EMAIL, CONFIRMACAO EMAIL
        if (telefone.length < 10) {
            messageAlert += '• Telefone: Quantidade de digitos inválida.\n'
        }
        if (telefone != Number(telefone)) {
            messageAlert += '• Telefone: Não é um número.\n'
        }
        if (empresaEmail.indexOf('@') != -1 || confirmacaoEmail.indexOf('@') != -1) {
            if (confirmacaoEmail == empresaEmail) {
                if (empresaNome != '' || telefone != 0 || cnpj != 0 || empresaEmail != '' || confirmacaoEmail != ''
                    || cep != 0 || estado != '' || cidade != '' || bairro != '' || rua != '') {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Cadastro concluído!',
                        showConfirmButton: true,
                        timer: 1500
                    });
                }
            }
            if (cnpj.length < 14) {
                messageAlert += '• CNPJ: Quantidade de digitos inválida.\n'
                if (cnpj != Number(cnpj)) {
                    messageAlert += '• CNPJ: Não é um número.\n'
                }
            }
            if (cep.length < 8) {
                messageAlert += '• CEP: Quantidade de digitos inválida. \n'
                if (cep != Number(cep)) {
                    messageAlert += '• CEP: Não é um número. \n'
                }
            }
            if (confirmacaoEmail != empresaEmail) {
                messageAlert += '• Confirmação de email: Emails não coincidem. \n'
            }
            if (empresaEmail.indexOf('@') == -1 || confirmacaoEmail.indexOf('@') == -1) {
                messageAlert += '• Email não tem @'
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
                select_empresas.innerHTML += `<option>${empresaNome}</option>`
            }
        }
    }
}


function cadastroLogin() {

    var empresas = select_empresas.value;
    var usuario = usuarioEmpresa.value;
    var senhaEmpresa = ipt_senha_empresa.value;
    var senhaConfirmacao = ipt_senha_confirmacao.value;

    //Validação de cadastro de login
    //Validando se usuario, senha e confirmacao da senha estão preenchidos
    if (usuario == '' || senhaEmpresa == '' || senhaConfirmacao == '') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Campo obrigatório vazio.',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        if (senhaConfirmacao != senhaEmpresa) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Senhas não coincidem.',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cadastro concluído!',
                showConfirmButton: true,
                timer: 1500
            });

        }
    }
}
    // if (senhaConfirmacao != senhaEmpresa) {
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'error',
    //         title: 'Senhas não coincidem.',
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // } else {
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'sucess',
    //         title: 'Cadastro concluído!',
    //         showConfirmButton: true,
    //         timer: 1500
    //     })