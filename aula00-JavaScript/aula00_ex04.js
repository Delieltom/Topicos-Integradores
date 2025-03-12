//Função que recebe um objeto como argumento
function exibirInfoProdutos(produto){
    return `\n Produto: ${produto.nome}, Preço:R$ ${produto.preco.toFixed(2)},
    Estoque: ${produto.estoque} unidades \n`;
}

const produto1 = {
    nome: "Ipad",
    preco: 5000.9985,
    estoque: 12
}
const produto2 = {
    nome: "Teclado",
    preco: 52.256,
    estoque: 5
}



console.log(exibirInfoProdutos(produto1));
console.log(exibirInfoProdutos(produto2));