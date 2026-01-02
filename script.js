function filtrarProdutos() {
  let input = document.getElementById("pesquisa");
  let filtro = input.value.toLowerCase();
  let produtos = document.getElementsByClassName("produto");

  for (let i = 0; i < produtos.length; i++) {
    let nomeProduto = produtos[i].getAttribute("data-name");

    if (nomeProduto.includes(filtro)) {
      produtos[i].style.display = "inline-block";
    } else {
      produtos[i].style.display = "none";
    }
  }
}
