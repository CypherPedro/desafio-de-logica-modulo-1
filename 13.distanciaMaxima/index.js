function processData(input) {
    //Enter your code here
    const inputTratado = input.trim().split("\n")
    const numeroDeFuncionarios = Number(inputTratado[0])
    inputTratado.shift()
    const Lugares = []
    for (let index = 0; index < inputTratado.length; index++) {
        const element = inputTratado[index].split(" ")
        Lugares.push({
            x: Number(element[0]),
            y: Number(element[1])
        })
    }
    let distancia = 0
    for (let index = 0; index < numeroDeFuncionarios; index++) {
        for (let outroIndex = index + 1; outroIndex < numeroDeFuncionarios; outroIndex++) {
            const calculoDistancia = Math.sqrt(Math.pow(Lugares[index].x - Lugares[outroIndex].x, 2)
                + Math.pow(Lugares[index].y - Lugares[outroIndex].y, 2))
            if (calculoDistancia > distancia) {
                distancia = calculoDistancia
            }
        }
    }
    if (distancia % 1 === 0) {
        console.log(distancia.toFixed(1))
    } else {
        console.log(distancia)
    }
}


//const input = "3\n0 0\n0 3\n4 0"
const input = "5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7"
processData(input)