let funcionarios = [
    {nome: "Vitor" , idade:"21"},
    {nome: "Sônia" , idade:"20"},
    {nome: "Samuel" , idade:"22"},
    {nome: "Lucas" , idade:"23"}
]

let pessoas = funcionarios.map(pessoa => pessoa.nome);

console.log(pessoas)