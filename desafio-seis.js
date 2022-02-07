
let sobre = {
    nome: "Maria Eduarda",
    idade: 20,
    hobbies: ["Ler", "Jogar", "Pesquisar sobre plantas"]
}

sobre.signo="Peixes"

delete sobre.idade;

console.log(sobre)
console.log(sobre.nome)
console.log(sobre.signo)
console.log(sobre.hobbies)

var cadastro = ["Nome","Idade","Telefone","Amigos",]
    
var amigos = ["Alice","Angelo","Florence",];

Object.assign(cadastro, {amigos});
console.log(cadastro);