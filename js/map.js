// What is the map method used for?
/*
Метод map используется для обхода массива(перебрать массив)
с одновременным выполнением каких-либо действий
над его элементами.
В результате создаётся новый массив, не затрагивающий
исходный массив.
*/

// Multiplication using a For loop
/*
let a = [3,4,36,5,9];
a[7] = 21;
delete a[7];
let b = [];
for(let i=0;i<a.length;i++) {
	b[i] = a[i]*2;
}
console.log(a);
console.log(b);
*/
// Method map.
// Map() syntax
/*
let b = a.map(function(currentValue,index,array){
	return <some function>
})
*/
// currentValue - теткущий элемент массива
// index- номер элемента  
// array - массив по которому идёт обход

// Example
/*
let a = [3,4,36,5,9];
a[8]=10;

let c = a.map((item, index,array)=>{
	return t+item*2;	
},t=a[3]);
console.log(c);
*/

/*
Метод map выполнит кол-во итераций сооветсвующеее 
кол-ву элементов в массиве. Даже, если это "дырки",
например uderfined
*/

let arr = [1,2,3,4,5];
let result = arr.map(function(elem,i){
	return elem*elem
});
console.log(result)

// Task 1. Get a square root from number
let number = [1,3,9,25,49,16,64];
let root = number.map((item)=>{
	return Math.sqrt(item);
})
console.log(number);
console.log(root);

// Task 2. Add a comma to the end for each element
let string = ['Paris','Moskow','London','Beijing']
let commaString = string.map((item)=>{
	return item + ','
})

console.log(string);
console.log(commaString);

