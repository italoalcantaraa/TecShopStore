export default function Produto(id, img, logo, nome, preco, descricao, info, estoque){
    let Produto = {
        id: id,
        Image: img,
        Logo: "swww",
        NomeProduto: nome.innerText,
        preco: preco,
        descricaoProduto: descricao,
        InformacoesTecnica: info,
        estoque: estoque,
    }

    return Produto;
}

