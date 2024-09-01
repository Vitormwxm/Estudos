//filtter aplica uma condicional nos Arrays


var numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

let numerosPares = numeros.filter(pares => pares % 2 == 0)
let numerosImpares = numeros.filter(impares => impares % 2 == 1)
let numerosMairesCinco = numeros.filter(maiores5 => maiores5 > 5)

console.log("numeros Pares: " + numerosPares)
console.log("numeros impares: " + numerosImpares)
console.log("maiores do que 5: " + numerosMairesCinco)