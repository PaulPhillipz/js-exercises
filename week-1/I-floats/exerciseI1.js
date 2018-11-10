// calculate percentages
var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumberOfPeople = numberOfStudents + numberOfMentors;

var PCOfStudents = (numberOfStudents / totalNumberOfPeople) * 100;
var PCOfMentors = (numberOfMentors / totalNumberOfPeople) * 100;

console.log("Number of students: " + numberOfStudents);
console.log("Number of mentors: " + numberOfMentors);
console.log("Total number of people: " + totalNumberOfPeople);

console.log("\nfloat Percentage of students: " + PCOfStudents);
console.log("float Percentage of mentors: " + PCOfMentors);

PCOfStudents = Math.round(PCOfStudents);
PCOfMentors = Math.round(PCOfMentors);

console.log("\nint Percentage of students: " + PCOfStudents + "%");
console.log("int Percentage of mentors: " + PCOfMentors + "%");
