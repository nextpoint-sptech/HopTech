let credentials =
{
    empresaNome: '',
    empresaTelefone: '', // 8 digitos
    cnpjDocumento: '', // 14 digitos
    empresaEmail: '',
    confirmacaoEmail: '',
    empresaCep: '', // 8 digitos
    empresaEstado: '',
    empresaCidade: '',
    empresaBairro: '',
    empresaRua: '',
    empresaComplemento: ''
}

// as chaves estao na mesma ordem das inputs

let armazenamento = []


function verifyCredentials() {

    function enviandoDados() {
        let allInputs = document.querySelectorAll('input')
        let allLabels = document.querySelectorAll('label')
        let boxError = document.querySelectorAll('.errorsBox')
        let alertMessage = ''
        let inputStatus = ['', '', '', '', '', '', '', '', '', '', '']
        let qtyStatusOk = 0

        for (let counter = 0; counter < allInputs.length; counter++) {
            let formatedValues = ``
            let keyName = Object.keys(credentials)[counter] // pegando o nome da chave do dicionario
            let inputId = allInputs[counter].id
            let inputValues = allInputs[counter].value // pegando o valor da INPUT
            for (let chars of inputValues) {
                if (chars != '(' && chars != ')' && chars != '-' && chars != '.' && chars != '/') {
                    formatedValues += chars
                }
            }

            if (inputId == `telefoneEmpresa` || inputId == `documentoCNPJ` || inputId == `cepEmpresa`) {
                if (formatedValues == Number(formatedValues)) {
                    if (inputId == `telefoneEmpresa` && formatedValues.length == 10 || inputId == `documentoCNPJ` && formatedValues.length == 14 || inputId == `cepEmpresa` && formatedValues.length == 8) {
                        credentials[keyName] = formatedValues
                        allLabels[counter].style.color = 'var(--color1)'
                        inputStatus[counter] = 'ok'
                    } else {
                        alertMessage += `• ${inputId}: Quantidade de digitos inválidas.\n`
                        allLabels[counter].style.color = 'var(--color6)'
                        inputStatus[counter] = 'not ok'
                    }
                } else {
                    alertMessage += `• ${inputId}: Não é um número.\n`
                    allLabels[counter].style.color = 'var(--color6)'
                    inputStatus[counter] = 'not ok'
                }
            } else if (inputId == 'emailEmpresa') {
                if (formatedValues != '' && formatedValues.includes('@')) {
                    credentials[keyName] = formatedValues
                    allLabels[counter].style.color = 'var(--color1)'
                    inputStatus[counter] = 'ok'
                } else {
                    alertMessage += `• ${inputId}: Valor inválido.\n`
                    allLabels[counter].style.color = 'var(--color6)'
                    inputStatus[counter] = 'not ok'
                }
            } else if (inputId == 'emailConfirmacao') {
                if (credentials.empresaEmail == formatedValues && credentials.empresaEmail != '') {
                    credentials[keyName] = formatedValues
                    allLabels[counter].style.color = 'var(--color1)'
                    inputStatus[counter] = 'ok'
                } else {
                    if(credentials.empresaEmail == ''){
                        alertMessage += `• ${inputId}: Email inválido!\n`
                    }else{
                        alertMessage += `• ${inputId}: Emails não correspondentes\n`
                    }
                    allLabels[counter].style.color = 'var(--color6)'
                    inputStatus[counter] = 'not ok'
                }
            } else {
                if (inputValues != '') {
                    credentials[keyName] == formatedValues
                    allLabels[counter].style.color = 'var(--color1)'
                    inputStatus[counter] = 'ok'
                } else {
                    alertMessage += `• ${inputId}: Valor inválido.\n`
                    allLabels[counter].style.color = 'var(--color6)'
                    inputStatus[counter] = 'not ok'
                }
            }
        }
        
        for (x of inputStatus) {
            if (x == 'ok') {
                qtyStatusOk++
            }
        }

        if (qtyStatusOk == 11) {
            armazenamento.push(credentials)
            alert('Cadastro feito com sucesso!')
        }else{
            alert(alertMessage)
        }
    }
    enviandoDados()

    formatacaoNumeros()
}



////////////////////////////////////////////////////////
function formatacaoNumeros() {
    let cnpjInput = document.querySelector('#documentoCNPJ')
    let cepInput = document.querySelector(`#cepEmpresa`)
    let teleInput = document.querySelector(`#telefoneEmpresa`)
    // FORMATACAO CNPJ
    cnpjInput.addEventListener('keypress', function addingSignalsCNPJ(key) {
        if (cnpjInput.value.length == 2 || cnpjInput.value.length == 6) {
            cnpjInput.value += '.'
        } else if (cnpjInput.value.length == 10) {
            cnpjInput.value += `/`
        } else if (cnpjInput.value.length == 15) {
            cnpjInput.value += `-`
        }
    })

    cnpjInput.addEventListener(`keydown`, function removingSignalsCNPJ(key) {
        if (key.code == `Backspace`) {
            if (cnpjInput.value.length == 4) {
                cnpjInput.value = cnpjInput.value.slice(0, 3)
            } else if (cnpjInput.value.length == 8) {
                cnpjInput.value = cnpjInput.value.slice(0, 7)
            } else if (cnpjInput.value.length == 12) {
                cnpjInput.value = cnpjInput.value.slice(0, 11)
            } else if (cnpjInput.value.length == 17) {
                cnpjInput.value = cnpjInput.value.slice(0, 16)
            }
        }
    })

    // FORMATACAO CEP
    cepInput.addEventListener(`keypress`, function addingSignalsCEP() {
        if (cepInput.value.length == 5) {
            cepInput.value += `-`
        }
    })

    cepInput.addEventListener(`keydown`, function removingSignalsCEP(key) {
        if (key.code == `Backspace`) {
            if (cepInput.value.length == 7) {
                cepInput.value = cepInput.value.slice(0, 6)
            }
        }
    })

    // FORMATACAO CEL
    teleInput.addEventListener(`keypress`, function addingSignalsTel() {
        if (teleInput.value.length == 0) {
            teleInput.value += `(`
        } else if (teleInput.value.length == 3) {
            teleInput.value += `)`
        } else if (teleInput.value.length == 8) {
            teleInput.value += `-`
        }
    })
}


// function sair(){
//     window.parent.location.href = "../../login.html";
// }

// function irParaDashboard(){
//     window.parent.location.href = "./dashboardHoptech.html";
// }

// function irParaCadastro(){
//     window.parent.location.href = "./cadastro.html";
// }

// function verifyCredentials() {

//     var nomeEmpresa = nomeEmpresa.value;
//     var telefoneEmpresa = Number(telefoneEmpresa.value);
//     var documentoCNPJ = Number(documentoCNPJ.value);
//     var emailEmpresa = emailEmpresa.value;
//     var emailConfirmacao = emailConfirmacao.value;
//     var cepEmpresa = Number(cepEmpresa.value);
//     var estadoEmpresa = estadoEmpresa.value;
//     var cidadeEmpresa = cidadeEmpresa.value;
//     var bairroEmpresa = bairroEmpresa.value;
//     var ruaEmpresa = ruaEmpresa.value;
//     var complementoEmpresa = complementoEmpresa.value;


// if (nomeEmpresa == '' || telefoneEmpresa == 0 || documentoCNPJ == 0 || emailEmpresa == '' || emailConfirmacao == '' || cepEmpresa == 0 || estadoEmpresa == '' || cidadeEmpresa == '' || bairroEmpresa == '' ||  ruaEmpresa == '' );



//             if(emailEmpresa.indexOf('@') < -1){
//                 alert('E-mail inválido')
//             } else {
//                 if(emailConfirmacao == emailEmpresa) {
//                 }
//             }
// }

// function cadastroLogin() {
 
//     var empresas = select_empresa.value;
//     var usuarioEmpresa = usuarioEmpresa.value;
//     var senhaEmpresa = ipt_senha_empresa.value;
//     var senhaConfirmacao = ipt_senha_confirmacao.value;

// if (senhaConfirmacao != senhaEmpresa) {
//     alert('Senha incorreta')}
// }
