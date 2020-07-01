function Calcs() {
    this.Raiz = (number) => {
        for (let n = 0;n < 1000;n++) {
            if (n * n === number)
                return n
        }
    }

    this.notInteger = (divider, b, raiz) => {
        if (b % divider !== 0)
            return this.notDivisible(divider, b, raiz)

        return `${Math.floor((b / divider))} +- √${raiz}`
    }

    this.notDivisible = (divider, b, raiz) => {
        return `(${b} +- √${raiz}) / ${divider}`
    }
}

const Calc = new Calcs

class CalcX {

    Delta = (a, b, c) => {
        const N = -4

        const [resultB, result] = [
            b * b,
            N * a * c
        ]

        const res = resultB + result

        if (res < 0) 
            return `Negative delta: ${res}`
    }

    X = (b, a, DeltaR) => {
        const divider = 2 * a
        const raiz = Calc.Raiz(DeltaR)

        if (raiz === undefined) 
            return Calc.notInteger(divider, -b, DeltaR)

        const resP = ((-b) + raiz) / divider
        const resN = ((-b) - raiz) / divider
        return {
            "Positive": resP,
            "Negative": resN
        }
    }

}

const Calcx = new CalcX

function WhatX(a, b, c) {
    const delta = Calcx.Delta(a, b, c)

    if (typeof delta === Number)
        return Calcx.X(b, a, delta)

    return delta
}   

// Numbers
const [a, b, c] = [3, 4, 2]

const Teste = WhatX(a, b, c)
console.log(Teste)