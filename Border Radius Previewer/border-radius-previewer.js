const innerSquare = document.getElementById('inner-square')
const outerSquare = document.getElementById('outer-square')

//This section contains declaration of input DOM
const topLeftInput = document.getElementById('top-left-border-radius')
const topRightInput = document.getElementById('top-right-border-radius')
const bottomLeftInput = document.getElementById('bottom-left-border-radius')
const bottomRightInput = document.getElementById('bottom-right-border-radius')

//This section contains declaration of output paragraph
const top_left_output = document.getElementById('top-left-output')
const top_right_output = document.getElementById('top-right-output')
const bottom_left_output = document.getElementById('bottom-left-output')
const bottom_right_output = document.getElementById('bottom-right-output')


//Adding event listeners
topLeftInput.addEventListener('input', function(e){
    top_left_output.textContent = `border-top-left-radius: ${topLeftInput.value}px;`
    outerSquare.style.borderTopLeftRadius = `${topLeftInput.value}px`
    // if(topLeftInput.value != 0){
    //     top_left_output.style.display = 'block'
    // }
})

topRightInput.addEventListener('input', function(e){
    top_right_output.textContent = `border-top-right-radius: ${topRightInput.value}px;`
    outerSquare.style.borderTopRightRadius = `${topRightInput.value}px`
})

bottomLeftInput.addEventListener('input', function(e){
    bottom_left_output.textContent = `border-bottom-left-radius: ${bottomLeftInput.value}px;`
    outerSquare.style.borderBottomLeftRadius = `${bottomLeftInput.value}px`
})

bottomRightInput.addEventListener('input', function(e){
    bottom_right_output.textContent = `border-bottom-right-radius: ${bottomRightInput.value}px;`
    outerSquare.style.borderBottomRightRadius = `${bottomRightInput.value}px`
})


