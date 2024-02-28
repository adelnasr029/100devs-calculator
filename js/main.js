let total = 0
let num1 = ''
let num2 = ''
let operator = ''
let display = ''

document.querySelector('#clickZone').addEventListener('click', displayCalc)
function displayCalc(){
    display = num1 + operator + num2

    document.querySelector('#placeToPutEquation').innerHTML = display
}


document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)

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

function zero(){
    if(operator == ''){
        num1 += '0'
    }
    else{
        num2 += '0'
    }
}
function one(){
    if(operator == ''){
        num1 += '1'
    }
    else{
        num2 += '1'
    }
}
function two(){
    if(operator == ''){
        num1 += '2'
    }
    else{
        num2 += '2'
    }
}function three(){
    if(operator == ''){
        num1 += '3'
    }
    else{
        num2 += '3'
    }
}function four(){
    if(operator == ''){
        num1 += '4'
    }
    else{
        num2 += '4'
    }
}function five(){
    if(operator == ''){
        num1 += '5'
    }
    else{
        num2 += '5'
    }
}
function six(){
    if(operator == ''){
        num1 += '6'
    }
    else{
        num2 += '6'
    }
}
function seven(){
    if(operator == ''){
        num1 += '7'
    }
    else{
        num2 += '7'
    }
}
function eight(){
    if(operator == ''){
        num1 += '8'
    }
    else{
        num2 += '8'
    }
}
function nine(){
    if(operator == ''){
        num1 += '9'
    }
    else{
        num2 += '9'
    }
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

// let num1 = ''
// let num2 = ''
// let operator = ''
// let display = ''

//function that reassignes num1 & num2
//function that rassignes the operator 
//function that reassignes the display and display it onto screen
//function that reassignes the total by operating the 2 num
// function zero(){
//     num1 == ''? num1 += '0' : num2 += '0'
// }

// function one(){
//     num1 == ''? num1 += '1' : num2 += '1'
// }
// function two(){
//     num1 == ''? num1 += '2' : num2 += '2'
// }

// function plus(){
//     operator = '+'
// }
// function minus(){
//     operator = '-'
// }
// function multiply(){
//     operator = '*'
// }
// function divide(){
//     operator = '/'
// }

// function displayCalc(){
//     display = num1 + operator + num2
//     document.querySelector('#placeToPutEquation').innerHTML = display
// }

// function equals(){
//     operator == '+'? total = Number(num1) + Number(num1) :
//     operator == '-'? total = Number(num1) - Number(num1) :
//     operator == '*'? total = Number(num1) * Number(num1) :
//     operator == '/'? total = Number(num1) / Number(num1) : 'error404'
//     document.querySelector('#placeToPutResult').innerHTML = total
// }

// function clear(){
//      num1 = ''
//      num2 = ''
//      operator = ''
//      total = 0
//     document.querySelector('#placeToPutEquation').innerHTML = 0
//     document.querySelector('#placeToPutResult').innerHTML = total
// }