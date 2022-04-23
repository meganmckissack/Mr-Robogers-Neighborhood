const userNumArray = [];
function numArray(usrNum) {
  for (i = 0; i <= usrNum; i++) {
    userNumArray.push(usrNum - [i]);
  }
  return userNumArray.reverse();
}
numArray(15)

