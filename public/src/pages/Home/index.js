// Função que é executada assim que a página é carregada
window.onload = function () {
  let containerProdutct = document.querySelector('.produtos-grid');

  let arrayProducts = [];

  if (localStorage.products)
    arrayProducts = JSON.parse(localStorage.getItem('products'));

  arrayProducts.forEach(element => {
    const product = `
              <span class="luz">
                <div class="produto" id="${element.id}" onclick="EnvioProduto(this)">
                    <div class="imgProduto">
                        <img id="img" src="${element.img}" alt="Produto 1">
                    </div>
                    <h2 id="title">${element.name}</h2>
                    <h3 id="preco" class="preco1">R$${element.price}</h3>
                    <div class="comprar">
                        <button class="botao">COMPRAR</button>
                        <div class="addCarrinho">
                            <button id="button-carrinho" onclick="addCarrinho(event, this)">
                                <img src="../../assets/icons/shopping-cart-add.png">
                            </button>
                        </div>
                    </div>
                </div>
              </span>`;

    containerProdutct.innerHTML += product;
  });

}

// função para abrir o popup
function abrirPopup() {
  document.getElementById("meuPopup").style.display = "flex";
  document.body.classList.add("bloqueado");

  verificaProdutosCarrinho();
}
// função para fechar o popup
function fecharPopup() {
  document.getElementById("meuPopup").style.display = "none";
  document.body.classList.remove("bloqueado");
}
// função para abrir as opções de categorias 
function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");
}

var productCart = [];

function addCarrinho(event, element) {
  let objProduct;

  let products = [];

  // Impede que outros elementos executem (função da div pai)
  event.stopPropagation();

  // Pega o id do card de produto
  let id = parseInt(element.closest('.produto').id);

  // Verifica se existe a lovalStora de produtoCarrinho
  if (localStorage.produtoCarrinho)
    productCart = JSON.parse(localStorage.getItem('produtoCarrinho'))

  // Adiciona todos os produtos na localStorage no array
  products = JSON.parse(localStorage.getItem('products'));

  products.forEach(element => {
    if (element.id == id) {
      element.quantityCart++;
      objProduct = element;
      return;
    }
  });

  // Adiciona o produto no array
  productCart.push(objProduct);
console.log(objProduct)
  // adiciona todos os produtos do array na localStorade de produtos
  localStorage.produtoCarrinho = JSON.stringify(productCart);
  abrirPopup();
}

function verificaProdutosCarrinho() {
  let emptyCart = document.querySelector('.carrinhoVazio');
  let checkoutButton = document.querySelector('.botaoCarrinho');
  let productElementCard = [];
  const classContainerProdutos = document.getElementById('container_produtos');

  if (localStorage.produtoCarrinho && productCart.length >= 1) {
    emptyCart.style = "display:none;";
    checkoutButton = "display: flex;"

    productElementCard = JSON.parse(localStorage.getItem('produtoCarrinho'));

    classContainerProdutos.innerHTML = "";

    productElementCard.forEach(element => {
      const produtoHTML = `
          <div class="produtoPopup" id=${element.id}>
                <div id="img">
                  <img id="produto" src="${element.img}">
                </div>
                  <strong>${element.name}</strong>
                  <p>R$${element.price}</p>
                  <div>
                  <button onclick='alterQuantity("decrement", ${element.id})' >-</button>
                    <p>${element.quantityCart}</p>
                    <button onclick='alterQuantity("increment", ${element.id})'>+</button>
                  </div>
                </div>
            </div>`

      classContainerProdutos.innerHTML += produtoHTML;
    });
  } else {
    emptyCart.style = "display:flex;";
    checkoutButton.style = "display:none;";
  }
}

function alterQuantity(operation, id) {
  let products = [];

  products = JSON.parse(localStorage.getItem('produtoCarrinho'));

  products.forEach(element => {
    if (id == element.id) {

      if (operation == "increment")
        element.quantityCart++;
      else{
        element.quantityCart--;
        
        if(element.quantityCart <= 0)
          products.splice(products.indexOf(element), 1);

        }
      return;
    }
  });

  localStorage.produtoCarrinho = JSON.stringify(products);
  verificaProdutosCarrinho();
}


// function de add no popup

// function remover produto

// const removeProduts = document.getElementsByClassName("removerPro")
// for (var i = 0; i < removeProduts.length; i++) {
//   removeProduts[i].addEventListener("click", function (event) {
//     event.target.parentElement.parentElement.remove()
//     updateTotal()
//   })
// }


// function updateTotal() {

//   let totalAmount = 0
//   const cartProducts = document.getElementsByClassName("cardProduto")
//   for (var i = 0; i < cartProducts.length; i++) {
//     const precoProduto = cartProducts[i].getElementsByClassName("valorProduto")[0].innerText.replace("R$", "").replace(",", ".")
//     const quantidadeProduto = cartProducts[i].getElementsByClassName("qtdProduto")[0].value

//     totalAmount += precoProduto * quantidadeProduto
//   }
//   totalAmount = totalAmount.toFixed(2)
//   totalAmount = totalAmount.replace(".", ",")
//   document.querySelector(".totalProduto span").innerText = "R$" + totalAmount;
// }