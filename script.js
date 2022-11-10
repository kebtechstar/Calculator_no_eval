let topDisplay = document.querySelector('.display-one')
let mainDisplay = document.querySelector('.display-two')
let tempDisplay = document.querySelector('.temp-display')
let digits = document.querySelectorAll('.number')
let operations = document.querySelectorAll('.operation')
let clear = document.querySelector('.clear')
let clearLast = document.querySelector('.clear-last')
let equal = document.querySelector('.equal')

let displayFirst = "";
let displaySecond = "";
let result = null;
let lastDisplay= '';
let haveDot= false;

digits.forEach((number) => {
    number.addEventListener('click', (e)=>{

        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true
        } else if(e.target.innerText === '.' && haveDot) {
            return
        }

        displaySecond+= e.target.innerText;
        mainDisplay.innerHTML= displaySecond;
    })
})

operations.forEach((operator) =>{
    operator.addEventListener('click', (e)=> {
        if (!displaySecond) {
            result
        }else {

            haveDot = false;
            const operationName = e.target.innerText;
            if (displayFirst && displaySecond && lastDisplay) {
                calculate();
            }else {
                result = parseFloat(displaySecond);
            }

            clearValues(operationName)
            lastDisplay = operationName;

        }
    })
})



function clearValues(operationName) {
    displayFirst+= `${displaySecond} ${operationName}  `;
    topDisplay.innerText = displayFirst;
    mainDisplay.innerText= ''
    displaySecond = ''
    tempDisplay.innerText = result
    
}


function calculate() {
    if (lastDisplay === '+') {
        result = parseFloat(result) + parseFloat(displaySecond);
    }else if(lastDisplay === 'X') {
        result = parseFloat(result) * parseFloat(displaySecond);
    }else if(lastDisplay === '%') {
        result = parseFloat(result) % parseFloat(displaySecond);
    }else if(lastDisplay === '/') {
        result = parseFloat(result) / parseFloat(displaySecond);
    }else if(lastDisplay === '-') {
        result = parseFloat(result) - parseFloat(displaySecond);
    }
}

clear.addEventListener('click', ()=> {
    topDisplay.innerText = '0'
    mainDisplay.innerText = '0'
    lastDisplay.innerText = '0'
    tempDisplay.innerText = ''
    displayFirst = ''
    displaySecond = ''
    lastDisplay = ''
    result = ''
    haveDot = false
})

equal.addEventListener('click', ()=> {

    if (!displayFirst || !displaySecond) {
        return
    }

    calculate()
    topDisplay.innerText += displaySecond
    mainDisplay.innerText = result
    lastDisplay.innerText = ''
    tempDisplay.innerText = ''
    displayFirst = ''
    displaySecond = result
    lastDisplay = ''
    result = ''
    haveDot = false
})


clearLast.addEventListener('click', ()=> {

    if (!displaySecond) {
        return
    }else {
        
    let divideDigit = displaySecond.split('');
    divideDigit.pop()
    let join = divideDigit.join('').replaceAll(',', '')
    console.log(join);
    displaySecond = join;
    mainDisplay.innerText = displaySecond
    }

})


/*
elements of weather
measurements
instruments
*/