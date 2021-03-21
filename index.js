const mika = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `My name is ${mika.myName}, I' m studing at the ${mika.myCampus}`,
	e : "oO",
	T : "U "
}));