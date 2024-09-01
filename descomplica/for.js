// o For serve para percorrer a estrutura de um array

let carros = [
    {id:1 , modelo:"Ford" , ano: 2014},
    {id:2 , modelo:"Volkwasgen" , ano: 2010}
]
// aqui temos o for padrão utilizado para percorrer o array e encontrar o ano do carro
for(var i = 0; i < carros.length; i++){
    let carro = carros[i].ano

    console.log(carro)
}

// temos um for I, onde criamos uma variavel I passamos e passamos o index, onde o index vai ser percorrido
for(const i in carros){
    let modelo = carros[i].modelo

    console.log(modelo)
}

// no for of os valores do array serão percorridos

for(const carro of carros){
    let id = carro.id
    console.log(id)
}