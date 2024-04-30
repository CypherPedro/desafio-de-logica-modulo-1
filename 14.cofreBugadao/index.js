// cubos
// cuggbyos
const senhaCorreta = "cubos";
const senhaInserida = "cuggbyos";

const abrirCobfre = (senhaInserida) => {
    let letraCorreta = ""
    let index = 0
    for (let i = 0; i < senhaInserida.length; i++) {
        const element = senhaInserida[i];
        if (senhaCorreta[index] === senhaInserida[i]){
            letraCorreta += senhaInserida[i]
            index++
        }
} if (letraCorreta == senhaCorreta) {
    console.log("SIM")
} else {
    console.log("NAO")
}
}

abrirCobfre(senhaInserida)