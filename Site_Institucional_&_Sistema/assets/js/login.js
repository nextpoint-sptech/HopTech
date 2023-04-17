function fazerLogin(){
    var usuario = ipt_usuario.value;
    var senha = ipt_senha.value;

    if(usuario == "hoppers" && senha == "123"){
        window.parent.location.href ="./area-restrita/hoptech/dashboardHoptech.html";
    }else if(usuario == "AdminCliente" && senha == "1234"){
        window.parent.location.href ="./area-restrita/dashboard.html";
    }else{
        formLogin.style.color = "red";
        if(usuario != "" && senha != ""){
            alert("Usuário e/ou Senha incorretos! Tente Novamente.");
        }
    }
}