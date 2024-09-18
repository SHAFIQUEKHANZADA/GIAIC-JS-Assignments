let val = prompt("Write something here");

let cap = val.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))

console.log(cap);
