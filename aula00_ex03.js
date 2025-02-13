//Exemplo 03: Classes

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacao(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}

const cachorro = new Animal("Felipe Massa" , "cachorro");
const gato = new Animal("Litlle Faels" , "gatin");
const tartaruga = new Animal("Bibiuzinho" , "tartarugo");

console.log(cachorro.exibirInformacao());
console.log(gato.exibirInformacao());
console.log(tartaruga.exibirInformacao());


//Minha classe

class Produto{
    constructor(nomeProduto, valor){
        this.nomeProduto = nomeProduto;
        this.valor = valor;
    }

    exibirInformacao(){
        return `Este é o produto ${this.nomeProduto} e está custando apenas R$ ${this.valor}`;
    };

    const cachorro = new Animal("Felipe Massa" , "cachorro");
    const gato = new Animal("Litlle Faels" , "gatin");
    const tartaruga = new Animal("Bibiuzinho" , "tartarugo");
}
