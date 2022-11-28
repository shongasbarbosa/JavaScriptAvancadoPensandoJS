const exec = (fn, a, b) => {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => {
    return console.log(x + y)
}

const subtrairNoTerminal = (w, z) => console.log(w - z)

exec(somarNoTerminal, 20,70)
exec(subtrairNoTerminal, 180,20)