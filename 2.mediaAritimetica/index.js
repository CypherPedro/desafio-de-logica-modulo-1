const calcularMedia = (numeros) => {
    const soma = numeros.reduce((a, b) => a + b);
    const media = soma / numeros.length;
    console.log(media)
}

const numeros = [9, 5, 6, 7]
calcularMedia(numeros)