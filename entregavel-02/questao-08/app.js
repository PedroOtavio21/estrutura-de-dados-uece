/** QUESTÃO 8 — Transformar árvore pela soma das subárvores */

class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function transformarArvoreSomaSubarvores(raiz) {
    if (raiz === null) return 0;

    const somaEsq = transformarArvoreSomaSubarvores(raiz.esquerda);
    const somaDir = transformarArvoreSomaSubarvores(raiz.direita);

    const valorOriginal = raiz.valor;
    raiz.valor = somaEsq + somaDir;

    return valorOriginal + somaEsq + somaDir;
}

function imprimirPreOrdem(raiz) {
    if (raiz) {
        process.stdout.write(raiz.valor + " ");
        imprimirPreOrdem(raiz.esquerda);
        imprimirPreOrdem(raiz.direita);
    }
}

// Testes
const raizOriginal = new NoArvore(1);
raizOriginal.esquerda = new NoArvore(2);
raizOriginal.direita = new NoArvore(3);
raizOriginal.esquerda.esquerda = new NoArvore(4);
raizOriginal.direita.esquerda = new NoArvore(5);
raizOriginal.direita.direita = new NoArvore(6);
raizOriginal.direita.esquerda.esquerda = new NoArvore(7);
raizOriginal.direita.esquerda.direita = new NoArvore(8);

console.log("Q8 - Pré-ordem original:");
imprimirPreOrdem(raizOriginal);
console.log();

const somaTotal = transformarArvoreSomaSubarvores(raizOriginal);
console.log("Q8 - Soma total original:", somaTotal);

console.log("Q8 - Pré-ordem transformada:");
imprimirPreOrdem(raizOriginal);
console.log();
