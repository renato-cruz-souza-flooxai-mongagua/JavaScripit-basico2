function calc(x1, x2, operator) {
    return eval`${x1} ${operator}${x2}`
}
somar(1, 2);

let resultado = somar(1,2);

console.log(resultado)