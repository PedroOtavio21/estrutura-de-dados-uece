import ArrayStack from "../questao-01/ArrayStack.js";

function recursivePop(stack) {
    if (stack.isEmpty()) return;
    stack.pop();
    recursivePop(stack);
}

const pilha = new ArrayStack();
[1, 2, 3, 4, 5].forEach(n => pilha.push(n));

console.log("Antes:", pilha);
recursivePop(pilha);
console.log("Depois:", pilha);