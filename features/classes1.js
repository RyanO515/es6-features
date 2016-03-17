class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
	}
	// regular method because specific to person
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}
	// static doesn't require an instance of the person class in order to work
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1);
	}
}

var person1 = new Person('Ryan');
console.log(person1.name);
person1.printGreeting();

var person2 = new Person();
console.log(person2.name);
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));