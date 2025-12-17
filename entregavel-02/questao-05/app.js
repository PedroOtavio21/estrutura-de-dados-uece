/** QUESTÃO 5 — Árvore Soma */

class NoArvore{
    constructor(valor){
        this.valor = valor;
        this.esquerda = null
        this.direita = null
    }
}

function verificarArvoreSomaRecursiva(raiz) {
    if (raiz === null) return [true, 0];

    if (raiz.esquerda === null && raiz.direita === null) {
        return [true, raiz.valor];
    }

    const [esqValido, somaEsq] = verificarArvoreSomaRecursiva(raiz.esquerda);
    const [dirValido, somaDir] = verificarArvoreSomaRecursiva(raiz.direita);

    const validoAtual = esqValido && dirValido && (raiz.valor === (somaEsq + somaDir));
    const somaTotal = raiz.valor + somaEsq + somaDir;

    return [validoAtual, somaTotal];
}

function eArvoreSoma(raiz) {
    const [valido, _] = verificarArvoreSomaRecursiva(raiz);
    return valido;
}

// Teste Q5
const arvoreSoma = new NoArvore(26);
arvoreSoma.esquerda = new NoArvore(10);
arvoreSoma.direita = new NoArvore(3);
arvoreSoma.esquerda.esquerda = new NoArvore(4);
arvoreSoma.esquerda.direita = new NoArvore(6);
arvoreSoma.direita.direita = new NoArvore(3);

console.log("Q5 - Árvore A é soma?", eArvoreSoma(arvoreSoma));