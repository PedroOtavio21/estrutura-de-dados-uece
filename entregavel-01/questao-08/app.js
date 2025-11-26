import ArrayStack from "../questao-01/ArrayStack.js"

function parentesesBemFormados(expressao){
    let pilha = new ArrayStack()

    for (let caractere of expressao){
        if (caractere === '('){
            pilha.push(caractere)
        } else if (caractere == ')') {
                if (!pilha){
                    return False
                }
                pilha.pop()
        }
    }

    return pilha.isEmpty()
}

expressao = "(2 + 3) * (5 - (1 + 2))"

if (parentesesBemFormados(expressao)){
    console.log("Os parênteses estão bem utilizados!")
} else{
    console.log("Os parênteses não estão sendo bem utilizados.")
}