
class ProdutoCarrinho {
  constructor(img, nome, preco) {
    this.img = img;
    this.nome = nome;
    this.preco = preco;
  }
}

var arrayProdutoCarrinho = [];

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


function addCarrinho(event, element) {

// Impede que outros elementos executem (função da div pai)
 event.stopPropagation();

// Pega o elemento pai .produto e captura o id
const id = element.closest('.produto').id;

let arrayProduto = JSON.parse(localStorage.getItem('produto'));

console.log(arrayProduto);


  // let produto = new Produto(urlImg, title, price);

  // if (localStorage.produtoCarrinho)
  //   arrayProdutoCarrinho = JSON.parse(localStorage.getItem('produtoCarrinho'));

  // arrayProdutoCarrinho.push(produto);

  // localStorage.produtoCarrinho = JSON.stringify(arrayProdutoCarrinho);
}


// function verificaProdutosCarrinho() {
//   const classContainerProdutos = document.getElementById('container_produtos');

//   arrayProdutoCarrinho = JSON.parse(localStorage.getItem('produtoCarrinho'));

//   arrayProdutoCarrinho.forEach(element => {
//     const produtoHTML = `
//     <div class="produtoPopup">
//             <img id="produto" src="${element.img}">
//             <strong>${element.nome}</strong>
//             <p>R$${element.preco}</p>
//             <p>1</p>
//             <button>
//               <img src="../../assets/icons/trash.png">
//             </button>
//           </div>
//       </div>`

//     classContainerProdutos.innerHTML += produtoHTML;

//   });

// }














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