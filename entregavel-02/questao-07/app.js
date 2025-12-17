/** QUESTÃO 7 — Encontrar ancestrais de um nó */

class NoArvore {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

function encontrarAncestrais(raiz, alvo, caminho) {
    if (raiz === null) return false;
    if (raiz.valor === alvo) return true;

    caminho.push(raiz.valor);

    if (
        encontrarAncestrais(raiz.esquerda, alvo, caminho) ||
        encontrarAncestrais(raiz.direita, alvo, caminho)
    ) {
        return true;
    }

    caminho.pop();
    return false;
}

function imprimirAncestrais(raiz, alvo) {
    const ancestrais = [];
    const encontrado = encontrarAncestrais(raiz, alvo, ancestrais);

    if (!encontrado) {
        console.log(`Q7 - Nó ${alvo} não encontrado.`);
    } else if (ancestrais.length === 0) {
        console.log(`Q7 - Nó ${alvo} é a raiz.`);
    } else {
        console.log(`Q7 - Ancestrais de ${alvo}: ${ancestrais.join(" -> ")}`);
    }
}

// Testes
imprimirAncestrais(raiz, 8);
imprimirAncestrais(raiz, 5);
imprimirAncestrais(raiz, 1);
imprimirAncestrais(raiz, 10);
