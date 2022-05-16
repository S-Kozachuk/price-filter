// Sorting array
let a  = [
	3,
	-14,
	0,
	1,
	5,
	-7,
	9
]

// Empty array
let b =[];

// Cycle for sorting 
for (let i=2; i<a.length; i++) {
	if (a[i]>=1) b.push(a[i]);
}

console.log(a);
console.log(b);