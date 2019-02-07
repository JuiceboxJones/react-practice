const multiplier = {
    numbers:[2, 3, 6, 7],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}
console.log(multiplier.multiply())