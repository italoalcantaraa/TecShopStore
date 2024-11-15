import Produto from '../../../script/ProductObj.js';

function addProduto() {

    let categoria = document.getElementById('categoria').value
    let name = document.getElementById('name').value
    let logo = document.getElementById('fabricante').value
    let condicao = document.getElementById('condicao').value
    let valor = document.getElementById('valor').value
    let estoque = document.getElementById('estoque').value
    let nomeImg = document.getElementById('img').value;
    let descricao = document.getElementById('descricao').value
    let infotec = document.getElementById('infoTec').value
    
    let arrayProdutos = [];
    let enderecoImg = `../../assets/images/produtos/${nomeImg}`;

    // Gerar id do produto
    let id = Math.random();

    let produto = Produto(id, enderecoImg, logo, name, valor, descricao, info, estoque,);

}






function valida() {

} 

