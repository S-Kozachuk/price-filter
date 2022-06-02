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
let b = a.map(function(currentValiue, index,array){
	return <some function>
})
*/
// currentValue - теткущий элемент массива
// index- номер элемента  
// array - массив по которому идёт обход

// Example
let a = [3,4,36,5,9];
a[6] = 21;
let c = a.map(function(item, index,array){
	//return a[item]*2;	
	console.log(index);
	return item*2;
})
console.log(c) 

/*
Метод map выполнит кол-во итераций сооветсвующеее 
кол-ву элементов в массиве. Даже, если это "дырки",
например uderfined
*/
