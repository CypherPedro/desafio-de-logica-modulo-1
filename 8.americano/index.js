const jogadores = [1, 1, 1];

const soma = jogadores.reduce((a, b) => a + b);

let resto = soma%jogadores.length;

if (resto == 0){
    resto = jogadores.length
}


console.log(resto)
