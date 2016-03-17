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

var person1 = new Person('Ryan');
// person1.name = 'jen';
person1.printGreeting();  // Hi, I'm Ryan!

var person2 = new Person();
person2.printGreeting();  // Hi, I'm Anonymous

// ===== getters and setters using objects ===== 

var obj = {
	set age (val) {
		this._age = val + 10;
	},
	get age () {
		return this._age;
	}
}

obj.age = 20;
console.log(obj.age);
