const button = document.getElementById("add")

let usuarios = [
    {
        "nome": "fashiontrendsadm@fashiontrends.com",
        "senha": "frontend"
    }
]

function checarUsuario(nome, senha){
    if (usuarios.find((u) => u.nome == nome && u.senha == senha)){
        console.log("correto")
    }
}

button.addEventListener("click", () => {checarUsuario("João", "ymparilla")})

