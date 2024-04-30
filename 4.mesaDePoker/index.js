const selecioanrValoresPermitidos = (min, max, valores) => {
    const valorePermitidos = valores.filter(valor => valor >= min && valor <= max);
    console.log(valorePermitidos)
}

const min = 100;
const max = 1000;
const valores = [50, 150, 200, 1200, 800]

selecioanrValoresPermitidos(min, max, valores);