function displayData(data){
    num.value=num.value+data
}
function allClear(){
    num.value=""
}
function displayOutput(){
    num.value=eval(num.value)
}
function zeroDisplay(){
    num.value+="00"
}
function backSpace(){
//current content got slice function,then this value after slice() it stored in input(i.e,num.value)
    num.value=num.value.slice(0,-1)
}