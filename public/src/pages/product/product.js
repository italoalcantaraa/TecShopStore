function alterQuantity(operation, id) {
    let products = [];
  
    products = JSON.parse(localStorage.getItem('produtoCarrinho'));
  
    products.forEach(element => {
      if (id == element.id) {
  
        if (operation == "increment")
          element.quantityCart++;
        else{
          element.quantityCart--;
          
          if(element.quantityCart <= 0)
            products.splice(products.indexOf(element), 1);
  
          }
        return;
      }
    });
  
    localStorage.produtoCarrinho = JSON.stringify(products);
    verificaProdutosCarrinho();
  }