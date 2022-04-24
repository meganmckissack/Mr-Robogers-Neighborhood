$(document).ready(function(){
  
  $("#form").submit(function(event){
    event.preventDefault();

    const usrNumberInput = $("#usrNumber").val();
    console.log(usrNumberInput);

  const userNumArray = [];
  function numArray(usrNum) {
    for (i = 0; i <= usrNum; i++) {
      userNumArray.push(usrNum - [i]);
    }
    return userNumArray.reverse();
  }
  numArray(usrNumberInput)


  function replaceNumbers() {
    const replacedNumArray = userNumArray.map(function(num, i){
      if(num.toString().includes(1) && !num.toString().includes(2) && !num.toString().includes(3)){
        return num[i] = "Bleep";
      } else if(num.toString().includes(2) && !num.toString().includes(3)){
        return num[i] = "Boop!"
      } else if(num.toString().includes(3)) {
        return num[i] = "Won't you be my neighbor?"
      } else {
        return num
      }
    }); return replacedNumArray
  }
  console.log(replaceNumbers())  
})
})