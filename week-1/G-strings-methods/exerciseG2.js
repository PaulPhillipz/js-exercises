var name = " Daniel  ";

var before = 'My name is '
    + name + ', which is '
    + name.length + ' characters long.';

console.log(before);

var corrected_name = name.trim();
console.log('Applying trim...');

var after1 = 'My name is '
    + name + ', which is '
    + name.length + ' characters long.';

console.log(after1);
console.log("Let\'s try again...");

var after2 = 'My name is '
    + corrected_name + ', which is '
    + corrected_name.length + ' characters long.';

console.log(after2);