//filtter aplica uma condicional nos Arrays


var numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let numerosPares = numeros.filter(pares => pares % 2 == 0)
let numerosImpar = numeros.filter(numerosImpares)

function numerosImpares(valor){
    return valor % 2 == 1
}

let numerosMairesCinco = numeros.filter((mair5) => {
    return mair5> 5
})

console.log("numeros Pares: " + numerosPares)
console.log("numeros impares: " + numerosImpar)
console.log("maiores do que 5: " + numerosMairesCinco)