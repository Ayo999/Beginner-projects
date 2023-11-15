let number = 60;
let output = document.getElementById('output')

let myInterval = 
setInterval(() => {
    number--
    console.log(number);
    if(number === 0){
        clearInterval(myInterval)
    }
    output.textContent = number;
}, 1000)