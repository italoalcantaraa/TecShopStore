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
    let errorMessage = document.getElementById('erro');

    let error = null;

    // Validações dos campos
    if (name == null || name == "")
        error = "Informe o nome";
    else if (email == null || email == "")
        error = "Informe o e-mail";
    else if (password <= 3)
        error = "A senha deve ter no mínimo 4 caracters";
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
    } else {
        /* Caso identifique algum erro, lança uma resposta
         indicando o erro ocorrido */
       
        errorMessage.innerHTML = error;
        errorMessage.style = "visibility: visible; top: 0px;";
        setTimeout(() => {  
            errorMessage.style = window.getComputedStyle(errorMessage);    
        }, 3000);
    }
}
    
// Função para verificar se o usuário já existe
function userExist(email) {
    
    let value = false

    users.forEach(element => {
        // Retorna true caso o email já exista
        if (element.email == email){
            value = true;
            return;
        }           
    });
    return value;
}

// Efeitos
window.sr = ScrollReveal({ reset: true });
sr.reveal('img', { duration: 1500 });
sr.reveal('#form', { duration: 2000 });
sr.reveal('#form2', { duration: 2500 });
sr.reveal('#form3', { duration: 3000 });
sr.reveal('#confirm', { duration: 4000 });
