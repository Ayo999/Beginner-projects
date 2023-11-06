const innerSquare = document.querySelector("[data-inner-square]")
const outerSquare = document.querySelector("[data-outer-square]")
const inputs = document.querySelectorAll("[data-border-radius]")
const outputs = document.querySelectorAll("[data-output]")

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const borderRadius = input.dataset.borderRadius

        if(borderRadius == 'top-left-border-radius'){
            outerSquare.style.borderTopLeftRadius = `${input.value}px`
        }else if(borderRadius == 'top-right-border-radius'){
            outerSquare.style.borderTopRightRadius = `${input.value}px`
        }else if(borderRadius == 'bottom-right-border-radius'){
            outerSquare.style.borderBottomRightRadius = `${input.value}px`
        }else outerSquare.style.borderBottomLeftRadius = `${input.value}px`
    })
    }) 

    
