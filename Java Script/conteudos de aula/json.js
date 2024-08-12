//JSON é um objeto com variaveis(atributos) que podem ser alteradas como um mockup.

//Ex de objeto em JavaScript:
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
console.log(pessoa.saudação()) //returna a função(método do objeto) saudação

pessoa.idade=31 // altera o atributo "idade" do objeto

//Ex de objeto em JSON
console.log("gerando String JSON")
const strjson=JSON.stringify(pessoa); //stringify para transformar em JSON // parse para destransformar
console.log(strjson)
//perceba que no objeto JSON não há as funções saudação() existentes no objeto JavaScript

/* 
Objetos JSON são muito usados em:
APIs - (Application Programming Interfaces) a comunicação entre o frontend (aplicações web ou mobile) e o backend(servidores);
Armazenamento de Dados - Banco de dados NoSQL como MongoDB;
Configurações - ferramentas editáveis para otimização de funções;
*/