
function validarFormulario() {
    var nomeFuncionario = document.getElementById("ipt_nome_funcionario").value;
    var email = document.getElementById("ipt_email_funcionario").value;
    var nomeUsuario = document.getElementById("ipt_username_funcionario").value;
    var senha = document.getElementById("ipt_senha_funcionario").value;
    var confirmacao = document.getElementById("ipt_confirmar_senha_funcionario").value;

    // Validar nome do funcionário
    if (nomeFuncionario === ""){
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Campo obrigatório vazio.',
          text: 'É necessário preencher com o nome do funcionário.',
          showConfirmButton: true,
      })
      return false;
  }

    // Validar email
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Campo inválido.',
          text: 'É necessário preencher com os campos corretos de e-mail.',
          showConfirmButton: true,
      });
      return false;
  }

    // Validar nome de usuário
    if (nomeUsuario === "") {
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Campo obrigatório vazio.',
          text: 'É necessário preencher com o nome do usuário.',
          showConfirmButton: true,
      })
      return false;
  }

    // Validar senha
    if (senha.length < 8){
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Campo inválido.',
          text: 'A senha deve ter no mínimo 8 caracteres.',
          showConfirmButton: true,
      })
      return false;
  }

    // Validar confirmação de senha
    if (senha !== confirmacao){
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Campo inválido.',
          text: 'A senha e a confirmação não coincidem.',
          showConfirmButton: true,
      })
      return false;
  }

    return true;
}