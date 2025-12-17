/** QUESTÃO 6 — Imprimir todos os caminhos da raiz até as folhas */

class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function caminhoAuxiliar(noAtual, caminhoAtual) {
    if (noAtual === null) return;

    caminhoAtual.push(noAtual.valor);

    if (noAtual.esquerda === null && noAtual.direita === null) {
        console.log(caminhoAtual.join(" -> "));
    } else {
        caminhoAuxiliar(noAtual.esquerda, caminhoAtual);
        caminhoAuxiliar(noAtual.direita, caminhoAtual);
    }

    caminhoAtual.pop();
}

function imprimirCaminhosRaizFolha(raiz) {
    if (raiz === null) {
        console.log("Árvore vazia.");
        return;
    }
    caminhoAuxiliar(raiz, []);
}

// Testes
const raiz = new NoArvore(1);
raiz.esquerda = new NoArvore(2);
raiz.direita = new NoArvore(3);
raiz.esquerda.esquerda = new NoArvore(4);
raiz.esquerda.direita = new NoArvore(5);
raiz.direita.esquerda = new NoArvore(6);
raiz.direita.direita = new NoArvore(7);
raiz.direita.esquerda.esquerda = new NoArvore(8);
raiz.direita.direita.direita = new NoArvore(9);

console.log("Q6 - Caminhos raiz-folha:");
imprimirCaminhosRaizFolha(raiz);
