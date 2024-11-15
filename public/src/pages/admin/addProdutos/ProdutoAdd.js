class Product {
    constructor(id, category, name, manufacturer, condition, price, stock, img, description, infoTech) {
        this.id = id;
        this.quantityCart = 0; 
        this.category = category;
        this.name = name;
        this.manufacturer = manufacturer;
        this.condition = condition;
        this.price = price;
        this.stock = stock;
        this.img = img;
        this.description = description;
        this.infoTech = infoTech;
    }
}

function addProduct() {
    let id = Math.trunc((Math.random() * (2000 - 0) + 0));
    let category = document.getElementById('category').value;
    let name = document.getElementById('name').value;
    let manufacturer = document.getElementById('manufacturer').value;
    let condition = document.getElementById('condition').value;
    let price = document.getElementById('price').value;
    let stock = document.getElementById('stock').value;
    let img = document.getElementById('img').value;
    let description = document.getElementById('description').value;
    let infoTech = document.getElementById('infoTech').value;

    let imgProduto = `/public/src/assets/images/produtos/${img}.png`;

    let products = [];

    if (validation(category, name, manufacturer, condition, price, stock, img, description, infoTech)) {

        // Verifica se existe a localStorage de produtos
        if (localStorage.products)
            // Transfere totos os elementos da localStora de produto para o array
            products = JSON.parse(localStorage.getItem('products'));

        // Cria um objeto produto     
        let product = new Product(id, category, name, manufacturer, condition, price, stock, imgProduto, description, infoTech);

        // Armazena o produto dentro do array
        products.push(product);

        // Armazena todos os elementos do array na localStorage
        localStorage.products = JSON.stringify(products);

        // Apaga os valores dos campos preenchidos
        document.getElementById('category').value = '';
        document.getElementById('name').value = '';
        document.getElementById('manufacturer').value = '';
        document.getElementById('price').value = '';
        document.getElementById('stock').value = '';
        document.getElementById('img').value = '';
        document.getElementById('description').value = '';
        document.getElementById('infoTech').value = '';

    }
}

// Fazer melhorias nas
function validation(category, name, manufacturer, condition, price, stock, img, description, infoTech) {
    let message = document.getElementById('erro');
    
    let error;

    if (category == '')
        error = "Informe a categoria.";
    else if (name == '')
        error = "Informe o nome.";
    else if (manufacturer == '')
        error = "Informe o fornecedor.";
    else if (condition == '')
        error = "Informe a condição.";
    else if (price == '' || price < 0)
        error = "Informe um preço válido.";
    else if (stock == '' || stock < 1)
        error = "Informe o estoque.";
    else if (img == '')
        error = "Informe a imagem.";
    else if (description == '')
        error = "Informe a descrição.";
    else if (infoTech == '')
        error = "Informe a descrição técnica.";

    /* Caso identifique algum erro, lança uma resposta
         indicando o erro ocorrido */

    if (error != undefined) {
        message.innerHTML = error;
        message.style = "visibility: visible; top: 0px; background: red";
        return false;
    }else {
        message.innerHTML = "Cadastro realizado com sucesso!";
        message.style = "visibility: visible; top: 0px; background: rgb(0, 255, 0)"
    }

    setTimeout(() => {
        message.style = window.getComputedStyle(message);
    }, 1000);

    return true;
}
