class InscribedCircumscribed {
    SemiPerimeter(lados) {
        return lados.reduce((acc, element) => {
            return acc + element
        }) / 2
    }

    areaS(sp, lados) {
        const s = sp * ((sp - lados[0]) * (sp - lados[1]) * (sp - lados[2]))
        let sRaiz = Math.sqrt(s)
        sRaiz = Number.isInteger(sRaiz) && sRaiz || `√${s.toFixed(1)}` 
        return sRaiz
    }

    Inscribed(lados) {
        const sp = this.SemiPerimeter(lados)
        const s = this.areaS(sp, lados)
        const res = typeof s == "string" && `${s} / ${sp}` || s / sp
        return ["r", res].join(": ") // `r: ${res}`
    }

    Circumscribed(lados) {
        const sp = this.SemiPerimeter(lados)
        const s = this.areaS(sp, lados)
        const aboveCalc = lados[0] * lados[1] * lados[2]
        const res = typeof s == "string" && `${aboveCalc} / ${4}${s}` || 4*s
        return `R: ${res}` // ["R", res].join(": ")
    }
}

const Func = new InscribedCircumscribed

console.log(Func.Circumscribed([4, 5, 6]))

