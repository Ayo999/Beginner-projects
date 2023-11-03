const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

function clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      clear()
  }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.innerText)
      updateDisplay()
    })
  })

  function appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      chooseOperation(button.innerText)
      updateDisplay()
    })
  })

  function chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  equalsButton.addEventListener('click', button => {
    compute()
    updateDisplay()
  })

 function compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  allClearButton.addEventListener('click', button => {
    clear()
    updateDisplay()
  })

 function delet() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  deleteButton.addEventListener('click', button => {
    delet()
    updateDisplay()
  })

 function updateDisplay() {
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
}

function updateDisplay() {
    currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
        previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      previousOperandTextElement.innerText = ''
    }
  }

 function getDisplayNumber(number) {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}
