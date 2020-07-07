const Idade = "14 5 23"

class HowManyDays {
    Plus (a, b, c) {
        return a + b + c 
    }

    IsBissexto(auth) {
        if (auth.length === 4) {
            for (let k = 0;k < auth.length;k++) {
                auth.pop()
            }
            return 366
        }
        return 365
    }

    Main(idade) {
        const [years, mouths, days] = idade.split(" ")

        let YearDays = 0
        let MouthDays = 0

        const auth = []

        for (let k = 0;k < Number(years);k++) {
            auth.push("")
            YearDays += this.IsBissexto(auth)
        }

        for (let k = 0;k < Number(mouths);k++) {
            MouthDays += 30
        }

        return this.Plus(YearDays, MouthDays, days)
    } 
}

const Func = new HowManyDays

console.log(Func.Main(Idade, 30, 365))