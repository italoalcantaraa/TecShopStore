var productsCart = [];

// função para remover os produtos do carrinho
function removeProduts() {
    localStorage.produtoCarrinho = JSON.stringify(productsCart); // atribui o array vazio na localStorage
    location.reload(); // recarrega a página para exibir o carrinho vazio
}

function totalPriceCart() {
    let sum = 0;

    productsCart.forEach(product => {
        sum += parseFloat(product.price);
    });

    return sum;
}