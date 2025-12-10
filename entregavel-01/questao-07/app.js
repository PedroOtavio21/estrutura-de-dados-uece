import ArrayDeque from '../questao-01/ArrayDeque.js'

const deque = new ArrayDeque();

deque.addFirst(4);
deque.addLast(8);
deque.addLast(9);
deque.addFirst(5);

console.log(deque.peekLast());

deque.removeFirst();
deque.removeLast();

deque.addLast(7);

console.log(deque.peekFirst());
console.log(deque.peekLast());

deque.addLast(6);
deque.removeFirst();

console.log("Deque final:", deque.toString());