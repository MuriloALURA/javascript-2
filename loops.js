console.log(`Trabalhando com condicionais`);
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino =`Rio de Janeiro`

console.log("\n Destinos possiveis:");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!");
}else {
    console.log("Desculpa tivemos um erro!");
}

for(let cont = 0; cont < 3; cont++){
    if(listaDestinos[contador] == destino) {
        destinoExiste = true;
    }
}