//dada a funcao utilize metodos call e apply para modificar ovalor de this
//crie seus proprios objetos para a atividade
function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${
        this.idade + anos} anos de idade. `
}
const pessoa1 = {
    nome:'joao',
    idade:22
}
const pessoa2 = {
    nome:'carla',
    idade:26
}
const animal = {
    nome:'fiona',
    idade:5,
    raca:"puddle"
}
//console.log(calculaIdade.call(animal, 7))
console.log(calculaIdade.apply(pessoa1, [4]))
