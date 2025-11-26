import ArrayDeque from "../questao-01/ArrayDeque.js";

const deque = new ArrayDeque();
console.log("Deque inicial:", deque.getElements());

deque.addFirst(4);
deque.addLast(8);
deque.addLast(9);
deque.addFirst(5);
console.log(`[X] back(): ${deque.peekLast()}`);
console.log(`[X] delete first(): ${deque.removeFirst()}`);
console.log(`[X] delete last(): ${deque.removeLast()}`);
deque.addLast(7);
console.log(`[X] first(): ${deque.peekFirst()}`);
console.log(`[X] last(): ${deque.peekLast()}`);
deque.addLast(6);
console.log(`[X] delete first(): ${deque.removeFirst()}`);
console.log(`[X] delete first(): ${deque.removeFirst()}`);

console.log("-------------------------------");
console.log("Estado final do Deque (values):", deque.showAllElements());