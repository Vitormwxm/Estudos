let bebida = "leite"
let valor = 0

switch(bebida){
    case "café":
        valor = 2.50
        console.log("café custa " + valor.toFixed(2) + " reais")
        break
    case "leite":
        valor = 5.50
        console.log("leite custa " + valor.toFixed(2) + " reais")
        break
    case "chá":
        valor = 10.50
        console.log("chá custa " + valor.toFixed(2) + " reais")
        break
    default: 
    console.log("você deve escolher café, leite ou chá")
}