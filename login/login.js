const button = document.getElementById("add")

let usuarios = [
    {
        "nome": "João",
        "senha": "ymparilla"
    }
]

function checarUsuario(nome, senha){
    if (usuarios.find((u) => u.nome == nome && u.senha == senha)){
        console.log("correto")
    }
}

button.addEventListener("click", () => {checarUsuario("João", "ymparilla")})

