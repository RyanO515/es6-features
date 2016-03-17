var people = ['Ryan', 'Anthony', 'Elissa', 'Mary'];

// people.forEach(function (name) {
// 	console.log(name);
// });

// // individual statement
// people.forEach((name) => console.log(name));

//  // multiple statements
// people.forEach((name) => {
// 	console.log('Welcome');
// 	console.log(name);
// });

// //original function definition
// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 9));  // 12

// // implicit return value
// var add = (a, b) => a + b;

// // explicit return value
// var add = (a, b) => {return a + b};

// console.log(add(3, 9));


var person = {
	name: "Ryan",
	likes: ['archery', 'programming', 'running'],
	generateGreeter: function () {
		return () => {
			console.log(this.name)
		}
	},
	printLikes: function () {
		this.likes.forEach((like) => {
			console.log(`${this.name} likes ${like}`);
		});
	}
};

person.generateGreeter()();
person.printLikes();




