/*
  Conditionals
  ---------------------------------
  Add an if statement to only show the name if the role is student
*/


var name1 = "Daniel";
var role1 = "mentor";

var name2 = "Harun";
var role2 = "student";

console.log("Students, say hello...");

if(role1 == "student")
{
  console.log("Hi, My name is " + name1);
}

if (role2 == "student")
{
  console.log("Hello, My name is " + name2);
}

/* 
EXPECTED RESULT
---------------
My name is Harun
*/
