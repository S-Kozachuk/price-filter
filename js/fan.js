// Products
let fan = [
	{name: "Rowenta", prices:[0, 3000]},
	{name: "Philips", prices:[2000, null]},
	{name: "Braun", prices:[3000, 8000.]},
	{name: "Scarlett", prices:[null, 2000]},
	{name: "Bork", prices:[4500, 12000]},
	{name: "Dyson", prices:[8000, 45000]},
];

// Filters
let filterOne = [0, 3500];    
let filterTwo = [1000, 5000];    
let filterThree = [3000, null];

/*
let sortFan = fan.filter((currentValue, elemIndex) => {
	if (currentValue === name.[1])
	return elemIndex > 3;
});

console.log(sortFan)
*/

// Getting access to a nested array
/*
let fan2 = fan[2];
let fan3 = fan2.prices;
let fan4 = fan3[0];
*/
// Parent array
//console.log(fan)
// Object (associative array)
//console.log(fan2)
// Nested property(nested array = key)
// console.log(fan3)
// Element from nested array
// console.log(fan4)

// ! Syntax to access to element of prices array
/*
newFan = fan[1].prices[0]; // Object Philips(min price)
console.log(newFan)
*/
/*
let a = filterOne[0]; // Min filter value 
let b = filterOne[1]; // Max filter value
let result = fan.map((item,index) => {
	if (a != null && b != null) {
		if (a >= fan[item].prices[item]) {
			return fan[item];
		}
		return;
	}
});
console.log(result);
*/
let result = [];
let result2 = [];
let result3 = [];
for (let i = 0; i<fan.length; i++) {
	result = fan[i].prices;
	//console.log(result);
	for (let a = 0; a<result.length; a++) {
		result2=result[a];
		console.log(result2);
		result3.push(result2);
	}	
}
console.log(result3);