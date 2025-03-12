const numeros = [1,2,3,4,5,6];


//forEach percorre todos os vetores e exibe os valores
numeros.forEach(num => {
    console.log(`Numero: ${num}`);
});


//Map consegue andar pelos vetores e alterar os valores das variáveis
const dobrado = numeros.map(num => num *2);
console.log(`Numeros dobrados: ${dobrado}`);


//Filter retorna todos os valores que satisfaçam a condição
const maioQue8 = dobrado.filter(num => num > 8);
console.log(maioQue8);


//Find devolve o primeiro elemento que satisfaça a condição
const primeiroElemento = dobrado.find(num => num > 9);
console.log(primeiroElemento);


//Every devolve um valor booleano caso toda a condição seja satisfeit, tipo uma porta And.
const todosMaiores2 = dobrado.every(num => num > 2);
console.log(todosMaiores2);


//Some devolve um valor booleano caso pelo menos uma variável atenda a condição, tipo uma porta Or.
const algumMaior11 = dobrado.some(num => num >= 12);
console.log(algumMaior11);