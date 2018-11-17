var num = 10;

function satisfiesRequirements(num) {
  if (num > 3 && num < 10) {
    return true;
  }

  return false;
}

console.log('The num is ' + num);
console.log('Is it greater than 3 and less than 10?');
console.log(satisfiesRequirements(num));