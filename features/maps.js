// Difference between Maps & Objects:
//    objects properties must be strings
// maps properties can be str, numb, arr, obj, bool



var myMap = new Map();

// Set()
myMap.set('name', 'Ryan');

// Get()
console.log(myMap.get('name'));  // Ryan

// Has()
console.log(myMap.has('age'));  // false

// Delete()
myMap.delete('name');

// Size
console.log(myMap.size); // 0


// ===============

var user = {name: "Andrew"};
myMap.set(user, 'Philadelphia');
console.log(myMap.get(user));    // Philadelphia

// ===============

var bestMap = new Map();

bestMap.set(1, 'Ryan');
bestMap.set(2, 'Andrew');
bestMap.set(3, 'Logan');

console.log([...bestMap]);
console.log(bestMap.keys());
console.log(bestMap.values());


// ===============

var location = {name: 'Richmond'};
var secondLocation = {name: 'New York'};

var weatherMap = new Map();

function setWeather (location, temp) {
	weatherMap.set(location, temp);
}

function printWeather (location) {
	//if weather, print message
	if (weatherMap.has(location)) {
		console.log(`The temperature in ${location.name} is ${weatherMap.get(location)}`);
	}
	//if no weather, no weather stored
	else {
		console.log(`No weather available for ${location.name}`);
	}
}

setWeather(location, 22);
printWeather(location);
setWeather(secondLocation, 44);
printWeather(secondLocation);










