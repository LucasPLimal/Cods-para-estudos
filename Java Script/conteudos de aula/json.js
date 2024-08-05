//JSON é um objeto com variaveis(atributos) que podem ser alterados como um mockup.

//Ex:
const pessoa= {
    nome: "joão",
    idade: 30,
    profissão: "desenvolvedor",
    saudação: function() {
        return `Ola, meu nome é ${this.nome} tenho ${this.idade} anos e sou ${this.profissão}`;
    }
}
console.log(pessoa) //Returna o objeto inteiro
console.log(pessoa.nome) //returna só o nome
console.log(pessoa.idade) //returna só a idade
console.log(pessoa.profissão) //returna só a profissão

pessoa.idade=31 // altera o atributo do objeto
