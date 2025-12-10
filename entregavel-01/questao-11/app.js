function ehPalindromo(texto) {
    texto = texto.replace(/\s+/g, "").toLowerCase();

    const pilha = [];
    const fila = [];

    for (const c of texto) {
        pilha.push(c);   // LIFO
        fila.push(c);    // FIFO
    }

    while (pilha.length > 0) {
        if (pilha.pop() !== fila.shift()) {
            return false;
        }
    }

    return true;
}

const palavra = prompt("Digite uma palavra:");
console.log(ehPalindromo(palavra) ? "É um palíndromo!" : "Não é um palíndromo.");
