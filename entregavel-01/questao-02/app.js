import ArrayStack from "../questao-01/ArrayStack.js"

let stack = new ArrayStack()

stack.push(5)
stack.push(3)
stack.pop()
stack.push(2)
stack.push(8)
stack.pop()
stack.pop()
stack.push(9)
stack.push(1)
stack.pop()
stack.push(7)
stack.push(6)
stack.pop()
stack.pop()
stack.push(4)
stack.pop()
stack.pop()

console.log(stack)