function getAgeInDays(age) {
  return age * 365;
}

function createGreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}

var result_jessica = createGreeting('Jessica', 1);
var result_barry = createGreeting('Barry', 10);
var result_gran = createGreeting('Gran', 100);

console.log(result_jessica);
console.log(result_barry);
console.log(result_gran);