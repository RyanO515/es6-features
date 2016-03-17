// Old

var age = 25;

var person = {
	name: "Ryan",
	age: age
};

console.log(person.age);  // 23


// New

function printFlower (flower) {
	console.log(`${flower}`);
}

var color = 'red';

var flower = {
	type: "Rose",
	color,
	printFlower,
	['hello' + (age + 2)]: 'This actually works',
	printType () {
		console.log(this.type);
	}
}

console.log(flower.color);  // red
flower.printFlower(flower.type);  // Rose
console.log(flower.hello27);  // This actually works
flower.printType();  // Rose

