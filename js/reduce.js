// #1 Cycle for
/*
let a = [1,2,3,4];
let sum = 0;

for (let i=0; i < a.length; i++) {
	sum = sum + a[i];
}

console.log(sum);
*/

// Метод Reduce
// Когда использутеся Reduce
/*
Если нужно перебрать массив при этом вычислить некое общее
значение то, нужно применять reduce.
*/
// Обязательные аргументы
/* 
prev - значение, вычисленное в процессе выполнения предыдущего
цикла (итерации). Перед началом цикла prev равно 
значению 0-ого элементу (prev = a[0]) массива. Если другое другое
значение не указано как 2-ой параметр метода reduce.
item - значение элемента перебираемого массива.
*/
// Необязательные аргументы
// index - номер элемента в массиве
// arr - обрабатываемый массив

// Basic syntax
/*
let b = a.reduce(function(prev, item, index){
	return prev + item;
},0);

console.log(b);
*/

// Reduce() with arrow function
/*
let b = a.reduce((prev,item) => {
	return prev + index + item;
});

console.log(b);
*/

// Reduce() with 3-th arguments
/*
let b = a.reduce((prev,item,index) => {
	return prev + item + index;
});

console.log(b);
*/

// #2 Search the max value from array (for)
/*
let d = [2,5,33,51,7,8,38,40,92]
let max = d[0];

for (let i = 0; i < d.length; i++) {
	if (d[i] > max) {
		max = d[i];
	}
}

console.log(max);
*/

// Search the max value from array (reduce)
/*
let d = [2,5,3,51,7,8,38,40,92]
let max = d.reduce((prev,item) => {
	if (prev < item) {
		return item;
	}
	else {
		return prev;
	}
});
console.log(max);
*/

// #3 Finding the index of element with max value (for)
/*
let a = [1,2,67,109,3,4,85,102];
let max = a[0];
let index = 0;
let b=0;
for(let i = 0; i < a.length; i++) {
	if (a[i] > max) {
		max = a[i];
		index = i;
		b=a[i];
	}
}

console.log('Позиция:',index,'Значение:',b)
*/

// Fining the index of element with max value (Reduce)
/*
let a = [2,1,67,3,4,105,32];
result = a.reduce((prev,item,index) => {
	if (item > prev[1]) {
		return [index, item];
	}
	else {
		return prev;
	}
}, [0,a[0]]);

console.log(result);
*/

// #4 Making a one-dimensional array from a multidimensional arrays
const data = [[1,2,3], [3,4,5], [5,6,7]];
const flat = data.reduce((prev, item) => {
	return prev.concat(item);
})
console.log(flat);