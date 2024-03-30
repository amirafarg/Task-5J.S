var students = [
    { name: "asmaa", score: 85 },
    { name: "israa", score: 99},
    { name: "mariam", score:98},
    { name: "amira", score: 100},
]

var studentToFind = prompt("Enter a student's Name:");

var found = false;
var studentscore;

for (var index = 0;index < students.length; index +=1) {
    console.log(students[index].name);

    if (students[index].name === studentToFind) {
        found = true;
        studentscore = students[index].score;
        break;
    }
    
}

if (found) {
    console.log(studentToFind, " 's score is: ",studentscore);
}else {
    console.log(" student not found");
}