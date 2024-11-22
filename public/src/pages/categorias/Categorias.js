window.onload = function () {

    const params = new URLSearchParams(window.location.search);
    idProduct = params.get('id');

    
    let containerProdutct = document.querySelector('.produtos-grid');
  
    let arrayProducts = [];
  
    if (localStorage.products)
      arrayProducts = JSON.parse(localStorage.getItem('products'));
  
    arrayProducts.forEach(element => {
      const product = `
                <span class="luz">
                  <div class="produto" id="${element.id}" onclick="EnvioProduto(${element.id})">
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
  