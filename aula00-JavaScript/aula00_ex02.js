//Exemplo 2 
//Funções Simples

function saudacao(nome){
    return "Olá, " + nome + "!"
}

console.log(saudacao(34));

//Função Anônima()
const soma = function(a,b){
    return a + b;
}

console.log(soma("Rafael", "Marinho"));

// Arrow Function (função de seta)

const multiplicacao = (x,y) => x * y ;
console.log(multiplicacao(25,15));

//Objeto em javascript
const pessoa = {
    nome2: "Delieltom Dantas",
    idade: 21,
    email:"delieltom2@gmail.com",
    usuario:"Lindo",
    saudar: function(){
        return "Oi, meu nome é " + this.nome2 + " e eu sou um " + this.usuario
        + ".";
    }
}

console.log(pessoa.nome2);
console.log(pessoa.saudar());
