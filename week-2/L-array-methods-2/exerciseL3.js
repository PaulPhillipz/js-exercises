/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if 
  a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInTheUK(country) {
  return ukNations.includes(country); // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInTheUK("France"));
console.log(isInTheUK("Republic of Ireland"));
console.log(isInTheUK("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/