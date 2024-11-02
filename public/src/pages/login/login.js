function toEnter() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Redireciona para a página home caso o retorna da função seja verdadeira
    if(validateFields(email, password)){
        window.location.href = "http://127.0.0.1:5501/public/src/pages/Home/Home.html";
    }       
}

function validateFields(email, password) {
    
    // Validação dos dados (email e senha)
    if(email != "italo" || password != "123"){
        document.getElementById("login-senha").style = "display: flex;";
        return false;
    }
    return true;
}