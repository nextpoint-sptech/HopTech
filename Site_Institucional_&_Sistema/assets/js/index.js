const header = document.getElementById("header")
        , navbar = document.getElementById("navbar");

function rolagem(){
        header.classList.toggle("ativa" , scrollY > 0);
}

window.addEventListener('scroll', rolagem);

function enviarMensagem(){
        var nomeEmpresa = ipt_nome_empresa.value;
        var telefoneEmpresa = ipt_telefone_empresa.value;
        var emailEmpresa = ipt_email_empresa.value;
        var mensagem = ipt_mensagem_empresa.value;

        if(nomeEmpresa != "" && telefoneEmpresa != "" && emailEmpresa != "" && mensagem != ""){
                alert("Mensagem enviada com sucesso! Logo entraremos em contato :)");
        }
}

function goHopTech(){
        window.location.href = 'siteHopTech.html'
}