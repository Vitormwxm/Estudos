var alunos = {
    nome: "vitor",
    notas: [10,2] ,

    media: function(){
        return (this.notas[0] + this.notas[1]) /2
    }

};

 alunos.matricula = 12345

alunos["sobrenome"] = "Martiniano"

console.log(alunos.media())