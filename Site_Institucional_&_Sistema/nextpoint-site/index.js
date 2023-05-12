const header = document.getElementById("header")
        , navbar = document.getElementById("navbar");

function rolagem() {
        header.classList.toggle("ativa", scrollY > 0);
}

window.addEventListener('scroll', rolagem);

function enviarMensagem() {
        var nomeEmpresa = ipt_nome_empresa.value;
        var telefoneEmpresa = ipt_telefone_empresa.value;
        var emailEmpresa = ipt_email_empresa.value;
        var mensagem = ipt_mensagem_empresa.value;

        if (nomeEmpresa != "" && telefoneEmpresa != "" && emailEmpresa != "" && mensagem != "") {
                Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Mensagem enviada com sucesso! Logo entraremos em contato :)',
                        showConfirmButton: true,
                        timer: 2500
                });
        }
}

function goHopTech() {
        window.location.href = '../hoptech-site/site-hoptech.html'
}
