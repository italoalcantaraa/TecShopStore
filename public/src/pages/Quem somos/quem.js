
function abrirPopup() {
    document.getElementById("meuPopup").style.display = "flex";
    document.body.classList.add("bloqueado");

}


function fecharPopup() {
    document.getElementById("meuPopup").style.display = "none";
    document.body.classList.remove("bloqueado");
}