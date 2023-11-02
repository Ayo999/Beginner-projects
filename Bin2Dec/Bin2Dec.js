const output = document.getElementById('output')
const button = document.getElementById('button');

button.addEventListener('click', function(e){
    const input = document.getElementById('binNum').value;
    const decNum = parseInt(input, 2);

    if(isNaN(decNum)){
        output.textContent = 'Invalid input';
    }else if(input.length > 8){
        output.textContent = 'Input length should not be more than 8';
    }else{
        output.textContent = decNum;
    }
    console.log(decNum);
})