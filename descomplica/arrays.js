var mesesAnos = ["janeiro" , "fervereiro" , "março" , "abril" , "maio" , "junho", "julho", "agosto", "setembro","outubro","novembro", "dezembro"]
let primeiroTri = mesesAnos.slice(0,3)
let segundoTri = mesesAnos.slice(3,6)
let terceiroTri = mesesAnos.slice(6,9)
let quartorTri = mesesAnos.slice(9,12)


console.log(quartorTri)

let primerioBimestre = primeiroTri.concat(segundoTri);
let segundosBimestre = terceiroTri.concat(quartorTri);

console.log(primerioBimestre)
console.log(segundosBimestre)

segundosBimestre.unshift("onzembro")

console.log(segundosBimestre)

var numeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

function arryfilter(value){
    if(value % 2 == 0 )
    return value
}

var pares = numeros.filter(arryfilter);

console.log(pares)