import ArrayStack from "../questao-01/ArrayStack.js";

const pilha = new ArrayStack();

pilha.push(5);
pilha.push(3);
pilha.pop();
pilha.push(2);
pilha.push(8);
pilha.pop();
pilha.pop();
pilha.push(9);
pilha.push(1);
pilha.pop();
pilha.push(7);
pilha.push(6);
pilha.pop();
pilha.pop();
pilha.push(4);
pilha.pop();
pilha.pop();

console.log("Estado final da pilha:", pilha);
