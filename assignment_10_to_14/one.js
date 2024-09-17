const num1 = prompt("Enter a first value");
const num2 = prompt("Enter a second value");
const sign = prompt("Please enter the operation like +, -, *, /, %");

let result;

if (sign === "+") {
    result = num1 + num2;
} else if (sign === "-") {
    result = num1 - num2;
} else if (sign === "*") {
    result = num1 * num2;
}  else if (sign === "/") {
    result = num1 / num2;
}   else if (sign === "%") {
    result = num1 % num2;
}   else {
    result = "please enter correct operator"
};

alert(`${num1} ${sign} ${num2} = ${result}`);