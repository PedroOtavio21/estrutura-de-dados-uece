/** QUESTÃO 4 — Árvores Idênticas */
class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function saoIdenticas(raiz1, raiz2) {
    if (raiz1 === null && raiz2 === null) return true;
    if (raiz1 === null || raiz2 === null) return false;
    if (raiz1.valor !== raiz2.valor) return false;

    return (
        saoIdenticas(raiz1.esquerda, raiz2.esquerda) &&
        saoIdenticas(raiz1.direita, raiz2.direita)
    );
}

// Testes
const raizA = new NoArvore(10);
raizA.esquerda = new NoArvore(5);
raizA.direita = new NoArvore(15);

const raizB = new NoArvore(10);
raizB.esquerda = new NoArvore(5);
raizB.direita = new NoArvore(15);

const raizC = new NoArvore(10);
raizC.esquerda = new NoArvore(5);
raizC.direita = new NoArvore(20);

console.log("Q4 - A vs B:", saoIdenticas(raizA, raizB));
console.log("Q4 - A vs C:", saoIdenticas(raizA, raizC));
console.log("Q4 - Vazias:", saoIdenticas(null, null));
