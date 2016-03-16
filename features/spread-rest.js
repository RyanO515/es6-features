// function add (a, b) {
// 	return a + b;
// }


// var numbers = [4, 22];
// // console.log(add(...numbers));  // 26


// var groupA = [33, 99];

// var groupB = [11];

// var unified = [0, ...groupA, ...groupB, 100];


// unified.push(...[55, 33]);
// console.log(unified);  // [0, 33, 99, 11, 100, 55, 33]

// // ===================================================

// // rest params (...)

// function greetUsers (...names) {
// 	names.forEach(function (name) {
// 		console.log(`Hello ${name}`)
// 	});
// }

// greetUsers('Andrew', 'Mike', 'Ryan');


// // ==============

// function greetDevelopers (group, ...names) {
// 	names.forEach(function (name) {
// 		console.log(`Hello ${name}, you\'re part of the group ${group}`);
// 	});
// } 

// greetDevelopers("Developers", 'Anthony', 'Michael', 'Ryan');



// CHALLENGE adder

function adder (base, ...nums) {
   nums.forEach(function (num) {
   	  console.log(base + num);
   });
}

adder(3, 5, 7, 1);  // 8, 10, 4









