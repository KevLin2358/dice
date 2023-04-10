class Dice {
    constructor(numOfDice = 1) {
        this.min = 1
        this.max = 7
        this.numOfDice = numOfDice
    }

    get roll() {
        let res = []

        for (let i = 0; i < this.numOfDice; i++) {
            let dice = this.randomInt(this.min, this.max)
            res.push(dice)    
        }

        return res
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

const dice = new Dice(3)

console.log(dice.roll)

export default Dice