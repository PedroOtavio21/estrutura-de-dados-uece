function transfer(S, T){
    let temp = []
    temp = [...S] // Copia o conteúdo do array para o valor temporário
    while (temp.length > 0){
        const element = temp.pop()
        T.push(element)
    }
}

const S = [5, 4, 3, 2, 1]
const T = []

transfer(S, T)
console.log(`Pilha S: ${S}`)
console.log(`Pilha T: ${T}`)
