var numButtons = document.getElementsByClassName('num')
var numberDisplay = document.getElementById('text')
var operators = document.getElementsByClassName('operator')
var methods = document.getElementsByClassName('grey')
numButtons = [].slice.call(numButtons)
methods = [].slice.call(methods)
operators = [].slice.call(operators)
var firstNum 
var secNum 
var operation 
var pressedNums = ''
var value

numButtons.forEach(element => {
    element.addEventListener('click', function(){
        pressedNums += element.textContent
        numberDisplay.textContent = pressedNums
        
        
        
    })
        
    
    
});

operators.forEach(element => {
    element.addEventListener('click', function(){
        
        if(element.id == 'equ'){
            
            

            makeOperation(+firstNum.replace(',', '.' ), operation, +pressedNums.replace(',', '.' ))
        }
     
        else{
            operation = element.textContent
            firstNum = pressedNums
            pressedNums = ''
        }
    
    })
    
});








function makeOperation(firNum, oper, secNum){
    if(oper == '+'){
        value = firNum + secNum
    }
    else if(oper == '-'){
        value = firNum - secNum
    }
    else if(oper == 'x'){
        value = firNum * secNum
    }
    else if(oper == '//'){
        value = firNum / secNum
    }
    
    value = value.toString().replace('.', ',')
    if(value.length > 8){
        value = value.substring(0, 8)
    }

    numberDisplay.textContent = value


}

methods.forEach(element => {
    element.addEventListener('click', function(){
        if(element.id = 'AC'){
            firstNum = ''
            pressedNums = ''
            operation = ''
            numberDisplay.textContent = 0
        }
    })
});
