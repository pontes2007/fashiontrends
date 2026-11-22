const inputs = document.querySelectorAll("input")
const button = document.querySelector(".sendbutton")
const verification = document.getElementById("verificationtext")

let usuarios = [
    {
        "email": "fashionadm@fashiontrends.com",
        "senha": "frontend"
    }, {
        "email": "primeirousuario@email.com",
        "senha": "cliente123"
    }
]

function analizarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

function pegarNome(email){
    const position =  email.indexOf("@")
    return email.slice(0, position)
}

function acharEmail(email){
    if (usuarios.find((u) => u.email == email)){
        return true
    }
}

function contemNumero(conteudo){
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (let i = 0; i < numeros.length; i++){
        if (conteudo.includes(numeros[i])){
            return true
        }
    }
}

function senhaSegura(senha){
    if (senha.includes(" ")){
        verification.innerHTML = "A senha não pode ter espaços"
    } else if (senha.length < 8){
        verification.innerHTML = "A senha precisa ter no mínimo 8 caracteres"
    } else if (!contemNumero(senha)) {
        verification.innerHTML = "A senha precisa ter pelo menos um número"
    } else {
        return true
    }
}

function adicionarUsuario(email, senha){
    usuarios.push({"email": email, "senha": senha})
    console.log(usuarios)
}

function cadastrar(email, senha){
    console.log(email, senha)
    if (email == "" || senha == ""){
        verification.innerHTML = "Ambos os campos precisam ser preenchidos"
    } else if (!analizarEmail(email)){
        verification.innerHTML = "Formato de email inválido"
    } else if (acharEmail(email)) {
        verification.innerHTML = "Email já cadastrado"
    } else if (senhaSegura(senha)){
        verification.innerHTML = ""
        sessionStorage.setItem("nomedeusuario", pegarNome(email))
        adicionarUsuario(email, senha)
        window.location.href = "/telaprincipal/index.html"
    }
}

button.addEventListener("click", () => {cadastrar(inputs[0].value, inputs[1].value)})
