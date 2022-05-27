// Cycle for
let a = [1,2,3,4];
let sum = 0;

for (let i=0; i < a.length; i++) {
	sum = sum + a[i];
}

console.log(sum);

// Метод Reduce
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

let b = a.reduce((prev,item,index) => {
	return prev + item + index;
});

console.log(b);
