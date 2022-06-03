console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`, 
);

listaDestinos.push(`Curitiba`) // adiciona item a lista depois de declarada

console.log("Destinos Possíveis:")
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

listaDestinos.splice(1,1) // Lembrando que a lista começa o contador do 0
console.log(listaDestinos);
console.log(listaDestinos[1]) //Mostra item especifico da lista