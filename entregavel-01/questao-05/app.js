function inverteLista(lista){
    let pilha = []
    let listaInvertiva = []

    for (const value of lista){
        pilha.push(value)
    }

    while (pilha.length > 0){
        listaInvertiva.push(pilha.pop())
    }

    return listaInvertiva
}

let lista = [1, 2, 3, 4, 5]
console.log(`Antes de inversão: ${lista}`)

lista = inverteLista(lista)
console.log(`Após inversão: ${lista}`)