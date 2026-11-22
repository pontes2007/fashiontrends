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

function checarUsuario(email, senha){
    if (email == "" || senha == ""){
        verification.innerHTML = "Ambos os campos precisam estar preenchidos"
    } else if (analizarEmail(email) && usuarios.find((u) => u.email == email && u.senha == senha)){
        verification.innerHTML = ""
        sessionStorage.setItem("nomedeusuario", pegarNome(email))
        window.location.href = "/telaprincipal/index.html"
    } else if (!analizarEmail(email)){
        verification.innerHTML = "Formato de email inválido"
    } else {
        verification.innerHTML = "Email ou senha estão incorretos"
    }
}

button.addEventListener("click", () => {checarUsuario(inputs[0].value, inputs[1].value)})
