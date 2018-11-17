var mentors = ["Daniel ", "irina ", " Gordon", "aSHLEIGH "];

function tidy(name) {
    return name.trim().toLowerCase();
}

var tidyMentors = mentors.map(tidy);

console.log(tidyMentors); 
// logs ["daniel", "irina", "gordon", "ashleigh"]