function fazerLogin() {
    var credenciais = {
        usuario: ipt_usuario.value,
        senha: ipt_senha.value
    }

    if (credenciais.usuario.toLowerCase() == "hoppers" && credenciais.senha == "123") {
        window.parent.location.href = "../../dashboard/dashboard-hoptech/dashboard-hoptech.html";
    }else if (credenciais.usuario.toLowerCase() == "admincliente" && credenciais.senha == "1234") {
        window.parent.location.href = "../../dashboard/dashboard-cliente/dashboard-cliente.html";
    }else {
        if (credenciais.usuario == "" || credenciais.senha == "") {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Mensagem de erro para todos os campos em branco!',
                showConfirmButton: true,
            })
        }
        else {
            console.log("FORM LOGIN: ", credenciais.usuario);
            console.log("FORM SENHA: ", credenciais.senha);
            fetch("/usuarios/autenticar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    credenciaisJSON: credenciais
                })
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!")
                if (resposta.ok) {
                    console.log(resposta);
                    resposta.json().then(json => {
                        console.log(json);
                        console.log(JSON.stringify(json));
                        sessionStorage.EMAIL_USUARIO = json.email;
                        sessionStorage.NOME_USUARIO = json.nome;
                        sessionStorage.FK_EMPRESA = json.fkEmpresa;
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login realizado com sucesso!',
                        })
                        setTimeout(function () {
                            window.parent.location.href = "../../dashboard/dashboard-cliente/dashboard-cliente.html";
                        }, 1000); // apenas para exibir o loading
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Houve um erro ao tentar realizar o login!',
                        showConfirmButton: true,
                    })
                    resposta.text().then(texto => {
                        console.error(texto);
                    });
                }
            }).catch(function (erro) {
                console.log(erro);
            })
        }
    }
} // toLowerCase(): Deixa todos os caracteres em letras minúsculas.