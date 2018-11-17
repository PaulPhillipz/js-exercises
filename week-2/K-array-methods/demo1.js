var unorderedLetters = ["z", "v", "b", "f", "g"];
console.log(unorderedLetters);
var orderedLetters = unorderedLetters.sort();

// NB: sort alters original copy of array as well.
console.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]