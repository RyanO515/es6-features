// difference between sets & arrays:
//    sets cannot contain the same value twice, must be unique

var chatrooms = new Set();

// Add
chatrooms.add('Runners');
chatrooms.add('Runners');
chatrooms.add('Bikers');

// Size
console.log(chatrooms.size); // 2

// Has 
console.log(`Does the set have Runners: ${chatrooms.has('Runners')}`);  // true

// Delete & Clear
chatrooms.delete('Bikers');
console.log(chatrooms.size);  // 1
chatrooms.clear();
console.log(chatrooms.size); // 0

//========
chatrooms.add('Runners');
chatrooms.add('Bikers');
chatrooms.add({name: 'Ryan'});
//========

// To array
console.log([...chatrooms]);

// To iterate

chatrooms.forEach((chatroom) => {
	console.log(`Found Chatroom: ${chatroom}`);
});


// CHALLENGE

var movies = new Set();

function addMovie (movieTitle) {
	if (movies.has(movieTitle)) {
		return console.log(`Failed to add ${movieTitle}: already exists...`);
	}
	movies.add(movieTitle);
	console.log(`Success!  ${movieTitle} added!`);
}
addMovie('Interstellar');
addMovie('Contact');
addMovie('Interstellar');











