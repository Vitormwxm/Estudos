let btniniciar = document.getElementById("iniciar")

var numero = 0;
var minuto = 0;
var horas = 0;
function temporizador(){
    let second = document.getElementById("segundos")
    let minute = document.getElementById("minutos")
    let hours = document.getElementById("horas")
    second.innerHTML = numero
    minute.innerHTML = minuto
    hours.innerHTML = horas
    numero++
    
    if(numero > 59){
        numero = 0;
        minuto++
    
    } else if(minuto > 59){
        minuto = 0;
        horas++
    }  
}

btniniciar.addEventListener("click", iniciar)
let interval

function iniciar() {
    clearInterval(interval)

    if(btnIniciar == "continuar") [
        btnContinuar.textContent = "Iniciar"
    ]
    interval = setInterval(temporizador, 1000)
    let btnContinuar = document.getElementById("iniciar")
    btnContinuar.textContent = "iniciar"

    
    btniniciar.removeEventListener("click", iniciar);
   
}

function reiniciarEvento() {
    btniniciar.addEventListener("click", iniciar);
}



function parar () {
    clearInterval(interval)
    let btnContinuar = document.getElementById("iniciar")
    btnContinuar.textContent = "continuar"
}

function resetar (){
    numero = 0;
    minuto = 0;
    hours = 0;
    let second = document.getElementById("segundos")
    let minute = document.getElementById("minutos")
    let hourss = document.getElementById("horas")
    let btnContinuar = document.getElementById("iniciar")
    btnContinuar.textContent = "iniciar"
    second.innerHTML = "0"
    minute.innerHTML = "0"
    hourss.innerHTML = "0"
}