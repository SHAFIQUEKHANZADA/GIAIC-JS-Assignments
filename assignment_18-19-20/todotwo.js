let courses = [];

 
for (let x = 1; x <= 5; x++) {
    const course = prompt(`Enter course name ${x}`, `Course ${x}`);
    courses.push(course);
}

alert("Courses array: " + courses.join(" , "));
 
for (let y = 0; y < courses.length; y++) {
    const edit = prompt(`Edit course ${y + 1}`, courses[y]);

    
    if (edit !== courses[y]) {
        courses.splice(y, 1, edit);
    }
}

alert("Updated courses array: " + courses.join(" , "));
