let total = document.getElementById('total');
let totalProcucts = document.getElementById('totalProcucts');

window.onload = () => {
    checkProductsCart();
    totalProcucts.innerHTML = `R$ ${totalPriceProducts()}`;
    total.innerHTML = `R$ ${totalPrice()}`;
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
                            <strong>R$ ${(parseFloat(element.price) * parseInt(element.quantityCart)).toFixed(2)}</strong>
                        </div>
                    </div>
                    <div class="servicos">
                        <h1>Serviços</h1>
                        <p>Garantia do produto</p>
    
                        <div class="opcoes">
                            <div>
                                <input onclick='assurance(0)' type="radio" checked name="assurance">
                                <p>Sem garantia</p>
                            </div>
                            <div>
                                <input type="radio" onclick='assurance(150)' name="assurance">
                                <p>12 meses de garantia estendida</p>
                            </div>
                            <div>
                                <input type="radio" onclick='assurance(200)' name="assurance">
                                <p>24 meses de garantia estendida</p>
                            </div>
                        </div>
                        <p id='subtotal'>Subtotal de serviços: <strong id="assuranceValue">R$ 0.00</strong></p>
                    </div>
                </div>
        `;

        classProductsCart.innerHTML += product;
    });
}

// Adiciona o valor dos serviços adiconais
function assurance(value) {
    let additionalServices = parseFloat(value) == NaN ? 0.00 : parseFloat(value);

    let assuranceValue = document.getElementById('assuranceValue'); 
    let assuranceValue2 = document.getElementById('assuranceValue2');

    assuranceValue.innerHTML = `R$ ${additionalServices.toFixed(2)}`;
    assuranceValue2.innerHTML = `R$ ${additionalServices.toFixed(2)}`;
    
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
    location.reload();
}


// função para remover os produtos do carrinho
function removeProduts() {
    var productsCart = [];
    localStorage.produtoCarrinho = JSON.stringify(productsCart); // atribui o array vazio na localStorage
    location.reload(); // recarrega a página para exibir o carrinho vazio
}

function totalPriceProducts() {
    let sum = 0;

    let productsCart = JSON.parse(localStorage.getItem('produtoCarrinho'));

    productsCart.forEach(product => {
        let price = parseFloat(product.price);
        let quantity = parseInt(product.quantityCart);
 
        sum += price * quantity;

    });

    return sum.toFixed(2);
}

function totalPrice() {

    return totalPriceProducts();
}