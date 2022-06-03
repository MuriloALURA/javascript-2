console.log(`Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

listaDestinos.push(`Curitiba`) // adiciona item a lista depois de declarada

console.log("Destinos Possíveis:")
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador é maior de idade")
    listaDestinos.splice(1, 1) //removendo item
} else if (estaAcompanhada) {
    console.log("Comprador esta acompanhada");
    listaDestinos.splice(1, 1) //removendo item
} else {
    console.log("Comprador é menor de idade")
}

console.log("Embarque:\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Voce não pode embarcar");
}


//listaDestinos.splice(1,1) // Lembrando que a lista começa o contador do 0

console.log(listaDestinos);

console.log(listaDestinos[1]) //Mostra item especifico da lista

// console.log(idadeComprador > 18)
// console.log(idadeComprador < 18)
// console.log(idadeComprador >= 18)
// console.log(idadeComprador <= 18)
// console.log(idadeComprador == 18)
