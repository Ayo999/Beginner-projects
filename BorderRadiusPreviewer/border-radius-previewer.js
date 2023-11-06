const outerSquare = document.querySelector("[data-outer-square]")
const inputs = document.querySelectorAll("[data-border-radius]")

inputs.forEach((input) => 
  input.addEventListener("input", (e) => {
    const field = input.dataset.borderRadius;
    let output = document.getElementById(`${field}Output`)
    outerSquare.style[field] = `${input.value}px`;
    if(input.value == 0){
        output.textContent = ''
    }else{
        output.textContent = `${field}: ${input.value}px;`;
    }
  })
);

    
