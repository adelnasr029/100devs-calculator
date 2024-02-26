let total = 0
let num1 = ''
let num2 = ''
let operator = ''
let display = ''

document.querySelector('#clickZone').addEventListener('click', displayCalc)


document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)


document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#clear').addEventListener('click', clear)


function plus(){
    operator = '+'
}
function minus(){
    operator = '-'
}
function multiply(){
    operator = '*'
}
function divide(){
    operator = '/'
}

function one(){
    if(operator == ''){
        num1 += '1'
    }
    else{
        num2 += '1'
    }
}

function displayCalc(){
    display = num1 + operator + num2

    document.querySelector('#placeToPutEquation').innerHTML = display
}

function equals(){
    if(operator === '+'){
        total = Number(num1) + Number(num2)
    }else if(operator === '-'){
        total = Number(num1) - Number(num2)
    }else if(operator === '*'){
        total = Number(num1) * Number(num2)
    }else if(operator === '/'){
        total = Number(num1) / Number(num2)
    }else{
        'error 404'
    }
    document.querySelector('#placeToPutResult').innerHTML = total
}

function clear(){
    num1 = ''
    num2 = ''
    total = 0
    operator = ''
    document.querySelector('#placeToPutResult').innerHTML = total
    document.querySelector('#placeToPutEquation').innerHTML = 0


}