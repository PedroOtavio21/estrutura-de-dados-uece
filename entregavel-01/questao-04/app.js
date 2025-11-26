function recursivePop(stack){
    if (stack.length === 0){
        return
    }
    stack.pop()
    recursivePop(stack)
}

let stack = [0, 2, 4, 6, 8, 10, 12, 14, 16]
console.log(stack)

recursivePop(stack)
console.log(stack)