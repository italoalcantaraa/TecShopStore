function Produto(id, img, nome, preco, precoOriginal){

    let Produto = {
        id: id,
        Image: img.src,
        Logo: "swww",
        NomeProduto: nome.innerText,
        preco: preco.innerText,
        precoOriginal: precoOriginal ? precoOriginal.innerText : "",
        descricaoProduto: "",
        InformacoesTecnica: "",
    }

    return Produto
}

