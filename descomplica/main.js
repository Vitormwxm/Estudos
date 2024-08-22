
var nomes = ["vitor", "sônia", "samuel"]
var nota1 = [1 , 10 , 3]
var nota2 = [10, 8 , 5]

function media(n1 , n2) {
   let nota1 = n1
   let nota2 = n2

   m = (nota1 + nota2) / 2
   return m
}

for( i = 0; i < nomes.length; i++){
   nota = nota1[i]
   notaTwo = nota2[i]
   alunos = nomes[i]

   var mediaa =  media(nota , notaTwo)
   
   if (mediaa >= 6){
      console.log( alunos + "\nNota 1 = " + nota + "\nNota 2 = " + notaTwo + "\nsua Média é " + mediaa + "\naprovado " + "\n_________")

   } else {
      console.log( alunos + "\nNota 1 = " + nota + "\nNota 2 = " + notaTwo + "\nsua Média é " + mediaa + "\nreprovado" +"\n_________")
   }
   
}

