let names = prompt("Enter your name", "Shafique");
let day = parseInt(prompt("Enter your birth date", "19"));
let month = parseInt(prompt("Enter your birth month", "5")) - 1;  
let year = parseInt(prompt("Enter your birth year", "2002"));

 
let dob = new Date(year, month, day);
 
let now = new Date();
 
let ageInMilliseconds = now - dob;
let ageDate = new Date(ageInMilliseconds);

let ageYears = ageDate.getUTCFullYear() - 1970;  
let ageMonths = ageDate.getUTCMonth();
let ageDays = ageDate.getUTCDate() - 1;
let ageHours = now.getHours();
let ageMinutes = now.getMinutes();
let ageSeconds = now.getSeconds();


let ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));


let nextBirthday = new Date(now.getFullYear(), month, day);
if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}

let timeToNextBirthday = nextBirthday - now;
let daysToNextBirthday = Math.floor(timeToNextBirthday / (1000 * 60 * 60 * 24));
let hoursToNextBirthday = Math.floor((timeToNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutesToNextBirthday = Math.floor((timeToNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
let secondsToNextBirthday = Math.floor((timeToNextBirthday % (1000 * 60)) / 1000);

let currentHour = now.getHours();
let greeting;
if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
} else if (currentHour >= 18 && currentHour < 21) {
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}
 
console.log(`Hello ${names}, ${greeting}`);
console.log(`Your Date of Birth is ${dob.toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}`);
console.log(`You are ${ageYears} years ${ageMonths} months ${ageDays} days ${ageHours} hours ${ageMinutes} minutes ${ageSeconds} seconds old`);
console.log(`Your Age in Days: ${ageInDays}`);



if (daysToNextBirthday === 0) {
    console.log(`Happy Birthday ${names}! Today is your ${ageYears + 1}th Birthday`);
} else {
    console.log(`How much time left in your next birthday? ${daysToNextBirthday} days ${hoursToNextBirthday} hours ${minutesToNextBirthday} minutes ${secondsToNextBirthday} seconds`);
}
