var wierdarray = ["splice", "apart", "then", "join", "up"];

console.log("\nEXAMPLE ONE");
console.log(wierdarray);

wierdarray.splice(2, 1, "and");
console.log(wierdarray);
wierdarray.splice(5, 0, "this", "sentence");
console.log(wierdarray);

var finalmsg = wierdarray.join();
console.log(finalmsg);

console.log(wierdarray);
var finalmsg = wierdarray.join(' ');
console.log(finalmsg);


console.log('\nEXAMPLE TWO');
wierdarray2 = ["splice", "apart", "then", "join", "up"];
wierdarray2.splice(2, 0, "and");
wierdarray2.splice(6, 0, "sentence", "two");
msgTwo = wierdarray2.join(" ");

console.log(wierdarray2);
console.log(msgTwo);