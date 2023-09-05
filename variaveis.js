//Existem três maneiras de declarar uma variável

var var1 = 10;
var var2 = 'Teste';

console.log(var1 + var2);

//hoisting (içamento)

function teste() {
    console.log('teste');
}

teste(); //funciona no final ou antes da função

// let, Var e Const

//var - permite reatribuição e ele vaza do escopo, se restringe ao scopo de funções e scopo global
//let - se restringe a qualquer tipo de scopo e bloco e também é reatribuível
//const - se restringi ao scopo de bloco e se atém a primeira atribuição e não pode ser reatribuido

/*Tipos de dados (primitivos)
    boolean
    null
    undefined
    number
    string
    symbol
*/

//object - objeto é uma coleção dinâmica de chave/valor

const x = {
    nome: "Thiago",
    idade: 30,
}
x['nome'] = 'Ricardo'
console.log(x.nome)
console.log(x['nome'])

const pessoa = {
    nome: "Maria",
    idade: 68,
    falar: function() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`)
    }
}
pessoa.falar()