// Products
let fan = [
	{name: "Rowenta", prices:[0, 3000]},
	{name: "Philips", prices:[2000, null]},
	{name: "Braun", prices:[3000, 8000]},
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

/*
let result = [];
let result2 = [];
let result3 = [];
for (let i = 0; i<fan.length; i++) {
	result = fan[i].prices;
	for (let a = 0; a<result.length; a++) {
		result2=result[a];
		console.log(result2);
		result3.push(result2);
	}	
}
console.log(result3);
*/

// Iterating the 1-st filter (1-st variant)
/*
let result = [];
let fanPrice = [];
let a = filterOne[0]; // Min filter value 
let b = filterOne[1]; // Max filter value
for(let i=0; i<fan.length; i++) {
	fanPrice = fan[i].prices;
	// console.log(fanPrice)
		if (a != null && fanPrice[0] >= a){
			if (b != null && fanPrice[1] <= b){
			result.push(fanPrice[1]);		
		}
	}
};
console.log(result);
*/


// Iterating the 1-st filter (2-nd variant)
let result = [];
let fanPrice = [];


function initial (filter){
	let a = filter[0], // Min filter value 
		b = filter[1]; // Max filter value
	
	 for(let i=0; i<fan.length; i++) {
		let minPrice = fan[i].prices[0],
			maxPrice = fan[i].prices[1];
		
		if (a != null) {
			if(minPrice != null && minPrice >= a) {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						console.log(fan[i].name)
					}
				}
				else {
					console.log(fan[i].name)
				}
			}
			else {
				if(b != null) {
					if(maxPrice != null && maxPrice <= b){
						console.log(fan[i].name)
					}
				}
			}
		}
		else {
			if(b != null) {
				if(maxPrice != null && maxPrice <= b){
					console.log(fan[i].name)
				}
			}
		}
	 }
	
};
	

//(initial(filterOne));
//(initial(filterTwo));
(initial(filterThree));