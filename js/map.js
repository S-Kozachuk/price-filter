// What is the map method used for? By Alex Lyshenko
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
/*
let stringFrwd = ['Paris','Moskow','London','Beijing'];
let stringRevers = stringFrwd.map((item)=>{
	// In single string
	// return item.split('').reverse().join('');
	step1 = item.split('');
	console.log(step1);
	step2 = step1.reverse();
	console.log(step2);
	step3 = step2.join('');
	console.log(step3);
	return step3;
});
console.log(stringRevers);
*/
/*
let newStr = 'html-css-javascript';
let arr = newStr.split('-');
console.log(arr);
*/

// Task 4. Convert simply array to multidimensional array
// Initial array
// let arr = ['123', '456', '789'];
// The 1-st solved method
/*
let multiArr = arr.map((item)=>{
	return item.split('');
});
let parseNumber = multiArr.map((item)=>{
	return item.map((num)=>{
		return parseInt(num);
	}) 
});
*/
// The 2-nd solved method
/*
let multiArr = arr.map(item=>{
	let i = item.split('');
	return i.map(num=>{
		return parseInt(num);
	});
});
*/
// console.log(arr);
// console.log(multiArr);
// console.log(parseNumber);

// Task 5. Record in each element of the array the value of this 
//element, multiplied by order number in the array.
/*
let arr = [4,8,92,3,0,7,3,11];
let answer = arr.map((item,index)=>{
	return item*index
});
console.log(answer)
*/
// Alternative record
/*
let arr=[4,8,92,3,0,7,3,12].map((item,index)=>{
	return item*index;
});

console.log(arr);
*/

// Array's method map by Alex Lushchenko
// https://youtu.be/Ba-ss43Iz2M

let a = [33,44,55];
let b = a.map((item,index,array) => {
	if (index == 2) {
		array[index + 1] = 66;
	}
	return item;
});
console.log(a);
console.log(b);

// Example by Vladilen Minin
// https://youtu.be/nEabP9CYCAQ (5:30)

const people = [
	{ name: 'Сергей', age: 31, budget: 40000 },
	{ name: 'Елена', age: 17, budget: 3400 },
	{ name: 'Игорь', age: 38, budget: 50000 },
	{ name: 'Михаил', age: 19, budget: 1900 },
	{ name: 'Александра', age: 22, budget: 48000 },
	{ name: 'Виктория', age: 28, budget: 1800 }
]

const newPeople = people.map((person)=> {
	// return person.name
	// return `${person.name} (${person.age});`
	return person.age*2
});

//console.log(newPeople)