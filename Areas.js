class Areas {
    Reactangle(base, height) {
        return base * height
    }

    Square(side) {
        return side * side
    }

    Triangle(base, height) {
        return (base * height) / 2
    }

    Trapeze(smallerBase, largerBase, height) {
        return ((smallerBase + largerBase) * height) / 2
    }

    Losango(smallerDiagonal, largerDiagonal) {
        return (smallerDiagonal * largerDiagonal) / 2
    }
}

const func = new Areas

console.log(
    func.Losango(2, 4)
)