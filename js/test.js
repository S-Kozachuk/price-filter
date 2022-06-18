// Courses list
let courses = [
	{ name: "Courses in England", prices: [0, 100] }, 
	{ name: "Courses in Germany", prices: [500, null] }, 
	{ name: "Courses in Italy", prices: [100, 200] }, 
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

// Prices variant(filters), custom search
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let resultArray = [];
let sortArray = [];

// 1-st variant
/*
function coursesSort(){
	for(let i=0; i<courses.length; i++) {
		let x = courses[i].prices[0];
		//console.log(x)
		let y = courses[i+1].prices[0];
		if (x < y) {
			resultArray.push(courses[i].name);
		}
	}
}
console.log(coursesSort());
*/

// 2-nd variant
/*
Task: sorting all courses array to min value
*/
/*
let emptyValue = 0;
function coursesSort(){
	for(let i=0; i<courses.length -1; i++) {
		let	a = courses[i].prices[0],
			b = courses[i+1].prices[0];
		
		if (a == null) {
			sortArray.push(courses[i].name)
			emptyValue++;
		}
		if (a < b){
			sortArray.push(courses[i].name);
		}
	}
	return sortArray;
}

console.log(coursesSort());
console.log(emptyValue);
*/

// 3
courses.sort(function(a,b){
	return a.prices[0] - b.prices[0];
})

console.log(courses);
console.log(sortArray);

