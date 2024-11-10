// Classe do usuário
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password
    }
}

// Array para armazenar os usuários
var users = [];

// método para registrar o usuário
function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let message = document.getElementById('erro');

    let error = null;

    // Validações dos campos
    if (name == null || name == "")
        error = "Informe o nome";
    else if (email == null || email == "")
        error = "Informe o e-mail";
    else if (password <= 3)
        error = "A senha deve ter no mínimo 4 caracteres";
    else if(userExist(email))
        error = "Usuário já existe";
        
    // Verifica se houve erros 
    if (error == null) {
        // Verifica se usersList já existe no localStorage 
        if (localStorage.usersList)
            /* Converte o usersList da localStorage 
            em objeto para armazenar no array */
            users = JSON.parse(localStorage.getItem('usersList'));
    
        let user = new User(name, email, password);

        // Insere o objeto user no array
        users.push(user);

        /* Converte os dados da do array em JSON
         para armazelá-los na localStorage*/
        localStorage.usersList = JSON.stringify(users);

        message.innerHTML = "Cadastro realizado com sucesso!";
        message.style = "visibility: visible; top: 0px; background: rgb(0, 255, 0)";
    } else {
        /* Caso identifique algum erro, lança uma resposta
         indicando o erro ocorrido */
       
        message.innerHTML = error;
        message.style = "visibility: visible; top: 0px; background: red";
    }

    setTimeout(() => {  
        message.style = window.getComputedStyle(message);

        if(!error) 
            window.location.href = "../Home/Home.html";
            
    }, 1000);
}
    

// Função para verificar se o usuário já existe
function userExist(email) {
    let value = false;

    // Vefifica se há usuários na localStorage
    if(localStorage.usersList) {

        // Converte os elementos da localStorage em objetos
        let listaUsers = JSON.parse(localStorage.getItem('usersList'));
        
        if(listaUsers[0].nome != "") {
            listaUsers.forEach(element => {
                
                // Retorna true caso o email já exista
                if(element.email == email){
                    value = true;
                    return;
                }
            });
        }
    }

    return value;
}

// Efeitos
window.sr = ScrollReveal({ reset: true });
sr.reveal('img', { duration: 1500 });
sr.reveal('#form', { duration: 2000 });
sr.reveal('#form2', { duration: 2500 });
sr.reveal('#form3', { duration: 3000 });
sr.reveal('#confirm', { duration: 4000 });
