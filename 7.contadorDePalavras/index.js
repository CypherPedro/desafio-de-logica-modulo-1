const contarPalavras = (frase) => {
    const fraseFormatada = frase.trim();
    const palavra = fraseFormatada.split(" ")
    const resposta = palavra.filter(elemento => elemento)
    console.log(resposta.length)
}
contarPalavras ("Cuidado, pois usuarios as vezes deixam  espacos vazios no fim do texto sem querer ")