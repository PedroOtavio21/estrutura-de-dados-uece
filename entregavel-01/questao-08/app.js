import ArrayStack from "../questao-01/ArrayStack.js";

function parentesesBemFormados(expressao) {
    const pilha = new ArrayStack();

    for (const caractere of expressao) {
        if (caractere === '(') {
            pilha.push(caractere);
        } else if (caractere === ')') {
            if (pilha.isEmpty()) {
                return false;
            }
            pilha.pop();
        }
    }

    return pilha.isEmpty();
}

const expressao = "(2 + 3) * (5 - (1 + 2))";

console.log(
    parentesesBemFormados(expressao)
        ? "Os parênteses estão bem formados!"
        : "Os parênteses NÃO estão bem formados."
);
