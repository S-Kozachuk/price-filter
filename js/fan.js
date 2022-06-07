// Products
let fan = [
	{name: "Rowenta", prices:[0, 3500]},
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
newFan = fan[0].prices;
console.log(newFan)
*/
// Как перебрать массив и получить только значения цен в виде нового массива?
/*
let result = fan.map(item=>{
	return item.prices;
});
console.log(result);
if (newFan == filterOne){
	console.log('Yes');
}
else {
console.log('None');
}
*/

const people = [
	{ name: 'Сергей', age: 31, budget: 40000 },
	{ name: 'Елена', age: 17, budget: 3400 },
	{ name: 'Игорь', age: 38, budget: 50000 },
	{ name: 'Михаил', age: 19, budget: 1900 },
	{ name: 'Александра', age: 22, budget: 48000 },
	{ name: 'Виктория', age: 28, budget: 1800 }
]

const newPeople = people.map(person=> {
	return person.name
});

console.log(newPeople)


