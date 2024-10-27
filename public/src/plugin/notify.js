import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'; // Para os estilos
//Exemplo compara conluida, login...
function NotifySuccess(mensagem){
    Toastify({
        text: mensagem,
        duration: 3000,
        gravity: "top",
        position: 'right',
        className: "success", 
        onClick: () => {}
    }).showToast();
}
//Exemplo alguma validação não certa
function NotifyError(Objet){
    Toastify({
        text: Objet,
        duration: 3000,
        gravity: "top",
        position: 'left',
        className: "error", 
        onClick: () => {}
    }).showToast();
}
//Exemplo quando adicionar algo no carrinho
function NotifyOk(msg){
    Toastify({
        text: Objet,
        duration: 3000,
        gravity: "top",
        position: 'left',
        className: "info", 
        onClick: () => {}
    }).showToast();
}

//Tem warning mas não em que caso usar :(