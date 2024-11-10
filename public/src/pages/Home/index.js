

function abrirPopup() {
  document.getElementById("meuPopup").style.display = "flex";
  document.body.classList.add("bloqueado");

}

function fecharPopup() {
  document.getElementById("meuPopup").style.display = "none";
  document.body.classList.remove("bloqueado");
}

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");
}

// function de add no popup

// function remover produto

const removeProduts = document.getElementsByClassName("removerPro")
for (var i = 0; i < removeProduts.length; i++) {
  removeProduts[i].addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  })
}


function updateTotal() {

  let totalAmount = 0
  const cartProducts = document.getElementsByClassName("cardProduto")
  for (var i = 0; i < cartProducts.length; i++) {
    const precoProduto = cartProducts[i].getElementsByClassName("valorProduto")[0].innerText.replace("R$", "").replace(",", ".")
    const quantidadeProduto = cartProducts[i].getElementsByClassName("qtdProduto")[0].value

    totalAmount += precoProduto * quantidadeProduto
  }
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".totalProduto span").innerText = "R$" + totalAmount;
}