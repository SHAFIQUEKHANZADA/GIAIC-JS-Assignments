let num = Number(prompt("Enter a decimal number"));

let roundedNum = Math.ceil(num)

let text = "Hello my name is shafique";

let slice = text.slice(0, roundedNum);

let reversed = "";
for (let i = slice.length - 1; i >= 0; i--) {
    reversed += slice[i];  
}

alert(reversed);