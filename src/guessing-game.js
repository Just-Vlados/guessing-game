class GuessingGame {
    constructor() {
    	this.minValue = 0;
    	this.maxValue = 0;
    	this.currentNumber = 0;
    }

    setRange(min, max) {
    	this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
    	this.currentNumber = Math.round((this.minValue + this.maxValue)/2);
    	return this.currentNumber;
    }

    lower() {
    	this.maxValue = this.currentNumber;
    }

    greater() {
    	this.minValue = this.currentNumber;
    }
}

module.exports = GuessingGame;
