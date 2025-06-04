// my attempt

let welcomeArr = [];

function welcomeFriend() {
let firstName = prompt('What is your first name?');
welcomeArr.push(firstName);
let lastName = prompt('What is your last name?');
welcomeArr.push(lastName);
let city = prompt('What city were you born in?');
let state = prompt('What state were your born in?');
console.log(`Hello, ${firstName} + ${lastName} + '! Welcome to ' + ${city} + ', ' + ${state} + '!'`);
}

welcomeFriend();



// other solutions
function sayHello( name, city, state ) {
return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
