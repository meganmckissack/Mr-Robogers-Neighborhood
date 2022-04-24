$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    const usrNumberInput = $("#usrNumber").val();
    const numResult = numArray(usrNumberInput);
    $('#robogerResult').text(replaceNumbers(numResult));
    $('#noNumber').text(message);
  });
}); 

let isNumber = numArray();
let message = isNumber[1];
const userNumArray = [];
function numArray(usrNum) {
  if(isNaN(usrNum)) {
    return [false, "Please enter a number"]
  } else {
    for (i = 0; i <= usrNum; i++) {
      userNumArray.push(usrNum - [i]);
    }
    return userNumArray.reverse();
  }
}

function replaceNumbers() {
  const replacedNumArray = userNumArray.map(function(num, i){
    if(num.toString().includes(1) && !num.toString().includes(2) && !num.toString().includes(3)){
      return num[i] = " Bleep";
    } else if(num.toString().includes(2) && !num.toString().includes(3)){
      return num[i] = " Boop!"
    } else if(num.toString().includes(3)) {
      return num[i] = " Won't you be my neighbor?"
    } else {
      return " " + num 
    }
  }); return replacedNumArray
}