
function numArray(usrNum) {
  userNumArray = [];
  for (i = 0; i <= usrNum; i++) {
    userNumArray.push(usrNum - [i]);
  }
  return userNumArray.reverse();
}
