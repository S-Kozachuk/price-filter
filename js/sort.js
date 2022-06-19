/*
const arr = [5,1,4,40,12];

function compare (a, b) {
	let comparison = 0;
	if(a > b) {
		comparison = 1;
	} else if (b > a) {
		comparison = -1;
	}
	return comparison
}


function compare (a, b){
	return a - b;
}

result = arr.sort(compare);
console.log(result)
*/

var arr = [12, 7, 3, 15, 5, 134, 8, 1];
let arr2 = arr;

arr.sort(function(a,b){
	if (a > b) {
		return 1; // если нужна перестановка
	};
	if (a <= b) {
		return -1; // если перестановка не нужна (правильный порядок)
	};

});

// Метод sort "следит" не за числом, а за знаком

console.log(arr);
console.log('13'>'2');

// По умолчпнию метод сорт сортирует все элеиенты массива
// как строки (лексикографический метод).

/*
Правильная сортировка чисел.
В качестве параметра метод sort может принмать
функцию с переменными.
*/
