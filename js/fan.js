// Products
fan = [
	{name: "Rowenta", prices: [0, 3500]},
	{name: "Philips", prices:[2000, null]},
	{name: "Braun", prices:[3000, 8000]},
	{name: "Scarlett", prices:[null, 2000]},
	{name: "Bork", prices:[4500, 12000]},
	{name: "Dyson", prices:[8000, 45000]},
];

// Filters
let filterOne = [null, 4000];    
let filterTwo = [1000, 5000];    
let filterThree = [3000, null];


let sortFan = fan.filter((currentValue, elemIndex) => {
	if (currentValue%2===0) {
		return elemIndex > 5;
	}
});

console.log()