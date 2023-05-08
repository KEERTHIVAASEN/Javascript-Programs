console.log("STUDENT MARKSHEET");
console.log("**********************");

const regno = parseInt(prompt("Enter your regno:"));
const studentname = prompt("Enter your name:");
const classname = prompt("Enter class name:");
const marks = [];

for (let i = 1; i <= 5; i++) {
  marks.push(parseInt(prompt(`Enter mark${i}:`)));
}

const total = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = total / 5;
let grade = 'F';

if (marks.every(mark => mark >= 40)) {
  if (percentage >= 80) {
    grade = 'A';
  } else if (percentage >= 70) {
    grade = 'B';
  } else if (percentage >= 60) {
    grade = 'C';
  } else if (percentage >= 40) {
    grade = 'D';
  }
}

console.log("Register Number =", regno);
console.log("Student Name =", studentname);
console.log("Class =", classname);
marks.forEach((mark, i) => console.log(`Mark${i + 1} =`, mark));
console.log("Total =", total);
console.log("Percentage =", percentage);
console.log("Grade =", grade);
