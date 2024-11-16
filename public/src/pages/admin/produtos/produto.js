
let arrayProducts = [];

window.onload = () => {
    let classProducts = document.querySelector('.products');

    arrayProducts = JSON.parse(localStorage.getItem('products'));

    arrayProducts.forEach(element => {
        const product = `
            <div class="product">
                <img id="img-product" src="${element.img}" alt="">
                <p id="id">${element.id}</p>
                <p id="name">${element.name}</p>
                <p id="description">${element.description}</p>
                <p id="price">R$ ${element.price}</p>
                <div>
                <button onclick="deleteProduto('${element.id}')">
                    <img src="../../../assets/images/adm/pencil.svg" alt="">
                </button>
                <button onclick="deleteProduto('${element.id}')">
                    <img src="../../../assets/images/adm/trash.svg" alt="">
                </button>
                </div>
            </div> `;

            classProducts.innerHTML += product;
    });


}

document.addEventListener('DOMContentLoaded', () => {
    CarregarComponente('../../../components/menu/menu.html', 'menu');
});

function deleteProduto(id){

arrayProducts = JSON.parse(localStorage.getItem('products')) || [];

arrayProducts.forEach(element => {
    if(element.id == id){

        arrayProducts.splice(arrayProducts.indexOf(element), 1)
        console.log(element.id)
    }
})

localStorage.products = JSON.stringify(arrayProducts)

atualizarListaDeProdutos();

alert(`Produto com ID ${id} removido!`);
}

function atualizarListaDeProdutos() {
    let classProducts = document.querySelector('.products');
    
    // Limpar o conteúdo da lista de produtos atual
    classProducts.innerHTML = '';

    arrayProducts = JSON.parse(localStorage.getItem('products')) || [];

    arrayProducts.forEach(element => {
        const product = `
            <div class="product">
                <img id="img-product" src="${element.img}" alt="">
                <p id="id">${element.id}</p>
                <p id="name">${element.name}</p>
                <p id="description">${element.description}</p>
                <p id="price">R$ ${element.price}</p>
                <div>
                    <button onclick="deleteProduto('${element.id}')">
                        <img src="../../../assets/images/adm/pencil.svg" alt="">
                    </button>
                    <button onclick="deleteProduto('${element.id}')">
                        <img src="../../../assets/images/adm/trash.svg" alt="">
                    </button>
                </div>
            </div>`;

        classProducts.innerHTML += product;
    });
}
