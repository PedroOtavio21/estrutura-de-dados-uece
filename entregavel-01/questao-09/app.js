import ArrayStack from "../questao-01/ArrayStack.js";

function isOperator(c) {
    return ['+', '-', '*', '/', '^'].includes(c);
}

function prefixToInfix(prefixExpr) {
    const stack = new ArrayStack();
    const symbols = prefixExpr.split(" ").reverse();

    for (const symbol of symbols) {
        if (!isOperator(symbol)) {
            stack.push(symbol);
        } else {
            const op1 = stack.pop();
            const op2 = stack.pop();
            const expr = `(${op1} ${symbol} ${op2})`;
            stack.push(expr);
        }
    }

    return stack.top();
}

function prefixToPostfix(prefixExpr) {
    const stack = new ArrayStack();
    const symbols = prefixExpr.split(" ").reverse();

    for (const symbol of symbols) {
        if (!isOperator(symbol)) {
            stack.push(symbol);
        } else {
            const op1 = stack.pop();
            const op2 = stack.pop();
            const expr = `${op1} ${op2} ${symbol}`;
            stack.push(expr);
        }
    }

    return stack.top();
}

const prefix = "* + A B C";

console.log("Infixa  :", prefixToInfix(prefix));
console.log("Pós-fixa:", prefixToPostfix(prefix));
