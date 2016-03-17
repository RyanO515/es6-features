class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? name : 'Anonymous';
	}
	set name (val) {
		this._name = Person.capitalizeWord(val);
	}
	get name () {
		return this._name;
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

// extends gives us all the fuctionality from Person
class Employee extends Person {
	constructor (name, job = "unemployed person :(") {
		//gives same functionality as within parent constructor
		super(name);

		this.job = job;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name} and I am a ${this.job}!`);
	}
	callSuperMethod () {
		super.printGreeting();
	}
}



var person1 = new Employee('Ryan', 'Developer');
// person1.name = 'jen';
person1.printGreeting();  // Hi, I am Ryan and I am a Developer!
person1.callSuperMethod(); // Hi, I am Ryan!

var person2 = new Employee();
person2.printGreeting();  // Hi, I am Anonymous and I am a unemployed person :(

