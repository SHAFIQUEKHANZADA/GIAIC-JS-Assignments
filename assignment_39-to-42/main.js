let course1 = Number(prompt(`Enter course one's number`))
let course2 = Number(prompt(`Enter course second's number`))
let course3 = Number(prompt(`Enter course third's number`))
let course4 = Number(prompt(`Enter course forth's number`))
let course5 = Number(prompt(`Enter course fifth's number`))
 

let total = 500;
let obtain = course1 + course2 + course3 + course4 + course5

let percentage = (obtain * 100)/ total;

let grade;

switch (true) {
    case percentage >= 90:
      grade = "A+";
      break;
      case percentage >= 75:
        grade = "A";
        break;
      case percentage >= 60:
        grade = "B";
        break;
      case percentage >= 45:
        grade = "C";
        break;
      case percentage >= 30:
        grade = "D";
        break;
      default:
        grade = "F";
}

alert(`Obtained Marks: ${obtain}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`);