let inputValue = prompt("Write somthing here:", "hello, shafique");

function capitalize(inputValue) {
    return inputValue.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

inputValue = capitalize(inputValue)


console.log(inputValue);

 