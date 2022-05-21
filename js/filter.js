// Sorting array
let a = [-10,3,-14,0,1,5,-7,9,28,6,11]

// Classic method
// Cycle for sorting  
/*
// Empty array
let b =[];

for (let i=0; i<a.length; i++) {
	if (a[i]>=0) b.push(a[i]);
}
*/
// Filter method (only even)
/*
let b = a.filter(function (currentValue) {
	return currentValue%2===0
});
*/

// With arrow function
let b = a.filter(currentValue => {
	return currentValue%2===0
});

console.log(a);
console.log(b);
