let pessoas = ["Gabriel", "Glauber", "Damiao", "Valdecio", "Cormim", "Tatu", "Alex"]

function sortear(){

    let sorteado = document.getElementById("sorteado")
    let np = pessoas.length;
    
    let st = Math.floor(Math.random() * np)

    sorteado.innerHTML = pessoas[st]
}