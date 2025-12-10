import ArrayStack from "../questao-01/ArrayStack.js";

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function applyOp(op, b, a) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') {
        if (b === 0) throw new Error("Divisão por zero!");
        return Math.trunc(a / b);
    }
}

function evaluateExpression(expr) {
    const values = new ArrayStack();
    const ops = new ArrayStack();

    const tokens = expr.replace(/\s+/g, "").split("");

    for (let i = 0; i < tokens.length; i++) {
        const ch = tokens[i];

        if (/[0-9]/.test(ch)) {
            let num = ch;
            while (i + 1 < tokens.length && /[0-9]/.test(tokens[i + 1])) {
                num += tokens[++i];
            }
            values.push(Number(num));
        }

        else if (ch === '(') {
            ops.push(ch);
        }

        else if (ch === ')') {
            while (ops.top() !== '(') {
                const op = ops.pop();
                const b = values.pop();
                const a = values.pop();
                values.push(applyOp(op, b, a));
            }
            ops.pop();
        }

        else if (['+', '-', '*', '/'].includes(ch)) {
            while (
                !ops.isEmpty() &&
                ops.top() !== '(' &&
                precedence(ops.top()) >= precedence(ch)
            ) {
                const op = ops.pop();
                const b = values.pop();
                const a = values.pop();
                values.push(applyOp(op, b, a));
            }
            ops.push(ch);
        }
    }

    while (!ops.isEmpty()) {
        const op = ops.pop();
        const b = values.pop();
        const a = values.pop();
        values.push(applyOp(op, b, a));
    }

    return values.pop();
}

console.log(evaluateExpression("10 + 2 * (6 - 4) / 2"));
console.log(evaluateExpression("3 + 4 * 2 / (1 - 5) + 6"));