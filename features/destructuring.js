var array = ['First', 'Second', 'Third'];
var [a, , c] = array;

console.log(a, c); // First Third


// ========

var todo = {
	description: 'Watch House of Cards Season 4',
	completed: false
}
var {description, completed} = todo;

console.log(description, completed);  // WHoCS4 false

// ========

var todo2 = {
	description: 'Learn React',
	// completed: false
}
var {description: message, completed} = todo2;

console.log(message);  // Learn React
console.log(completed);  // false

// ========

function getTodoStatus ({completed}) {
	if (typeof completed === 'boolean') {
		return [`Todo is ${completed ? '' : 'not'} completed`];
	} else {
		return [undefined, {error: 'INVALID_TODO_ITEM'}];
	}
}

var [res, err] = getTodoStatus(todo); 
if (err) {
	console.log(err.error);  
} else {
	console.log(res);    // todo is not completed
}

// ==== todo2

var [res2, err2] = getTodoStatus(todo2); 
if (err2) {
	console.log(err2.error);    // INVALID_TODO_ITEM
} else {
	console.log(res2);
}





