onload = function () {
    let nome = localStorage.getItem("nome")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome
}


function atualizar(element){
    let valor = element.value;
    let h1 = document.getElementById("nome");
    console.log(valor)

    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
}