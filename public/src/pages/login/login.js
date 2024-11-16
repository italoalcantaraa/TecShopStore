// Função para iniciar a sessão com o usuário logado
function toEnter() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById('erro');

    // Redireciona para a página home caso o retorna da função seja verdadeira
    if (validateFields(email, password)) {
        message.innerHTML = "Cadastro realizado com sucesso!";
        message.style = "visibility: visible; top: 0px; background: rgb(0, 255, 0)";
        
        setTimeout(() => {
            window.location.href = "../Home/Home.html";
        }, 1000);
    } else {
        message.innerHTML = "Login e/ou senha inválidos.";
        message.style = "visibility: visible; top: 0px; background: red;";
        
        setTimeout(() => {
            message.style = "top:-60px; visibility: hidden;";
        }, 1000);
    }
}


let users = [];

// função para validar os campos
function validateFields(email, password) {
    let value = false;

    if (localStorage.usersList) {
        users = JSON.parse(localStorage.getItem('usersList'));

        users.forEach(element => {
            if (element.email = email && element.password == password) {
                console.log("Opa")
                value = true;
                return;
            }
        })
    }

    return value;
}

// Efeitos
window.sr = ScrollReveal({ reset: true });
sr.reveal('img', { duration: 1500 });
sr.reveal('#form', { duration: 2000 });
sr.reveal('#form2', { duration: 3000 });
sr.reveal('#confirm', { duration: 4000 });
