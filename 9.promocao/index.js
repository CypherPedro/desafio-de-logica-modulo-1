const precos = [100, 100, 100]

const soma = precos.reduce((a, b) => a + b);

const calcularDesconto = (precos) => {
    let menorPreco = Infinity
    for (const preco of precos) {
        if (menorPreco > preco) {
            menorPreco = preco/2
        }
    }
    console.log(soma - menorPreco)
}

if (precos.length >= 3){
    calcularDesconto(precos);
} else {
    console.log(soma)
}