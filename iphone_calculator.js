const keys = document.querySelector('.iphone_calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('button')) {
            return;
        } else {
            //pass value to parse method
            console.log(value)
        }
    })

const iphone_calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        if (this.displayText === '0') {
            this.displayText = ''
        }
        switch (value) {
            case '=' :
                this.calcAnswer(this.displayText)//calculate the answer
                break;
            case 'AC' :
                //clear screen and stored values
                break;
            case '.' :
                if (this.displayText == 0) {
                    this.addText('0.') //pass '0.' into add text method
                } else {
                    this.addText(value) //add value to text string
                }
                break;
            default: 
                addText(value) //add value to text string
                break;
        }

        addText(value) {
            if(this.displayText === '0') {
                this.displayText = ''
            } else if (this.prevTotal !== null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if (isNaN(+(value)) && isNaN(+(this.displayText))) { /* user has enetred an invalid sequence don't proceed*/
                if(isNaN(this.displayText.slice(-1))) {
                    return;
                }
        }
        this.displayText += value
        this.outputText(this.displayText) //output display text to screen
    },
    outputText(text) {
        document.querySelector('.iphone_calculator-screen').value = text
    },
    calcAnswer(equation) {

    }

