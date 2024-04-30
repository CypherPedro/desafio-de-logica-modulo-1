const jogadores = [
    {
      nome: "Herman",
      jogada: 0,
    },
    {
      nome: "Rhodes",
      jogada: 0,
    },
    {
      nome: "Beach",
      jogada: 0,
    },
    {
      nome: "Laurel",
      jogada: 0,
    },
    {
      nome: "Beatrice",
      jogada: 1,
    },
    {
      nome: "Alison",
      jogada: 0,
    },
    {
      nome: "Saundra",
      jogada: 0,
    },
    {
      nome: "Klein",
      jogada: 0,
    },
  ];

  const perdedor = (jogadores) => {
    let numero0 = 0
    let numero1 = 0
    for (const jogador of jogadores) {
        if (jogador.jogada === 0){
            numero0++;
        } else {
            numero1++;
        }
    }
    if (numero0 === 1) {
        for (const jogador of jogadores) {
            if (jogador.jogada === 0) {
                return jogador.nome;
            }
        }
    }
    if (numero1 === 1) {
        for (const jogador of jogadores) {
            if (jogador.jogada === 1) {
                return jogador.nome;
            }
        }
    }
    return "NINGUEM"
  }
  const nomePerdedor = perdedor(jogadores)
  console.log(nomePerdedor)