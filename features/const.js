const PORT = 3000;

console.log(PORT);

// PORT = 3001   ERROR

// var PORT = 3001    ERROR

console.log(PORT + 1);   // OK


const CONFIG = {
	PORT: 3000
}

console.log(CONFIG);
CONFIG.PORT = 3001;   // you can update properties & values 
console.log(CONFIG);  // within an object even when set to const value



// Run in cl:  babel-node ./features/const.js