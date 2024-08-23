let btn = document.getElementById("buttonRadom");

btn.addEventListener("click", numberRadom);

function numberRadom(  ) {
    let modificador = document.getElementById("number")

    modificador.innerText = Math.floor(Math.random(modificador) * 61) 
}



