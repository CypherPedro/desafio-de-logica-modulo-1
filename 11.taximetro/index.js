const minutos = 25
const kilometros = 11.5



const calcularPrecoViagem = (min, km) => {
    let custoMInuto = 0
    if (min <= 20) {
        custoMInuto = min * 50;
    } else {
        custoMInuto = 20 * 50 + (min - 20) * 30;
    }
    let custoQuilometro = 0;
    if (km <= 10) {
        custoQuilometro = km * 70;
    } else {
        custoQuilometro = 10 * 70 + (km - 10) * 50;
    }

    let custoTotal = custoMInuto + custoQuilometro;

    custoTotal = Math.floor(custoTotal);

    return custoTotal
}

const precoViagem = calcularPrecoViagem

console.log(precoViagem(min, km))