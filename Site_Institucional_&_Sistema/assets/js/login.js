function fazerLogin() {
    var usuario = ipt_usuario.value;
    var senha = ipt_senha.value;

    if (usuario.toLowerCase() == "hoppers" && senha == "123") {
        window.parent.location.href = "./area-restrita/hoptech/dashboardHoptech.html";
    }
    else if (usuario.toLowerCase() == "admincliente" && senha == "1234") {
        window.parent.location.href = "./area-restrita/dashboard.html";
    }
    else {
        formLogin.style.color = "red";
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuário e/ou Senha incorretos! Tente Novamente.',
            showConfirmButton: false,
            timer: 1500
        });
    }
} // toLowerCase(): Deixa todos os caracteres em letras minúsculas.