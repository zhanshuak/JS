const inputCalc = document.querySelector('.account'),
    resultCalc = document.querySelector('.result');
const regex =/\%{1,}|\+{1,}|\-{1,}|\/{1,}|\*{2,}/g;
const regex2 =/\D\-{1,}|\D\%{1,}|\D\*{1,}|\D\+{1,}|\D\/{1,}|/g;
const regex3 =/\D\*\*/g;


function input(i){

    let checkNextValue = inputCalc.value + i;

    let check = checkNextValue.match(regex2);
    if(check == null){
        inputCalc.value = inputCalc.value + 1; 
    }
}

function result(){
    if(eval(inputCalc.value) == undefined){
        inputCalc.value = '0';
        resultCalc.value = '0';
    }
    if(eval(inputCalc.value) == Infinity){
        inputCalc.value = 'Не допустимо деление на ноль!';
        resultCalc.value = '0';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function backspace (){
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1);
}

function reset(){
    inputCalc.value = '';
    resultCalc.value = '';
}