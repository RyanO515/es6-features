var x = 0;

if (true) {
	// x only visible within if statement
	let x = 12;
	console.log(x);  // 12
}

console.log(x); // 0

//=================

for (var i = 0; i < 3; i++) {
	console.log(`For loop: i = ${i}`);
}
console.log(i);  // 5

// +++

for (let k = 0; k < 3; k++) {
	console.log(`For loop: i = ${k}`)
}
// console.log(k);   // undefined


// ==================


function genCallback () {
	let name = 'Andrew';

    return function () {
		console.log(`Hello ${name}`);  // Andrew (inner block)
	}
}

genCallback()();

// +++

function genCallback2 () {
	var name = "Andrew";

	return function () {
		let name = "Andrea";
		console.log(name);  //Andrea
	}
}

genCallback2()();












