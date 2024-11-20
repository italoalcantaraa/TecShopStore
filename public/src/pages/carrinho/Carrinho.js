window.onload = () => {
    checkProductsCart();
};

function checkProductsCart() {
    let classProductsCart = document.querySelector('.produtos-carrinho');
    let arrayProductsCart = [];

    arrayProductsCart = JSON.parse(localStorage.getItem('produtoCarrinho'));

    classProductsCart.innerHTML = "";
    arrayProductsCart.forEach(element => {
        let product = `
            <div class="carrinho_produto">
                    <div class="informacoes_produto">
                        <img src="${element.img}" alt=".">
                        <p>${element.name}</p>
                        <div>
                            <p>QTD</p>
                            <div class="botao_quantidade">
                                <button onclick='alterQuantity("decrement", ${element.id})'>-</button>
                                <p>${element.quantityCart}</p>
                                <button onclick='alterQuantity("increment", ${element.id})'>+</button>
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
                                <input type="radio" name="assurance">
                                <p>Sem garantia</p>
                            </div>
                            <div>
                                <input type="radio" name="assurance">
                                <p>12 meses de garantia estendida</p>
                            </div>
                            <div>
                                <input type="radio" name="assurance">
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

function alterQuantity(operation, id) {
    let products = [];

    products = JSON.parse(localStorage.getItem('produtoCarrinho'));

    products.forEach(element => {
        if (id == element.id) {

            if (operation == "increment")
                element.quantityCart++;
            else {
                element.quantityCart--;

                if (element.quantityCart <= 0)
                    products.splice(products.indexOf(element), 1);

            }
            return;
        }
    });

    localStorage.produtoCarrinho = JSON.stringify(products);
    checkProductsCart();
}
