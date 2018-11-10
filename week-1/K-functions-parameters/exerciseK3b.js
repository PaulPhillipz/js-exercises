// Write your function here
function createGreeting(personName){
    var fullGreeting = 'Hello Mr Bond, I mean... ' + personName;
    return fullGreeting;
}


var greeting = createGreeting("Daniel Craig");
console.log(greeting);

greeting = createGreeting("Pierce Brosnan");
console.log(greeting);

greeting = createGreeting("Timothy Dalton");
console.log(greeting);

greeting = createGreeting("Roger Moore");
console.log(greeting);

greeting = createGreeting("George Lazenby");
console.log(greeting);

greeting = createGreeting("Sean Connery");
console.log(greeting);

greeting = createGreeting(007);
console.log(greeting);

greeting = createGreeting("007");
console.log(greeting);