/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(num) {
  return num < 0
}

function isBetween5and10(num) {
  return num > 4 && num < 11
}

function isShortName(name) { 
  return name.length < 10
}

function startsWithD(str) { 
  console.log('    startsWithD called with result: '+str[0]);
  if(str[0] === 'D') {
    return true
  }
  else { return false }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10))
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

console.log("Is 11 in the range 5-10?", isBetween5and10(11));
console.log("Is Bobby a short name?", isShortName("Bobby"));
console.log("Does Bobby start with 'D'?", startsWithD("Bobby"));


/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a long name? true
  Does Daniel start with 'D'? true
*/
