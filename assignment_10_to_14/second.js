const totalMarks = 500;

const course1 = Number(prompt("Enter marks for course 1"));
const course2 = Number(prompt("Enter marks for course 2"));
const course3 = Number(prompt("Enter marks for course 3"));
const course4 = Number(prompt("Enter marks for course 4"));
const course5 = Number(prompt("Enter marks for course 5"));

const obt = course1 + course2 + course3 + course4 + course5;

const percentage = (obt * 100) / totalMarks;

alert(`You got ${percentage} percentage`);