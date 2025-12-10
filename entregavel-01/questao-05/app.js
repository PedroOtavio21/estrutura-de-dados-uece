import ArrayStack from "../questao-01/ArrayStack.js";

function inverteLista(lista) {
    const stack = new ArrayStack();

    for (const item of lista) {
        stack.push(item);
    }

    const invertida = [];

    while (!stack.isEmpty()) {
        invertida.push(stack.pop());
    }

    return invertida;
}

let l = [1, 2, 3, 4, 5];
console.log("Original:", l);

l = inverteLista(l);
console.log("Invertida:", l);