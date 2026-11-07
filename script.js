const div = document.querySelector(".containerprodutos")

function converterReais(chave){
  return "R$" + (chave.toFixed(2)).toString()
}

function criarProduto(nome, valor, imagem, descricao){
  let novoProduto = document.createElement("div")
  let imagemcontainer = document.createElement("div")
  let imagememsi = document.createElement("img")
  let nomecontainer = document.createElement("div")
  let valorcontainer = document.createElement("div")

  novoProduto.classList.add("produto")
  imagemcontainer.classList.add("imagemprodutocontainer")
  imagememsi.classList.add("imagensemsi")
  imagememsi.src = imagem
  imagememsi.alt = descricao
  nomecontainer.innerText = nome
  nomecontainer.classList.add("nomedoproduto")
  valorcontainer.innerText = converterReais(valor)
  valorcontainer.classList.add("valorproduto")

  div.appendChild(novoProduto)
  novoProduto.appendChild(imagemcontainer)
  imagemcontainer.appendChild(imagememsi)
  novoProduto.appendChild(nomecontainer)
  novoProduto.appendChild(valorcontainer)
}

fetch("./produtos.json").then((response) => {
  response.json().then((produtos) => {
    for (let i = 0; i < produtos.length; i++){
      criarProduto(produtos[i]["nome"], produtos[i]["valor"], produtos[i]["imagem"], produtos[i]["descricao"])
    }
  });
});

