function add(a, b) {
  console.log('\nfirst function called');
  return a + b;
}

// call function
var result1 = add(5, 4);

// display result1
console.log (result1);


function adder(num1, num2) {
  console.log('\nsecond function called');
  return num1 + num2;
}

// call adder function
var result2 = adder(2000,18);

// display result1
console.log(result2);
