const userNumArray = [];
function numArray(usrNum) {
  for (i = 0; i <= usrNum; i++) {
    userNumArray.push(usrNum - [i]);
  }
  return userNumArray.reverse();
}
numArray(15)


function replaceNumbers() {
const replacedNumArray = userNumArray.map(function(num, i){
  if(num.toString().includes(1)) {
    return num[i] = "Bleep";
  } else {
    return num
  }
}); return replacedNumArray
}
console.log(replaceNumbers())