function greet (name = 'Andrew') {
	console.log(`Hello ${name}`);
}
greet();

greet('Kate');

console.log(`1 + 6 = ${1+6}`);



console.log(`Hey, 

This kind of looks like an email.  
Make sure you don't leave work before 5PM today!

    Or you'll be fired!!!  

    Love,
       Your boss
`);


// ------ Challenge

var andrew = {
	name: "Andrew",
	age: 25
};

var defaultPerson = {
	name: 'Anonymous',
	age: 0
}

function greetAndrew (person = defaultPerson) {
	console.log(`Hello ${person.name}, you are ${person.age}.`);
}


greetAndrew();

greetAndrew(andrew);



// to run in command line, run 'babel-node  <file>'




