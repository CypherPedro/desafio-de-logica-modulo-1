const determinarManilha = (carta) => {
    const manilha = {Q: "J",
J: "K",
K: "A",
A: "2",
2: "3",
3: "Q",
}

console.log(manilha[carta.toUpperCase()])
}

determinarManilha ("a")