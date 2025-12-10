import ArrayQueue from "../questao-01/ArrayQueue.js";

const fila = new ArrayQueue();

fila.enqueue(5);
fila.enqueue(3);
fila.dequeue();
fila.enqueue(2);
fila.enqueue(8);
fila.dequeue();
fila.dequeue();
fila.enqueue(9);
fila.enqueue(1);
fila.dequeue();
fila.enqueue(7);
fila.enqueue(6);
fila.dequeue();
fila.dequeue();
fila.enqueue(4);
fila.dequeue();
fila.dequeue();

console.log("Estado final da fila:", fila);