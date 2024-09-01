//

let numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
let total = numeros.reduce(function(total, numero){
    return total + numero
}, 10 /* variavel de inicializacao*/)

console.log(total)