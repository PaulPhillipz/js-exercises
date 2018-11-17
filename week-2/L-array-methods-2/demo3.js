var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

console.log(1);
console.log(fruits);
console.log(energy);
// array.join(separator)


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log('\n' + 2);
console.log(fruits);
// array.splice(index, howmany, item1, ....., itemX)

var msgA = ["H", "e", "l", "l", "o"].join(); 
// should give "Hello" but actually yields "H,e,l,l,o"
// If separator is omitted, elements are separated with a comma

console.log('\n' + 3);
console.log(msgA);

var msgB = ["H", "e", "l", "l", "o"].join(''); 

console.log('\n' + 4);
console.log(msgB);