let courses = [];

const c1 = prompt("Enter course name 1", "Course 1");
const c2 = prompt("Enter course name 2", "Course 2");
const c3 = prompt("Enter course name 3", "Course 3");
const c4 = prompt("Enter course name 4", "Course 4");
const c5 = prompt("Enter course name 5", "Course 5");

courses.push(c1, c2, c3, c4, c5);

alert("Courses array: " + courses.join(" , "));

const ec1 = prompt("Edit course 1", c1);
const ec2 = prompt("Edit course 2", c2);
const ec3 = prompt("Edit course 3", c3);
const ec4 = prompt("Edit course 4", c4);
const ec5 = prompt("Edit course 5", c5);

if (ec1 !== c1) {
    courses.splice(0, 1, ec1);
}
if (ec2 !== c2) {
    courses.splice(1, 1, ec2);
}
if (ec3 !== c3) {
    courses.splice(2, 1, ec3);
}
if (ec4 !== c4) {
    courses.splice(3, 1, ec4);
}
if (ec5 !== c5) {
    courses.splice(4, 1, ec5);
}

alert("Updated courses array: " + courses.join(" , "));
