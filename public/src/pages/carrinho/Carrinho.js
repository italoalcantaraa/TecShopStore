window.onload = () => {
    checkProductsCart();
};

function checkProductsCart() {
    let classProductsCart = document.querySelector('.produtos-carrinho');
    let arrayProductsCart = [];

    arrayProductsCart = JSON.parse(localStorage.getItem('produtoCarrinho'));

    arrayProductsCart.forEach(element => {
        
        let product = `
            <div class="carrinho_produto">
                    <div class="informacoes_produto">
                        <img src="${element.img}" alt=".">
                        <p>${element.name}</p>
                        <div>
                            <p>QTD</p>
                            <div class="botao_quantidade">
                                <button>-</button>
                                <p>${element.quantityCart}</p>
                                <button>+</button>
                            </div>
                        </div>
                        <div>
                            <p>À vista ou no pix por:</p>
                            <strong>R$ ${element.price}</strong>
                        </div>
                    </div>
                    <div class="servicos">
                        <h1>Serviços</h1>
                        <p>Garantia do produto</p>
    
                        <div class="opcoes">
                            <div>
                                <input type="radio">
                                <p>Sem garantia</p>
                            </div>
                            <div>
                                <input type="radio">
                                <p>12 meses de garantia estendida</p>
                            </div>
                            <div>
                                <input type="radio">
                                <p>24 meses de garantia estendida</p>
                            </div>
                        </div>
                        <p>Subtotal de serviços: <strong>R$ 200,00</strong></p>
                    </div>
                </div>
        `;

        classProductsCart.innerHTML += product;
    });
}