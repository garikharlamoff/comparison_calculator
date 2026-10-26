//  Псевдо калькулятор
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let resultWindow = document.getElementById('result');
let operatorButtons = Array.from(document.getElementsByClassName('operator-button'));

function calculator(num1, num2, operator){
    if(operator === '+'){
        return num1 + num2;
    } else if(operator === '-'){
        return num1 - num2;
    } else if(operator === '*'){
        return num1 * num2;
    } else if(operator === '/'){
        return num1 / num2;
    } else {
        return 'error';
    }
}

operatorButtons.forEach(button => {
    button.addEventListener('click', function(){
        let value1 = Number(input1.value);
        let value2 = Number(input2.value);
        let operator = button.innerText;
        let res = calculator(value1, value2, operator);

        resultWindow.innerText = res;
        console.log(res);
    });
});
