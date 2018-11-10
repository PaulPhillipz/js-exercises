// Declare your function first
function addDuo(numOne, numTwo) {
  console.log('addDuo called\nGoing to add ' + numOne + ' and ' + numTwo);
  return numOne + numTwo;
}
// Call the function and assign to a variable `sum`
var sum = 0;
sum = 'The result is: ' + addDuo(124, 13);

console.log(sum);
