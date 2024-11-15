class Product {
    constructor(category, name, manufacturer, condition, price, stock, img, description, infoTech) {
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

    if (validation()) {

        // Verifica se existe a localStorage de produtos
        if (localStorage.products)
            // Transfere totos os elementos da localStora de produto para o array
            products = JSON.parse(localStorage.getItem('products'));

        // Cria um objeto produto     
        let product = new Product(category, name, manufacturer, condition, price, stock, imgProduto, description, infoTech);

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

function validation() {
    return true
}
