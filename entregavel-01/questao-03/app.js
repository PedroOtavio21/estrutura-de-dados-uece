import ArrayStack from "../questao-01/ArrayStack.js";

function transfer(S, T) {
    while (!S.isEmpty()) {
        T.push(S.pop());
    }
}

const S = new ArrayStack();
const T = new ArrayStack();

[1, 2, 3, 4, 5].forEach(x => S.push(x));

transfer(S, T);

console.log("Pilha S após transferir:", S);
console.log("Pilha T após receber:", T);
