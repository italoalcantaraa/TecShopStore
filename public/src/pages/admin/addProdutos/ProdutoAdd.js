let confirmOrChange = document.querySelector('.confirmOrChange'); // Seletor do botão;
let idProduct;
let arrayProducts = [];

// Após carregar a página, verifica se existe algum id na URL
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    idProduct = params.get('id');

    // Caso o id exista, altera o conteúdo do botão para "Alterar"
    if (idProduct) {
        confirmOrChange.innerHTML = "Alterar";

        // Função para preencher os campos de acordo com o id da URL
        fillInFields(idProduct);
    }
    // Caso não exista, altera o conteúdo do botão para "Cadastrar"
    else
        confirmOrChange.innerHTML = "Cadastrar";
}

// função para preencher os campos
function fillInFields(idProduct) {

    arrayProducts = JSON.parse(localStorage.getItem('products'));
    let product;

    arrayProducts.forEach(element => {
        if (idProduct == element.id) {
            product = element;
            return;
        }
    });

    // preenche os campos de acordo o produto capturado pelo id
    document.getElementById('category').value = product.category;
    document.getElementById('name').value = product.name;
    document.getElementById('manufacturer').value = product.manufacturer;
    document.getElementById('condition').value = product.condition;
    document.getElementById('price').value = product.price;
    document.getElementById('stock').value = product.stock;
    document.getElementById('img').value = product.img.slice(35, -4);
    document.getElementById('description').value = product.description;
    document.getElementById('infoTech').value = product.infoTech;
}

function modifyProduct() {
    let newCategory = document.getElementById('category').value;
    let newName = document.getElementById('name').value;
    let newManofacture = document.getElementById('manufacturer').value;
    let newCondition = document.getElementById('condition').value;
    let newPrice = document.getElementById('price').value;
    let newStock = document.getElementById('stock').value;
    let newImg = document.getElementById('img').value;
    let newDescription = document.getElementById('description').value;
    let newInfoTehc = document.getElementById('infoTech').value;

    // faz a validação dos campos;
    if(validation(newCategory, newName, newManofacture, newCondition, newPrice, newStock, newDescription, newInfoTehc)) {
        
        let index;
        
        for(let i = 0; i < arrayProducts.length; i++) {
            
            if(idProduct == arrayProducts[i].id)
                index = i;
        }

        arrayProducts[index] = new Product(idProduct, newCategory, newName, newManofacture, newCondition, newPrice, newStock, newImg, newDescription, newInfoTehc);
        localStorage.products = JSON.stringify(arrayProducts);
    }
}

function productActions() {
    if (idProduct)
        modifyProduct()
    else
        addProduct()
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

    let products = [];

    if (validation(category, name, manufacturer, condition, price, stock, img, description, infoTech)) {

        // Verifica se existe a localStorage de produtos
        if (localStorage.products)
            // Transfere totos os elementos da localStora de produto para o array
            products = JSON.parse(localStorage.getItem('products'));

        // Cria um objeto produto     
        let product = new Product(id, category, name, manufacturer, condition, price, stock, img, description, infoTech);

        // Armazena o produto dentro do array
        products.push(product);

        // Armazena todos os elementos do array na localStorage
        localStorage.products = JSON.stringify(products);

        // Apaga os valores dos campos preenchidos
        clearFields();

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
    } else {
        message.innerHTML = "Cadastro realizado com sucesso!";
        message.style = "visibility: visible; top: 0px; background: rgb(0, 255, 0)"
    }

    setTimeout(() => {
        message.style = window.getComputedStyle(message);
    }, 1000);

    return true;
}


// Função para limpar os campos
function clearFields() {
    document.getElementById('category').value = '';
    document.getElementById('name').value = '';
    document.getElementById('manufacturer').value = '';
    document.getElementById('price').value = '';
    document.getElementById('stock').value = '';
    document.getElementById('img').value = '';
    document.getElementById('description').value = '';
    document.getElementById('infoTech').value = '';
}

// Classe do produto
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
        this.img = `/public/src/assets/images/produtos/${img}.png`;
        this.description = description;
        this.infoTech = infoTech;
    }
}