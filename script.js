const div = document.querySelector(".containerprodutos")
const botaopesquisar = document.querySelector(".botaopesquisar")
const input = document.querySelector(".inputpesquisa")
const alerta = document.querySelector(".alerta")

function converterReais(chave){
  return "R$" + (chave.toFixed(2)).toString()
}

function dadosDoProduto(dados){
  console.log(dados.nome)

  sessionStorage.setItem("nome", dados.nome)
  window.location.href = "produto.html"
}

function criarProduto(info){
  let novoProduto = document.createElement("div")
  let imagemcontainer = document.createElement("div")
  let imagememsi = document.createElement("img")
  let nomecontainer = document.createElement("div")
  let valorcontainer = document.createElement("div")

  novoProduto.classList.add("produto")
  imagemcontainer.classList.add("imagemprodutocontainer")
  imagememsi.classList.add("imagensemsi")
  imagememsi.src = info.imagem
  imagememsi.alt = info.descricao
  nomecontainer.innerText = info.nome
  nomecontainer.classList.add("nomedoproduto")
  valorcontainer.innerText = converterReais(info.valor)
  valorcontainer.classList.add("valorproduto")

  div.appendChild(novoProduto)
  novoProduto.appendChild(imagemcontainer)
  imagemcontainer.appendChild(imagememsi)
  novoProduto.appendChild(nomecontainer)
  novoProduto.appendChild(valorcontainer)
  novoProduto.addEventListener("click", () => {dadosDoProduto(info)})
}

function compararTextos(comparado, referencia){
  for (let i = 0; i < comparado.length; i++){
    if (!(comparado[i] == referencia[i])){
      return false
    }
  }
  return true
}

async function carregarProdutos(filtrar){
  encontrado = false
  const response = await fetch("./produtos.json")
  const produtos = await response.json()
  produtos.map((produto) => {
    if (filtrar){
      if (compararTextos(input.value.toLowerCase(), produto["nome"].toLowerCase())){
        criarProduto(produto)
        encontrado = true
      }
    } else {
      criarProduto(produto)
      encontrado = true
    }
  })
  if (encontrado == false){
    console.log("Produto não encontrado")
    alerta.innerHTML = "Produto não encontrado"
  } else {
    alerta.innerHTML = ""
  }
}

carregarProdutos(false)

function pesquisar(){
  div.innerHTML = ''
  carregarProdutos(true)
}

botaopesquisar.addEventListener("click", pesquisar)
