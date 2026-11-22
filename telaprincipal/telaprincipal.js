const div = document.querySelector(".containerprodutos")
const botaopesquisar = document.querySelector(".botaopesquisar")
const input = document.querySelector(".inputpesquisa")
const login = document.querySelector(".botaologin")
const perfil = document.querySelector(".perfil")

let Produtos = [
  {
    "id": "PROD001",
    "nome": "Notebook UltraBook Pro 15",
    "categoria": "Informática",
    "descricao": "Notebook desenvolvido para produtividade, estudos e entretenimento. Possui tela de 15,6 polegadas Full HD, processador de alto desempenho, 16 GB de memória RAM e SSD de 512 GB. Seu design fino e leve facilita o transporte, enquanto sua bateria de longa duração permite trabalhar por várias horas sem precisar de carregamento.",
    "valor": 4299.90,
    "estoque": 18,
    "entrega": {
      "min_dias_uteis": 3,
      "max_dias_uteis": 6
    },
    "marca": "TechNova",
    "imagem": "../imagensdosprodutos/computador.png"
  }, {
    "id": "PROD002",
    "nome": "Headset Bluetooth SoundMax",
    "categoria": "Áudio",
    "descricao": "Fone de ouvido sem fio com tecnologia Bluetooth 5.3, cancelamento de ruído e almofadas acolchoadas para maior conforto. Oferece até 35 horas de autonomia de bateria e possui microfone integrado para chamadas. Compatível com computadores, celulares e tablets.",
    "valor": 349.90,
    "estoque": 42,
    "entrega": {
      "min_dias_uteis": 2,
      "max_dias_uteis": 5
    },
    "marca": "SoundMax",
    "imagem": "../imagensdosprodutos/fone.png"
  }, {
    "id": "PROD003",
    "nome": "Smartphone Vision X12",
    "categoria": "Smartphones",
    "descricao": "Smartphone equipado com tela AMOLED de 6,7 polegadas, resolução Full HD+, 256 GB de armazenamento interno e 8 GB de memória RAM. Conta com câmera principal de 50 MP, câmera frontal de 16 MP e bateria de 5.000 mAh. Ideal para fotografias, vídeos, jogos e utilização cotidiana.",
    "valor": 2799.90,
    "estoque": 25,
    "entrega": {
      "min_dias_uteis": 4,
      "max_dias_uteis": 7
    },
    "marca": "VisionTech",
    "imagem": "../imagensdosprodutos/celular.png"
  }
]

function converterReais(chave){
  return "R$" + (chave.toFixed(2)).toString()
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
}

function compararTextos(comparado, referencia){
  for (let i = 0; i < comparado.length; i++){
    if (!(comparado[i] == referencia[i])){
      return false
    }
  }
  return true
}

function carregarProdutos(filtrar){
  Produtos.map((produto) => {
    if (filtrar){
      if (compararTextos(input.value.toLowerCase(), produto["nome"].toLowerCase())){
        criarProduto(produto)
      }
    } else {
      criarProduto(produto)
    }
  })
}

carregarProdutos(false)

function pesquisar(){
  div.innerHTML = ''
  carregarProdutos(true)
}
console.log(sessionStorage.getItem("nomedeusuario"))
if (!(sessionStorage.getItem("nomedeusuario") == null)) {
  perfil.innerHTML = sessionStorage.getItem("nomedeusuario")
}
botaopesquisar.addEventListener("click", pesquisar)
login.addEventListener("click", () => {window.location.href = "../login/login.html"})