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
/*
let arr = [1,2,3,4,5];
let result = arr.map(function(elem,i){
	return elem*elem
});
console.log(result)
*/

// Task 1. Get a square root from number
/*
let number = [1,3,9,25,49,16,64];
let root = number.map((item)=>{
	return Math.sqrt(item);
})
console.log(number);
console.log(root);
*/

// Task 2. Add a comma to the end for each element
/*
let string = ['Paris','Moskow','London','Beijing']
let commaString = string.map((item)=>{
	return item + '!'
})

console.log(string);
console.log(commaString);
*/

// Task 3. Reverse the strings in array to opposite direction
/*
Как решить?
1. Преобразовать каждую строку в массив.Получиться многомрный массив,
где кадый вложенный массив это строка разбитая на символы(элементы),
имеющие свой индекс. Соответсвенно по индексу можно обратитьсч каждому
элементу.
2. Используя метод map и метод reverse поменять местами порядок букв
внутри каждого вдложенного массива.
3. Снова используя map преобразовать вложенные массивы в строки
4. Занести строки в массив(как элементы, вывести в консоль)
*/
// Solved
let stringFrwd = ['Paris','Moskow','London','Beijing'];
let stringRevers = stringFrwd.map((item)=>{
	return item.split('').reverse().join('');
	//step1 = item.split('')
	// step2 = step1.reverse();
	// step3 = step2.join('');
	//return step3 
	//+ each step to console
});

console.log(stringRevers);
