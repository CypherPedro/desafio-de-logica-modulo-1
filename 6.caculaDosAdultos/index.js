// determinar a idade da pessoa mais nova
// se não tiver ng maior de idade imprimir "CRESCA E APARECA"

const lista = [12]

const definirMaisNovoMaior = (lista) => {
    let menorIdade = Infinity
    for (const idade of lista) {
        if (idade > 17 && idade < menorIdade) {
            menorIdade = idade
        }
    } if (menorIdade == Infinity){
        console.log("CRESCA E APARECA")
    } else {
    console.log(menorIdade)
    }
}

definirMaisNovoMaior (lista)