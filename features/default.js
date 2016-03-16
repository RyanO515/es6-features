// function sayHello (name = 'world') {
// 	console.log('Hello ' + name + "!");
// }

// sayHello();

// sayHello('kate');



function greetUser(user = {name: 'anonymous'}) {
	console.log('Hello ' + user.name + "!"); 
}


greetUser();
greetUser({name: 'John'});


// to run in command line, run 'babel-node  <file>'