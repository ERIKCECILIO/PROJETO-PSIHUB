// sessão
function validarSessao() {
    var tipoUsuario = sessionStorage.TIPOUSUARIO_USUARIO;
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var crp = sessionStorage.CRP_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var crp_usuario = document.getElementById("crp_usuario");

    if (tipoUsuario != null && nome != null && crp != null && email != null) {
        b_usuario.innerHTML = nome;
        crp_usuario.innerHTML = crp;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

