// Função para iniciar a sessão com o usuário logado
function toEnter() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Redireciona para a página home caso o retorna da função seja verdadeira
    if(validateFields(email, password)){
        window.location.href = "http://127.0.0.1:5501/public/src/pages/Home/Home.html";
    }       
}

// função para validar os campos
function validateFields(email, password) {
    
    // Validação dos dados (email e senha)
    if(email != "italo" || password != "123"){
        document.getElementById("login-senha").style = "display: flex;";
        return false;
    }
    return true;
}

// Efeitos
window.sr=ScrollReveal({reset:true});
sr.reveal('img',{duration:1500});
sr.reveal('#form',{duration:2000});
sr.reveal('#form2',{duration:3000});
sr.reveal('#confirm',{duration:4000});
