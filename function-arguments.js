function multiplyValue(num1,num2){
    return num1 * num2
}
function addValue(num1,num2){
    return num1 + num2
}

function math (num1,num2,num3){
    var resultMultiply = multiplyValue(num2,num3)
    var resultAdd = addValue(num1,resultMultiply)
    return resultAdd;
}
console.log(math(53,61,67));

